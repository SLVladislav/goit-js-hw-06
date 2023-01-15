//____________________________________________________________________________
// const counter = {
//     value: 0,
//     increment() {
//         this.value += 1;
//     },
//     decrement() {
//         this.value -= 1;
//     },
// };


// const handleClickDecrement = minusBtn.addEventListener("click", () => {
//   counter.decrement();
//   btn.textContent = counter.value;
// });

// const handleClickIncrement = plusBtn.addEventListener("click", () => {
//   counter.increment();
//   btn.textContent = counter.value;
// });
//____________________________________________________________________________
let counterValue = 0;

const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');
const btn = document.querySelector('#value');

const handleClickDecrement = minusBtn.addEventListener('click', () => {
    counterValue -= 1;
    btn.innerHTML = counterValue;
});

const handleClickIncrement = plusBtn.addEventListener('click', () => {
   counterValue += 1;
   btn.innerHTML = counterValue;
})




