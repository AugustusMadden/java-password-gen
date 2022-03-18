// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* 
~~~REQUIREMENTS~~~
Upon clicking the button, should be prompted for text defining the parameters of the generated password
  Length: 8 to 128 (textbox (accepting numerals only))
  Characters: lowercase, uppercase, numerals, special characters (checkbox input)

Create a system that generates an alert with the generated password

    System mainfests subjects from each selected category at least once
       (Have it iterate at least once through each selected tag)(for loop to iterate between each one)
    Generates specified number of characters, alternating between each set at random (array within an array?) 
    Selection and position of the contents should be completely unique for each category (populate new array with .push(retrievedValue), draw from that set of arrays in a specified order?)
    Final output should be an alert()
*/

var alphLower = "abcdefghijklmnopqrstuvwxyz"
var alphUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar= "?!@#$%^&*><+-="
var numerals = "1234567890"

var randomCharacter = alphLower[Math.floor(Math.random() * alphLower.length)]



function generatePassword() {
  var userChoice = window.prompt("Enter a number between 8 and 128.")
  
  if (isNaN(userChoice)){
    window.alert("Please choose a number between 8 and 128.")
    return;
  }

  if (userChoice < 8 || userChoice > 128){
    window.alert("Please choose a number between 8 and 128.")
    return;
  }

  var upperChoice = window.confirm("Would you like your password to include uppercase letters?")

  var lowerChoice = window.confirm("Would you like your password to include lowercase letters?")

  var numberChoice = window.confirm("Would you like your password to include numerals?")

  var specialChoice = window.confirm("Would you like your password to include special characters?")

  if (upperChoice == false && lowerChoice == false && numberChoice == false && specialChoice == false){
    window.alert("Please choose at least one type of character.")
    return;
  }

  var passwordBase = []
  var passwordTrue = []

  if (upperChoice==true) {
    passwordBase = passwordBase.concat(alphUpper.split(""));
    passwordTrue.push(alphUpper[Math.floor(Math.random() * alphUpper.length)]);
  }
  if (lowerChoice==true) {
    passwordBase = passwordBase.concat(alphLower.split(""));
    passwordTrue.push(alphLower[Math.floor(Math.random() * alphLower.length)]);
  }
  if (numberChoice==true) {
    passwordBase = passwordBase.concat(numerals.split(""));
    passwordTrue.push(numerals[Math.floor(Math.random() * numerals.length)]);
  }
  if (specialChoice==true) {
    passwordBase = passwordBase.concat(specialChar.split(""));
    passwordTrue.push(specialChar[Math.floor(Math.random() * specialChar.length)]);
  }
  
  for (var i=0; i < userChoice; i++){
    
    var randomCharacter = passwordBase[Math.floor(Math.random() * passwordBase.length)]

    passwordTrue.push(randomCharacter);

  }

  return passwordTrue.join("") ;
  
}

