const hideCookies = () => {
    const btn = document.getElementById("cookies_agreed");
    const cookiesTable = document.getElementById("cookies");

    btn.addEventListener("click", () => {
        cookiesTable.style.display = "none";
    })
}

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

packagesBtn.addEventListener("click", () => {
    packages.classList.toggle("hidden")
});

packagesBack.addEventListener("click", () => {
    packages.classList.toggle("hidden")
});


personalCard.addEventListener("click", () => {
    personalOverlay.classList.remove("overlay");
    consOverlay.classList.add("overlay");
    planOverlay.classList.add("overlay");
    dietOverlay.classList.add("overlay");
    mainPersonal.classList.remove("hidden");


    mainDiet.classList.add("hidden");
    mainConsult.classList.add("hidden");
    mainPlans.classList.add("hidden");

})
dietCard.addEventListener("click", () => {
    personalOverlay.classList.add("overlay");
    consOverlay.classList.add("overlay");
    planOverlay.classList.add("overlay");
    dietOverlay.classList.remove("overlay");
    mainDiet.classList.remove("hidden");


    mainPersonal.classList.add("hidden");
    mainConsult.classList.add("hidden");
    mainPlans.classList.add("hidden");

})
consultCard.addEventListener("click", () => {
    personalOverlay.classList.add("overlay");
    consOverlay.classList.remove("overlay");
    planOverlay.classList.add("overlay");
    dietOverlay.classList.add("overlay");
    mainConsult.classList.remove("hidden");

    mainDiet.classList.add("hidden");
    mainPersonal.classList.add("hidden");
    mainPlans.classList.add("hidden");

})
planCard.addEventListener("click", () => {
    personalOverlay.classList.add("overlay");
    consOverlay.classList.add("overlay");
    planOverlay.classList.remove("overlay");
    dietOverlay.classList.add("overlay");
    mainPlans.classList.remove("hidden");

    mainDiet.classList.add("hidden");
    mainConsult.classList.add("hidden");
    mainPersonal.classList.add("hidden");

})

