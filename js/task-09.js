function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  widget: document.querySelector('.widget'),
  colorTextName: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
};

refs.changeColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  refs.colorTextName.textContent = randomColor;
  refs.changeColorBtn.style.backgroundColor = randomColor; 
});
