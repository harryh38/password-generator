// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  var characterArray = []

var acceptLower = confirm("Would you like lower case letters?") 
if (acceptLower){
  characterArray = characterArray.concat(lowerCasedCharacters)
}
if (confirm("Would you like upper case letters?")){
  characterArray = characterArray.concat(upperCasedCharacters)
}
if (confirm("Would you like special characters?")){
  characterArray = characterArray.concat(specialCharacters)
}
if (confirm("Would you like numbers?")){
  characterArray = characterArray.concat(numericCharacters)
}
if(characterArray.length===0){
  alert("Must select at least one charcter type")
  return;
}
return characterArray
}

// Function for getting a random element from an array
function getRandom(arr) {
  getPasswordOptions()    
  var password=""
  var passwordLength = parseInt(window.prompt("Enter desired password"))
  console.log(passwordLength)
for (var i=0; i<10;i++) {
  //Pick one character from arr
  var index = Math.floor (Math.random()*arr.length)
  var character = arr[index]
  password+=character
}
return password;
} 
 //Function to generate password with user input
function generatePassword() {
  var characterArray = getPasswordOptions()
  var myPassword = getRandom(characterArray)
  console.log(myPassword);
return myPassword;
} 

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);