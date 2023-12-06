const routeForm = document.querySelector('.route-form');

async function initMap() {
  const myLatLng = { lat: -25.363, lng: 131.044 };
  const { Map } = await google.maps.importLibrary('maps');
  map = new Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 8,
  });

  const pointA = new google.maps.Marker({
    position: myLatLng,
    map,
    title: 'Hello World!',
    draggable: true,
  });

  const pointB = new google.maps.Marker({
    position: myLatLng,
    map,
    title: 'Hello World!',
    draggable: true,
  });

  google.maps.event.addListener(pointA, 'dragend', function (evt) {
    document.getElementById('latitudeA').value = evt.latLng.lat().toFixed(6);
    document.getElementById('longitudeA').value = evt.latLng.lng().toFixed(6);
  });

  google.maps.event.addListener(pointB, 'dragend', function (evt) {
    document.getElementById('latitudeB').value = evt.latLng.lat().toFixed(6);
    document.getElementById('longitudeB').value = evt.latLng.lng().toFixed(6);
    console.log(evt);
  });
}

initMap();

routeForm.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const formData = {
      routName: e.target.routName.value,
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
      e.target.latitudeA.value = '';
      e.target.longitudeA.value = '';
      e.target.latitudeB.value = '';
      e.target.longitudeB.value = '';
      e.target.routName.value = '';
    }
  } catch (error) {
    console.error(error);
  }
});
