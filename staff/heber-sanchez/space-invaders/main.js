let x = 45;
let y = 90;
const ship = document.getElementById("ship");
ship.style.left = x + "vw";
ship.style.top = y + "vh";

document.onkeydown = function (event) {
  if (event.key === "ArrowLeft" && x > 1) {
    x -= 1;
  } else if (event.key === "ArrowRight" && x < 95) {
    x += 1;
  }
  if (event.key === "ArrowUp" && y > 0) {
    y -= 1;
  } else if (event.key === "ArrowDown" && y < 90) {
    y += 1;
  }

  ship.style.left = x + "vw";
  ship.style.top = y + "vh";
  let getRect = ship.getBoundingClientRect();
  console.log(getRect);
};

let ovniEjeX = 26;
let ovniEjeY = 10;
let direction = true;

let ovnis = document.querySelector(".enemies");

function movingDirection() {
  if (direction && ovniEjeX < 53) {
    ovniEjeX = ovniEjeX + 1;
  } else if (direction && ovniEjeX === 53) {
    direction = false;
    ovniEjeY = ovniEjeY + 1;
  } else if (!direction && ovniEjeX > 0) {
    ovniEjeX = ovniEjeX - 1;
  } else {
    direction = true;
    ovniEjeY = ovniEjeY + 1;
  }
  ovnis.style.left = ovniEjeX + "vw";
  ovnis.style.top = ovniEjeY + "vh";
}

setInterval(movingDirection, 1000);
