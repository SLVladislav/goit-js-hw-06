function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls>input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  let elements = [];
  for (let i = 0; i < amount; i += 1) {
    const divAdd = document.createElement("div");
    divAdd.style.height = `${30 + 10 * i}px`;
    divAdd.style.width = `${30 + 10 * i}px`;
    divAdd.style.background = getRandomHexColor();
    elements.push(divAdd);
  }

  return divEl.append(...elements);
};

btnCreate.addEventListener("click", () => {
  return createBoxes(inputEl.value);
});

btnDestroy.addEventListener("click", dectroyBoxes);
function dectroyBoxes() {
  divEl.innerHTML = "";
}
