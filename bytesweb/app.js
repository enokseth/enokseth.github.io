function setRandomValue() {
    const randomValue = Math.floor(Math.random() * 256); // Génère un nombre aléatoire de 0 à 255
    document.getElementById('decimalInput').value = randomValue;
    animateBitsExiting(); // Appelle l'animation de sortie avant la conversion
}

function animateBitsExiting() {
    const bits = document.querySelectorAll('.bit span');
    gsap.timeline()
        .to(bits, {
            duration: 1.5,
            ease: "power2.inOut",
            x: (i) => 100 + i * 60, // Calcule une nouvelle position X pour chaque bit
            y: -30, // Déplace chaque bit vers le haut
            opacity: 0,
            stagger: 0.05, // Stagger l'animation pour un effet de vague
            onComplete: convertAndAnimate // Appelle convertAndAnimate après l'animation
        })
        .set(bits, { x: 0, y: 0, opacity: 1 }); // Réinitialise les positions et l'opacité
}

function convertAndAnimate() {
    let decimal = parseInt(document.getElementById('decimalInput').value);
    if (isNaN(decimal) || decimal < 0 || decimal > 255) {
        document.getElementById('errorMessage').innerText = "Error: Out of byte range (0-255).";
        return;
    }

    document.getElementById('errorMessage').innerText = "";
    let binary = (decimal >>> 0).toString(2).padStart(8, '0');
    document.getElementById('binaryOutput').innerText = binary;
    document.getElementById('decimalOutput').innerText = decimal;

    binary.split('').forEach((bit, index) => {
        let bitElement = document.querySelector(`#bit${7 - index} span`);
        bitElement.innerText = bit;
        gsap.fromTo(bitElement, { opacity: 0, scale: 0.5 }, {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: "elastic.out(1, 0.3)"
        });
    });
}
