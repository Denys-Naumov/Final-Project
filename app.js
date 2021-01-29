// LANGUAGE
let languageSelect = document.querySelector(".language");
let languageImg = document.querySelectorAll(".language-img");

function changeLanguage (addEl1, addEl2, addEl3, remEl1, remEl2, remEl3) {
    languageImg[0].classList.add(addEl1);
    languageImg[1].classList.add(addEl2);
    languageImg[2].classList.add(addEl3);
    languageImg[0].classList.remove(remEl1);
    languageImg[1].classList.remove(remEl2);
    languageImg[2].classList.remove(remEl3);
}

languageSelect.addEventListener("change", function() {
    if (this.value == "eng") {
        changeLanguage ("show-inline","hide","hide","hide","show-inline","show-inline");
    } else if (this.value == "ukr") {
        changeLanguage ("hide", "show-inline","hide","show-inline","hide","show-inline");
    } else if (this.value == "ru") {
        changeLanguage ("hide","hide","show-inline","show-inline","show-inline","hide");
    } else {
        console.log("Error (Header Language Bar)");
    }
})

// MOBILE MENU

mobileMenu = document.querySelector(".nav-mobile-menu");
mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click", function(){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu")
    }
})