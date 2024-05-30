function toggleFaq(event) {
  const currentFaqTitle = event.currentTarget;
  const currentFaqText = currentFaqTitle.nextElementSibling;
  const currentIcon = currentFaqTitle.querySelector(".icon");

  const allFaqTexts = document.querySelectorAll(".faq-text");
  const allIcons = document.querySelectorAll(".faq-title .icon");
  allFaqTexts.forEach((faqText) => {
    if (faqText !== currentFaqText) {
      faqText.style.display = "none";
    }
  });

  allIcons.forEach((icon) => {
    if (icon !== currentIcon) {
      icon.textContent = "+";
    }
  });
  if (currentFaqText.style.display === "block") {
    currentFaqText.style.display = "none";
    currentIcon.textContent = "+";
  } else {
    currentFaqText.style.display = "block";
    currentIcon.textContent = "-";
  }
}


// Countdown 
const countdownElement = document.querySelector('.countdown');

function updateCountdown() {
  const targetDate = new Date('2024-06-10T00:00:00');
  const currentDate = new Date();

  const totalSeconds = (targetDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  countdownElement.innerHTML = `
    <div>${days} Days</div>
    <div>${hours} Hours</div>
    <div>${minutes} Minutes</div>
    <div>${seconds} Seconds</div>
  `;
}

updateCountdown();

setInterval(updateCountdown, 1000);
