// Get the dodger element
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    left--;
    dodger.style.left = `${left}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  const gameWidth = document.getElementById("game").offsetWidth;
  const dodgerWidth = dodger.offsetWidth;
  const rightEdge = left + dodgerWidth;

  if (rightEdge < gameWidth) {
    left++;
    dodger.style.left = `${left}px`;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
