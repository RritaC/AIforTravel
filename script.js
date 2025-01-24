// Initialize the Globe
const globe = Globe()(document.getElementById("globe-container"))
    .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
    .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
    .backgroundColor("rgba(0, 0, 0, 0)") // Transparent background
    .showAtmosphere(true)
    .atmosphereColor("#3a9ad9")
    .atmosphereAltitude(0.25);

// Enable globe interaction and auto-rotation
globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = 1;

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
