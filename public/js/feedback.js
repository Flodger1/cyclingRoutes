const reviewForm = document.querySelector('.review__form');
const reviewsContainer = document.querySelector('.reviews__container');
const infoText = document.querySelector('.info__text');
const ratingForm = document.querySelector('.rating__form');
const allStars = document.querySelectorAll('.star');
const rateText = document.querySelector('.rate__text');
const deteleReviewBtn = document.querySelector('.detele-review__btn');

console.log("Скрипт работает");

//добавление отзыва на маршрут в базу и в блок отзывов
reviewForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {id} = event.target.dataset;
    const formData = {
        text: event.target.text.value,
        routId: id
    };
    try {
        const response = await fetch('/api/review', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.status === 200) {
            const result = await response.json();
            console.log("NEW REVIEW WAS ADDED******", result);
            const div = document.createElement('div');
            div.classList.add('review__item');
            div.key = `${result.id}`;
            div.innerHTML = `
                <p>${result.text}</p>
                <br/>
                <p>${result.userName}</p>
                <div><button type='button' data-id=${result.id} class="detele-review__btn btn__my">Delete my review</button></div>            
            `;
            const info = document.querySelector('.no-reviews__not');
            info?.classList.toggle('hidden');
            reviewsContainer.prepend(div);
            event.target.text.value = "";
            infoText.innerText = "Благодарим за ваш отзыв!";
            setTimeout(() => {
                infoText.innerText = '';
            }, 1500)
        }  else if (response.status === 403) {
            console.log("У пользователя недостаточно прав!");
        } else {
            infoText.innerText = "Произошла ошибка, попробуйте еще раз.";
            setTimeout(() => {
                infoText.innerText = '';
            }, 1500)
        }        
    } catch (error) {
        console.error(error);        
    }
});



let currentRating = 0;

allStars.forEach((star, i) => {
  star.addEventListener('mouseover', function() {
    allStars.forEach((star, j) => {
      if (i >= j) {
        star.innerHTML = '&#9733;';
      } else {
        star.innerHTML = '&#9734;';
      }
    });
  });

  star.addEventListener('mouseout', function() {
    allStars.forEach((star, j) => {
      if (currentRating >= j + 1) {
        star.innerHTML = '&#9733;';
      } else {
        star.innerHTML = '&#9734;';
      }
    });
  });

  star.addEventListener('click', function() {
    currentRating = i + 1;
    allStars.forEach((star, j) => {
      if (currentRating >= j + 1) {
        star.innerHTML = '&#9733;';
      } else {
        star.innerHTML = '&#9734;';
      }
    });
  });
});

//удаление своего отзыва
reviewsContainer?.addEventListener('click', async (event) => {
    event.preventDefault();
    if (event.target.tagName === 'BUTTON' && event.target.classList.value.includes('detele-review__btn')) {
        const { id } = event.target.dataset;
        try {
            const response = await fetch(`/api/review/${id}`, {
                method: 'DELETE',
            });
            if (response.status === 200) {
                console.log("Review was deleted");
                const review = event.target.closest('.review__item');
                reviewsContainer.removeChild(review);
            }            
        } catch (error) {
            console.log(error);            
        }
    }
})

//добавление оценки маршрута в базу
ratingForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {id} = event.target.dataset;
    const formData = {
        value: currentRating,
        routId: id
    };
    try {
        const response = await fetch('/api/rate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        console.log(response);
        if (response.status === 200) {
            console.log("NEW RATE WAS ADDED******");
            rateText.innerText = "Ваша оценка была успешно обработана!";
            setTimeout(() => {window.location.reload(true)}, 2000);
        } else if (response.status === 403) {
            console.log("У пользователя недостаточно прав!");
        } 
    } catch (error) {
        console.error(error);    
    }
})



