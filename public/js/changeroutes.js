const routesContainer = document.querySelector('.user-routes-container');

routesContainer.addEventListener('click', async (e) => {
  try {
    if (e.target.tagName === 'BUTTON') {
      // delete
      if (e.target.classList.contains('delete-btn')) {
        const { id } = e.target.dataset;
        const response = await fetch(`/api/routes/${id}`, {
          method: 'DELETE',
        });

        if (response.status === 200) {
          routesContainer.removeChild(e.target.closest('.card'));
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
});
