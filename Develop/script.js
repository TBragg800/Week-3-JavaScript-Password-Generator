//generate variables 
//prompt for start
//start should begin with generate password button
var Start;
var Upper;
var Lower;
var Num;
var Char;
//Start = prompt("Please start by selecting a numerical length for your new password between 8 and 128 characters.")

// document.querySelector(generateBtn).addEventListener('click', promptMe);
// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  Start = prompt("Please start by selecting a numerical length for your new password between 8 and 128 characters.");
  Upper = confirm("Do you want to include uppercase letters?");
  Lower = confirm("Do you want to include lowercase letters?");
  Num = confirm("Do you want to include numbers?");
  Char = confirm("Do you want to include characters?");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

