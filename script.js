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
    Arrays for each category
      [0-9]
      [a-z]
      [A-Z]
      [Special Characters?]
    System mainfests subjects from each selected category at least once
       (Have it iterate at least once through each selected tag)
    Generates specified number of characters, alternating between each set at random (array within an array?) 
    Selection and position of the contents should be completely unique for each category (populate new array, draw from that set of arrays in a specified order?)
    Final output should be an alert()
*/

var alphLower = "abcdefghijklmnopqrstuvwxyz"
var alphUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar= "?!@#$%^&*><+-="
var numerals = "1234567890"

var randomCharacter = alphabet[Math.floor(Math.random() * lowerCase.length)]

console.log(randomCharacter);