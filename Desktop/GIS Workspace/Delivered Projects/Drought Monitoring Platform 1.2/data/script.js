var map = L.map('map').setView([32, 70], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(map);




//___________________________________________________________________________________________________________________________________________________________________________________

var imageUrl = './data/raster.jpg ';
var url2= 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg'
var latLngBounds = L.latLngBounds([[23.843160, 85.096773], [39.642781, 55.724707]]);

var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
    opacity: 0.7,
    interactive: true
}).addTo(map);
//__________________________________________________________________________________________________________________________________________________________________________________
//Legend specific*/
var legend = L.control({ position: "bottomright" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h2>&nbspDROUGHT &nbspINTENSITY</h2>";
  div.innerHTML += '<i style="background: rgb(255, 149, 67)"></i><span>Mild Drought</span><br>';
  div.innerHTML += '<i style="background: rgb(247, 247, 118)"></i><span>Normal</span><br>';
  div.innerHTML += '<i style="background: rgb(45, 190, 212)"></i><span>Wet</span><br>';
  return div;
};

legend.addTo(map);