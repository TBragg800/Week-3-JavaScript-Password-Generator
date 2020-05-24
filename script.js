//generate variables 
//prompt for start
//start should begin with generate password button
var Start;
var Upper;
UpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Lower;
LowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Num;
NumArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var Char;
CharArray = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", "'", ",", " < ", ".", " > ", "/", " ? "];
var UserInput;


// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  
  Start = prompt("Please start by selecting a numerical length for your new password between 8 and 128 characters.");
  
    if (!Start) {

      alert("You must enter a value between 8 and 128 into this field!");
      return;

  } else if  ( Start < 8 || Start > 128){

      alert("You must enter a value between 8 and 128 into this field!");
      return;

  } else {
  
  Upper = confirm("Do you want to include uppercase letters?");
  Lower = confirm("Do you want to include lowercase letters?");
  Num = confirm("Do you want to include numbers?");
  Char = confirm("Do you want to include characters?");
  }

  //create all combinations of userInput
  if (Upper && Lower && Num && Char) {
    UserInput = UpperArray.concat(LowerArray, NumArray, CharArray);
  } else 
  if (Upper && Num && Char) {
    UserInput = UpperArray.concat(NumArray, CharArray);
  } else 
  if (Upper && Lower && Char) {
    UserInput = UpperArray.concat(LowerArray, CharArray);
  } else
  if (Upper && Lower && Num) {
    UserInput = UpperArray.concat(LowerArray, NumArray);
  } else 
  if (Lower && Num && Char) {
    UserInput = LowerArray.concat(NumArray, CharArray);
  } else 
  if (Upper && Lower) {
    UserInput = UpperArray.concat(LowerArray);
  } else 
  if (Upper && Num) {
    UserInput = UpperArray.concat(NumArray);
  } else 
  if (Upper && Char) {
    UserInput = UpperArray.concat(CharArray);
  } else
  if (Lower && Num) {
    UserInput = LowerArray.concat(NumArray);
  } else
  if (Lower && Char) {
    UserInput = LowerArray.concat(CharArray);
  } else 
  if (Num && Char) {
    UserInput = NumArray.concat(CharArray);
  } else 
  if (Upper) {
    UserInput = UpperArray;
  } else
  if (Lower) {
    UserInput = LowerArray;
  } else 
  if (Num) {
    UserInput = NumArray;
  } else
  if (Char) {
    UserInput = CharArray;
  } else {
    alert("You must hit ok to at least 1 option in order to generate your password!");
    return;
  }
  // console.log(UserInput);

  for ( i = 0; i < Start; i++) {
    var totalChoices = UserInput[Math.floor(Math.random() * UserInput.length)];
    console.log(totalChoices);
  }
  
  
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

