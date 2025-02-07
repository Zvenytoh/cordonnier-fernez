document.addEventListener("DOMContentLoaded", function () {
    // Coordonnées de l'entreprise
    var lat = 50.2933142712087; // Latitude
    var lon = 2.7753854676243557; // Longitude

    // Initialisation de la carte
    var map = L.map("map").setView([lat, lon], 13);

    // Ajout d'une couche de tuiles (carte de base)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Ajouter un marqueur à l'emplacement de l'entreprise
    L.marker([lat, lon]).addTo(map).bindPopup("Cordonnerie Fernez").openPopup();
});
