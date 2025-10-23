let display = document.getElementById("display");

// Append value to display
function appendValue(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result with error handling
function calculateResult() {
  try {
    // Use eval safely
    let result = eval(display.value);
    if (!isFinite(result)) {
      throw new Error("Math Error");
    }
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// Allow keyboard input
document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
