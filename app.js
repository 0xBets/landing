let day = document.getElementById("day");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let timer = null;
let displayDay = 0;
let displayHour = 0;
let displayMin = 0;
let displaySec = 0;

function stopWatch() {

    const launchDate = moment('04/29/2022 08:00 PM').utc();
    const currDate = moment().utc();

    const diff = moment.duration(launchDate.diff(currDate));
    const { _data } = diff;

    let d = _data.days;
    let h = _data.hours;
    let m = _data.minutes;
    let s = _data.seconds;

    var dayStr = d.toString().padStart(2, 0).split('');
    var hoursStr = h.toString().padStart(2, 0).split('');
    var minStr = m.toString().padStart(2, 0).split('');
    var secStr = s.toString().padStart(2, 0).split('');

    day.innerHTML = `<p class="number1">${dayStr[0]}</p><p class="number2">${dayStr[1]}</p>`;
    hour.innerHTML = `<p class="number3">${hoursStr[0]}</p><p class="number4">${hoursStr[1]}</p>`;
    min.innerHTML = `<p class="number5">${minStr[0]}</p><p class="number6">${minStr[1]}</p>`;
    sec.innerHTML = `<p class="number7">${secStr[0]}</p><p class="number8">${secStr[1]}</p>`;

}

window.onload = () => {
    timer = setInterval(stopWatch, 1000);
}