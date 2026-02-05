// === VOCABULARIO COMPLETO KICHWA ===
// Este es el vocabulario expandido que se muestra en la sección de aprendizaje
const vocabularioCompleto = {
    'Saludos': [
        { kichwa: 'Napaykullayki', spanish: 'saludo' },
        { kichwa: 'Alli puncha', spanish: 'buenos días' },
        { kichwa: 'Alli chishi', spanish: 'buenas tardes' },
        { kichwa: 'Alli tuta', spanish: 'buenas noches' },
        { kichwa: 'Imashina', spanish: '¿cómo estás?' },
        { kichwa: 'Alli kani', spanish: 'estoy bien' },
        { kichwa: 'Pagui', spanish: 'gracias' },
        { kichwa: 'Ama shina', spanish: 'no hay problema' }
    ],
    'Pronombres': [
        { kichwa: 'Ñuka', spanish: 'yo' },
        { kichwa: 'Kan', spanish: 'tú' },
        { kichwa: 'Pay', spanish: 'él / ella' },
        { kichwa: 'Ñukanchik', spanish: 'nosotros' },
        { kichwa: 'Kankuna', spanish: 'ustedes' },
        { kichwa: 'Paykuna', spanish: 'ellos' }
    ],
    'Familia': [
        { kichwa: 'Mama', spanish: 'madre' },
        { kichwa: 'Tayta', spanish: 'padre' },
        { kichwa: 'Wawa', spanish: 'hijo/a / bebé' },
        { kichwa: 'Ñaña', spanish: 'hermana' },
        { kichwa: 'Turi', spanish: 'hermano' },
        { kichwa: 'Mashi', spanish: 'amigo' },
        { kichwa: 'Awka mama', spanish: 'abuela' },
        { kichwa: 'Awka tayta', spanish: 'abuelo' }
    ],
    'Acciones': [
        { kichwa: 'Mikuna', spanish: 'comer' },
        { kichwa: 'Upyana', spanish: 'beber' },
        { kichwa: 'Purina', spanish: 'caminar' },
        { kichwa: 'Rikuna', spanish: 'ver' },
        { kichwa: 'Uyarina', spanish: 'escuchar' },
        { kichwa: 'Rimana', spanish: 'hablar' },
        { kichwa: 'Puñuna', spanish: 'dormir' },
        { kichwa: 'Challwana', spanish: 'pescar' },
        { kichwa: 'Tushuna', spanish: 'bailar' }
    ],
    'Naturaleza': [
        { kichwa: 'Allpa', spanish: 'tierra' },
        { kichwa: 'Puyu', spanish: 'nube' },
        { kichwa: 'Puytu', spanish: 'nube' },
        { kichwa: 'Illapa', spanish: 'rayo' },
        { kichwa: 'Wayra', spanish: 'viento' },
        { kichwa: 'Tamya', spanish: 'lluvia' },
        { kichwa: 'Inti', spanish: 'sol' },
        { kichwa: 'Killa', spanish: 'luna' },
        { kichwa: 'Nina', spanish: 'fuego' },
        { kichwa: 'Mayu', spanish: 'río' },
        { kichwa: 'Rumi', spanish: 'piedra' }
    ],
    'Animales': [
        { kichwa: 'Allku', spanish: 'perro' },
        { kichwa: 'Mishi', spanish: 'gato' },
        { kichwa: 'Misi', spanish: 'gato' },
        { kichwa: 'Kuy', spanish: 'cuy' },
        { kichwa: 'Pishku', spanish: 'pájaro' },
        { kichwa: 'Ukucha', spanish: 'ratón' },
        { kichwa: 'Waka', spanish: 'vaca' },
        { kichwa: 'Atallpa', spanish: 'gallina' },
        { kichwa: 'Kuchi', spanish: 'chancho' },
        { kichwa: 'Kuntur', spanish: 'cóndor' },
        { kichwa: 'Challwa', spanish: 'pez' }
    ],
    'Objetos': [
        { kichwa: 'Punku', spanish: 'puerta' },
        { kichwa: 'Tuku', spanish: 'ventana' },
        { kichwa: 'Manka', spanish: 'olla' },
        { kichwa: 'Puku', spanish: 'plato' },
        { kichwa: 'Waska', spanish: 'soga / cuerda' },
        { kichwa: 'Wishina', spanish: 'cuchara' },
        { kichwa: 'Chakana', spanish: 'escalera' },
        { kichwa: 'Kawitu', spanish: 'cama' },
        { kichwa: 'Chaka', spanish: 'puente' }
    ],
    'Alimentos': [
        { kichwa: 'Papa', spanish: 'papa' },
        { kichwa: 'Tanta', spanish: 'pan' },
        { kichwa: 'Aycha', spanish: 'carne' },
        { kichwa: 'Ñuñu', spanish: 'leche' },
        { kichwa: 'Chukllu', spanish: 'choclo' },
        { kichwa: 'Sara', spanish: 'choclo / maíz' },
        { kichwa: 'Mishki', spanish: 'miel / dulce' },
        { kichwa: 'Palanta', spanish: 'plátano' }
    ],
    'Tiempo': [
        { kichwa: 'Kunan', spanish: 'ahora' },
        { kichwa: 'Kayna', spanish: 'ayer' },
        { kichwa: 'Kipa', spanish: 'mañana' },
        { kichwa: 'Puncha', spanish: 'día' },
        { kichwa: 'Tuta', spanish: 'noche' },
        { kichwa: 'Pakarina', spanish: 'amanecer' },
        { kichwa: 'Chishi', spanish: 'tarde' }
    ]
};

// === CONFIGURACIÓN DE FIREBASE ===
const firebaseConfig = {
  apiKey: "AIzaSyA9XhbrsamA1qIj69i3dOjdyestFypW7bg",
  authDomain: "ashpa-a2aa5.firebaseapp.com",
  projectId: "ashpa-a2aa5",
  storageBucket: "ashpa-a2aa5.firebasestorage.app",
  messagingSenderId: "939498762714",
  appId: "1:939498762714:web:4553b417f56972507b90e3",
  measurementId: "G-RWLKTZ9N0F"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log('🔥 Firebase conectado correctamente');

// === DATOS DE LAS CARTAS PARA EL JUEGO ===
const cards = [
    { id: 1, image: 'assets/cards/1.png', kichwa: 'Napaykullayki', spanish: 'saludo', category: 'Saludos', unlocked: true, stars: 0 },
    { id: 2, image: 'assets/cards/2.png', kichwa: 'Ñuka', spanish: 'yo', category: 'Pronombres', unlocked: false, stars: 0 },
    { id: 3, image: 'assets/cards/3.png', kichwa: 'Kan', spanish: 'tu', category: 'Pronombres', unlocked: false, stars: 0 },
    { id: 4, image: 'assets/cards/4.png', kichwa: 'Mashi', spanish: 'amigo', category: 'Familia', unlocked: false, stars: 0 },
    { id: 5, image: 'assets/cards/5.png', kichwa: 'Challwana', spanish: 'pescar', category: 'Acciones', unlocked: false, stars: 0 },
    { id: 6, image: 'assets/cards/6.png', kichwa: 'Wawa', spanish: 'bebe', category: 'Familia', unlocked: false, stars: 0 },
    { id: 7, image: 'assets/cards/7.png', kichwa: 'Tushuna', spanish: 'bailar', category: 'Acciones', unlocked: false, stars: 0 },
    { id: 8, image: 'assets/cards/8.png', kichwa: 'Allpa', spanish: 'tierra', category: 'Naturaleza', unlocked: false, stars: 0 },
    { id: 9, image: 'assets/cards/9.png', kichwa: 'Waka', spanish: 'vaca', category: 'Animales', unlocked: false, stars: 0 },
    { id: 10, image: 'assets/cards/10.png', kichwa: 'Atallpa', spanish: 'gallina', category: 'Animales', unlocked: false, stars: 0 },
    { id: 11, image: 'assets/cards/11.png', kichwa: 'Kuchi', spanish: 'chancho', category: 'Animales', unlocked: false, stars: 0 },
    { id: 12, image: 'assets/cards/12.png', kichwa: 'Misi', spanish: 'gato', category: 'Animales', unlocked: false, stars: 0 },
    { id: 13, image: 'assets/cards/13.png', kichwa: 'Allku', spanish: 'perro', category: 'Animales', unlocked: false, stars: 0 },
    { id: 14, image: 'assets/cards/14.png', kichwa: 'Kuntur', spanish: 'condor', category: 'Animales', unlocked: false, stars: 0 },
    { id: 15, image: 'assets/cards/15.png', kichwa: 'Challwa', spanish: 'pez', category: 'Animales', unlocked: false, stars: 0 },
    { id: 16, image: 'assets/cards/16.png', kichwa: 'Wishina', spanish: 'cuchara', category: 'Objetos', unlocked: false, stars: 0 },
    { id: 17, image: 'assets/cards/17.png', kichwa: 'Nina', spanish: 'fuego', category: 'Naturaleza', unlocked: false, stars: 0 },
    { id: 18, image: 'assets/cards/18.png', kichwa: 'Waska', spanish: 'cuerda', category: 'Objetos', unlocked: false, stars: 0 },
    { id: 19, image: 'assets/cards/19.png', kichwa: 'Chakana', spanish: 'escalera', category: 'Objetos', unlocked: false, stars: 0 },
    { id: 20, image: 'assets/cards/20.png', kichwa: 'Kawitu', spanish: 'cama', category: 'Objetos', unlocked: false, stars: 0 },
    { id: 21, image: 'assets/cards/21.png', kichwa: 'Mishki', spanish: 'miel', category: 'Alimentos', unlocked: false, stars: 0 },
    { id: 22, image: 'assets/cards/22.png', kichwa: 'Tanta', spanish: 'pan', category: 'Alimentos', unlocked: false, stars: 0 },
    { id: 23, image: 'assets/cards/23.png', kichwa: 'Palanta', spanish: 'platano', category: 'Alimentos', unlocked: false, stars: 0 },
    { id: 24, image: 'assets/cards/24.png', kichwa: 'Sara', spanish: 'choclo', category: 'Alimentos', unlocked: false, stars: 0 },
    { id: 25, image: 'assets/cards/25.png', kichwa: 'Pakarina', spanish: 'amanecer', category: 'Tiempo', unlocked: false, stars: 0 },
    { id: 26, image: 'assets/cards/26.png', kichwa: 'Tuta', spanish: 'noche', category: 'Tiempo', unlocked: false, stars: 0 },
    { id: 27, image: 'assets/cards/27.png', kichwa: 'Chishi', spanish: 'tarde', category: 'Tiempo', unlocked: false, stars: 0 },
    { id: 28, image: 'assets/cards/28.png', kichwa: 'Puytu', spanish: 'nube', category: 'Naturaleza', unlocked: false, stars: 0 },
    { id: 29, image: 'assets/cards/29.png', kichwa: 'Illapa', spanish: 'rayo', category: 'Naturaleza', unlocked: false, stars: 0 },
    { id: 30, image: 'assets/cards/30.png', kichwa: 'Tamya', spanish: 'lluvia', category: 'Naturaleza', unlocked: false, stars: 0 },
    { id: 31, image: 'assets/cards/31.png', kichwa: 'Mayu', spanish: 'rio', category: 'Naturaleza', unlocked: false, stars: 0 },
    { id: 32, image: 'assets/cards/32.png', kichwa: 'Chaka', spanish: 'puente', category: 'Objetos', unlocked: false, stars: 0 },
    { id: 33, image: 'assets/cards/33.png', kichwa: 'Rumi', spanish: 'piedra', category: 'Naturaleza', unlocked: false, stars: 0 }
];

// === ESTADO DEL JUEGO ===
let currentCardId = null;
let totalStars = 0;

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', () => {
    initVocabulary();
    initGameBoard();
    initScrollEffects(); // Nuevo: efectos de scroll
    
    // Enter key en modal
    document.getElementById('modal-answer').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswerModal();
        }
    });
});

// === EFECTOS DE SCROLL (NAVBAR STICKY) ===
function initScrollEffects() {
    const navbar = document.querySelector('.custom-navbar');
    const logo = document.querySelector('.nav-logo');
    
    // Ocultar logo inicialmente
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(-20px)';
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            // Mostrar logo al hacer scroll
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0)';
            logo.style.transition = 'all 0.3s ease';
            navbar.classList.add('scrolled');
        } else {
            // Ocultar logo en la parte superior
            logo.style.opacity = '0';
            logo.style.transform = 'translateY(-20px)';
            navbar.classList.remove('scrolled');
        }
    });
}

// === FUNCIÓN PARA INICIALIZAR EL VOCABULARIO CON PESTAÑAS ===
function initVocabulary() {
    const vocabularyGrid = document.querySelector('.vocabulary-grid');
    
    // Iconos para cada categoría
    const iconosCategoria = {
        'Saludos': '👋',
        'Pronombres': '👤',
        'Familia': '👨‍👩‍👧‍👦',
        'Acciones': '🏃',
        'Naturaleza': '🌳',
        'Animales': '🐾',
        'Objetos': '🔧',
        'Alimentos': '🍎',
        'Tiempo': '⏰'
    };
    
    // Crear contenedor de pestañas
    vocabularyGrid.innerHTML = `
        <div class="tabs-container">
            <div class="tabs-header">
                ${Object.keys(vocabularioCompleto).map((categoria, index) => `
                    <button class="tab-button ${index === 0 ? 'active' : ''}" onclick="cambiarTab('${categoria}')">
                        ${iconosCategoria[categoria] || '📚'} ${categoria}
                    </button>
                `).join('')}
            </div>
            
            <div class="tabs-content">
                ${Object.keys(vocabularioCompleto).map((categoria, index) => `
                    <div class="tab-panel ${index === 0 ? 'active' : ''}" id="tab-${categoria}">
                        <div class="palabras-grid">
                            ${vocabularioCompleto[categoria].map((palabra, idx) => `
                                <div class="vocab-card">
                                    <div class="vocab-card-inner">
                                        <div class="vocab-kichwa">${palabra.kichwa}</div>
                                        <div class="vocab-spanish">${palabra.spanish}</div>
                                        <div class="vocab-category">${categoria}</div>
                                        <button class="btn-pronunciar" onclick="pronunciarPalabra('${palabra.kichwa.replace(/'/g, "\\'")}', event)" title="Escuchar pronunciación">
                                            <i class="fas fa-volume-up"></i>
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Función para pronunciar palabras usando Web Speech API
function pronunciarPalabra(palabra, event) {
    event.stopPropagation(); // Evitar que se active el click en la tarjeta
    
    // Verificar si el navegador soporta Speech Synthesis
    if ('speechSynthesis' in window) {
        // Cancelar cualquier pronunciación anterior
        window.speechSynthesis.cancel();
        
        // Crear el utterance (texto a pronunciar)
        const utterance = new SpeechSynthesisUtterance(palabra);
        
        // Configuración para español
        utterance.lang = 'es-ES'; // Español de España
        utterance.rate = 0.8; // Velocidad (0.8 = un poco más lento para mejor comprensión)
        utterance.pitch = 1; // Tono normal
        utterance.volume = 1; // Volumen máximo
        
        // Cambiar ícono durante la reproducción
        const button = event.currentTarget;
        const icon = button.querySelector('i');
        icon.className = 'fas fa-spinner fa-spin';
        
        // Cuando termine de hablar
        utterance.onend = () => {
            icon.className = 'fas fa-volume-up';
        };
        
        // Si hay error
        utterance.onerror = () => {
            icon.className = 'fas fa-volume-up';
            showToast('Error al reproducir audio', 'danger');
        };
        
        // Pronunciar
        window.speechSynthesis.speak(utterance);
        
    } else {
        showToast('Tu navegador no soporta pronunciación de voz', 'warning');
    }
}

// Función para cambiar de pestaña
function cambiarTab(categoria) {
    // Remover active de todos los botones y paneles
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    
    // Activar el botón y panel seleccionado
    event.target.classList.add('active');
    document.getElementById(`tab-${categoria}`).classList.add('active');
}

/* 
===============================================
💬 INSTRUCCIONES PARA AGREGAR MÁS PALABRAS:
===============================================

Para agregar más palabras al vocabulario, edita el objeto "vocabularioCompleto"
al inicio de este archivo.

FORMATO para agregar palabras:

En la categoría correspondiente, agrega:
{ kichwa: 'PALABRA_KICHWA', spanish: 'traducción' }

EJEMPLO para agregar "yaku = agua" en Naturaleza:

'Naturaleza': [
    { kichwa: 'Puyu', spanish: 'nube' },
    { kichwa: 'Yaku', spanish: 'agua' },  ← NUEVA PALABRA
    ...
]

Para crear una nueva categoría completa:

'NUEVA_CATEGORIA': [
    { kichwa: 'Palabra1', spanish: 'significado1' },
    { kichwa: 'Palabra2', spanish: 'significado2' }
]

Y agrega el icono en "iconosCategoria":
'NUEVA_CATEGORIA': '🆕'

===============================================
*/

// === INICIALIZAR TABLERO DE JUEGO ===
function initGameBoard() {
    const cardsGrid = document.getElementById('cards-grid');
    cardsGrid.innerHTML = '';
    
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = `card-item ${card.unlocked ? '' : 'locked'}`;
        cardElement.setAttribute('data-card-id', card.id);
        
        cardElement.innerHTML = `
            <img src="${card.image}" alt="Carta ${card.id}">
            ${card.unlocked ? '' : '<i class="fas fa-lock card-lock-icon"></i>'}
            ${card.unlocked && card.stars > 0 ? `
                <div class="card-stars">
                    ${Array(card.stars).fill('<i class="fas fa-star"></i>').join('')}
                </div>
            ` : ''}
        `;
        
        if (card.unlocked) {
            cardElement.addEventListener('click', () => openGameModal(card.id));
        }
        
        cardsGrid.appendChild(cardElement);
    });
    
    updateStats();
}

// === ACTUALIZAR ESTADÍSTICAS ===
function updateStats() {
    const unlockedCount = cards.filter(c => c.unlocked).length;
    document.getElementById('unlocked-count').textContent = unlockedCount;
    document.getElementById('total-count').textContent = cards.length;
    document.getElementById('stars-count').textContent = totalStars;
}

// === INICIAR JUEGO (CAMBIAR A TABLERO) ===
function startGame() {
    document.getElementById('instructions-screen').style.display = 'none';
    document.getElementById('game-board-screen').style.display = 'block';
}

// === VOLVER A INSTRUCCIONES ===
function backToInstructions() {
    document.getElementById('game-board-screen').style.display = 'none';
    document.getElementById('instructions-screen').style.display = 'block';
}

// === ABRIR MODAL DE JUEGO ===
function openGameModal(cardId) {
    const card = cards.find(c => c.id === cardId);
    
    if (!card || !card.unlocked) {
        showToast('Esta carta está bloqueada', 'warning');
        return;
    }
    
    currentCardId = cardId;
    document.getElementById('modal-card-image').src = card.image;
    document.getElementById('modal-level').textContent = cardId;
    document.getElementById('modal-answer').value = '';
    
    const modal = document.getElementById('game-modal');
    modal.classList.add('show');
}

// === CERRAR MODAL ===
function closeGameModal() {
    document.getElementById('game-modal').classList.remove('show');
    currentCardId = null;
}

// === VERIFICAR RESPUESTA EN MODAL ===
function checkAnswerModal() {
    const userAnswer = document.getElementById('modal-answer').value.toLowerCase().trim();
    const card = cards.find(c => c.id === currentCardId);
    const inputElement = document.getElementById('modal-answer');
    
    if (!userAnswer) {
        showToast('Por favor escribe una respuesta', 'warning');
        return;
    }
    
    if (userAnswer === card.spanish) {
        // Respuesta correcta
        if (card.stars === 0) {
            card.stars = 3;
            totalStars += 3;
        }
        
        showToast('¡Excelente! ⭐⭐⭐', 'success');
        
        // Desbloquear siguiente carta
        const nextCard = cards.find(c => c.id === currentCardId + 1);
        if (nextCard && !nextCard.unlocked) {
            nextCard.unlocked = true;
            showToast(`¡Carta ${nextCard.id} desbloqueada!`, 'success');
        }
        
        setTimeout(() => {
            closeGameModal();
            initGameBoard();
            
            // Si completó todas, mostrar mensaje especial
            const allUnlocked = cards.every(c => c.unlocked);
            if (allUnlocked) {
                showToast('¡Felicidades! ¡Has completado todos los niveles! 🎉', 'success');
            }
        }, 1000);
        
    } else {
        // Respuesta incorrecta
        showToast('Intenta de nuevo', 'danger');
        inputElement.classList.add('shake');
        setTimeout(() => {
            inputElement.classList.remove('shake');
        }, 500);
    }
}

// === FUNCIÓN PARA SCROLL SUAVE ===
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = document.querySelector('.custom-navbar').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight - 20;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// === MOSTRAR TOAST (MENSAJE) ===
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    
    // Agregar icono según tipo
    const icon = document.createElement('i');
    icon.className = type === 'success' ? 'fas fa-check-circle' : 
                     type === 'danger' ? 'fas fa-times-circle' : 
                     'fas fa-exclamation-circle';
    toast.prepend(icon);
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// === LISTAS PARA EL FORMULARIO ===
const paisesEcuador = [
    'Ecuador', 'Perú', 'Colombia', 'Bolivia', 'Argentina', 'Chile', 
    'Venezuela', 'Uruguay', 'Paraguay', 'Brasil', 'Otro'
];

const provinciasEcuador = [
    'Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Chimborazo', 'Cotopaxi',
    'El Oro', 'Esmeraldas', 'Galápagos', 'Guayas', 'Imbabura', 'Loja',
    'Los Ríos', 'Manabí', 'Morona Santiago', 'Napo', 'Orellana', 'Pastaza',
    'Pichincha', 'Santa Elena', 'Santo Domingo de los Tsáchilas', 
    'Sucumbíos', 'Tungurahua', 'Zamora Chinchipe', 'Otra'
];

// === REGISTRO DE USUARIO CON FIREBASE ===
function registrarUsuario(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const userData = {
        nombres: formData.get('nombres'),
        apellidos: formData.get('apellidos'),
        fechaNacimiento: formData.get('fechaNacimiento'),
        correo: formData.get('correo'),
        pais: formData.get('pais'),
        provincia: formData.get('estado')
    };
    
    // Validar que todos los campos estén llenos
    if (!userData.nombres || !userData.apellidos || !userData.fechaNacimiento || 
        !userData.correo || !userData.pais || !userData.provincia) {
        showToast('Por favor completa todos los campos', 'warning');
        return false;
    }
    
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.correo)) {
        showToast('Por favor ingresa un correo electrónico válido', 'danger');
        return false;
    }
    
    console.log('Datos del usuario:', userData);
    
    // Mostrar mensaje de carga
    showToast('Guardando datos...', 'warning');
    
    // GUARDAR EN FIREBASE
    db.collection('usuarios').add({
        ...userData,
        fechaRegistro: firebase.firestore.FieldValue.serverTimestamp(),
        progreso: {
            cartasDesbloqueadas: 1,
            estrellasObtenidas: 0,
            ultimoNivel: 1
        }
    })
    .then((docRef) => {
        console.log('✅ Usuario registrado con ID:', docRef.id);
        showToast('¡Registro exitoso! Bienvenido/a', 'success');
        event.target.reset();
        
        // Opcional: guardar ID en localStorage para recordar al usuario
        localStorage.setItem('ashpaUserId', docRef.id);
    })
    .catch((error) => {
        console.error('❌ Error al registrar:', error);
        showToast('Error: ' + error.message, 'danger');
    });
    
    return false;
}
