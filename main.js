function createSquares(number) {
  const numberSquared = Math.sqrt(number);
  const container = document.querySelector(".container");
  container.style.gridTemplateColumns = `repeat(${numberSquared}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numberSquared}, 1fr)`;
  for (let i = 0; i < number; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    container.appendChild(newSquare);
  }
}

function addColor(e) {
  const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  e.target.style.setProperty("background-color", randomColor);
}

createSquares(64);
const keys = Array.from(document.querySelectorAll(".square"));
keys.forEach((key) => key.addEventListener("mouseover", addColor));
