const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('input', makeValidation);

function makeValidation() {
    return inputRef.addEventListener('blur', () => {
        if (inputRef.dataset.length > inputRef.value.length) {
            inputRef.classList.add('invalid')
        } else {
            inputRef.classList.remove('invalid')
            inputRef.classList.add('valid')
        }
        return inputRef;
    });
};