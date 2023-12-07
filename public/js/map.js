const routeForm = document.querySelector('.route-form');

async function initMap() {
  const myLatLng = { lat: 55.7522, lng: 37.6156 };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 8,
  });
  // Instantiate a directions service.
  const directionsService = new google.maps.DirectionsService();
  const directionsDisplay = new google.maps.DirectionsRenderer({
    map: map,
  });

  const pointA = new google.maps.Marker({
    position: myLatLng,
    title: 'point A',
    label: 'A',
    map: map,
    draggable: true,
  });

  const pointB = new google.maps.Marker({
    position: myLatLng,
    title: 'point B',
    label: 'B',
    map: map,
    draggable: true,
  });

  google.maps.event.addListener(pointA, 'dragend', function (evt) {
    document.getElementById('latitudeA').value = evt.latLng.lat();
    document.getElementById('longitudeA').value = evt.latLng.lng();
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });

  google.maps.event.addListener(pointB, 'dragend', function (evt) {
    document.getElementById('latitudeB').value = evt.latLng.lat();
    document.getElementById('longitudeB').value = evt.latLng.lng();
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });

  // document
  //   .querySelector('.start-address')
  //   .addEventListener('change', async (e) => {
  //     const address = e.target.value.split(',')
  //     const req = await fetch(
  //       `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY`
  //     );
  //   });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  const myLatLng = { lat: 55.7522, lng: 37.6156 };
  const pointA = {
    lat: Number(document.getElementById('latitudeA').value),
    lng: Number(document.getElementById('longitudeA').value),
  };
  const pointB = {
    lat: Number(document.getElementById('latitudeB').value),
    lng: Number(document.getElementById('longitudeB').value),
  };

  directionsService.route(
    {
      origin: pointA || myLatLng,
      destination: pointB || myLatLng,
      avoidTolls: true,
      avoidHighways: false,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function (response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);

        document.querySelector('.duration-time').innerText =
          directionsDisplay.directions.routes[0].legs[0].duration.text;
        document.querySelector('.distance').innerText =
          directionsDisplay.directions.routes[0].legs[0].distance.text;
        document.getElementById('location').value =
          directionsDisplay.directions.routes[0].legs[0].start_address
            .split(',')
            .at(-3);

        document.querySelector('.start-address').value =
          directionsDisplay.directions.routes[0].legs[0].end_address;
        document.querySelector('.end-address').value =
          directionsDisplay.directions.routes[0].legs[0].start_address;
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    }
  );
}

initMap();

routeForm?.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const formData = {
      routName: e.target.routName.value,
      location: e.target.location.value,
      mapData: [
        [e.target.latitudeA.value, e.target.longitudeA.value],
        [e.target.latitudeB.value, e.target.longitudeB.value],
      ],
    };
    const response = await fetch('/api/routes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      const data = await response.json();
      window.location = `/rout/${data.id}`;
    }
  } catch (error) {
    console.error(error);
  }
});
