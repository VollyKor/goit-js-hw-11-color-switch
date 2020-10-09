const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let isActive = null;

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

refs.start.addEventListener('click', changeBgColor);
refs.stop.addEventListener('click', stopSwitchColor);

function changeColor(arrayOfColors) {
  const maxNumber = arrayOfColors.length - 1;

  let randomNumber = randomIntegerFromInterval(0, maxNumber);
  refs.body.style.backgroundColor = colors[randomNumber];
}

function changeBgColor() {
  if (isActive) {
    return;
  }
  isActive = true;
  const newColor = setInterval(changeColor, 1000, colors);
}

function randomIntegerFromInterval(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1) + min));
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function stopSwitchColor() {
  isActive = false;
  console.log('click');
  clearInterval(newColor);
}
