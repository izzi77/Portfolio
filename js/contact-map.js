/**
 * CONTACT MAP - LE A F L E T KAART
 * Gemaakt door Issam Lamsayeh voor de contactpagina
 * Toont AP Hogeschool Antwerpen met marker, popup en een cirkel
 */

// Wacht tot de volledige HTML geladen is voordat de kaart wordt gemaakt
document.addEventListener("DOMContentLoaded", function() {
    
    // Controleer of het kaart-element bestaat op de pagina
    const mapContainer = document.getElementById("myCustomMap");
    if (!mapContainer) {
        console.log("Geen kaart-element gevonden op deze pagina.");
        return;
    }
    
    // Coördinaten van AP Hogeschool (Ellermanstraat 33, Antwerpen)
    const apLatitude = 51.23009;
    const apLongitude = 4.41616;
    
    // Stap 1: Maak de kaart aan en centreer op AP
    const myMap = L.map("myCustomMap").setView([apLatitude, apLongitude], 16);
    
    // Stap 2: Voeg de achtergrondtegels toe (OpenStreetMap is gratis)
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> | Gemaakt door Issam Lamsayeh'
    }).addTo(myMap);
    
    // Stap 3: Plaats een marker op de kaart
    const schoolMarker = L.marker([apLatitude, apLongitude]).addTo(myMap);
    
    // Stap 4: Voeg een popup toe aan de marker met informatie
    schoolMarker.bindPopup(`
        <div style="font-family: 'Segoe UI', sans-serif; min-width: 160px;">
            <strong style="color: #0F4745;">🏫 AP Hogeschool Antwerpen</strong><br>
            Ellermanstraat 33<br>
            2060 Antwerpen<br>
            <i class="small text-muted">🎓 Graduaat SNB/IoT</i>
            <hr style="margin: 5px 0;">
            <span style="font-size: 0.75rem;">📍 Dit is waar ik studeer!</span>
        </div>
    `);
    
    // Stap 5: Open de popup standaard (zodat bezoekers direct zien wat het is)
    schoolMarker.openPopup();
    
    // Stap 6: Teken een subtiele cirkel rond de school (visueel accent)
    L.circle([apLatitude, apLongitude], {
        color: "#15BDB6",         // Randkleur (mijn merk-kleurtje)
        fillColor: "#0F4745",     // Vulkleur
        fillOpacity: 0.1,         // Doorzichtigheid
        radius: 45,               // Straal in meters
        weight: 1.5
    }).addTo(myMap);
    
    // Stap 7: Kleine schaal weergeven in de linkerbenedenhoek
    L.control.scale({ metric: true, imperial: false }).addTo(myMap);
    
    console.log("✅ Kaart geladen - AP Hogeschool Antwerpen");
});