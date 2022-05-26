// Import stylesheets
import './style.css';

const sumInput = document.getElementById('sum-input');
const summand1 = document.getElementById('summand1');
const summand2 = document.getElementById('summand2');
const result = document.getElementById('result');

window.easyClicked = function () {
  console.log('Leichte Aufgabe stellen.');
  sumInput.value = null;
  result.innerText = null;
  window.setQuestion(false);
};

window.hardClicked = function () {
  console.log('Schwere Aufgabe stellen.');
  sumInput.value = null;
  result.innerText = null;
  window.setQuestion(true);
};

window.getSummand = function (isHard) {
  if (isHard) {
    return Math.round(Math.random() * 10);
  } else {
    return Math.round(Math.random() * 5);
  }
};

window.setQuestion = function (isHard) {
  window.summand1 = window.getSummand(isHard);
  window.summand2 = window.getSummand(isHard);
  summand1.innerText = window.summand1;
  summand2.innerText = window.summand2;
};

window.solve = function (event, el) {
  if (event.keyCode == 13) {
    if (window.summand1 + window.summand2 == el.value) {
      result.innerText = 'Richtig';
    } else {
      result.innerText = 'Falsch';
    }
  } else {
    if (sumInput.value > 20) {
      sumInput.value = 20;
    }
  }
};
