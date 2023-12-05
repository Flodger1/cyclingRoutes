const reviewForm = document.querySelector('.review__form');
const reviewsContainer = document.querySelector('.reviews__container');
const infoText = document.querySelector('.info__text')

console.log("Скрипт работает");
console.log(reviewForm);

reviewForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log("Event!!!");
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
            infoText.innerText = "Благодарим за ваш отзыв";
            setTimeout(() => {
                infoText.innerText = '';
            }, 1500)
        }        
    } catch (error) {
        console.error(error);        
    }
})