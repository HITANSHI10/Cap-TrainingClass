const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!value) return;

    if (value === "C") {
      clearDisplay();
    } else if (value === "DEL") {
      deleteLast();
    } else if (value === "=") {
      calculate();
    } else {
      appendValue(value);
    }
  });
});

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// function calculate() {
//   try {
//     display.value = String(eval(display.value));
//   } catch {
//     display.value = "Error";
//   }
// }

function calculate() {
  try {
    const expression = display.value;

    // Allow only numbers and operators
    if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
      display.value = "Error";
      return;
    }

    const result = Function("return " + expression)();
    display.value = result;
  } catch {
    display.value = "Error";
  }
}