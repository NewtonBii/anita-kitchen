function validateEmail() {


var email = document.getElementById("mail");
email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("You have entered an invalid email address!");
  } else {
    alert("Congratulations!")
  }
});
}
