var LeafIcon = L.Icon.extend({
  options: {
    iconSize: [38, 50],
    popupAnchor: [-3, -40],
  },
});

// Définition des icônes
var blackIcon = new LeafIcon({ iconUrl: "public/assets/icons/black.png" });
var maroonIcon = new LeafIcon({ iconUrl: "public/assets/icons/maroon.png" });
var redIcon = new LeafIcon({ iconUrl: "public/assets/icons/red.png" });
var orangeIcon = new LeafIcon({ iconUrl: "public/assets/icons/orange.png" });
var yellowIcon = new LeafIcon({ iconUrl: "public/assets/icons/yellow.png" });

// Conversion de la position en décimal
function convertDMSToDecimal(degrees, minutes, seconds, direction) {
  // Calcul du degré décimal
  let decimalDegrees = degrees + minutes / 60 + seconds / 3600;

  // Vérification de la direction (N, S, E, W)
  if (direction === "S" || direction === "W") {
    decimalDegrees = -decimalDegrees;
  }

  return decimalDegrees;
}

// Coordonnées des zones de découpe
var mediterraneanSeaCoords = [
  [38, 0],
  [38, 15],
  [46, 15],
  [46, 0],
];

var tyrrhenianSeaCoords = [
  [38, 10],
  [38, 15],
  [42, 15],
  [42, 10],
];

var adriaticSeaCoords = [
  [38, 15],
  [38, 20],
  [42, 20],
  [42, 15],
];

// Créer une carte
var map = L.map("map").setView([39, 15], 5);

// Ajouter une couche de carte OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Créer des polygones pour chaque zone de découpe
var mediterraneanSea = L.polygon(mediterraneanSeaCoords, {
  color: "blue",
  fillOpacity: 0.4,
}).addTo(map);
mediterraneanSea.bindPopup("Mer Méditerranée");

var tyrrhenianSea = L.polygon(tyrrhenianSeaCoords, {
  color: "green",
  fillOpacity: 0.4,
}).addTo(map);
tyrrhenianSea.bindPopup("Mer Tyrrhénienne");

var adriaticSea = L.polygon(adriaticSeaCoords, {
  color: "red",
  fillOpacity: 0.4,
}).addTo(map);
adriaticSea.bindPopup("Mer Adriatique");

// Récupération des données de tri
fetch("Data/plastiqueSum", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    // Code de traitement des données de tri ici

    // Récupération des données de prélèvement
    fetch("Data/data", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        // Code de traitement des données de prélèvement ici
      });
  });
