const textContainer = document.getElementById('text-container');
const playPauseBtn = document.getElementById('playPauseBtn');
const speedRange = document.getElementById('speedRange');

let isPlaying = false;
let scrollSpeed = 5;

playPauseBtn.addEventListener('click', togglePlayPause);
speedRange.addEventListener('input', setScrollSpeed);

function togglePlayPause() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    startScrolling();
    playPauseBtn.textContent = 'Pause';
  } else {
    stopScrolling();
    playPauseBtn.textContent = 'Play';
  }
}

function startScrolling() {
  const scrollInterval = setInterval(() => {
    textContainer.scrollTop += 1;
  }, 100 - scrollSpeed * 5);

  textContainer.dataset.scrollInterval = scrollInterval;
}

function stopScrolling() {
  clearInterval(textContainer.dataset.scrollInterval);
}

function setScrollSpeed() {
  scrollSpeed = speedRange.value;
  if (isPlaying) {
    stopScrolling();
    startScrolling();
  }
}

// Example Text
textContainer.textContent = `This is an example text for the teleprompter. You can replace it with your own text.`;

// Hi All, Explore https://drimmake.com/ for learn more.
