var breakTime = document.getElementById("break-length").value;
var sessionTime = document.getElementById("session-length").value;
var min = 25;
var sec = "00";
var timerState = 0;
var myInterval = "";
var timerLabel = "Session";
document.getElementById("timer-label").innerHTML = timerLabel;
showTime();

function pressBreakDecrement() {
  min = document.getElementById("break-length").value;
  min = Number(min);
  if (min > 1) {
    min -= 1;
  }
  document.getElementById("break-length").value = min;
}

function pressBreakIncrement() {
  min = document.getElementById("break-length").value;
  min = Number(min);
  if (min < 60) {
    min += 1
  }
  document.getElementById("break-length").value = min;
}

function pressSessionDecrement() {
  min = document.getElementById("session-length").value;
  min = Number(min);
  if (min > 1) {
    min -= 1 ;
  }
  document.getElementById("session-length").value = min;
  showTime();
}

function pressSessionIncrement() {
  min = document.getElementById("session-length").value;
  min = Number(min);
  if (min < 60) {
    min += 1;
  }
  document.getElementById("session-length").value = min;
  showTime();
}

function pressReset() {
  stopCountdown();
  timerState = 0;
  timerLabel = "Session";
  sec = "00";
  min = 25;
  document.getElementById("beep").pause();
  document.getElementById("beep").currentTime = 0;
  document.getElementById("timer-label").innerHTML = "Session";
  document.getElementById("break-length").value = 5;
  document.getElementById("session-length").value = 25;
  showTime();
}

function showTime() {
  if (sec < 10 && sec > 0) {
    sec = Number(sec);
    sec = "0" + sec;
  }
  else if (sec == 0) {
    sec = "00";
  }
  
  if (min > 0 && min < 10) {
    min = Number(min)
    min = "0" + min;
  }
  else if (min == 0) {
    min = "00";
  }
  document.getElementById("time-left").innerHTML = min + ":" + sec;
}

function startCountdown() {
  myInterval = setInterval(countDown, 1000);
}

function stopCountdown() {
  clearInterval(myInterval);
}

function changeTimerLabel() {
  if (timerLabel == "Session") {
    timerLabel = "Break";
    document.getElementById("beep").play();
  }
  else if (timerLabel == "Break") {
    timerLabel = "Session";
    document.getElementById("beep").play();
  }
  document.getElementById("timer-label").innerHTML = timerLabel;
}

function pressStartStop() {
  if (timerState == 0) {
    startCountdown();
    timerState = 1;
  }
  else if (timerState == 1) {
    stopCountdown();
    timerState = 0;
  }
}

function countDown() {
  if (Number(sec) > 0) {
    sec = Number(sec) - 1;
  }
  else if (Number(sec) == 0) {
    if (Number(min) > 0) {
      min = Number(min) - 1;
      sec = "59";
    }
    else if (Number(min) == 0) {
      document.getElementById("beep").play();
      if (timerLabel == "Session") {
        timerLabel = "Break";
        document.getElementById("timer-label").innerHTML = timerLabel;
        min = document.getElementById("break-length").value;
      }
      else if (timerLabel == "Break") {
        timerLabel = "Session";
        document.getElementById("timer-label").innerHTML = timerLabel;
        min = document.getElementById("session-length").value;
      }
    }
  }
  showTime();
}