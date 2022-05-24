const container = document.querySelector("#container");
const grid = [];

createGrid(16);
userGridSize();
hoverTrail();

function userGridSize() {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    let userSize = prompt("How many squares per side would you like?");
    removeAllChildNodes(container);
    createGrid(userSize);
    hoverTrail();
  });
}

function createGrid(squareAmount) {
  for (let i = 0; i < squareAmount; i++) {
    grid[i] = document.createElement("div");
    grid[i].classList.add("grid");
    container.appendChild(grid[i]);
    for (let j = 0; j < squareAmount; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid[i].appendChild(cell);
    }
  }
}

function hoverTrail() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.setAttribute("style", "background: blue;");
    });
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
