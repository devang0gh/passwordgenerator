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
    
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let numeric = '0123456789'.split('')
    let specialChar = '!@#$&*?^%=+-._'.split('')

            
    var lengthChoice
    
    do{
       lengthChoice = prompt('How many characters in your password? (Choose a number between 8-128)');
     } while(lengthChoice < 8 || lengthChoice >128) 
    

    var upperCasePrompt 
    var lowerCasePrompt
    var numericPrompt 
    var specialCharPrompt 

    do{
      upperCasePrompt = confirm('Do you want Uppercase Characters? (Click "Ok" for Yes or "Cancel" for No)') 
      lowerCasePrompt = confirm('Do you want Lowercase Characters? (Click "Ok" for Yes or "Cancel" for No)')
      numericPrompt = confirm('Do you want Numeric Characters? (Click "Ok" for Yes or "Cancel" for No)')
      specialCharPrompt = confirm('Do you want Special Characters? (Click "Ok" for Yes or "Cancel" for No)')
    } while(upperCasePrompt == false && lowerCasePrompt == false && numericPrompt == false && specialCharPrompt == false ) 
    


      var placeHolder = '';
      var totalArray = [];

    if (upperCasePrompt == true) {
      totalArray.push(...upperCase) 
    }
    if (lowerCasePrompt == true) {
      totalArray.push(...lowerCase) 
    }

    if (numericPrompt == true) {
      totalArray.push(...numeric) 
    }
    if (specialCharPrompt == true) {
      totalArray.push(...specialChar) 
    }


      for ( var i= 0; i< lengthChoice; i++) { 
        const temp = (Math.floor(Math.random() * totalArray.length))
        placeHolder += totalArray[temp]
        
      }
      return placeHolder;
 

}