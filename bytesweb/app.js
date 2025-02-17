let draggedElement = null;
let isAnimating = false;  // État pour vérifier si une animation est en cours

// Centralise l'état du byte
let byteState = {
    bits: Array(8).fill(0),  // Initialisé à [0, 0, 0, 0, 0, 0, 0, 0]
    decimal: 0
};

// Permet de déposer l'élément
function allowDrop(event) {
    event.preventDefault();
    event.target.closest('.bit').classList.add('dragging-over');
}

function drag(event) {
    draggedElement = event.target;  // Élement en cours de déplacement
    event.target.closest('.bit').classList.add('dragging');  // Ajoute une classe pour styliser le bit en cours de déplacement
}

function drop(event) {
    event.preventDefault();
    const targetBit = event.target.closest('.bit');

    if (draggedElement && targetBit && !isAnimating) {
        const draggedBitValue = draggedElement.innerText;
        const targetBitValue = targetBit.querySelector('span').innerText;

        // Échange des valeurs entre le bit drag et le bit cible
        draggedElement.innerText = targetBitValue;
        targetBit.querySelector('span').innerText = draggedBitValue;

        draggedElement.closest('.bit').classList.remove('dragging');
        draggedElement = null;  // Réinitialise la variable après le drop

        // Met à jour l'état du byte après le drag-and-drop
        updateByteState();
    }

    event.target.closest('.bit').classList.remove('dragging-over');  // Retire l'effet visuel
}

// Fonction pour les événements touch sur mobile
function addTouchListeners(element) {
    let startX, startY, initialPosition;

    element.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        initialPosition = element.closest('.bit');
        element.classList.add('dragging');
    });

    element.addEventListener('touchmove', function(event) {
        event.preventDefault();
        let touch = event.touches[0];
        element.style.position = 'absolute';
        element.style.left = `${touch.clientX - startX}px`;
        element.style.top = `${touch.clientY - startY}px`;
    });

    element.addEventListener('touchend', function(event) {
        let targetBit = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY).closest('.bit');
        if (targetBit && initialPosition !== targetBit) {
            // Échange des valeurs entre l'élément drag et la cible
            const draggedBitValue = element.innerText;
            const targetBitValue = targetBit.querySelector('span').innerText;
            targetBit.querySelector('span').innerText = draggedBitValue;
            element.innerText = targetBitValue;
            updateByteState();
        }
        element.classList.remove('dragging');
        element.style.position = '';  // Reset position style
        element.style.left = '';
        element.style.top = '';
    });
}

// Fonction de mise à jour de l'état des bits et conversion binaire -> décimal
function updateByteState() {
    let binary = '';
    for (let i = 7; i >= 0; i++) {
        let bitValue = document.querySelector(`#bit${i} span`).innerText;
        binary += bitValue;
        byteState.bits[i] = parseInt(bitValue);  // Met à jour l'état des bits
    }

    // Conversion binaire -> décimal
    byteState.decimal = parseInt(binary, 2);
    document.getElementById('binaryOutput').innerText = binary;
    document.getElementById('decimalOutput').innerText = byteState.decimal;
    document.getElementById('decimalInput').value = byteState.decimal;

    applyBitAnimation();
}

// Fonction pour générer une valeur aléatoire et la convertir
function setRandomValue() {
    if (!isAnimating) {
        const randomValue = Math.floor(Math.random() * 256);  // Génère un nombre aléatoire
        document.getElementById('decimalInput').value = randomValue;
        convertAndAnimate();  // Met à jour l'animation et les valeurs
    }
}

// Fonction d'animation pour les bits
function applyBitAnimation() {
    const bits = document.querySelectorAll('.bit span');
    gsap.timeline()
        .fromTo(bits, { opacity: 0, scale: 0.5 }, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "elastic.out(1, 0.5)",
            stagger: 0.05  // Effet de vague pour les bits
        });
}

// Animation pour la sortie des bits avant conversion
function animateBitsExiting(callback) {
    const bits = document.querySelectorAll('.bit span');
    isAnimating = true;
    gsap.timeline()
        .to(bits, {
            duration: 1.5,
            ease: "power2.inOut",
            x: (i) => 100 + i * 60,  // Calcule une nouvelle position X pour chaque bit
            y: -30,  // Déplace chaque bit vers le haut
            opacity: 0,
            stagger: 0.05,  // Stagger l'animation pour un effet de vague
            onComplete: callback  // Appelle la fonction après l'animation
        })
        .set(bits, { x: 0, y: 0, opacity: 1 });  // Réinitialise les positions et l'opacité
}

// Fonction pour la conversion binaire -> décimal et animation
function convertAndAnimate() {
    let decimal = parseInt(document.getElementById('decimalInput').value);
    if (isNaN(decimal) || decimal < 0 || decimal > 255) {
        document.getElementById('errorMessage').innerText = "Error: Out of byte range (0-255).";
        return;
    }

    document.getElementById('errorMessage').innerText = "";
    let binary = (decimal >>> 0).toString(2).padStart(8, '0');

    // Mise à jour de l'état global avant l'animation
    byteState.decimal = decimal;
    byteState.bits = binary.split('').map(bit => parseInt(bit));

    animateBitsExiting(() => {
        // Mise à jour des bits après l'animation
        binary.split('').forEach((bit, index) => {
            let bitElement = document.querySelector(`#bit${7 - index} span`);
            bitElement.innerText = bit;

            // Animation d'apparition du bit
            gsap.fromTo(bitElement, { opacity: 0, scale: 0.5 }, {
                opacity: 1,
                scale: 1,
                duration: 0.2,
                ease: "elastic.out(1, 0.3)"
            });
        });

        // Mise à jour de l'interface utilisateur après l'animation
        document.getElementById('binaryOutput').innerText = binary;
        document.getElementById('decimalOutput').innerText = decimal;

        isAnimating = false;  // Animation terminée
    });
}

// Ajouter des listeners pour chaque bit (drag-and-drop et touch)
document.querySelectorAll('.bit span').forEach((bit) => {
    addTouchListeners(bit);  // Pour les événements tactiles sur mobile
});
