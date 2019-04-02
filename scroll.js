const home = document.getElementById("header");
const homeLink = document.getElementById("homeLink");
const servicesLink = document.getElementById("servicesLink");
const reviews = document.getElementById("reviews");
const contact = document.getElementById("contact");


window.onscroll = function () {

    if (-500 < home.getBoundingClientRect().top && home.getBoundingClientRect().top < 350) {
        homeLink.classList.add("navigation__item--selected");
        servicesLink.classList.remove("navigation__item--selected");
        contactLink.classList.remove("navigation__item--selected");
        reviewsLink.classList.remove("navigation__item--selected");

    } else if (-500 < services.getBoundingClientRect().top && services.getBoundingClientRect().top < 350) {
        homeLink.classList.remove("navigation__item--selected");
        servicesLink.classList.add("navigation__item--selected");
        reviewsLink.classList.remove("navigation__item--selected");
        contactLink.classList.remove("navigation__item--selected");
    } else if (-500 < reviews.getBoundingClientRect().top && reviews.getBoundingClientRect().top < 350) {

        homeLink.classList.remove("navigation__item--selected");
        servicesLink.classList.remove("navigation__item--selected");
        reviewsLink.classList.add("navigation__item--selected");
        contactLink.classList.remove("navigation__item--selected");
    } else if (-800 < contact.getBoundingClientRect().top && contact.getBoundingClientRect().top < 350) {

        homeLink.classList.remove("navigation__item--selected");
        reviewsLink.classList.remove("navigation__item--selected");
        contactLink.classList.add("navigation__item--selected");
        servicesLink.classList.remove("navigation__item--selected");
    }
}

