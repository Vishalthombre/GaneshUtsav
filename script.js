// Countdown to 29th August 2025, 11:59 PM
const targetDate = new Date("August 29, 2025 23:59:00").getTime();
const timerElement = document.getElementById("timer");

function updateCountdown() {
  const now = Date.now(); // cleaner than new Date().getTime()
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval); // stop the timer
    timerElement.textContent = "Ganesh Utsav has begun! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Run immediately so there's no delay
updateCountdown();

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);
