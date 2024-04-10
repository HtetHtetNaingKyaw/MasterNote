const submitBtn = document.querySelector(".submit");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("pw-input");
const confirmInput = document.getElementById("conpw-input");

const userData = {};

submitBtn.addEventListener("click", (e) => {
  //prevent origin
  e.preventDefault();

  const userName = nameInput.value;
  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;
  const userConfirmPassword = confirmInput.value;

  if (
    userName === "" ||
    userEmail === "" ||
    userPassword === "" ||
    userConfirmPassword === ""
  ) {
    alert("All field are required!");
  } else if (userPassword !== userConfirmPassword) {
    alert("Passwords don't match");
  } else if (userPassword < 4) {
    alert("Passwored is not strong");
  } else {
    userData.userName = userName;
    userData.email = userEmail;
    userData.password = userPassword;
    userData.confirmPassword = userConfirmPassword;
    //json data
    const userJson = JSON.stringify(userData);
    console.log(userData);
    localStorage.setItem("UserInfo", userJson);
    const userObj = JSON.parse(userJson);
    console.log(userObj);

    window.location.href = "../index.html";
  }
});
