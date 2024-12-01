// script.js
let display = document.getElementById("display");

// Append value to the display
function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

// Clear the display
function clearDisplay() {
  display.innerText = "0";
}

// Calculate the result
function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}
