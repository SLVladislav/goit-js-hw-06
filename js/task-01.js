
const liEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${liEl.length}`);

liEl.forEach(item => {
    console.log(`Categories: ${item.firstElementChild.textContent}`);
    console.log(` Elements: ${item.lastElementChild.children.length}`);
})
