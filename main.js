let currentTime = new Date();

const daysOfTheWeek = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}

const monthsOfTheYear = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
}

function setDate() {
    const dateElem = document.getElementById("date");
    let day = daysOfTheWeek[currentTime.getUTCDay()];
    let month = monthsOfTheYear[currentTime.getMonth()];
    let dateAsInt = currentTime.getDate();
    let date = `${dateAsInt}${getOrdinalIndicator(dateAsInt)}`;
    let year = currentTime.getFullYear();
    let dateString = `${day}, ${month} ${date} ${year}`;
    dateElem.innerText = dateString;

    let seconds = currentTime.getSeconds();
    const secondsElem = document.getElementById("seconds");
    secondsElem.innerText = seconds < 10 ? `0${seconds}` : seconds;

    let minutes = currentTime.getMinutes();
    const minutesElem = document.getElementById("minutes");
    minutesElem.innerText = minutes < 10 ? `0${minutes}` : minutes;

    let hours = currentTime.getHours();
    const hoursElem = document.getElementById("hours");
    hoursElem.innerText = hours < 10 ? `0${hours}` : hours;
}

function getOrdinalIndicator(t) {
    switch(t % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

function tick() {
    setInterval(() => {
        currentTime = new Date();

        seconds = currentTime.getSeconds();
        secondsElem = document.getElementById("seconds");
        secondsElem.innerText = seconds < 10 ? `0${seconds}` : seconds;

        minutes = currentTime.getMinutes();
        minutesElem = document.getElementById("minutes");
        minutesElem.innerText = minutes < 10 ? `0${minutes}` : minutes;

        hours = currentTime.getHours();
        hoursElem = document.getElementById("hours");
        hoursElem.innerText = hours < 10 ? `0${hours}` : hours;
    }, 1000);
}

function runClock() {
    setDate();
    tick();
}

runClock();