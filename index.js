const hideCookies = () => {
    const btn = document.getElementById("cookies_agreed");
    const cookiesTable = document.getElementById("cookies");

    btn.addEventListener("click", () => {
        cookiesTable.style.display = "none";
    })
}

hideCookies();


const personalCard = document.getElementById("personalCard");
// const personalCard = document.getElementsByClassName("services__personal")[0];

const dietCard = document.getElementById("dietCard");
const consultCard = document.getElementById("consultCard");
const planCard = document.getElementById("planCard");

personalCard.addEventListener("click", () => {
    personalCard.classList.add("active");

    window.getComputedStyle(
        document.getElementById("personalCard"), ':before'
    ).style.setProperty(display, none);



    dietCard.classList.remove("active");
    consultCard.classList.remove("active");
    planCard.classList.remove("active");
})