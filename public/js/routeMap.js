const id = window.location.pathname.split('/')[2];

function initMap(pointA, pointB) {
  const pointA = [-25.437432393550495, 132.0602353515625];
  const pointB = [-25.437432393550495, 132.0602353515625];
  const myOptions = {
      zoom: 7,
      center: pointA,
    },
    map = new google.maps.Map(document.getElementById('map'), myOptions),
    // Instantiate a directions service.
    directionsService = new google.maps.DirectionsService(),
    directionsDisplay = new google.maps.DirectionsRenderer({
      map: map,
    }),
    markerA = new google.maps.Marker({
      position: pointA,
      title: 'point A',
      label: 'A',
      map: map,
    }),
    markerB = new google.maps.Marker({
      position: pointB,
      title: 'point B',
      label: 'B',
      map: map,
    });

  // get route from A to B
  // calculateAndDisplayRoute(
  //   directionsService,
  //   directionsDisplay,
  //   pointA,
  //   pointB
  // );
}

function calculateAndDisplayRoute(
  directionsService,
  directionsDisplay,
  pointA,
  pointB
) {
  directionsService.route(
    {
      origin: pointA,
      destination: pointB,
      avoidTolls: true,
      avoidHighways: false,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function (response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    }
  );
}

fetch(`/api/routes/${id}`, { method: 'GET' })
  .then((response) => response.json())
  .then((data) => {
    const pointA = [Number(data.mapData[0][0]), Number(data.mapData[0][1])];
    const pointB = [Number(data.mapData[1][0]), Number(data.mapData[1][1])];
    //console.log(pointA);
    initMap(pointA, pointB);
  })
  .catch((err) => console.log(err));
