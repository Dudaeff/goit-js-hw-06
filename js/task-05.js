const inputRef = document.querySelector('#name-input');
const textOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
    return textOutputRef.textContent = inputRef.value;
});