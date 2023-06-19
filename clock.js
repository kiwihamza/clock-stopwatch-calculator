// HTML element
var clockDisplay = document.getElementById("clock");

// Start the clock
function startClock() {
  setInterval(updateClock, 1000); // Update every 1 second
}

// Update the clock display
function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  // Add leading zeros if necessary
  hours = padNumber(hours, 2);
  minutes = padNumber(minutes, 2);
  seconds = padNumber(seconds, 2);

  var timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
  clockDisplay.textContent = timeString;
}

// Helper function to add leading zeros
function padNumber(num, length) {
  var numString = num.toString();
  while (numString.length < length) {
    numString = "0" + numString;
  }
  return numString;
}

// Start the clock when the page loads
window.onload = startClock;












// HTML elements
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");
var display = document.getElementById("display");

// Stopwatch variables
var startTime, endTime, elapsedTime, timerInterval;

// Event listeners
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

// Start the stopwatch
function start() {
  startTime = new Date();
  timerInterval = setInterval(updateDisplay, 10); // Update display every 10 milliseconds
}

// Stop the stopwatch
function stop() {
  endTime = new Date();
  clearInterval(timerInterval);
}

// Reset the stopwatch
function reset() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00:000";
}

// Update the stopwatch display
function updateDisplay() {
  elapsedTime = new Date() - startTime;
  var milliseconds = Math.floor(elapsedTime % 1000);
  var seconds = Math.floor(elapsedTime / 1000) % 60;
  var minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
  var hours = Math.floor(elapsedTime / (1000 * 60 * 60)) % 24;

  // Add leading zeros if necessary
  milliseconds = padNumber(milliseconds, 3);
  seconds = padNumber(seconds, 2);
  minutes = padNumber(minutes, 2);
  hours = padNumber(hours, 2);

  display.textContent = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}

// Helper function to add leading zeros
function padNumber(num, length) {
  var numString = num.toString();
  while (numString.length < length) {
    numString = "0" + numString;
  }
  return numString;
}








// HTML element
var resultInput = document.getElementById("result");

// Clear the result input
function clearResult() {
  resultInput.value = "";
}

// Append a number to the result input
function appendNumber(number) {
  resultInput.value += number;
}

// Append an operator to the result input
function appendOperator(operator) {
  resultInput.value += operator;
}

// Calculate the result
function calculateResult() {
  try {
    var result = eval(resultInput.value);
    resultInput.value = result;
  } catch (error) {
    resultInput.value = "Error";
  }
}



// problems
// 1 check if input variable is a number or not
function checkNumber(input) {
  if (typeof input === 'number' && !isNaN(input)) {
    console.log('The input is a valid number.');
  } else {
    console.log('The input is not a number.');
  }
}

// Example usage
checkNumber(42);        // The input is a valid number.
checkNumber('Hello');   // The input is not a number.
checkNumber('123');     // The input is not a number.
checkNumber(NaN);       // The input is not a number.


// 2  find the large of two numbers make a function takes two parameters (print the greater number
function printGreaterNumber(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is greater.");
  } else if (num2 > num1) {
    console.log(num2 + " is greater.");
  } else {
    console.log("Both numbers are equal.");
  }
}

// Example usage
printGreaterNumber(5, 10);    // 10 is greater.
printGreaterNumber(20, 5);    // 20 is greater.
printGreaterNumber(7, 7);     // Both numbers are equal.



// 3 write a function to print even numbers in given array of 20
function printEvenNumbers(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

// Example usage
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
printEvenNumbers(numbers);



// 4 write a function to get current date
function getCurrentDate() {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();

  var formattedDate = year + "-" + addLeadingZero(month) + "-" + addLeadingZero(day);
  return formattedDate;
}

function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

// Example usage
var currentDate = getCurrentDate();
console.log(currentDate);



// 5 write a function to get current date and use slash
function getCurrentDate() {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();

  var formattedDate = addLeadingZero(month) + "/" + addLeadingZero(day) + "/" + year;
  return formattedDate;
}

function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

// Example usage
var currentDate = getCurrentDate();
console.log(currentDate);

