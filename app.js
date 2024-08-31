const nav = document.querySelector("header");
const scrollPage = document.querySelector("#scroll");

window.addEventListener("DOMContentLoaded", () => {
    scrollPage.classList.toggle("scrol-up");
})

window.addEventListener("scroll", function() {
    if(window.pageYOffset  >= 60) {
        nav.classList.add("fixed");
    }
    else{
        nav.classList.remove("fixed");
    }
    
    if(window.pageYOffset  >= 380) {
        scrollPage.classList.add("scrol-up");
    }
    else{
        scrollPage.classList.remove("scrol-up");
    }
});