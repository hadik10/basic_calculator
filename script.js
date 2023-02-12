const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", function () {
    if (button.classList.contains("number")) {
      display.value += button.textContent;
    } else if (button.classList.contains("operator")) {
      if (button.textContent === "C") {
        display.value = "";
      } else if (button.textContent === "=") {
        display.value = eval(display.value);
      } else {
        display.value += button.textContent;
      }
    }
  });
}
