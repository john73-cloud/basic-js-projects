let screen = document.querySelector(".content");
let stop = document.querySelector(".stop");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");

let seconds = 0;
let minutes = 0;
let startmain;
start.addEventListener("click", function () {
  startmain = setInterval(starttime, 1000);
});

stop.addEventListener("click", function () {
  stoptime();
});
reset.addEventListener("click", function () {
  resettime();
});
function starttime() {
  if (seconds == 60) {
    seconds = 00;
    minutes += 1;
  }
  seconds += 1
  render();
}
function stoptime() {
  clearInterval(startmain);
  render();
}
function resettime() {
  seconds = 00;
  minutes = 00;
  clearInterval(startmain);
  render();
}
function render() {
  screen.innerText = `${minutes} : ${seconds}`
}
