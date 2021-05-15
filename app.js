const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveAway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
console.log(futureDate)
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveAway.textContent = `Giveaway Ends On ${weekday}, ${year} ${date} ${month} ${hours}:${minutes}am`

function getRemainingTime() {
    const today = new Date();
    let time = futureDate - today;
    console.log(time)
    //1sec = 1000ms
    //1min = 60sec
    //1hour = 60min
    //1day = 24hrs
    const oneday = 24 * 60 * 60 * 1000;
    const onehour = 60 * 60 * 1000;
    const onemin = 60 * 1000;

    let day = Math.floor(time / oneday);
    let hrs = Math.floor((time % oneday) / onehour);
    let min = Math.floor((time % onehour) / onemin);
    let sec = Math.floor((time % onemin) / 1000);

    const values = [day, hrs, min, sec];

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if (time < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`
    }
}

function format(item) {
    if (item < 10) {
        return `0${item}`
    }
    else {
        return item
    }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();