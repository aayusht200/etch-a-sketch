const container = document.querySelector(".container");
// console.log(container);

for (let i = 1; i < 17; i++) {
  createDiv("div_" + i);
}
function createDiv(name) {
  const div_name = document.createElement("div");
  div_name.classList.add("grid_div");
//   div_name.textContent = "place holder";
  container.appendChild(div_name);
  console.log(name);
}
