const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const dateBox = document.getElementById('dateBox');
const mC =  document.getElementById('m');
const bar = document.getElementById('bar');
const valid = document.getElementById('valid');

// let myBirth = "";
function newDOB(){
  const dayOfBirth = document.getElementById('dayOfBirth').value;
  const monthOfBirth = document.getElementById('monthOfBirth').value;
  console.log(dayOfBirth, monthOfBirth, "2024")
  myBirth = dayOfBirth+ monthOfBirth+ "2024";
  dateBox.style.display = 'none';
  bar.style.display = 'flex'
  setTimeout(() => {
    mC.style.display = 'flex'
    bar.style.display = 'none'
  }, 999);
  if(dayOfBirth >= 32){
    dateBox.style.display = 'none'
    bar.style.display = 'none'
    valid.style.display = 'block'
    setTimeout(() => {
        window.location.reload();
    }, 900);
  }
}
myBirth = dayOfBirth, monthOfBirth, "2024";
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


