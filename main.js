function createSquares(number) {
  const container = document.querySelector(".container");
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  for (let i = 0; i < number * number; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.addEventListener("mouseover", addColor);
    newSquare.addEventListener("mouseover", addBlack);
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
    e.target.style.setProperty("filter", `brightness(${newBrightness}%)`);
  }
}

function reset() {
  document.querySelector(".container").replaceChildren();
  createSquares(squaresNum);
  document.querySelector("#size").innerHTML = `${squaresNum}x${squaresNum}`;
}

function newSize() {
  let answer = prompt("Please enter squares per side");
  if (answer != null) {
    answer = parseInt(answer);
    if (newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
      alert("Enter a number from 1-100 range");
      newSize();
    } else {
      squaresNum = answer;
      reset();
    }
  }
}

let squaresNum = 20;
window.addEventListener("load", reset);
document.querySelector("#reset").addEventListener("click", reset);
document.querySelector("#size").addEventListener("click", newSize);
