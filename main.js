function createSquares(number) {
  const container = document.querySelector(".container");
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  for (let i = 0; i < number * number; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    container.appendChild(newSquare);
  }
}

function addColor(e) {
  const backgroundColor = e.target.style.backgroundColor;
  if (backgroundColor === "") {
    const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    e.target.style.setProperty("background-color", randomColor);
  }
}

function addBlack(e) {
  const brightness = e.target.style.filter.toString();
  const brightnessLength = brightness.length;
  const backgroundColor = e.target.style.backgroundColor;
  if (brightnessLength === 0 && backgroundColor != "") {
    e.target.style.setProperty("filter", "brightness(90%)");
  }

  if (brightnessLength === 15) {
    const currentBrightness = parseInt(brightness.slice(11, 13));
    const newBrightness = currentBrightness - 10;
    e.target.style.setProperty("filter", "brightness(" + newBrightness + "%)");
  }
}

function colorAndBlack(e) {
  addColor(e);
  addBlack(e);
}

function colorSquares() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) =>
    square.addEventListener("mouseover", colorAndBlack)
  );
}

function resetSquares() {
  document.querySelector(".container").replaceChildren();
  createSquares(squaresNum);
  colorSquares();
}

function askUser() {
  answer = parseInt(prompt("Please enter squares per side"));
  if (answer != null) return answer;
}

let squaresNum = 20;
resetSquares(squaresNum);


document.querySelector(".button").addEventListener("click", resetSquares);

// createSquares(askUser());

// resetSquares();

