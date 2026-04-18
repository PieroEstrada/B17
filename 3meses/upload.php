<?php
/* ============================================================
   upload.php — Subida segura de imágenes para el quiz

   Recibe via POST:
     · image        (archivo de imagen)
     · question_num (número de pregunta, 1-25)

   Devuelve JSON:
     · success  (bool)
     · message  (string)
     · path     (string — ruta relativa del archivo guardado)
     · ext      (string — extensión real usada)
============================================================ */

/* ============================================================
   CONFIGURACIÓN — editar aquí si necesitas cambiar algo
============================================================ */

// Carpeta de destino (debe coincidir con IMG_FOLDER en script.js)
define('UPLOAD_DIR', 'upl');

// Tamaño máximo en bytes → 5 MB
// Para cambiar: 10 * 1024 * 1024 = 10 MB,  2 * 1024 * 1024 = 2 MB, etc.
define('MAX_SIZE', 5 * 1024 * 1024);

// Número máximo de preguntas (igual que el quiz)
define('MAX_QUESTIONS', 25);

// Tipos MIME permitidos → solo imágenes reales
$ALLOWED_MIME = [
    'image/jpeg' => 'jpg',
    'image/jpg'  => 'jpg',
    'image/png'  => 'png',
    'image/webp' => 'webp',
];

/* ============================================================
   CABECERAS — no cambiar
============================================================ */
header('Content-Type: application/json; charset=utf-8');

// Función helper para responder y salir
function respond(bool $ok, string $msg, array $extra = []): void {
    echo json_encode(array_merge(['success' => $ok, 'message' => $msg], $extra));
    exit;
}

/* ============================================================
   VALIDACIÓN DEL MÉTODO
============================================================ */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Método no permitido.');
}

/* ============================================================
   VALIDACIÓN DEL NÚMERO DE PREGUNTA
   El JS envía question_num en base 1 (1 = pregunta 1)
============================================================ */
if (empty($_POST['question_num']) || !ctype_digit((string)$_POST['question_num'])) {
    respond(false, 'Número de pregunta inválido o no enviado.');
}

$questionNum = (int) $_POST['question_num'];
if ($questionNum < 1 || $questionNum > MAX_QUESTIONS) {
    respond(false, "Número de pregunta fuera de rango (1–" . MAX_QUESTIONS . ").");
}

/* ============================================================
   VALIDACIÓN DEL ARCHIVO
============================================================ */
if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    $codes = [
        UPLOAD_ERR_INI_SIZE   => 'El archivo supera el límite del servidor (upload_max_filesize).',
        UPLOAD_ERR_FORM_SIZE  => 'El archivo supera el límite del formulario.',
        UPLOAD_ERR_PARTIAL    => 'El archivo se subió solo parcialmente.',
        UPLOAD_ERR_NO_FILE    => 'No se recibió ningún archivo.',
        UPLOAD_ERR_NO_TMP_DIR => 'No hay carpeta temporal disponible.',
        UPLOAD_ERR_CANT_WRITE => 'No se pudo escribir en disco.',
        UPLOAD_ERR_EXTENSION  => 'Una extensión de PHP detuvo la subida.',
    ];
    $code = $_FILES['image']['error'] ?? -1;
    respond(false, $codes[$code] ?? "Error al recibir el archivo (código $code).");
}

$file = $_FILES['image'];

// Tamaño
if ($file['size'] > MAX_SIZE) {
    $mb = round(MAX_SIZE / 1024 / 1024, 1);
    respond(false, "El archivo es demasiado grande. Máximo permitido: {$mb} MB.");
}

// Tipo MIME real (no confiamos en el nombre ni en el tipo declarado por el cliente)
if (!function_exists('finfo_open')) {
    respond(false, 'El servidor no tiene habilitada la extensión fileinfo de PHP.');
}
$finfo    = finfo_open(FILEINFO_MIME_TYPE);
$mimeReal = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);

if (!array_key_exists($mimeReal, $ALLOWED_MIME)) {
    respond(false, 'Tipo de archivo no permitido. Sube solo JPG, PNG o WebP.');
}

$ext = $ALLOWED_MIME[$mimeReal];   // extensión segura según MIME real

/* ============================================================
   CREAR CARPETA SI NO EXISTE
============================================================ */
$uploadDir = rtrim(UPLOAD_DIR, '/\\') . '/';

if (!is_dir($uploadDir)) {
    if (!mkdir($uploadDir, 0755, true)) {
        respond(false, "No se pudo crear la carpeta '{$uploadDir}'. Revisa los permisos del servidor.");
    }
}

/* ============================================================
   ELIMINAR VERSIONES ANTERIORES CON OTRA EXTENSIÓN
   Evita tener f3.jpg y f3.png al mismo tiempo.
============================================================ */
foreach (['jpg', 'jpeg', 'png', 'webp'] as $oldExt) {
    $oldFile = $uploadDir . "f{$questionNum}.{$oldExt}";
    if (file_exists($oldFile)) {
        @unlink($oldFile);
    }
}

/* ============================================================
   GUARDAR EL ARCHIVO
   Nombre construido por el servidor: f{n}.{ext}
   El nombre enviado por el usuario nunca se usa.
============================================================ */
$filename = "f{$questionNum}.{$ext}";
$destPath = $uploadDir . $filename;

if (!move_uploaded_file($file['tmp_name'], $destPath)) {
    respond(false, 'No se pudo guardar el archivo. Revisa los permisos de la carpeta upl/.');
}

/* ============================================================
   ÉXITO
============================================================ */
respond(true, 'Imagen subida correctamente.', [
    'path'     => $destPath,    // ruta relativa — usada por JS para mostrar la imagen
    'ext'      => $ext,
    'filename' => $filename,
]);
