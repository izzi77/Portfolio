// Leaflet map – wordt geïnitialiseerd als het element #kaart bestaat
document.addEventListener("DOMContentLoaded", function () {
  var mapEl = document.getElementById("kaart");
  if (!mapEl) return;

  var kaart = L.map("kaart").setView([51.2194, 4.4025], 13); // Antwerpen

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(kaart);

  L.marker([51.2194, 4.4025])
    .addTo(kaart)
    .bindPopup("<strong>Issam Lamsayeh</strong><br>Antwerpen, België")
    .openPopup();
});
