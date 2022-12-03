function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controlsInput: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  targetBox: document.querySelector('#boxes'),
};

refs.destroyBtn.addEventListener('click', destroyBoxes);
refs.createBtn.addEventListener('click', () => {
  refs.controlsInput.addEventListener('input', () => {
    return refs.controlsInput.value; 
  });

  createBoxes(refs.controlsInput.value);
});

function createBoxes(amount) {
  for (let i = 0, j = 30; i < amount; i += 1, j += 10) {
    const newBoxes = document.createElement('div');
    newBoxes.style.width = `${j}px`;
    newBoxes.style.height = `${j}px`;
    newBoxes.style.backgroundColor = getRandomHexColor();

    refs.targetBox.append(newBoxes);
  }
};

function destroyBoxes() {
  refs.targetBox.innerHTML = '';
};