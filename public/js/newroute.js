const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', (e) => {
  document.querySelector('#add-new-route').style.visibility = 'visible';
  document.querySelector('.new-route').style.visibility = 'visible';
});
