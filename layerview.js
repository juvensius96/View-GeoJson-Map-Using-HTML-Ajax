


var mapOptions = {
    center: [-8.088, 113.626],
    zoom: 13
}

var map = L.map('mapid',mapOptions);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

// L.tileLayer(
//     'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
//         // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//         maxZoom: 12.55,
//         id: 'ayambeturbo.8lp46aoo',
//         token: 'pk.eyJ1IjoiYXlhbWJldHVyYm8iLCJhIjoiY2wzaGxrM3l4MWN5bDNlcHJnbTRncW8wMiJ9.6stqh8NAn9W-1CbERu05kw'
//     }).addTo(map);

    
var geojsonLayer = new L.GeoJSON.AJAX("map.geojson");
geojsonLayer.addTo(map);