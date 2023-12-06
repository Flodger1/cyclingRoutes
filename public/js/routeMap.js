const id = window.location.pathname.split('/')[2];

function initMap(pointA, pointB) {
  const myOptions = {
    zoom: 7,
    center: pointA,
  };
  const map = new google.maps.Map(document.getElementById('map'), myOptions);
  // Instantiate a directions service.
  const directionsService = new google.maps.DirectionsService();
  const directionsDisplay = new google.maps.DirectionsRenderer({
    map: map,
  });
  const markerA = new google.maps.Marker({
    position: pointA,
    title: 'point A',
    label: 'A',
    map: map,
  });
  const markerB = new google.maps.Marker({
    position: pointB,
    title: 'point B',
    label: 'B',
    map: map,
  });

  // get route from A to B
  calculateAndDisplayRoute(
    directionsService,
    directionsDisplay,
    pointA,
    pointB
  );
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
        document.querySelector(
          '.text__info'
        ).children[1].innerText = `Длина маршрута: ${directionsDisplay.directions.routes[0].legs[0].distance.text}`;
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    }
  );
}

fetch(`/api/routes/${id}`, { method: 'GET' })
  .then((response) => response.json())
  .then((data) => {
    const pointA = {
      lat: Number(data.mapData[0][0]),
      lng: Number(data.mapData[0][1]),
    };
    const pointB = {
      lat: Number(data.mapData[1][0]),
      lng: Number(data.mapData[1][1]),
    };
    console.log(pointA, pointB);
    initMap(pointA, pointB);
  })
  .catch((err) => console.log(err));
