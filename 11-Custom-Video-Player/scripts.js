/* Get Elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const fullscreen = player.querySelector('.fullscreen');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Functions */

function togglePlay () {
	video.paused ? video.play() : video.pause();
}

function updateButton () {
	toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function skip () {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate () {
	video[this.name] = this.value;
}

function handleProgress () {
	const percent = video.currentTime / video.duration * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub (e) {
	const scrubTime = e.offsetX * video.duration / progress.offsetWidth;
	video.currentTime = scrubTime;
}

function handleFullscreen () {
	video.requestFullscreen();
}

/* Hook up Event Listeners */

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
skipButtons.forEach((b) => b.addEventListener('click', skip));
ranges.forEach((r) => r.addEventListener('change', handleRangeUpdate));
ranges.forEach((r) => r.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
fullscreen.addEventListener('click', handleFullscreen);
window.addEventListener('keydown', (e) => e.keyCode === 32 && togglePlay());
