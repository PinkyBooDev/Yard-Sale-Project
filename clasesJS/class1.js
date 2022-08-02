const h1 = document.querySelector('h1');
const inputOne = document.getElementById('mainInput');
const inputTwo = document.getElementById('mainInput2');
const calculateButton = document.getElementById('calculateButton');
const pResult = document.getElementById('result');
const form = document.getElementById('form');

// form.addEventListener('submit', eventOnClick);

// function eventOnClick(event) {
//   console.log(event);
//   event.preventDefault();
//   let result = parseInt(inputOne.value) + parseInt(inputTwo.value);
//   pResult.innerHTML = 'Resultado: ' + result;
// };

calculateButton.addEventListener('click', eventOnClick);
calculateButton.setAttribute('type', 'button');

function eventOnClick(event) {
  let result = parseInt(inputOne.value) + parseInt(inputTwo.value);
  pResult.innerHTML = 'Resultado: ' + result;
};