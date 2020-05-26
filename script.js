
//Global variables and arrays 
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


//This houses the variable and function call for initiating the password 
//generating process.
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);



//This is the primary function that controls the prompts, alerts and 
//confirms for processing user input.
function writePassword() {
  
//This is the initial prompt to obtain user desired password length along with
//an if else statements to handle improper user input.   
  Start = prompt("Please start by selecting a numerical length for your new password between 8 and 128 characters.");
  
    if (!Start) {

      alert("You must enter a value between 8 and 128 into this field!");
      return;

  } else if  ( Start < 8 || Start > 128){

      alert("You must enter a value between 8 and 128 into this field!");
      return;
//An else statement offering the user a chance to contour character type.
  } else {
  
  Upper = confirm("Do you want to include uppercase letters?");
  Lower = confirm("Do you want to include lowercase letters?");
  Num = confirm("Do you want to include numbers?");
  Char = confirm("Do you want to include characters?");
  }

  //This is a series of if else statements to account for all user input
  //combinations.
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
  
//This for loop allows the users input to loop through the concatenated
//strings in the character arrays for the user prompted amount of times 
//to generate the password. The password is then appended to the proper
//field by using the getElementById method.
  for (var i = 0; i < Start; i++) {
    totalChoices = UserInput[Math.floor(Math.random() * UserInput.length)];
    document.getElementById("password").append(totalChoices);
  }

}






