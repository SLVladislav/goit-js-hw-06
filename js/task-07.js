const spanEl = document.querySelector("#text");
const inputEl = document.querySelector("#font-size-control");

inputEl.addEventListener("change", (event) => {  
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
});
