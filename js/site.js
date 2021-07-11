// Get the string from the page.
function getValue() {
   // Add invisible to class.
   document.getElementById("alert").classList.add("invisible");

   // Variables
   let userSting = document.getElementById("userSting").value;

   //  Make lower case.
   userSting = userSting.toLowerCase();

   // Remove whitespace
   userSting = userSting.replace(/\s/g, "");

   let revString = reverseString(userSting);

   // Call compareString
   let match = compareStrings(userSting, revString);

   if (match) {
      // Call displayString.
      displayString(revString);
   } else {
      alert('This is not a palindrome. Try Again!');
   }
}

// Reverse the string.
function reverseString(userSting) {
   let revString = [];

   // Reverse a string using a for loop
   for (let index = userSting.length - 1; index >= 0; index--) {
      revString += userSting[index];
   }

   return revString;
}

// Compare strings to see if they are a match.
function compareStrings(userSting, revString) {
   if (userSting == revString) {
      return true;
   } else {
      return false;
   }
}

// Display the message with reversed string.
function displayString(revString) {
   // Write to the page
   document.getElementById("message").innerHTML = `Your string reversed is: ${revString}`;

   // Show the alert box
   document.getElementById("alert").classList.remove("invisible");
}