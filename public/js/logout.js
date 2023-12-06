const logoutLink = document.querySelector('.logout__link');


//выйти из профиля юзера на стартовую страницу
logoutLink?.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('api/users/logout');
        console.log(response);
        if (response.ok) {
            const result = await response.json();
            if (result.msg === 'Success') {
                window.location.href = 'http://localhost:3000/'; 
            }                
        }        
    } catch (error) {
        console.error(error)
    }  
});