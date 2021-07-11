// Get the string from the page.
function getValue() {
   // Add invisible to class.
   document.getElementById("alert").classList.add("invisible");

   // Variables
   let userSting = document.getElementById("userSting").value;

   // Check if string is a palindrome
   let returnObj = checkForPalindrome(userSting);

   // Display
   displayString(returnObj);
}

// Compare strings to see if they are a match.
function checkForPalindrome(userSting) {
   // Variables
   let revString = [];
   let returnObj = [];

   // Convert string to lower case.
   userSting = userSting.toLowerCase();

   // Remove whitespace and special characters.
   let regex = /[^a-z0-9]/gi;
   userSting = userSting.replace(regex, "");

   // Reverse string
   // Reverse a string using a for loop
   for (let index = userSting.length - 1; index >= 0; index--) {
      revString += userSting[index];
   }

   // Check if its a match.
   if (revString == userSting) {
      returnObj.message = "Well done! You entered a palindrome!";
   } else {
      returnObj.message = "Sorry! You did not enter a palindrome!";
   }

   returnObj.reversed = revString;

   return returnObj;
}

// Display the message with reversed string.
function displayString(returnObj) {
   // Write to the page
   document.getElementById("alertHeader").innerHTML = returnObj.message;
   document.getElementById("message").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;

   // Show the alert box
   document.getElementById("alert").classList.remove("invisible");
}