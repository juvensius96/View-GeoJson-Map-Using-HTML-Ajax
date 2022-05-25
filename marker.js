// var marker = L.marker([-8.085, 113.6347], {
//     // title: "Desa Suci"
// }).addTo(map);
// marker.bindPopup("Desa Suci (1249 ha, 5000 Pohon)");
// marker.on('click', onClick);


map.eachLayer(function(layer){
    layer.bindPopup('Hello');
});

