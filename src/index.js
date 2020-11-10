const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let isActive = false;
let setNewColor = null;

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

refs.start.addEventListener('click', startSwitchBgColor);
refs.stop.addEventListener('click', stopSwitchBgColor);

function startSwitchBgColor() {
  if (isActive) {
    return;
  }
  isActive = true;
  refs.start.setAttribute('disabled', '')
  setNewColor = setInterval(changeColor, 1000, colors);
}

function stopSwitchBgColor() {
  isActive = false;
  refs.start.removeAttribute('disabled')
  clearInterval(setNewColor);
}

function changeColor(arrayOfColors) {
  const maxNumber = arrayOfColors.length - 1;

  let randomNumber = randomIntegerFromInterval(0, maxNumber);
  refs.body.style.backgroundColor = colors[randomNumber];
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}