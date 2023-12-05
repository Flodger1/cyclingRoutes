// const L = require('leaflet');
// require('leaflet-routing-machine');

// let map = document.getElementById('map');
// map = L.map('map').setView([28.238, 83.9956], 11);
// const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//   attribution: 'Leaflet &copy; ' + mapLink + ', contribution',
//   maxZoom: 18,
// }).addTo(map);

// var taxiIcon = L.icon({
//   iconUrl: 'img/taxi.png',
//   iconSize: [70, 70],
// });

// const marker = L.marker([28.238, 83.9956], { icon: taxiIcon }).addTo(map);

// map.on('click', function (e) {
//   console.log(e);
//   const newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
//   L.Routing.control({
//     waypoints: [
//       L.latLng(28.238, 83.9956),
//       L.latLng(e.latlng.lat, e.latlng.lng),
//     ],
//   })
//     .on('routesfound', function (e) {
//       var routes = e.routes;
//       console.log(routes);

//       e.routes[0].coordinates.forEach(function (coord, index) {
//         setTimeout(function () {
//           marker.setLatLng([coord.lat, coord.lng]);
//         }, 100 * index);
//       });
//     })
//     .addTo(map);
// });
