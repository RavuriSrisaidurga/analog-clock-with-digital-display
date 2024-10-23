const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const digitalClock = document.getElementById('digitalClock');

function setClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  
  const secondsAngle = (seconds / 60) * 360 + 90;
  const minutesAngle = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hoursAngle = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  secondHand.style.transform = `rotate(${secondsAngle}deg)`;
  minuteHand.style.transform = `rotate(${minutesAngle}deg)`;
  hourHand.style.transform = `rotate(${hoursAngle}deg)`;

  
  const formattedTime = `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
  digitalClock.textContent = formattedTime;
}

function padTime(time) {
  return time < 10 ? `0${time}` : time;
}


setInterval(setClock, 1000);


setClock();
