
const ulEl = document.querySelector("#categories");
const liEl = document.querySelector(".item");
console.log(`Number of categories ${ulEl.children.length}`);
console.log(`Categories: ${liEl.firstElementChild.textContent}`);
console.log(` Elements: ${liEl.lastElementChild.children.length}`);
console.log(`Categories: ${ulEl.children[1].firstElementChild.textContent}`);
console.log(` Elements: ${ulEl.children[1].lastElementChild.children.length}`);
console.log(
  `Categories: ${ulEl.lastElementChild.firstElementChild.textContent}`
);
console.log(
  ` Elements: ${ulEl.lastElementChild.lastElementChild.children.length}`
);

//___________________________________________________________________________

// const liEl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${liEl.length}`);

// liEl.forEach(item => {
//     console.log(`Categories: ${item.firstElementChild.textContent}`);
//     console.log(` Elements: ${item.lastElementChild.children.length}`);
// })
//___________________________________________________________________________
