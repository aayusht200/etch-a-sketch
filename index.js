const container = document.querySelector(".container");
// console.log(container);

for (let i = 0; i < 15; i++) {
  createDiv("div_" + i);
}
function createDiv(name) {
  const div_name = document.createElement("div");
  container.appendChild(div_name);
  div_name.classList.add("grid_div");
}
