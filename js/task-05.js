const inputRef = document.querySelector('#name-input');
const textOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
    if (inputRef.value !== '') {
      return textOutputRef.textContent = inputRef.value;
    }

    return textOutputRef.textContent = 'Anonymous';
});