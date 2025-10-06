const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#userEmail")
const btn = document.querySelector("button");

let users = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let user = {
    username: username.value,
    email: email.value,
  }

  users.push(user);

  makeUser();

  username.value = "";
  email.value = "";
  
});

const makeUser = () => {
  let clutter = "";
  users.forEach((item) => {
    clutter += `<li>
      <span id="user">${item.username}</span>
      <span id="email">${item.email}</span>
    </li>`
  })

  document.querySelector("ul").innerHTML = clutter;
}
makeUser();

