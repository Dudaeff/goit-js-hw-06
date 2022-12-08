const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('input', doValidate);

function doValidate() {
    return inputRef.addEventListener('blur', () => {
        if (inputRef.dataset.length > inputRef.value.length) {
            inputRef.classList.add('invalid')
        } else {
            inputRef.classList.replace('invalid','valid' )
        }
        return inputRef;
    });
};