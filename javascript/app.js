var audio = new Audio("./assets");
var time = 60;
var lap = 1;

window.onload = function() {
  intervalId = setInterval(count, 1000);
};

function count() {
  time--;
  console.log(time);
  $("#display").text(time);
  stop()
}

function stop() {
  if (time <= 0) {
    clearInterval(intervalId);
    clockRunning = false;
  }
}


