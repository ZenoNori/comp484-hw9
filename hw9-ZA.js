// Set 1

// Exercise 1

var a = 3, b = 5, c = 10, d = 2, e = 8, f = 4;
var finalResult;
finalResult = a + b * (c / d) - (e - f);
console.log(finalResult);

// Exercise 2

var projectIdentifier;
projectIdentifier = "COMP484";

// Attempt to reassign value
ProjectIdentifier = "JS_Advanced";

console.log(projectIdentifier); // When running, the result still ends with "COMP484"

/* This is due to the fact that JavaScript is case sensitive. The variable was named, "projectIdentifier",
in camel case, however, we tried to reassign the variable with,  "ProjectIdentifier", which isn't the same as our
initial variable. This is why when you run "console.log(projectIdentifier", the result was still, "COMP484". */

// Exercise 3

var courseDescription;
courseDescription = "The course is \"interactive\" and involves 'scripting' logic."
console.log(courseDescription);

// Exercise 4

var errorMessage;
errorMessage = 'An internal server error occurred: \"Access Denied\".'
console.log(errorMessage);

//Exercise 5

var valueA = 10, valueB = "4";
var resultSubtraction = valueA - valueB;
var resultMultiplication = valueA * valueB;

console.log(resultSubtraction);
console.log(typeof resultSubtraction); // Value type is shown as "number"

console.log(resultMultiplication);
console.log(typeof resultMultiplication); // Value type is shown as "number"



// Set 2

// Exercise 6

var unassignedVar;
var explicitNull = null;

console.log(unassignedVar);
console.log(typeof unassignedVar); // Value type is shown as "undefined"

console.log(explicitNull);
console.log(typeof explicitNull); // Value type is shown as "object"

/* The "typeof" operator returns "object" for null because the 
variable "explicitNull" was assigned the value of "null", which
allowed it to be read as an object, unlike "unassignedVar" which 
had no value assigned to it, so it was read as undefined */

// Exercise 7

var isBlocking = true;
console.log(typeof isBlocking);

isBlocking = "true";
console.log(typeof isBlocking);

// Exercise 8

//var 1a; - Variable name cannot start with a number
//var a b; - Variable names cannot contain spaces
//var a@b; - Variable names cannot include special symbols like '@' (only $ and _ are allowed)

// Exercise 9

var counterValue = 50;
counterValue /= 5;
counterValue -= 3;
console.log(counterValue);

// Exercise 10

var x = 10;
var y_post = x++;

console.log(x);
console.log(y_post);

x = 10;
var z_pre = ++x;

console.log(z_pre);
console.log(x);

/* When placing the unary operator after the variable, the original value
of the variable is used in the expression and then it is incremented afterwards.
however, when the unary operator is placed before the variable, the value of
the variable is incremented immediately, and the updated value is utilized in the expression */



// Set 3

// Exercise 11

var testNumber = 0;
var testBoolean = false;

if (testNumber == testBoolean) {
  console.log(testNumber == testBoolean);
}

/* "==" allows type coercion, ehich means that JavaScripts converts the
values to a common type before comparing, and in this case, "false" converts
to 0, so the comparison becomes 0 == 0, which results in "true" */

// Exercise 12

var versionA = 10.0;
var versionB = "10.0";

if (versionA !== versionB) {
  console.log("They are not strictly equal.");
} else {
  console.log("They are strictly equal.");
}

// Exercise 13

var isLoggedIn = true;
var isSubscriber = true;
var isTrialExpired = false;

if ((isLoggedIn == true && isSubscriber == true) || (isLoggedIn == true && isTrialExpired == false)) {
  console.log("Access has been granted.");
} else {
  console.log("Access has been denied.");
}

//Exercise 14

var conditionA = true;
var conditionB = true;

if ((conditionA == true || conditionB == true) && (conditionA != conditionB)) {
  console.log("XOR Success");
} else {
  console.log("XOR Fail");
}

//Exercise 15

var scriptLoadType = "deferred";
var loadStatus;
var loadStatusTernary;

if (scriptLoadType == "deferred") {
  loadStatus = "Non-blocking"
} else {
  loadStatus = "Potentially Blocking"
}
console.log(loadStatus);

scriptLoadType == "deferred" ? loadStatusTernary = "Non-blocking" : loadStatusTernary = "Potentiall Blocking";
console.log(loadStatusTernary);



// Set 4

// Exercise 16

function calculateRenderTime() {
  // body
}

/* Calculating the time taken to
parse HTML and execute JavaScript */

// Exercise 17

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();
console.log("Today is " + month + "/" + day + "/" + year);

// Exercise 18

var val1 = 20;
var val2 = "5";
var sumResult = val1 + val2;
var diffResult = val1 - val2;

console.log(sumResult);
console.log(diffResult);

/* 
In JavaScript, the '+' operator has dual behavior:
- If either operand is a string, '+' performs **string concatenation** instead of numeric addition
  Here, val1 (20) is converted to a string and concatenated with val2 ("5"), resulting in "205"

Other arithmetic operators (like '-', '*', '/', etc.) always attempt numeric conversion
- The '-' operator forces both operands to be treated as numbers
  "5" is converted to the number 5, so 20 - 5 = 15
*/

// Exercise 19

var dataInput = 484;

if (typeof dataInput === "number") {
  console.log("Input is numeric");
} else {
  dataInput = true;
  console.log(typeof dataInput)
}

// Exercise 20

/* If you place this script inside the <head> of an HTML document
without using the 'defer' or 'async' attributes, it will run 
before the browser has finished loading and parsing the <body>.
This produces the error, "Cannot set property 'innerHTML' of null". */

document.body.innerHTML = "<h1>Interactive Layer Loaded<h1>"