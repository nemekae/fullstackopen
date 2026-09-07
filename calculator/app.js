let num1 = parseInt(prompt("Enter first number:"));

let num2 = parseInt(prompt("Enter second number:"));

let result = document.getElementById("sum-el");
result.textContent = "Sum: " + (num1 + num2);

const add = () => {
  let total = num1 + num2;
  result.textContent = "Sum: " + total;
};

const subtract = () => {
  let total = num1 - num2;
  result.textContent = "Sum: " + total;
};

const multiply = () => {
  let total = num1 * num2;
  result.textContent = "Sum: " + total;
};

const divide = () => {
  let total = num1 / num2;
  result.textContent = "Sum: " + total;
};
