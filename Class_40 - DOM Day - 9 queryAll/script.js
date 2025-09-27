const allDiv = document.querySelectorAll(".text");
const button = document.querySelector("button")

allDiv.forEach((elem) => {
  elem.addEventListener("dragEvent", () => {
    let text = elem.textContent;
    button.textContent = text;   
  })
});
