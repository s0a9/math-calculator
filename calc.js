
let calculation = '';

function updateCalculation(value) {
  calculation += value;
  printResult(calculation); 
  localStorage.setItem('calc', calculation);
}
function printResult(value) {
  const result = document.querySelector('.display');
  result.innerText = value ; 
}