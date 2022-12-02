const refs = {
    counter: document.querySelector('#counter'),
    counterValue: document.querySelector('#value'),
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
}

refs.decrement.addEventListener('click', counterDecrement)
refs.increment.addEventListener('click', counterIncrement)

let counterValue = 0;

function counterIncrement() {
    counterValue += 1;

    refs.counterValue.textContent = counterValue;
}

function counterDecrement() {
    counterValue -= 1;

    refs.counterValue.textContent = counterValue;
}