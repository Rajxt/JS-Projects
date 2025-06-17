const hour = document.getElementById('hourHand');
const minute = document.getElementById('minuteHand');
const second = document.getElementById('secondHand');
const speed = document.getElementById("speed");

let sectick = 0;
let mintick = 0;
let hourtick =0;

function start(a) {
  setInterval(() => {
    sectick += 6;
    second.style.transform = `translateX(-50%) rotate(${sectick}deg)`;
    if (sectick % 360 === 0) {
      mintick += 6;
      minute.style.transform = `translateX(-50%) rotate(${mintick}deg)`;

      hourtick +=0.5;
      hour.style.transform = `translateX(-50%) rotate(${hourtick}deg)`;
    }
  }, a);
}

start(10);


speed.addEventListener("onclick",() => start(100));
