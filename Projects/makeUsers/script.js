let users = [];

// Display users on page load
let showUsers = (users) => {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";

  if (users) {
    users.forEach((user, idx) => {
      const card = document.createElement("div");
      card.className =
        "card h-120 w-100 bg-gray-200 rounded-2xl overflow-hidden relative";
      const img = document.createElement("img");
      img.className = "absolute";
      img.src = user.pic;

      const blurredLayer = document.createElement("div");
      blurredLayer.className = "blurred-layer absolute";

      const content = document.createElement("div");
      content.className =
        "content text-center text-[#fff] absolute bottom-2 w-full px-1 py-0";

      const name = document.createElement("h2");
      name.className = "text-4xl font-bold mb-2";
      name.textContent = user.name;

      const desc = document.createElement("p");
      desc.className = "text-xl";
      desc.textContent = user.bio;

      const btn = document.querySelector("button");
      btn.className = "h-10 px-5 py-2 mt-1 text-xl rounded bg-red-500";
      btn.id = idx;
      btn.textContent = "Delete";

      content.appendChild(name);
      content.appendChild(desc);
      content.appendChild(btn);

      card.appendChild(img);
      card.appendChild(blurredLayer);
      card.appendChild(content);

      // You can now append `card` to the desired parent in your document. For example:
      document.querySelector(".card-container").appendChild(card);
    });
  }
};
showUsers(users);

// Add new user functionality
const createNewUser = () => {
  const createBtn = document.querySelector("#create-card");
  const closeForm = document.querySelector(".closeForm");
  const cardContainer = document.querySelector(".card-container");
  const userForm = document.querySelector(".userForm");

  createBtn.addEventListener("click", () => {
    userForm.classList.remove("hidden");
    cardContainer.classList.add("hidden");
  });

  closeForm.addEventListener("click", () => {
    userForm.classList.add("hidden");
    cardContainer.classList.remove("hidden");
  });

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = userForm.username.value;
    const bio = userForm.bio.value;
    const pic = userForm.pic.value;

    if (!name || !bio) {
      alert("All fields are required!");
      return;
    }

    if (pic) {
      const newUser = {
        name,
        pic,
        bio,
      };
      users.push(newUser);
      showUsers(users);
      userForm.reset();
      userForm.classList.add("hidden");
      cardContainer.classList.remove("hidden");
    }
  });
};

const deleteUser = () => {
  const cards = document.querySelector(".card-container");
  cards.addEventListener("click", (dets) => {
    let idx = dets.target.id;
    users.splice(idx, 1);
    showUsers(users);
  });
};
deleteUser();

createNewUser();
