const refs = {
    counterValue: document.querySelector('#value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
}

refs.decrementBtn.addEventListener('click', onCounterBtnDecrement);
refs.incrementBtn.addEventListener('click', onCounterBtnIncrement);

let counterValue = 0;

function onCounterBtnDecrement() {
    counterValue -= 1;

    refs.counterValue.textContent = counterValue;
};

function onCounterBtnIncrement() {
    counterValue += 1;

    refs.counterValue.textContent = counterValue;
};