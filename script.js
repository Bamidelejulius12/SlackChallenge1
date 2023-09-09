const CurrentSlackDay = document.querySelector('.SlackDay')
const CurrentUTCTime = document.querySelector('.CurentUTCTime')
const CurrentUTCdate = document.querySelector('.CurrentUTCdate')

let CurrentDate = new Date()

//Arrays for Days
let weekdays = [
    'Sunday',
    'Monday',
    'Tuesday', 
    'Wednesday',
    'Thursday', 
    'Friday',
    'Saturday'
]
const months = [
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
 ];

// DATE
const CurrentDay = CurrentDate.getDay();
const CurrentMonth = CurrentDate.getMonth()
CurrentSlackDay.innerHTML = ` <i class='bx bxs-calendar'></i> Current-Day: ${weekdays[CurrentDay]}`;
CurrentUTCdate.innerHTML = `UCT:${CurrentDate.getDate()}, ${months[CurrentMonth]} ${CurrentDate.getUTCFullYear()} ${CurrentDate.getHours()}:${CurrentDate.getMinutes()}:${CurrentDate.getMinutes()}: ${CurrentDate.getMilliseconds()} `;

CurrentUTCdate.innerHTML = formattedDate;