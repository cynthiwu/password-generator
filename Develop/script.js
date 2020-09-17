///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

// Change these to an object of Arrays maybe?

const special = "!@#$%^&*(){}[]=<>/,.";
let charCount = 0;

function generatePassword() {
  let passwordLength = prompt("How many characters do you want your password to include? Please enter a number.");

  let lowerCase = confirm("Click OK to confirm that you would like lowercase letters included in your password.");

  let upperCase = confirm("Click OK to confirm that you would like uppercase letters included in your password.");

  let numeric = confirm("Click OK to confirm that you would like numbers included in your password.");

  let special = confirm("Click OK to confirm that you would like special characters included in your password.");

  console.log(passwordLength);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numeric);
  console.log(special);

  for(var i=0; i <= passwordLength; i++);
  
  if (lowerCase) {

    function getLowerCase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      console.log(lowerString);
  }

  if (upperCase) {

    function getUpperCase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
  }
  
  if (numeric) {

    function getNumeric() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
  }

  if (special) {

    function getSpecial() {
      return String.fromCharCode(Math.floor(Math.random() * special.length));
    }
  }


    let newPassword = "";
   
  }

}

  // return newpassword;



///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  
//////////////////////////////////////////////////////////////////////
