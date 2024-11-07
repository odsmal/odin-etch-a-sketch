let main = document.querySelector("main");
main.addEventListener("click", lowerBrightness);

function lowerBrightness(event) {
  // console.log(getComputedStyle(event.target).filter);
  // console.log(event.target.dataset.brightness == null);
  // console.log(event.target.getAttribute("style"));
  // event.target.style.setProperty("filter", `brightness(60%)`);
  // event.target.dataset.brightness = 60;
  // console.log(event.target.dataset.brightness);

  if (event.target.dataset.brightness > 0) {
    const newBrightness = event.target.dataset.brightness - 0.1;
    event.target.style.setProperty("filter", `brightness(${newBrightness})`);
    event.target.dataset.brightness = newBrightness;
    console.log(1);
  }
}
// ${newBrightness}
//e.target.style.filter.toString()
