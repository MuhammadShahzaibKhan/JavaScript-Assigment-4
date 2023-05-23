// To get the sign up details from a user using Javascript.

var fName = document.getElementById("firstName");
var sName = document.getElementById("surName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var date = document.getElementById("date");
var month = document.getElementById("month");
var year = document.getElementById("year");

function register() {
  console.log("User first name = " + fName.value);
  console.log("User last name = " + sName.value);
  console.log("User email = " + email.value);
  console.log("User password = " + password.value);
  console.log("User date of birth = " + date.value + " " + month.value + " " + year.value);
}
