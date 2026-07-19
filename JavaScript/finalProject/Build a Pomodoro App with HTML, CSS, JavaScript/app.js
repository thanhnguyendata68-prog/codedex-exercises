const bells = new Audio("./sounds/bell.wav");
const startBtn = document.querySelector(".btn-start");
const minuteDiv = document.querySelector(".minutes");
const secondDiv = document.querySelector(".seconds");

const defaultSessionSeconds = 25 * 60;
let myInterval = null;
let isRunning = false;
let totalSeconds = defaultSessionSeconds;

const updateDisplay = () => {
  const minutesLeft = Math.floor(totalSeconds / 60);
  const secondsLeft = totalSeconds % 60;

  minuteDiv.textContent = `${minutesLeft}`;
  secondDiv.textContent = `${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
};

const playBell = () => {
  bells.pause();
  bells.currentTime = 0;
  const playPromise = bells.play();

  if (playPromise) {
    playPromise.catch(() => {
      console.warn("Browser blocked autoplay for the bell sound.");
    });
  }
};

const stopTimer = () => {
  clearInterval(myInterval);
  myInterval = null;
  isRunning = false;
};

const startTimer = () => {
  if (isRunning) return;

  isRunning = true;
  startBtn.textContent = "pause";

  myInterval = setInterval(() => {
    totalSeconds--;
    updateDisplay();

    if (totalSeconds <= 0) {
      stopTimer();
      playBell();
      totalSeconds = defaultSessionSeconds;
      updateDisplay();
      startBtn.textContent = "start";
    }
  }, 1000);
};

const pauseTimer = () => {
  stopTimer();
  startBtn.textContent = "resume";
};

startBtn.addEventListener("click", () => {
  if (isRunning) {
    pauseTimer();
  } else if (startBtn.textContent === "resume") {
    startTimer();
  } else {
    startTimer();
  }
});

updateDisplay();

