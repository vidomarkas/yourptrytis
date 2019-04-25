const hideCookies = () => {
  const btn = document.getElementById("cookies_agreed");
  const cookiesTable = document.getElementById("cookies");

  btn.addEventListener("click", () => {
    cookiesTable.style.display = "none";
  });
};

hideCookies();

const personalCard = document.getElementById("personalCard");
const dietCard = document.getElementById("dietCard");
const consultCard = document.getElementById("consultCard");
const planCard = document.getElementById("planCard");

const personalOverlay = document.getElementById("personalOverlay");
const consOverlay = document.getElementById("consOverlay");
const planOverlay = document.getElementById("planOverlay");
const dietOverlay = document.getElementById("dietOverlay");

const mainPersonal = document.getElementById("mainPersonal");
const mainConsult = document.getElementById("mainConsult");
const mainPlans = document.getElementById("mainPlans");
const mainDiet = document.getElementById("mainDiet");

const packagesBtn = document.getElementById("packagesBtn");
const packages = document.getElementById("packages");
const packagesBack = document.getElementById("packagesBack");

// packagesBtn.addEventListener("click", () => {
//     packages.classList.toggle("hidden")
// });

// packagesBack.addEventListener("click", () => {
//     packages.classList.add("hidden");
// });

personalCard.addEventListener("click", () => {
  personalOverlay.classList.remove("overlay");
  consOverlay.classList.add("overlay");
  planOverlay.classList.add("overlay");
  dietOverlay.classList.add("overlay");
  mainPersonal.classList.remove("hidden");

  mainDiet.classList.add("hidden");
  mainConsult.classList.add("hidden");
  mainPlans.classList.add("hidden");
});
dietCard.addEventListener("click", () => {
  personalOverlay.classList.add("overlay");
  consOverlay.classList.add("overlay");
  planOverlay.classList.add("overlay");
  dietOverlay.classList.remove("overlay");
  mainDiet.classList.remove("hidden");

  mainPersonal.classList.add("hidden");
  mainConsult.classList.add("hidden");
  mainPlans.classList.add("hidden");
  //   packages.classList.add("hidden");
});
consultCard.addEventListener("click", () => {
  personalOverlay.classList.add("overlay");
  consOverlay.classList.remove("overlay");
  planOverlay.classList.add("overlay");
  dietOverlay.classList.add("overlay");
  mainConsult.classList.remove("hidden");

  mainDiet.classList.add("hidden");
  mainPersonal.classList.add("hidden");
  mainPlans.classList.add("hidden");
  //   packages.classList.add("hidden");
});
planCard.addEventListener("click", () => {
  personalOverlay.classList.add("overlay");
  consOverlay.classList.add("overlay");
  planOverlay.classList.remove("overlay");
  dietOverlay.classList.add("overlay");
  mainPlans.classList.remove("hidden");

  mainDiet.classList.add("hidden");
  mainConsult.classList.add("hidden");
  mainPersonal.classList.add("hidden");
  //   packages.classList.add("hidden");
});

//modal

const modal = document.getElementById("modal__background");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalText = document.getElementById("modal-text");
const modalAge = document.getElementById("modal-age");

const modalClose = document.querySelector(".modal__close");

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});
const clients = [
  document.getElementById("client1"),
  document.getElementById("client2"),
  document.getElementById("client3"),
  document.getElementById("client4"),
  document.getElementById("client5"),
  document.getElementById("client6"),
  document.getElementById("client7"),
  document.getElementById("client8"),
  document.getElementById("client9"),
  document.getElementById("client10")
];

clients.forEach(client => {
  client.addEventListener("click", () => {
    modal.style.display = "block";
    modalText.innerHTML = client.dataset.text;
    modalName.innerHTML = client.dataset.name;
    modalImg.src = client.dataset.picture;
    if (client.dataset.age) {
      modalAge.innerHTML = ", " + client.dataset.age;
    } else {
      modalAge.innerHTML = "";
    }
  });
});
