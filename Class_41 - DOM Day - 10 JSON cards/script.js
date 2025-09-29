let users = [
  {
    id: "Q39rTs2OGdxKG1HR-d2mo",
    fullName: "Pete Keeling",
    email: "Theresa.Rath25@yahoo.com",
    mobile: "+17244252215",
    gender: "Gender questioning",
    address: "36349 Jess Point",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/75.jpg",
    city: "Huelsville",
    state: "Washington",
    country: "Saudi Arabia",
    pincode: 42031,
    createdAt: "2025-03-03T04:44:56.528Z",
  },
  {
    id: "mX8kKUiXde8cRbjfdoATL",
    fullName: "Margie Kovacek",
    email: "Maeve_Prosacco@gmail.com",
    mobile: "+14699250698",
    gender: "Male to female",
    address: "9636 Main Street E",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/6.jpg",
    city: "New Margretburgh",
    state: "Indiana",
    country: "Kenya",
    pincode: null,
    createdAt: "2026-09-22T06:25:51.463Z",
  },
  {
    id: "uNR_InxTlTxNW9l-IZWF_",
    fullName: "Marion Reynolds Sr.",
    email: "Maximus.Bechtelar@yahoo.com",
    mobile: "+17739955133",
    gender: "Gender variant",
    address: "8728 Joel Pass",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/61.jpg",
    city: "Fort Savanahhaven",
    state: "Kentucky",
    country: "Tanzania",
    pincode: null,
    createdAt: "2026-05-17T18:18:15.432Z",
  },
  {
    id: "hF-vZ8Na24Oiin9wOFAl4",
    fullName: "Guillermo Altenwerth II",
    email: "Ellen.Kuhlman@hotmail.com",
    mobile: "+14775125413",
    gender: "Cisgender woman",
    address: "24820 Columbia Avenue",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/74.jpg",
    city: "Port Georgianaborough",
    state: "New Mexico",
    country: "Benin",
    pincode: 83058,
    createdAt: "2025-11-05T03:48:06.023Z",
  },
  {
    id: "y05CpE7riax9DCCRaswwi",
    fullName: "Dr. Josephine Pagac-Conn",
    email: "Tremaine.Hammes@gmail.com",
    mobile: "+18215488270",
    gender: "Demi-girl",
    address: "2131 7th Street",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/28.jpg",
    city: "Albuquerque",
    state: "Massachusetts",
    country: "Thailand",
    pincode: null,
    createdAt: "2025-01-21T12:29:28.178Z",
  },
];

const parent = document.querySelector(".parent");

let card = "";
users.forEach((item) => {
  card += `<div class="card">
        <img src=${item.image} />
        <div class="name">${item.fullName}</div>
        <div class="email">${item.email}</div>
        <div class="contact">
          <div class="mobile">Mobile: <span>${item.mobile}</span></div>
          <div class="gender">Gender: <span>${item.gender}</span></div>
        </div>
      </div>`;
});

parent.innerHTML = card;
