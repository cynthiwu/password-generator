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



const symbols = "!@#$%^&*(){}[]=<>/,.";

const functionObject = {
  lower: function getLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  },
  upper: function getUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },
  number: function getNumeric() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  },
  special: function getSpecial() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
}

console.log(functionObject.lower());
console.log(functionObject.upper());
console.log(functionObject.number());
console.log(functionObject.special());


function generatePassword() {
  let passwordLength = +prompt("How many characters do you want your password to include? Please enter a number.");

  let lowerCase = confirm("Click OK to confirm that you would like lowercase letters included in your password.");

  let upperCase = confirm("Click OK to confirm that you would like uppercase letters included in your password.");

  let numeric = confirm("Click OK to confirm that you would like numbers included in your password.");

  let specialChar = confirm("Click OK to confirm that you would like special characters included in your password.");


  console.log(passwordLength);
  console.log(typeof passwordLength);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numeric);
  console.log(specialChar);

 
  var newPassword = "";
  var charCount = 0;

  while (charCount < passwordLength) {

    if (lowerCase) {
      var assignedLower = functionObject.lower();
      newPassword += assignedLower;
      charCount++;
    }

    if (upperCase) {
      var assignedUpper = functionObject.upper();
      newPassword += assignedUpper;
      charCount++;
    }
  
    if (numeric) {
      var assignedNumeric = functionObject.number();
      newPassword += assignedNumeric;
      charCount++;
    }
  
    if (specialChar) {
      var assignedSpecial = functionObject.special();
      newPassword += assignedSpecial;
      charCount++;
    }

    else {
      newPassword += "";
    }


  }
  
  return newPassword.slice(0, passwordLength);

}
  


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
