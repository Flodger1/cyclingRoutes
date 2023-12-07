const reviewForm = document.querySelector('.review__form');
const reviewsContainer = document.querySelector('.reviews__container');
const infoText = document.querySelector('.info__text');
const ratingForm = document.querySelector('.rating__form');
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
                <div><button type='button' data-id=${result.id} class="detele-review__btn btn btn-primary">Delete my review</button></div>            
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
        value: event.target.rate.value,
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
            window.location.reload(true);
        } else if (response.status === 403) {
            console.log("У пользователя недостаточно прав!");
        } 
    } catch (error) {
        console.error(error);    
    }
})
