const container = document.querySelector(".container");
// console.log(container);

window.addEventListener("load", () => {
  //   console.log("119");
  for (let i = 1; i < 17; i++) {
    createDiv(4);
  }
});
function createDiv(input) {
  const div_name = document.createElement("div");
  div_name.classList.add("grid_div_default");
  div_name.style.flex = `1 0 calc((100%)/${input})`;
  if (input > 49) div_name.style.borderRadius = "40%";
  div_name.addEventListener("mouseenter", () => {
    div_name.style.backgroundColor = `rgb( ${randomNumber()},${randomNumber()},${randomNumber()})`;
  });
  div_name.addEventListener("mouseleave", () => {
    div_name.style.backgroundColor = "white";
  });
  container.appendChild(div_name);
}

const btn = document.querySelector("button");
// console.log(btn);

btn.addEventListener("click", () => {
  const user_input = parseInt(prompt("Enter a number between 1-100"));
  //   console.log(user_input);
  createGrid(user_input);
});

function createGrid(user_input) {
  container.replaceChildren();
  for (let i = 0; i < user_input * user_input; i++) {
    createDiv(user_input);
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 255);
}
