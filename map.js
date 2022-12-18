var map = L.map('map').setView([50,50], 13);
var imageUrl = 'https://cdn.discordapp.com/attachments/978499800129474570/999167787681456242/unknown.png';
var imageBounds = [[0, 0], [360, 280]];
var imageLayer = L.imageOverlay(imageUrl, imageBounds).addTo(map);