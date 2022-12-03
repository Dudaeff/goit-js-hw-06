const rangeControlRef = document.querySelector('#font-size-control');
const targetTextRef = document.querySelector('#text');

rangeControlRef.addEventListener('input', changeTextFontSize);

function changeTextFontSize(evt) {
    targetTextRef.style.fontSize = `${evt.currentTarget.value}px`;
};