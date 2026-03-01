// === VOCABULARIO COMPLETO KICHWA ===
// Este es el vocabulario expandido que se muestra en la sección de aprendizaje
const vocabularioCompleto = {
    'Saludos': [
        { kichwa: 'Napay', spanish: 'saludo' },
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
    { id: 1, image: 'assets/cards/1.png', kichwa: 'Napay', spanish: 'saludo', category: 'Saludos', unlocked: true, stars: 0 },
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
    initScrollEffects(); 
    
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
    
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(-20px)';
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0)';
            logo.style.transition = 'all 0.3s ease';
            navbar.classList.add('scrolled');
        } else {
            logo.style.opacity = '0';
            logo.style.transform = 'translateY(-20px)';
            navbar.classList.remove('scrolled');
        }
    });
}

// === FUNCIÓN PARA INICIALIZAR EL VOCABULARIO CON PESTAÑAS ===
function initVocabulary() {
    const vocabularyGrid = document.querySelector('.vocabulary-grid');
    
    vocabularyGrid.innerHTML = `
        <div class="tabs-container">
            <div class="tabs-header">
                ${Object.keys(vocabularioCompleto).map((categoria, index) => `
                    <button class="tab-button ${index === 0 ? 'active' : ''}" onclick="cambiarTab('${categoria}')">
                        ${categoria}
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

function pronunciarPalabra(palabra, event) {
    if (event) event.stopPropagation();

    // 1. Forzamos minúsculas para que coincida con "napay.mp3"
    // 2. Usamos ruta relativa "./" para asegurar que busque desde donde esté el index.html
    const nombreArchivo = palabra.toLowerCase().trim();
    const rutaAudio = `./assets/audio/${nombreArchivo}.mp3`;
    
    console.log("Intentando reproducir:", rutaAudio); // Esto te ayudará a ver el error en la consola del navegador
    
    const audio = new Audio(rutaAudio);

    const button = event.currentTarget;
    const icon = button.querySelector('i');
    if (icon) icon.className = 'fas fa-spinner fa-spin';

    audio.play()
        .then(() => {
            console.log("Reproduciendo con éxito");
        })
        .catch(error => {
            console.error('Error en Vercel:', error);
            // Si falla, intentamos una ruta alternativa por si la estructura cambió
            const audioFallback = new Audio(`audio/${nombreArchivo}.mp3`);
            audioFallback.play().catch(() => {
                showToast('Audio no encontrado: ' + nombreArchivo, 'danger');
            });
        });

    audio.onended = () => {
        if (icon) icon.className = 'fas fa-volume-up';
    };
}

// Función para cambiar de pestaña
function cambiarTab(categoria) {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(`tab-${categoria}`).classList.add('active');
}

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
    const inputElement = document.getElementById('modal-answer');
    const userAnswer = inputElement.value.toLowerCase().trim();
    const card = cards.find(c => c.id === currentCardId);
    
    if (!userAnswer) {
        showToast('Por favor escribe una respuesta', 'warning');
        return;
    }
    
    // Función interna para quitar tildes
    const quitarTildes = (texto) => {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    // Comparamos ambas palabras ya sin tildes y en minúsculas
    const respuestaUsuarioLimpia = quitarTildes(userAnswer);
    const respuestaCorrectaLimpia = quitarTildes(card.spanish.toLowerCase());
    
    if (respuestaUsuarioLimpia === respuestaCorrectaLimpia) {
        if (card.stars === 0) {
            card.stars = 3;
            totalStars += 3;
        }
        
        showToast('¡Excelente! ⭐⭐⭐', 'success');
        
        const nextCard = cards.find(c => c.id === currentCardId + 1);
        if (nextCard && !nextCard.unlocked) {
            nextCard.unlocked = true;
            showToast(`¡Carta ${nextCard.id} desbloqueada!`, 'success');
        }
        
        setTimeout(() => {
            closeGameModal();
            initGameBoard();
            
            const allUnlocked = cards.every(c => c.unlocked);
            if (allUnlocked) {
                showToast('¡Felicidades! ¡Has completado todos los niveles! 🎉', 'success');
            }
        }, 1000);
        
    } else {
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

// === REGISTRO Y ENVÍO DE EMAIL CON FIREBASE TRIGGER ===
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
    
    // Validar email
    if (!userData.correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.correo)) {
        showToast('Email inválido', 'danger');
        return false;
    }
    
    showToast('Guardando...', 'warning');
    
    // 1. Guardar en la colección 'usuarios'
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
        // EL LINK DIRECTO
        const linkDrive = "https://drive.google.com/drive/folders/1lVYkEa-JSqBAMtxILbbnB-juEAr03Ni5?usp=sharing";

        // 2. Enviar email con el LINK DIRECTO resaltado
        db.collection('mail').add({
            to: userData.correo,
            message: {
                subject: "📚 Materiales de ASHPA para " + userData.nombres,
                html: `
                    <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
                        <h2>¡Hola ${userData.nombres}!</h2>
                        <p>Gracias por registrarte en ASHPA. Aquí tienes el acceso directo a tus materiales de estudio en Google Drive:</p>
                        
                        <p style="font-size: 18px; margin: 20px 0;">
                            <strong>Link de descarga:</strong><br>
                            <a href="${linkDrive}">${linkDrive}</a>
                        </p>

                        <p>Solo haz clic en el enlace azul de arriba para abrir la carpeta.</p>
                        <br>
                        <p>¡Mucho éxito en tu aprendizaje!<br>
                        <strong>Equipo ASHPA</strong></p>
                    </div>
                `
            }
        })
        .then(() => {
            showToast('¡Registro exitoso! Revisa tu correo', 'success');
            event.target.reset();
        })
        .catch((error) => {
            showToast('Error al preparar el envío', 'warning');
        });
    })
    .catch((error) => {
        showToast('Error: ' + error.message, 'danger');
    });
    
    return false;
}