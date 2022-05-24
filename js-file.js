const container = document.querySelector("#container");
const grid = [];

createGrid();

function createGrid() {
  for (let i = 0; i < 16; i++) {
    grid[i] = document.createElement("div");
    grid[i].classList.add("grid");
    container.appendChild(grid[i]);
    for (let j = 0; j < 16; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid[i].appendChild(cell);
    }
  }
}
