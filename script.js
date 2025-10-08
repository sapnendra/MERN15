let count = 0;
let second = 5;
let progress = document.querySelector(".progress-bar-fill");
let percentText = document.querySelector(".progress-label");
let interval = setInterval(() => {
  if (count < 100) {
    count++;
    progress.style.width = `${count}%`;
    percentText.textContent = `${count}%`;
  } else {
    document.querySelector(".morphism-title").textContent = "Download complete!";
    clearInterval(interval);
  }
}, (second * 1000) / 100);
