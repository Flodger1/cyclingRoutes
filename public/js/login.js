const loginForm = document.querySelector(".login__form");
const loginText = document.querySelector(".login__text");

console.log(loginForm);

loginForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const { email, password } = event.target;

  const formData = {
    email: email.value,
    password: password.value,
  };

  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      const result = await response.json();

      if (result === false) {
        console.log("Неверные данные");
        event.target.email.value = "";
        event.target.password.value = "";
        loginText.innerText = "Неверный email или пароль";
        setTimeout(() => {
          loginText.textContent = "";
        }, 3000);
      } else {
        console.log("Все верно");
        event.target.email.value = "";
        event.target.password.value = "";
        loginText.innerText = "Вход выполнен успешно";
        setTimeout(() => {
          window.location.href = "http://localhost:3000/";
        }, 1000);
      }
    }
  } catch (error) {
    console.log(error);
  }
});
