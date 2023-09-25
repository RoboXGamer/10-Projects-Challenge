// DOM Reference for elements
const daysEL = document.querySelector("#days");
const hoursEL = document.querySelector("#hours");
const minutesEL = document.querySelector("#mins");
const secondsEL = document.querySelector("#secs");

// Logic below
let date = `01 Jan 2024`;
console.log(new Date(date));
// date = `27 Sep 2023`;

const newYearDate = Math.floor(Date.parse(date) / 1000);

setInterval(function () {
	const currentTimeInSeconds = Math.floor(Date.now() / 1000);
	// console.log(currentTimeInSeconds);
	// console.log(Date(currentTimeInSeconds));

	const timeLeftInSec = newYearDate - currentTimeInSeconds;
	// console.log("timeLeftInSec:", timeLeftInSec);

	const secondsInMinute = 60;
	const secondsInHour = secondsInMinute * 60;
	const secondsInDay = secondsInHour * 24;

	const days = Math.floor(timeLeftInSec / secondsInDay);
	const hours = Math.floor((timeLeftInSec % secondsInDay) / secondsInHour);
	const minutes = Math.floor((timeLeftInSec % secondsInHour) / secondsInMinute);
	const seconds = timeLeftInSec % secondsInMinute;

	// console.log(
	// 	`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`
	// );

	daysEL.firstElementChild.innerText = days;
	hoursEL.firstElementChild.innerText = hours;
	minutesEL.firstElementChild.innerText = minutes;
	secondsEL.firstElementChild.innerText = seconds;
}, 1000);
