// Add Particle Effect
function createParticles() {
    const container = document.getElementById("particle-container");

    for (let i = 0; i < 100; i++) {
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = "5px";
        particle.style.height = "5px";
        particle.style.borderRadius = "50%";
        particle.style.background = "white";
        particle.style.opacity = Math.random();
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animation = `particle-move ${Math.random() * 5 + 5}s linear infinite`;

        container.appendChild(particle);
    }
}

createParticles();