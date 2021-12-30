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

//Line 14 and above untouched given code


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

    let length = 8-128???? //attempted varibales, @array = (A..Z) better way??? symbols???
    let upperCase = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,]
    let lowerCase = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, v,]
    let numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
    let special = []



            //Present user series of prompts/confirms
    var lengthChoice = prompt('Please choose a length between 8-128 characters.')
    var upperCase = prompt('Do you want uppercase characters?')
    var lowerCase = prompt('Do you want lower case characters?')
    var numeric = prompt('Do you want numeric characters?')
    var specialChar = prompt('Do you want special characters?')   

    console.log

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
            //if  else if else
    document.getElementById() .value {

    }

    if(lengthChoice = 8>= && > 128) {
        
    else {
        
    }
        


// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

generateBtn.addEventListener("click", writePassword(lengthChoice, upperCase, lowerCase, numeric, specialChar) //from line 14, ?????



  

// isNan: value illegal number?


// if (pasword 8>= && .128) {

// }



let characterTypes = [ 'lowercase', uppercase, numeric, special]
  alert



  "placeholder"

  input type

  function generate({
    let ??? = document.getElementById(????).value
  })