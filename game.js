// DOM Elements
const countrySelect = document.getElementById("country");
const purposeSelect = document.getElementById("purpose");
const startButton = document.getElementById("start-learning");

// Enable the Start Button when both fields are selected
function checkSelection() {
    if (countrySelect.value && purposeSelect.value) {
        startButton.disabled = false;
    } else {
        startButton.disabled = true;
    }
}

countrySelect.addEventListener("change", checkSelection);
purposeSelect.addEventListener("change", checkSelection);

// Start Learning
startButton.addEventListener("click", () => {
    const country = countrySelect.value;
    const purpose = purposeSelect.value;

    // Redirect to play.html with query parameters
    const queryString = `?country=${country}&purpose=${purpose}`;
    window.location.href = `play.html${queryString}`;
});

// Initialize the Globe
const globeContainer = document.getElementById("globe-container");
const Globe = window.Globe;

const globe = Globe()(globeContainer)
    .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
    .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
    .backgroundColor("#000000")
    .showAtmosphere(true)
    .atmosphereColor("#87CEEB")
    .atmosphereAltitude(0.25);

// Rotate the globe continuously
(function rotateGlobe() {
    globe.rotation.y += 0.001;
    requestAnimationFrame(rotateGlobe);
})();
