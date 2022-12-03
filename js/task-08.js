const formRef = document.querySelector('.login-form')

formRef.addEventListener('submit', (evt) => { 
    evt.preventDefault();

    const { email, password } = formRef.elements;

    if ((email.value && password.value) === '') {
        alert('You must fill in all fields')
    } else {
        const result = {
            email: email.value,
            password: password.value,
        }
        console.log(result);
        formRef.reset();
    }
});