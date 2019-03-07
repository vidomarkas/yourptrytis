const nav = document.getElementById("navigation");
const services = document.getElementById("services");
const servicesLink = document.getElementsByClassName("navigation__item")[1];

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

if (isElementInViewport(navigation)) {
    servicesLink.classList.add("navigation__item--selected");
    console.log("added");
} 