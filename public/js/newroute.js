const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', (e) => {
  const newRouteForm = document.querySelector('.main-container');
  const userRoutesContainer = document.querySelector('.user-routes-container');

  newRouteForm.style.display = 'block';
  userRoutesContainer.style.display = 'none';
});
