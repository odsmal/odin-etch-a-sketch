let main = document.querySelector("main");
main.addEventListener("click", lowerBrightness);

function lowerBrightness(event) {
  if (event.target.dataset.brightness > 0) {
    const newBrightness = event.target.dataset.brightness - 0.1;
    event.target.style.setProperty("filter", `brightness(${newBrightness})`);
    event.target.dataset.brightness = newBrightness;
    console.log(1);
  }
}
