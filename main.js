function renderDate() {
    const currentDate = new Date();
    const dateElem = document.getElementById("date");
    const day = daysOfTheWeek[currentDate.getUTCDay()];
    const month = monthsOfTheYear[currentDate.getMonth()];
    const date = formatDate(currentDate.getDate());
    const year = currentDate.getFullYear();

    const dateString = `${day}, ${month} ${date} ${year}`;
    dateElem.textContent = dateString; 
}

function formatDate(date) {
    if(date < 10 || date > 20) {
        switch(date % 10) {
            case 1:
                return `${date}st`;
            case 2:
                return `${date}nd`;
            case 3:
                return `${date}rd`;
        }
    }
    return `${date}th`
}

function renderTime() {
    const currentTime = new Date();
    const timeElem = document.getElementById("time");
    const hour = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    let isAm = hour < 12;
    let amPm = isAm ? "AM" : "PM";

    const timeString = `${addLeadingZero(formatHour(hour))}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)} ${amPm}`;
    timeElem.textContent = timeString;
}

function formatHour(hour) {
    hour = hour > 13 ? hour - 12 : hour;

    hour = hour === 0 ? hour + 12 : hour;
    return hour
}

function addLeadingZero(number) {
    return number < 10 ? `0${number}` : number;
}

const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const monthsOfTheYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

renderTime();
renderDate();
setInterval(() => {
    renderTime();
    renderDate();
}, 1000);
