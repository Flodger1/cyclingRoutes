const reviewForm = document.querySelector('.review__form');
const reviewsContainer = document.querySelector('.reviews__container');
const infoText = document.querySelector('.info__text');
const ratingForm = document.querySelector('.rating__form');

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
            `;
            console.log(div);
            reviewsContainer.prepend(div);
            event.target.text.value = "";
            infoText.innerText = "Благодарим за ваш отзыв!";
            setTimeout(() => {
                infoText.innerText = '';
            }, 1500)
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
console.log(ratingForm)
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
        }    
    } catch (error) {
        console.error(error);        
    }
})
