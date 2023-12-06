const registerForm = document.querySelector(".registration__form");
const registrationText = document.querySelector(".registration__text");

registerForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("works");

  const { login, email, password } = event.target;
  console.log();

  const formData = {
    userName: login.value,
    email: email.value,
    password: password.value,
  };

  try {
    const response = await fetch("/api/users/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      const result = await response.json();
      event.target.login.value = "";
      event.target.email.value = "";
      event.target.password.value = "";
      registrationText.innerText = "Пользователь успешно зарегистрирован";
        setTimeout(() => {
          window.location.href = 'http://localhost:3000/';
        }, 1500);
    } else {
      registrationText.innerText = "Пользователь с таким email уже существует";
      setTimeout(() => {
        registrationText.textContent = "";
      }, 3000);
    }
  } catch (error) {
    console.log(error);
  }
});
