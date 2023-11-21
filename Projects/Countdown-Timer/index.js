const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const myBirth = "29 August 2024";

function countdown() {
  const myBirthDate = new Date(myBirth);
  const currentDate = new Date();

  const tseconds = (myBirthDate - currentDate) / 1000;

  const days = Math.floor(tseconds / 3600 / 24);
  const hours = Math.floor(tseconds / 3600) % 24;
  const mins = Math.floor(tseconds / 60) % 24;
  const seconds = Math.floor(tseconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}




countdown();

setInterval(countdown, 1000);
