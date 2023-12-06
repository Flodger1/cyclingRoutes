// var directionsDisplay;
// var directionsService = new google.maps.DirectionsService();
async function initMap() {
  const { Map } = await google.maps.importLibrary('maps');
  console.log(Map);
  //   directionsDisplay = new Map.DirectionsRenderer();
  //   var chicago = new Map.LatLng(41.850033, -87.6500523);
  //   var mapOptions = {
  //     zoom: 7,
  //     center: chicago,
  //   };
  //   var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  //   directionsDisplay.setMap(map);
  //   calcRoute(map);
}

initMap();
// function calcRoute(map) {
//   var start = new google.maps.LatLng(41.850033, -87.6500523);
//   var end = new google.maps.LatLng(37.3229978, -122.0321823);
//   var request = {
//     origin: start,
//     destination: end,
//     travelMode: 'DRIVING',
//   };

//   directionsService.route(request, function (response, status) {
//     if (status == 'OK') {
//       directionsDisplay.setDirections(response);
//     } else {
//       alert('directions request failed, status=' + status);
//     }
//   });
// }
