const numberHours = document.querySelector(".numberHours");
const barseconds = document.querySelector(".barseconds")
const numberElement = [];
const barElement = [];

for (let i = 1; i <= 12; i++) {
   numberElement.push(
      `<span style="--index:${i};"><p>${i}</p></span>`
   );

}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));



for (let i = 1; i <= 60; i++) {
   barElement.push(
      `<span style="--index:${i};"><p></p></span>`
   );
}
barseconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds'); // corrected selector

function getCurrentTime() {
   let date = new Date();
   let currentHours = date.getHours();
   let currentMinutes = date.getMinutes();
   let currentSeconds = date.getSeconds();


   let hoursRotation = (currentHours % 12 + currentMinutes / 60) * 30;
   let minutesRotation = (currentMinutes + currentSeconds / 60) * 6;
   let secondsRotation = currentSeconds * 6;


   handHours.style.transform = `rotate(${hoursRotation}deg)`;
   handMinutes.style.transform = `rotate(${minutesRotation}deg)`;
   handSeconds.style.transform = `rotate(${secondsRotation}deg)`;
}


getCurrentTime();


setInterval(getCurrentTime, 0);

