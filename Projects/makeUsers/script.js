let users = [
  {
    username: "Sapnendra Jaiswal",
    pic: "https://images.unsplash.com/photo-1632094623683-9d0bf4819c89?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "I am a Software Developer and Designer",
  },
  {
    username: "I don't know",
    pic: "https://images.unsplash.com/photo-1758634832507-72a43d0f8656?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "I am a body builder and gym trainer",
  },
];

// Display users on page load
const showUsers = () => {
  let clutter = "";
  users.forEach((user, idx) => {
    clutter += `<div
          class="card h-100 w-80 bg-gray-200 rounded-2xl overflow-hidden relative"
        >
          <img
            class="absolute"
            src="${user.pic}"
          />
          <div class="blurred-layer absolute"></div>
          <div
            class="content text-center text-[#fff] absolute bottom-2 w-full px-2 py-0"
          >
            <h2 class="text-3xl font-bold mb-2">${user.username}</h2>
            <p class="text-xl">${user.bio}</p>
            <button
              class="h-10 px-5 py-2 mt-1 text-xl rounded bg-red-500"
              id="${idx}"
            >
              Delete
            </button>
          </div>
        </div>`;
  });
  document.querySelector(".card-container").innerHTML = clutter;
};
showUsers();

// Add new user functionality
const createNewUser = () => {
  const userForm = document.querySelector(".userForm");
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = userForm.username.value;
    const bio = userForm.bio.value;
    const pic = userForm.pic.value;

    if (!username || !bio) {
      alert("All fields are required!");
      return;
    }

    const newUser = {
      username,
      pic,
      bio,
    };

    users.push(newUser);
    userForm.reset();
    showUsers();
  });
};
createNewUser();

const deleteUser = () => {
  const cards = document.querySelector(".card-container");
  cards.addEventListener("click", (dets) => {
    let idx = dets.target.id;
    if (!idx) return;
    users.splice(idx, 1);
    showUsers();
  });
};
deleteUser();
