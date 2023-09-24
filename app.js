const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerHTML = "0";
        break;
      case "=":
        display.innerHTML = eval(display.innerHTML);
        break;
      case "%":
        display.innerHTML = eval(display.innerHTML + "/100");
        break;
        case "+/-":
            display.innerHTML = "-"
            break;
      default:
        if (display.innerHTML === "0" && e.target.innerText !== ".") {
          display.innerHTML = e.target.innerText;
        } else {
          display.innerHTML += e.target.innerText;
        }
    }
  });
});
