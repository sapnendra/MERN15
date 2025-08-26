document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const bio = document.getElementById("bio").value;
  const imageInput = document.getElementById("image");
  const file = imageInput.files[0];

  if (!file) {
    alert("Please select an image!");
    return;
  }

  const imgURL = URL.createObjectURL(file); // temporary URL for the local image

  // Create card dynamically
  const card = document.createElement("div");
  card.className = "profile-card";
  card.innerHTML = `
    <img src="${imgURL}" alt="Profile" style="width:100px;height:100px;border-radius:50%;">
    <h3>${name}</h3>
    <p>${bio}</p>
  `;

  document.getElementById("cardContainer").appendChild(card);

  // Optional: Reset the form after creating the card
  this.reset();
});
