const btn = document.querySelector("button");
const h3 = document.querySelector("h3");

btn.addEventListener("click", () => {
    h3.textContent = "Sending..."
    h3.style.color = "yellow"

    setTimeout(() => {
        h3.textContent = "Friend"
        h3.style.color = "green"
    }, 3000);
})