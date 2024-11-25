function lowerBrightness(event) {
  if (event.target.dataset.brightness > 0) {
    const newBrightness = event.target.dataset.brightness - 0.1;
    event.target.style.setProperty("filter", `brightness(${newBrightness})`);
    event.target.dataset.brightness = newBrightness;
  }
}

function randomizeColor(event) {
  const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  event.target.style.setProperty("background-color", randomColor);
}

function createGrid(number) {
  cellContainer.replaceChildren();
  for (let i = 0; i < number * number; i++) {
    const newCell = document.createElement("div");
    newCell.style.setProperty("flex-basis", `calc(100% / ${number})`);
    newCell.classList.add("cell");
    newCell.dataset.brightness = 1;
    cellContainer.appendChild(newCell);
  }
}

function getGrid() {
  let answer = parseInt(prompt("Please enter squares per side (1-100)"));
  if (answer === null || answer < 1 || answer > 100 || Number.isNaN(answer)) {
    alert("Enter a number in the 1-100 range");
    return;
  }
  gridSize = answer;
  createGrid(answer);
}

const cellContainer = document.querySelector(".cell-container");
const resetBtn = document.querySelector(".reset-btn");
const promptBtn = document.querySelector(".prompt-btn");
let gridSize = 10;

cellContainer.addEventListener("mouseover", lowerBrightness);
cellContainer.addEventListener("mouseover", randomizeColor);
resetBtn.addEventListener("click", () => createGrid(gridSize));
promptBtn.addEventListener("click", getGrid);

createGrid(gridSize);
