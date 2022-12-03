function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  widget: document.querySelector('.widget'),
  colorTextName: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
};

refs.changeColorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.colorTextName.textContent = getRandomHexColor();

  // refs.changeColorBtn.style.backgroundColor = getRandomHexColor(); //<-- якщо розкоментувати то кнопка теж буде змінювати колір =)  
});
