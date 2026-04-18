/* ============================================================
   CONFIGURACIÓN RÁPIDA — editar aquí
============================================================ */

// Extensión de las imágenes del quiz  → cambiar a 'png', 'jpeg', 'webp', etc.
const IMAGE_EXT = 'jpg';

// Velocidad del efecto de escritura del testamento (ms por carácter)
// Valores sugeridos: 18 = rápido · 25 = normal · 40 = lento y dramático
const TYPING_SPEED_MS = 22;

// Carpeta donde están las imágenes del quiz
const IMG_FOLDER = 'upl';

// URL del script PHP de subida — si renombras upload.php, cámbialo aquí
const UPLOAD_PHP = 'upload.php';


/* ============================================================
   PREGUNTAS DEL QUIZ
   Para editar: cambia text, options[], correct (0=A 1=B 2=C 3=D)
   Las imágenes son: upl/f1.jpg … upl/f25.jpg (según IMAGE_EXT)
============================================================ */
const questions = [
    {
        text: "¿Qué celebra esta página tan bonita?",
        options: [
            "Un martes cualquiera",
            "Nuestros 3 meses",
            "El día del girasol internacional",
            "Mi obsesión por hacerte sonreír"
        ],
        correct: 1   // B
    },
    {
        text: "Si tuviera que describirte con flores, serías…",
        options: [
            "Girasol, por iluminar todo",
            "Clavel, por lo especial y delicada",
            "Tulipán, por lo hermosa y elegante",
            "Todas las anteriores"
        ],
        correct: 3   // D
    },
    {
        text: "¿Qué superpoder tienes conmigo?",
        options: [
            "Mejorarme el día al instante",
            "Hacerme sonreír sin razón",
            "Acelerarme el corazón",
            "Todas las anteriores"
        ],
        correct: 3
    },
    {
        text: "¿Cuál sería mi plan favorito contigo?",
        options: [
            "Salir contigo",
            "Hablar contigo",
            "Reír contigo",
            "Cualquiera, si es contigo"
        ],
        correct: 3
    },
    {
        text: "¿Qué pasa cuando me escribes?",
        options: [
            "Me emociono",
            "Sonrío como tontito",
            "Quiero responderte al instante",
            "Todas las anteriores"
        ],
        correct: 3
    },
    {
        text: "Si fueras estación del año, serías…",
        options: [
            "Primavera",
            "Verano",
            "Invierno",
            "Serías mi favorita aunque inventaran una quinta"
        ],
        correct: 3
    },
    {
        text: "¿Qué tan linda te ves en mis ojos?",
        options: [
            "Mucho",
            "Demasiado",
            "Exageradamente demasiado",
            "No existe unidad de medida suficiente"
        ],
        correct: 3
    },
    {
        text: "¿Qué me gusta más de ti?",
        options: [
            "Tu forma de ser",
            "Tu sonrisa",
            "Tu esencia",
            "Todo lo anterior"
        ],
        correct: 3
    },
    {
        text: "Si tuviera que escoger un lugar favorito…",
        options: [
            "Donde estés tú",
            "Donde me sonrías",
            "Donde estemos juntos",
            "Todas las anteriores"
        ],
        correct: 3
    },
    {
        text: "¿Cuál de estas opciones describe mejor lo especial que eres?",
        options: [
            "Muchísimo",
            "Increíblemente",
            "Inexplicablemente",
            "Todas juntas y aún se quedan cortas"
        ],
        correct: 3
    },
    {
        text: "Cuando pienso en ti, normalmente…",
        options: [
            "Sonrío",
            "Me distraigo pensando bonito",
            "Me siento afortunado",
            "Todas las anteriores"
        ],
        correct: 3
    },
    {
        text: "¿Cuál de estas flores combina más contigo según esta página?",
        options: [
            "Girasol",
            "Clavel",
            "Tulipán",
            "Las tres porque eres arte"
        ],
        correct: 3
    },
    {
        text: "¿Qué nivel de importancia tienes para mí?",
        options: [
            "Alta",
            "Muy alta",
            "Inmensamente alta",
            "Prioridad cósmica"
        ],
        correct: 3
    },
    {
        text: "Si esta página hablara, diría…",
        options: [
            "Qué linda es Britney",
            "Qué afortunado soy",
            "Qué bonitos son estos 3 meses",
            "Todas las anteriores"
        ],
        correct: 3
    },
    {
        text: "¿Qué probablemente hice mientras armaba esta sorpresa?",
        options: [
            "Sonreír solo",
            "Pensar en ti a cada rato",
            "Imaginar tu reacción",
            "Todas las anteriores"
        ],
        correct: 3
    },
    {
        text: "¿Qué hace especial este quiz?",
        options: [
            "Que está hecho para ti",
            "Que tiene amor en cada detalle",
            "Que tiene fotos y preguntas lindas",
            "Todas las anteriores"
        ],
        correct: 3
    },
    {
        text: "¿Quién tiene el numero #17 en mi corazón?",
        options: [
            "Nadie",
            "Una persona muy especial",
            "Britney",
            "La dueña del top eterno"
        ],
        correct: 2   // C  ← pregunta especial
    },
    {
        text: "¿Qué me provocas incluso en días normales?",
        options: [
            "Paz",
            "Alegría",
            "Emoción",
            "Todas las anteriores"
        ],
        correct: 3
    },
    {
        text: "Si me preguntan por algo bonito en mi vida, pienso en…",
        options: [
            "Tu sonrisa",
            "Tu compañía",
            "Lo nuestro",
            "Todas las anteriores"
        ],
        correct: 3
    },
    {
        text: "¿Qué opción representa mejor lo mucho que te quiero?",
        options: [
            "Mucho",
            "Demasiado",
            "Muchisimo",
            "Ninguna alcanza, pero \"infinito\" se acerca"
        ],
        correct: 3
    },
    {
        text: "¿Qué tan feliz me hace compartir tiempo contigo?",
        options: [
            "Bastante",
            "Muchísimo",
            "Demasiado",
            "Como pingüinito con su pez favorito"
        ],
        correct: 3
    },
    {
        text: "¿Qué tienen en común los girasoles, claveles y tulipanes?",
        options: [
            "Son hermosos",
            "Tienen mucha personalidad",
            "Me recuerdan a ti",
            "Todas las anteriores"
        ],
        correct: 3
    },
    {
        text: "Si hubiera una materia llamada \"Britney\", yo sacaría…",
        options: [
            "20",
            "100",
            "Matrícula de honor",
            "Todo porque estudiaría feliz"
        ],
        correct: 3
    },
    {
        text: "¿Qué conclusión científica tiene este quiz?",
        options: [
            "Que me encantas",
            "Que estos 3 meses son especiales",
            "Que tú eres demasiado importante para mí",
            "Todas las anteriores"
        ],
        correct: 3
    },
    {
        text: "Después de terminar este quiz, ¿qué debería pasar?",
        options: [
            "Un final bonito",
            "Un testamento romántico",
            "Una animación tierna inolvidable",
            "Todas las anteriores"
        ],
        correct: 3
    }
];

/* ============================================================
   TESTAMENTO — REEMPLAZAR AQUÍ
   Cambia cada string por el párrafo real de tu carta.
   El pingüinito irá "escribiendo" cada párrafo de arriba a abajo.
   Puedes agregar o quitar párrafos libremente.
============================================================ */
const testamentParagraphs = [
    "Mi amada Britney\nMi amorcito\nMi camotita\nMi princesita\nMi niña hermosa\nMi reina\nMi sol\nMi cielo\nMi estrella más brillante que me guía durante la oscura noche\nMi caramelito\nMi tesoro\nMi bomboncito\nMi regalo más hermoso e inmerecido del Señor\nMi bendición más preciada\nRealmente, Mi TODO",

    "Mi amor, quiero decirte que estos 3 meses contigo a mi lado han sido los más hermosos que he podido vivir, poder conocer más la maravillosa persona que eres solo hace que me enamore más y más de ti ❤️",

    "No alcanzan las palabras para describir cuán feliz y privilegiado me siento de poder llamarte MI ENAMORADA, MI AMOR, todavía no logro comprender cómo es que el Señor se fijó en mí para poder encargarme de cuidar a tan preciosa y maravillosa princesa Suya, porque Tú eres la princesa del Señor y ahora también mi princesa ❤️",

    "Como siempre te digo mi amor, siempre daré todo por ti, por lo nuestro, por nuestra familia ❤️ Siempre te cuidaré, te protegeré, te amaré y estaré contigo en cada momento, en cada situación, en las buenas y en las malas y hasta en las peores, porque este amor no es terrenal, sino que viene de parte de Nuestro Señor ❤️",

    "Doy gracias a Dios cada día por permitirme tenerte un día más conmigo, poder despertar y saber que tengo a la mejor compañera que jamás pude haber soñado, taaaan increíble que eres, sigo sintiéndome en un sueño del cual jamás quiero despertar. Sé que no soy perfecto, vas conociendo mis defectos, pero quiero que sepas mi amor, que jamás te fallaré, soy leal a lo nuestro y soy leal a ti, porque TE AMO, y eres mi costillita ❤️ eres parte de mi ❤️",

    "Ver como pasa el tiempo, solo me hace añorar el día en que pueda escucharte decir “Sí, acepto” y construir nuestra nueva etapa juntos ❤️ Ya quiero que llegue ese día en el que no nos preocupemos de que ya sea tarde y tengamos que despedirnos, sino que más bien digamos: “mi amor, vamos a casita a descansar”.",

    "Pero por lo pronto, quiero seguir disfrutando mis días a tu lado, creando recuerdos inolvidables y haciéndote sentir como me haces sentir a mí, el hombre más feliz y afortunado del mundo mundial ❤️",

    "Mi amor, te admiro demasiado, esa valentía que tienes para afrontar las situaciones, tu resiliencia, tu perseverancia, que sigas dándolo todo aun cuando ya no tengas fuerzas. Pero quiero decirte que el Señor está contigo mi amor, aun cuando lo sientas lejos, créeme que si no fuera por Él, yo no estaría aquí, porque es el Señor quien te encargó a mí, y yo jamás te dejaré ir ❤️",

    "Sabes que yo siempre estaré aquí mi amor, cuentas conmigo cuando sientas que no puedes más, cuando te sientas débil, cuando estés triste, cuando estés molesta, cuando estés feliz, en cualquier momento, cuentas conmigo ❤️ Yo estaré encantadísimo y dispuesto para acompañarte y brindarte mi hombro para que te recuestes en mí ❤️ y sobre todo que tenemos al Señor nuestro Dios ❤️",

    "Mi bebé, amo cada vez que me miras y veo en tus ojitos ese amor tan hermoso y genuino que tienes hacia mí, así como yo lo tengo hacia ti 🥹❤️",

    "Siempre sigue siendo tú misma, con esa carisma que te caracteriza, con ese amor tan bonito, con ese corazón tan noble y con todo lo hermoso que te caracteriza, todo lo que te hace ser mi HERMOSA y PRECIOSA y AMADA Britney ❤️",

    "Eres y siempre serás mi bebé ❤️ Gracias por todo este tiempo a tu lado y todo lo que haces por mí, eres realmente, como siempre te lo digo y trato de hacerte entender, la mejor compañera de vida del mundo mundial. No puedo pedir nada más, solo tenerte a mi lado siempre y que nunca me faltes 🥹❤️",

    "Te has vuelto parte de mí y mi deseo es que sigamos así y más unidos hasta viejitos y que el Señor nos lleve juntos ❤️",

    "Feliz 3 meses juntos mi amorcito 🥹❤️ Eres mi bendición inmerecida y mi tesoro más preciado, mi dulce BB ❤️✨"
];


/* ============================================================
   MENSAJES DE RETROALIMENTACIÓN
============================================================ */
const correctMsgs = [
    "¡Exacto! 💚",
    "¡Correcto, amor! 🌻",
    "¡Muy bien! 🌷",
    "¡Sí, eso es! ✨",
    "¡Perfecto! 💛",
    "¡Sabías la respuesta! 🌸",
    "¡Claro que sí! 💚"
];

const wrongMsgs = [
    "¡Casi! La respuesta correcta era otra 🌸",
    "¡Uy! Pero ya ves cuál era 😊",
    "¡No era esa! Mira la respuesta correcta 🌷",
    "¡Mmm! Aquí está la respuesta verdadera 💕"
];

// Mensajes especiales para preguntas clave
const specialMsgs = {
    0:  "¡Exacto! ¡3 meses increíbles! 🎉",   // Q1
    16: "¡Claro que sí! ¡Ella es Britney! 💚"  // Q17
};

// Colores de fondo de respaldo cuando la imagen no carga
const fallbackGradients = [
    'linear-gradient(135deg,#E8F5E9,#FFF9C4)',
    'linear-gradient(135deg,#FCE4EC,#E8F5E9)',
    'linear-gradient(135deg,#F3E5F5,#FFF9C4)',
    'linear-gradient(135deg,#FFF9C4,#FCE4EC)',
    'linear-gradient(135deg,#E8F5E9,#F3E5F5)'
];


/* ============================================================
   ESTADO GLOBAL
============================================================ */
let currentQuestion = 0;
let score = 0;
let answered = false;
let musicPlaying = false;
let musicUnlocked = false;

// Caché de imágenes precargadas: idx → HTMLImageElement
const imageCache = {};

// Estado del testamento
let tParaIdx = 0;
let tCharIdx = 0;
let tTypingTimer = null;
let tReturning = false;
let tGen = 0; // generación: incrementar cancela todos los callbacks internos en vuelo


/* ============================================================
   MÚSICA DE FONDO
   La ruta del audio está en index.html — busca el tag <audio>
============================================================ */
function initMusic() {
    const music = document.getElementById('bg-music');
    const btn   = document.getElementById('music-btn');

    // Intento de autoplay al cargar
    music.volume = 0.55;
    music.play().then(() => {
        musicPlaying  = true;
        musicUnlocked = true;
        btn.textContent = '🎵';
        btn.classList.remove('paused');
    }).catch(() => {
        // El navegador bloqueó el autoplay → se activa al primer clic del usuario
        musicPlaying = false;
        btn.textContent = '🔇';
        btn.classList.add('paused');
    });

    btn.addEventListener('click', () => {
        if (!musicUnlocked) {
            music.play();
            musicPlaying  = true;
            musicUnlocked = true;
        } else if (musicPlaying) {
            music.pause();
            musicPlaying = false;
        } else {
            music.play();
            musicPlaying = true;
        }
        btn.textContent = musicPlaying ? '🎵' : '🔇';
        btn.classList.toggle('paused', !musicPlaying);
    });
}

// Desbloquear audio al primer toque en cualquier parte (mobile)
function unlockAudioOnFirstInteraction() {
    const handler = () => {
        if (!musicUnlocked) {
            const music = document.getElementById('bg-music');
            music.play().then(() => {
                musicPlaying  = true;
                musicUnlocked = true;
                const btn = document.getElementById('music-btn');
                btn.textContent = '🎵';
                btn.classList.remove('paused');
            }).catch(() => {});
        }
        document.removeEventListener('click',      handler);
        document.removeEventListener('touchstart', handler);
    };
    document.addEventListener('click',      handler, { once: true });
    document.addEventListener('touchstart', handler, { once: true });
}


/* ============================================================
   PARTÍCULAS FLOTANTES
============================================================ */
const PARTICLE_SYMBOLS = ['🌻','🌷','🌸','💚','✨','🌹','💛','⭐','🍀','🌿'];

function spawnParticle() {
    const container = document.getElementById('particles-container');
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = PARTICLE_SYMBOLS[Math.floor(Math.random() * PARTICLE_SYMBOLS.length)];
    p.style.left     = Math.random() * 100 + '%';
    p.style.fontSize = (.7 + Math.random() * 1.3) + 'rem';
    p.style.animationDuration = (9 + Math.random() * 11) + 's';
    p.style.animationDelay   = '0s';
    container.appendChild(p);
    p.addEventListener('animationend', () => p.remove());
}

function initParticles() {
    // Partículas iniciales escalonadas
    for (let i = 0; i < 18; i++) {
        setTimeout(spawnParticle, i * 220);
    }
    // Generar periódicamente
    setInterval(spawnParticle, 1600);
}


/* ============================================================
   TRANSICIÓN ENTRE SECCIONES
============================================================ */
function showScreen(id) {
    const current = document.querySelector('.screen.active');
    const next    = document.getElementById(id);

    if (!next || next === current) return;

    if (current) {
        current.classList.add('fade-out');
        setTimeout(() => {
            current.classList.remove('active', 'fade-out');
            current.style.display = 'none';
            activateScreen(next);
        }, 480);
    } else {
        activateScreen(next);
    }
}

function activateScreen(el) {
    el.style.display = '';
    el.classList.add('active', 'fade-in');
    el.addEventListener('animationend', () => el.classList.remove('fade-in'), { once: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ============================================================
   PRECARGA DE IMÁGENES DEL QUIZ
   Arranca todas las descargas en paralelo al iniciar el quiz.
   Usar img.decode() cuando está disponible garantiza que el
   navegador haya decodificado el bitmap antes de mostrarlo,
   eliminando el "congelado" entre preguntas.
============================================================ */
function preloadQuizImages() {
    questions.forEach((_, idx) => {
        if (imageCache[idx]) return;
        const img = new Image();
        img.src = `${IMG_FOLDER}/f${idx + 1}.${IMAGE_EXT}`;
        imageCache[idx] = img;
        // Arrancar pipeline de decodificación en background
        if (img.decode) img.decode().catch(() => {});
    });
}

/* ============================================================
   QUIZ — cargar pregunta
============================================================ */
function loadQuestion(idx) {
    const q     = questions[idx];
    const total = questions.length;

    // Contador y barra de progreso
    document.getElementById('question-counter').textContent =
        `Pregunta ${idx + 1} de ${total}`;
    document.getElementById('progress-bar').style.width =
        ((idx / total) * 100) + '%';

    // ── IMAGEN ──────────────────────────────────────────────
    const imgEl = document.getElementById('question-image');
    const wrap  = imgEl.parentElement;
    const src   = `${IMG_FOLDER}/f${idx + 1}.${IMAGE_EXT}`;

    // Quitar placeholder anterior si existe
    const oldPH = wrap.querySelector('.q-img-placeholder');
    if (oldPH) oldPH.remove();

    // Fade-out rápido de la imagen actual
    imgEl.style.transition = 'opacity 0.15s ease';
    imgEl.style.opacity    = '0';

    // Función que pinta la imagen ya cargada con fade-in
    function showImage() {
        imgEl.src            = src;
        imgEl.style.display  = 'block';
        wrap.style.background = '';
        // Doble rAF: asegura que el navegador pintó el nuevo src antes del fade-in
        requestAnimationFrame(() => requestAnimationFrame(() => {
            imgEl.style.transition = 'opacity 0.22s ease';
            imgEl.style.opacity    = '1';
        }));
    }

    // Función de fallback cuando la imagen no existe
    function showFallback() {
        imgEl.style.display  = 'none';
        imgEl.style.opacity  = '1';
        wrap.style.background = fallbackGradients[idx % fallbackGradients.length];
        showUploadPlaceholder(wrap, idx);
    }

    const cached = imageCache[idx];

    if (cached && cached.complete && cached.naturalWidth > 0) {
        // Imagen ya totalmente cargada y decodificada → mostrar inmediatamente
        showImage();
    } else if (cached) {
        // La imagen está en descarga/decodificación → esperar con decode()
        const waitPromise = (cached.decode)
            ? cached.decode()
            : new Promise((res, rej) => {
                if (cached.complete) {
                    cached.naturalWidth > 0 ? res() : rej();
                } else {
                    cached.addEventListener('load',  res,  { once: true });
                    cached.addEventListener('error', rej, { once: true });
                }
              });

        waitPromise
            .then(showImage)
            .catch(() => {
                // decode() falló pero la imagen puede estar en el DOM; intentar mostrar igual
                if (cached.naturalWidth > 0) showImage();
                else showFallback();
            });
    } else {
        // Sin caché (p.ej. quiz reiniciado antes de que precargara) — cargar ahora
        const img = new Image();
        imageCache[idx] = img;
        if (img.decode) {
            img.src = src;
            img.decode().then(showImage).catch(showFallback);
        } else {
            img.onload  = showImage;
            img.onerror = showFallback;
            img.src = src;
        }
    }

    // ── TEXTO Y OPCIONES ─────────────────────────────────────
    document.getElementById('question-text').textContent = q.text;

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className   = 'option-btn';
        btn.textContent = `${letters[i]}. ${opt}`;
        btn.dataset.idx = i;
        btn.addEventListener('click', () => handleAnswer(i));
        container.appendChild(btn);
    });

    // Resetear UI
    document.getElementById('feedback-msg').textContent = '';
    document.getElementById('next-btn').classList.add('hidden');
    answered = false;

    // Animación de entrada de la tarjeta
    const card = document.getElementById('question-card');
    card.style.animation = 'none';
    card.offsetHeight; // reflow
    card.style.animation = '';
}


/* ============================================================
   SUBIDA DE IMÁGENES — integrado con loadQuestion()
   Estas funciones son nuevas. No tocan el quiz ni el testamento.
============================================================ */

// Input file oculto, creado una vez y reutilizado para todas las preguntas
let uploadInput = null;

function initUploadInput() {
    uploadInput = document.createElement('input');
    uploadInput.type   = 'file';
    uploadInput.accept = 'image/jpeg,image/jpg,image/png,image/webp';
    uploadInput.style.display = 'none';
    document.body.appendChild(uploadInput);

    uploadInput.addEventListener('change', function () {
        const file = this.files[0];
        if (!file) return;
        const qIdx = parseInt(this.dataset.currentQuestion, 10);
        const wrap = document.querySelector('.q-img-wrap');
        if (wrap) uploadImage(file, qIdx, wrap);
    });
}

/* Crea e inserta el placeholder de subida dentro del wrap de imagen */
function showUploadPlaceholder(wrap, questionIdx) {
    const ph = document.createElement('div');
    ph.className = 'q-img-placeholder';
    ph.innerHTML = `
        <div class="q-img-ph-inner">
            <span class="q-img-ph-icon">📷</span>
            <p class="q-img-ph-text">Haz clic para subir tu imagen 💖</p>
            <p class="q-img-ph-sub">Pregunta ${questionIdx + 1} de ${questions.length}</p>
        </div>
    `;

    ph.addEventListener('click', () => {
        if (ph.classList.contains('uploading')) return;
        uploadInput.dataset.currentQuestion = questionIdx;
        uploadInput.value = '';   // permite reseleccionar el mismo archivo
        uploadInput.click();
    });

    wrap.appendChild(ph);
}

/* Envía el archivo a upload.php y muestra la imagen cuando termina */
function uploadImage(file, questionIdx, wrap) {
    const ph     = wrap.querySelector('.q-img-placeholder');
    const phText = ph?.querySelector('.q-img-ph-text');
    const phIcon = ph?.querySelector('.q-img-ph-icon');

    // Estado: subiendo
    if (ph) {
        ph.classList.add('uploading');
        if (phText) phText.textContent = 'Subiendo imagen...';
        if (phIcon) phIcon.textContent = '⏳';
    }

    const formData = new FormData();
    formData.append('image',        file);
    formData.append('question_num', questionIdx + 1);   // el PHP espera base-1

    fetch(UPLOAD_PHP, { method: 'POST', body: formData })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                if (ph) {
                    ph.classList.add('success');
                    if (phText) phText.textContent = '¡Imagen guardada! 💚';
                    if (phIcon) phIcon.textContent = '✅';
                }

                // Mostrar la imagen recién subida
                setTimeout(() => {
                    const imgEl = wrap.querySelector('.q-img');
                    imgEl.style.opacity = '0';
                    imgEl.style.display = 'block';
                    // ?t= evita que el navegador use la versión cacheada anterior
                    imgEl.src = data.path + '?t=' + Date.now();

                    imgEl.onload = () => {
                        if (ph) ph.remove();
                        wrap.style.background = '';
                        imgEl.style.transition = 'opacity .5s ease';
                        imgEl.style.opacity    = '1';
                        setTimeout(() => { imgEl.style.transition = ''; }, 600);
                    };
                    imgEl.onerror = () => { imgEl.style.display = 'none'; };
                }, 750);
            } else {
                _uploadError(ph, phText, phIcon, data.message || 'Error al subir. Intenta de nuevo.');
            }
        })
        .catch(() => {
            _uploadError(ph, phText, phIcon, 'Error de conexión. Intenta de nuevo.');
        });
}

/* Muestra el error y restaura el placeholder al estado inicial tras 3s */
function _uploadError(ph, phText, phIcon, msg) {
    if (!ph) return;
    ph.classList.remove('uploading');
    ph.classList.add('error');
    if (phText) phText.textContent = msg;
    if (phIcon) phIcon.textContent = '⚠️';

    setTimeout(() => {
        ph.classList.remove('error');
        if (phText) phText.textContent = 'Haz clic para subir tu imagen 💖';
        if (phIcon) phIcon.textContent = '📷';
    }, 3000);
}


/* ============================================================
   QUIZ — manejar respuesta
============================================================ */
function handleAnswer(selectedIdx) {
    if (answered) return;
    answered = true;

    const q       = questions[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    const feedback = document.getElementById('feedback-msg');

    // Deshabilitar todos los botones
    buttons.forEach(b => b.disabled = true);

    const isCorrect = selectedIdx === q.correct;

    // Marcar respuesta elegida
    buttons[selectedIdx].classList.add(isCorrect ? 'correct' : 'wrong');

    // Si estuvo mal, revelar la correcta
    if (!isCorrect) {
        buttons[q.correct].classList.add('show-correct');
    } else {
        score++;
    }

    // Mensaje de retroalimentación
    if (isCorrect) {
        const msg = specialMsgs[currentQuestion]
            ?? correctMsgs[Math.floor(Math.random() * correctMsgs.length)];
        feedback.textContent = msg;
        feedback.style.color = 'var(--green-dark)';
    } else {
        const msg = wrongMsgs[Math.floor(Math.random() * wrongMsgs.length)];
        feedback.textContent = msg;
        feedback.style.color = 'var(--carn-dark)';
    }

    // Mostrar botón "Siguiente"
    document.getElementById('next-btn').classList.remove('hidden');
}


/* ============================================================
   QUIZ — avanzar pregunta / terminar
============================================================ */
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion(currentQuestion);
    } else {
        showQuizComplete();
    }
}

function showQuizComplete() {
    // Actualizar barra al 100%
    document.getElementById('progress-bar').style.width = '100%';

    // Mostrar puntuación
    const total = questions.length;
    let scoreText;
    if (score === total) {
        scoreText = `¡${score} de ${total}! ¡Perfecta! 🏆`;
    } else if (score >= total * 0.8) {
        scoreText = `${score} de ${total} — ¡Casi perfecta! 💚`;
    } else {
        scoreText = `${score} de ${total} — ¡Muy bien! 🌻`;
    }
    document.getElementById('score-display').textContent = scoreText;

    showScreen('quiz-complete');
}


/* ============================================================
   TESTAMENTO — iniciar animación
============================================================ */
function startTestament() {
    // Incrementar generación invalida cualquier callback returnPenguin en vuelo
    tGen++;
    tParaIdx   = 0;
    tCharIdx   = 0;
    tReturning = false;
    clearTimeout(tTypingTimer);

    document.getElementById('testament-text').innerHTML = '';
    document.getElementById('final-love-msg').classList.add('hidden');
    document.getElementById('end-actions').classList.add('hidden');

    // Mostrar botón "Leer completo"
    const skipBtn = document.getElementById('skip-typing-btn');
    if (skipBtn) skipBtn.classList.remove('hidden');

    const penguin = document.getElementById('penguin');
    penguin.style.opacity    = '1';
    penguin.style.display    = '';
    penguin.style.left       = '0px';
    penguin.style.transition = 'left .18s linear';

    typeNextChar();
}

/* Escribe un carácter cada TYPING_SPEED_MS milisegundos */
function typeNextChar() {
    if (tReturning) return;

    if (tParaIdx >= testamentParagraphs.length) {
        finishTestament();
        return;
    }

    const para = testamentParagraphs[tParaIdx];
    const textContainer = document.getElementById('testament-text');

    // Crear o recuperar el elemento del párrafo
    let paraEl = document.getElementById(`tp-${tParaIdx}`);
    if (!paraEl) {
        paraEl = document.createElement('p');
        paraEl.id        = `tp-${tParaIdx}`;
        paraEl.className = 'testament-para';
        textContainer.appendChild(paraEl);
    }

    if (tCharIdx < para.length) {
        paraEl.textContent = para.substring(0, tCharIdx + 1);
        tCharIdx++;

        // Mover pingüinito
        const progress = tCharIdx / para.length;
        movePenguin(progress);

        // Auto-scroll suave
        if (tCharIdx % 30 === 0) {
            textContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }

        tTypingTimer = setTimeout(typeNextChar, TYPING_SPEED_MS);
    } else {
        // Párrafo completo → pingüinito vuelve al inicio para el siguiente
        returnPenguin(() => {
            tParaIdx++;
            tCharIdx = 0;
            // Pausa breve entre párrafos
            tTypingTimer = setTimeout(typeNextChar, 350);
        });
    }
}

/* Mover el pingüinito horizontalmente según el progreso (0–1) */
function movePenguin(progress) {
    const track   = document.querySelector('.penguin-track');
    const penguin = document.getElementById('penguin');
    if (!track || !penguin) return;

    const penguinWidth = 64;
    const maxX = Math.max(0, track.offsetWidth - penguinWidth - 8);
    penguin.style.left = (progress * maxX) + 'px';
}

/* El pingüinito se desvanece y vuelve al origen para el siguiente párrafo.
   Capturamos tGen al inicio: si cambia mientras esperamos, abortamos. */
function returnPenguin(callback) {
    tReturning = true;
    const penguin = document.getElementById('penguin');
    const myGen   = tGen; // generación en el momento de llamar

    penguin.style.transition = 'opacity .3s ease';
    penguin.style.opacity    = '0';

    setTimeout(() => {
        if (tGen !== myGen) return; // fue cancelado (skip o restart)

        penguin.style.transition = 'none';
        penguin.style.left       = '0px';

        setTimeout(() => {
            if (tGen !== myGen) return; // fue cancelado

            penguin.style.transition = 'opacity .25s ease, left .18s linear';
            penguin.style.opacity    = '1';
            tReturning = false;
            if (callback) callback();
        }, 160);
    }, 320);
}

/* Finalizar testamento: mostrar mensaje final especial */
function finishTestament() {
    // Ocultar botón "Leer completo" — ya no hace falta
    const skipBtn = document.getElementById('skip-typing-btn');
    if (skipBtn) skipBtn.classList.add('hidden');

    const penguin = document.getElementById('penguin');

    // Pingüinito llega al final y hace un salto de celebración
    movePenguin(1);

    setTimeout(() => {
        penguin.style.transition = 'opacity .5s ease';
        penguin.style.opacity    = '0';

        setTimeout(() => {
            penguin.style.display = 'none';

            // Aparecer mensaje final con animación
            const finalMsg = document.getElementById('final-love-msg');
            finalMsg.classList.remove('hidden');
            finalMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Mostrar botones de acción
            setTimeout(() => {
                document.getElementById('end-actions').classList.remove('hidden');
            }, 1200);
        }, 500);
    }, 600);
}

/* ============================================================
   LEER COMPLETO — muestra toda la carta al instante
============================================================ */
function skipTyping() {
    // 1. Cancelar todo lo que esté en vuelo
    clearTimeout(tTypingTimer);
    tTypingTimer = null;
    tReturning   = false;
    tGen++;  // invalida los setTimeout internos de returnPenguin

    // 2. Ocultar botón
    const skipBtn = document.getElementById('skip-typing-btn');
    if (skipBtn) skipBtn.classList.add('hidden');

    // 3. Renderizar todos los párrafos de golpe
    const textContainer = document.getElementById('testament-text');
    textContainer.innerHTML = '';
    testamentParagraphs.forEach((para, i) => {
        const p = document.createElement('p');
        p.id        = `tp-${i}`;
        p.className = 'testament-para';
        p.textContent = para;
        textContainer.appendChild(p);
    });

    // 4. Actualizar estado global
    tParaIdx = testamentParagraphs.length;
    tCharIdx = 0;

    // 5. Ocultar pingüinito inmediatamente
    const penguin = document.getElementById('penguin');
    if (penguin) {
        penguin.style.transition = 'none';
        penguin.style.opacity    = '0';
        penguin.style.display    = 'none';
    }

    // 6. Mostrar mensaje final y botones
    const finalMsg = document.getElementById('final-love-msg');
    finalMsg.classList.remove('hidden');
    finalMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
        document.getElementById('end-actions').classList.remove('hidden');
    }, 700);
}

/* Repetir solo la animación del testamento */
function replayTestament() {
    startTestament();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ============================================================
   REINICIAR todo y volver a la pantalla de bienvenida
============================================================ */
function restartAll() {
    currentQuestion = 0;
    score           = 0;
    answered        = false;
    tParaIdx        = 0;
    tCharIdx        = 0;
    tGen++;  // cancela cualquier returnPenguin en vuelo
    clearTimeout(tTypingTimer);

    // Limpiar testament para no acumular texto
    document.getElementById('testament-text').innerHTML = '';
    document.getElementById('final-love-msg').classList.add('hidden');
    document.getElementById('end-actions').classList.add('hidden');

    // Ocultar botón "Leer completo" si estaba visible
    const skipBtn = document.getElementById('skip-typing-btn');
    if (skipBtn) skipBtn.classList.add('hidden');

    // Resetear barra de progreso
    document.getElementById('progress-bar').style.width = '0%';

    showScreen('welcome-screen');
}


/* ============================================================
   INICIALIZACIÓN
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initMusic();
    unlockAudioOnFirstInteraction();
    initParticles();
    initUploadInput();   // input oculto para subida de imágenes

    // — Pantalla de bienvenida —
    document.getElementById('start-btn').addEventListener('click', () => {
        showScreen('quiz-section');
        preloadQuizImages(); // arrancar precarga de todas las imágenes en paralelo
        setTimeout(() => loadQuestion(0), 500);
    });

    // — Quiz: botón "Siguiente" —
    document.getElementById('next-btn').addEventListener('click', nextQuestion);

    // — Pantalla de quiz completado: ver testamento —
    document.getElementById('show-testament-btn').addEventListener('click', () => {
        showScreen('testament-section');
        setTimeout(startTestament, 700);
    });

    // — Testamento: botones finales —
    document.getElementById('restart-btn').addEventListener('click', restartAll);
    document.getElementById('replay-btn').addEventListener('click', replayTestament);
});
