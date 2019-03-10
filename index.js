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

personalCard.addEventListener("click", () => {
    personalOverlay.classList.remove("overlay");
    consOverlay.classList.add("overlay");
    planOverlay.classList.add("overlay");
    dietOverlay.classList.add("overlay");

})
dietCard.addEventListener("click", () => {
    personalOverlay.classList.add("overlay");
    consOverlay.classList.add("overlay");
    planOverlay.classList.add("overlay");
    dietOverlay.classList.remove("overlay");

})
consultCard.addEventListener("click", () => {
    personalOverlay.classList.add("overlay");
    consOverlay.classList.remove("overlay");
    planOverlay.classList.add("overlay");
    dietOverlay.classList.add("overlay");

})
planCard.addEventListener("click", () => {
    personalOverlay.classList.add("overlay");
    consOverlay.classList.add("overlay");
    planOverlay.classList.remove("overlay");
    dietOverlay.classList.add("overlay");

})