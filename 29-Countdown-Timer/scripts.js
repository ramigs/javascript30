let countDown;
let timerDisplay = document.querySelector('.display__time-left');
let endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer (seconds) {
	clearInterval(countDown);
	const now = Date.now();
	const then = now + seconds * 1000;

	displayTimeLeft(seconds);
	displayEndTime(then);

	countDown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		if (secondsLeft <= 0) {
			clearInterval(countDown);
		}
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft (seconds) {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainderSeconds = seconds % 60;
	const display = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10
		? '0'
		: ''}${remainderSeconds}`;
	timerDisplay.textContent = display;
}

function displayEndTime (timestamp) {
	const endTime = new Date(timestamp);
	const hour = endTime.getHours();
	const minutes = endTime.getMinutes();
	endTimeDisplay.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer () {
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}

buttons.forEach((b) => b.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
	e.preventDefault();
	const mins = this.minutes.value;
	timer(mins * 60);
	this.reset();
});
