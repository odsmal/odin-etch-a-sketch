let main = document.querySelector("main");
main.addEventListener("click", addDark);

function addDark(event) {
  console.log(event.target.getAttribute("filter"));
}
