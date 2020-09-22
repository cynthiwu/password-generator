

// Special variable to house the special symbols. 

const symbols = "!@#$%^&*(){}[]=<>/,.";


// Organized the methods for obtaining random characters for easy reference. 

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


// Function for generating the password. 

function generatePassword() {

// Prompt to obtain the user's desired password lenth. Loop to ensure the user input is a valid number within a designation range (i.e., between 8 and 128) and not any other character. 

  var verified = false;

  while (verified === false) {
    var passwordLength = +prompt("How many characters do you want your password to include? Please enter a number between 8 and 128.").trim();

    if (passwordLength < 8 || passwordLength > 128) {
     alert("Invalid entry. Your password must contain between 8 and 128 characters.")
    }
    else if (isNaN(passwordLength) === true) {
      alert("Invalid entry. Your answer must be a number.")
    }
    else {
      verified = true;
    }

  }

  // Prompts to verify if user would like to include lowercase letters, uppercase letters, numbers, and special characters.

  var characterConfirm = false;

  while (characterConfirm === false) {
    var lowerCase = confirm("Click OK to confirm that you would like lowercase letters included in your password.");
    var upperCase = confirm("Click OK to confirm that you would like uppercase letters included in your password.");
    var numeric = confirm("Click OK to confirm that you would like numbers included in your password.");
    var specialChar = confirm("Click OK to confirm that you would like special characters included in your password.");

    if (lowerCase === false && upperCase === false && numeric === false || specialChar === false) {

      alert("You must confirm at least one character type to be included in your password");
    }
    else {
    characterConfirm = true;
    }
  }

  console.log(passwordLength);
  console.log(typeof passwordLength);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numeric);
  console.log(specialChar);

  // Setting a starting variable to store random characters and to determine whether or not we are meeting the user's desired character length.

  var newPassword = [];
  var charCount = 0;

  // Loop to add random characters to the newPassword variable if confirmed by the user.

  while (charCount < passwordLength) {
    console.log("Hello");

    if (lowerCase) {
      var assignedLower = functionObject.lower();
      newPassword.push(assignedLower);
      charCount++;
      if (charCount === passwordLength) {
        break;
      }
    }

    if (upperCase) {
      var assignedUpper = functionObject.upper();
      newPassword.push(assignedUpper);
      charCount++;
      if (charCount === passwordLength) {
        break;
      }
    }
  
    if (numeric) {
      var assignedNumeric = functionObject.number();
      newPassword.push(assignedNumeric);
      charCount++;
      if (charCount === passwordLength) {
        break;
      }
    }
  
    if (specialChar) {
      var assignedSpecial = functionObject.special();
      newPassword.push(assignedSpecial);
      charCount++;
      if (charCount === passwordLength) {
        break;
      }
    }
  }
  
  // Shuffling the characters using Fisher-Yates method

  for (let i = newPassword.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = newPassword[i];
    newPassword[i] = newPassword[j];
    newPassword[j] = temp;

  }
  
  console.log(newPassword);

  var newPass = newPassword.join("");

  return newPass; 
  
}

///////////////////////////////////////////////////////////////////////

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
