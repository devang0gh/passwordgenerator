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

 function generatePassword() {


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

    //attempted varibales, @array = (A..Z) better way??? symbols???
    let upperCase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let numeric = '0123456789'.split('')
    let specialChar = '!@#$&'.split('')
// 'abcdefghijklmnopqrstuvwxyz'.split('');


            //Present user series of prompts/confirms
    var lengthChoice
    do{
       lengthChoice = prompt('How many characters in your password? (Choose a number between 8-128)');
     } while(lengthChoice < 8 || lengthChoice >128) // check while loop
    

    var upperCasePrompt 
    var lowerCasePrompt
    var numericPrompt 
    var specialCharPrompt 
    do{
      upperCasePrompt = confirm('Do you want Uppercase Characters? (Click "Ok" for Yes or "Cancel" for No)') //updated string for flow? add parentheses??
      lowerCasePrompt = confirm('Do you want Lowercase Characters? (Click "Ok" for Yes or "Cancel" for No)')
      numericPrompt = confirm ('Do you want Numeric Characters? (Click "Ok" for Yes or "Cancel" for No)')
      specialCharPrompt = confirm('Do you want Special Characters? (Click "Ok" for Yes or "Cancel" for No)')
    } while(upperCasePrompt == false && lowerCasePrompt == false && numericPrompt == false && specialCharPrompt == false ) 
    



    // function password(lengthChoice, characters) //fishing????
      var password = '';
      var placeHolder = '';

    // // console.log(password(12,char));

      for ( var i= 0; i< lengthChoice; i++) { //explain this increment laymans? I know it adds but
        placeHolder += (Math.floor(Math.random() * upperCasePrompt.lowercasePrompt.numericPrompt.specialCharPrompt.lengthChoice)); //Do I create a var for all characters or include all vars?
        // pwd += ????? (uppr,lower,num,spec,lenght?)
      }
      return placeHolder;
    


    // function writePassword() {
    //   var password = genratePassword();
    //   var passwordOutput = document.querySelector('#password');
    //   passwordOutput.value = password;
    // } fishing????????????????


   
    // var lowerCasePrompt = prompt('Do you want lower case characters?')
    // var numericPrompt = prompt('Do you want numeric characters?')
    // var specialCharPrompt = prompt('Do you want special characters?')   

    // console.log

// WHEN prompted for password criteria
// // THEN I select which criteria to include in the password
   

     


    


// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters

// // WHEN asked for character types to include in the password
// // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// // WHEN I answer each prompt
// // THEN my input should be validated and at least one character type should be selected

// // WHEN all prompts are answered
// // THEN a password is generated that matches the selected criteria

// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page

// generateBtn.addEventListener("click", writePassword(lengthChoice, upperCase, lowerCase, numeric, specialChar) //from line 14, ?????



  

// // isNan: value illegal number?


// // if (pasword 8>= && .128) {

// // }



// let characterTypes = [ 'lowercase', uppercase, numeric, special]
//   alert



//   "placeholder"

//   input type

//   function generate({
//     let ??? = document.getElementById(????).value
//   })


}