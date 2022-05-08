// LET THE VARIABLES BEGIN
let homeButton = document.getElementById("home-button");
let triviaButton = document.getElementById("trivia-button");
let formButton = document.getElementById("form-button");
let bioButton = document.getElementById("bio-button");
let statsButton = document.getElementById("stats-button");
let locationButton = document.getElementById("location-button");
let movesButton = document.getElementById("moves-button");

let menuDiv = document.querySelector(".mobile-menu");
let navDiv = document.querySelector(".nav-container");

let homePage = document.getElementById("home-page");
let triviaPage = document.getElementById("trivia-page");
let unovaBio = document.getElementById("unova-bio");
let hisuiBio = document.getElementById("hisui-bio");
let unovaStats = document.getElementById("unova-stats");
let hisuiStats = document.getElementById("hisui-stats");
let unovaLocations = document.getElementById("unova-locations");
let hisuiLocations = document.getElementById("hisui-locations");
let unovaMoveset = document.getElementById("unova-moveset");
let hisuiMoveset = document.getElementById("hisui-moveset");

let accordions = document.getElementsByClassName("accordion");

let homeCarousel = document.getElementById("home-carousel");
let triviaCarousel = document.getElementById("trivia-carousel");

let hForm = false;

let currentPage = homePage;

let mql = window.matchMedia("(max-width: 600px)");

// LET THE EVENT LISTENERS BEGIN
carousel(homeCarousel);
carousel(triviaCarousel);

//window.scroll(0, 0);

for (i=0; i<accordions.length; i++) {
    accordions[i].addEventListener("click", showPanel);
    function showPanel() {
        this.classList.toggle("hisui-button");
        var panel = this.nextElementSibling;
        panel.classList.toggle("active");
    }
}

formButton.addEventListener("click", changeForm);
function changeForm() {
    hForm = !hForm;
    formButton.classList.toggle("hisui-button");
    bioButton.classList.toggle("hisui-button");
    statsButton.classList.toggle("hisui-button");
    locationButton.classList.toggle("hisui-button");
    movesButton.classList.toggle("hisui-button");
    if (hForm===false) {
        if (currentPage===hisuiBio) {
            changePage(currentPage=unovaBio);
        } 
        if (currentPage===hisuiStats) {
            changePage(currentPage=unovaStats);
        } 
        if (currentPage===hisuiLocations) {
            changePage(currentPage=unovaLocations);
        } 
        if (currentPage===hisuiMoveset) {
            changePage(currentPage=unovaMoveset);
        }
    }
    if (hForm===true) {
        if (currentPage===unovaBio) {
            changePage(currentPage=hisuiBio);
        } 
        if (currentPage===unovaStats) {
            changePage(currentPage=hisuiStats);
        } 
        if (currentPage===unovaLocations) {
            changePage(currentPage=hisuiLocations);
        } 
        if (currentPage===unovaMoveset) {
            changePage(currentPage=hisuiMoveset);
        }
    } 
}

function changePage(currentPage) {
    window.scroll(0, 0);
    let activeSections = document.querySelectorAll(".active-section");
    activeSections.forEach(activeSection => activeSection.classList.remove("active-section"));
    currentPage.classList.add("active-section");
    if (mql.matches) {
        navDiv.classList.toggle("responsive");
    }
}

homeButton.addEventListener("click", () => {
    changePage(currentPage=homePage);
});

triviaButton.addEventListener("click", () => {
    changePage(currentPage=triviaPage);
});

bioButton.addEventListener("click", () => {
    if (hForm===false) {
        changePage(currentPage=unovaBio);
    }
    if (hForm===true) {
        changePage(currentPage=hisuiBio);
    }
});

statsButton.addEventListener("click", () => {
    if (hForm===false) {
        changePage(currentPage=unovaStats);
    }
    if (hForm===true) {
        changePage(currentPage=hisuiStats);
    }
});

locationButton.addEventListener("click", () => {
    if (hForm===false) {
        changePage(currentPage=unovaLocations);
    }
    if (hForm===true) {
        changePage(currentPage=hisuiLocations);
    }
});

movesButton.addEventListener("click", () => {
    if (hForm===false) {
        changePage(currentPage=unovaMoveset);
    }
    if (hForm===true) {
        changePage(currentPage=hisuiMoveset);
    }
});

function carousel(id) {
    let slides = id.querySelectorAll(".carousel-image");
    let dots = id.querySelectorAll(".dot");
    let backButton = id.querySelector("#back-button");
    let forwardButton = id.querySelector("#forward-button");
    let captions = id.querySelectorAll(".image-caption");
    let slideIndex = 1;
    if (id===triviaCarousel) {
        let dotIndex = 0;
        for (s of slides) {
            dots[dotIndex].innerText = s.alt;
            dotIndex++;
        }
    }
    showSlides();

    //finally, copy/paste code that doesn't destroy everything. homemade. home grown. farm fresh.
    backButton.addEventListener("click", backSlide);
    forwardButton.addEventListener("click", forwardSlide);
    function backSlide() {
    slideIndex = slideIndex-1;
    if (slideIndex < 1) {
        slideIndex=slides.length;
    }
    slides[slideIndex-1].style.animation = "slideInLeft 1s";
    showSlides();
    } 
    function forwardSlide() {
    slideIndex = slideIndex + 1;
    if (slideIndex > slides.length) {
        slideIndex=1;
    }
    slides[slideIndex-1].style.animation = "slideInRight 1s";
    showSlides();
    }

    function showSlides() {
        for (i=0; i<slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
        for (x=0; x<dots.length; x++) {
            dots[x].classList.remove("active-dot");
        }
        dots[slideIndex-1].classList.add("active-dot");
        for (c=0; c<captions.length; c++) {
            captions[c].style.display = "none";
        }
        captions[slideIndex-1].style.display = "block";
    } 

    dots.forEach((element, index) => {
    element.addEventListener("click", changeSlide);
    function changeSlide() {
        slideIndex=index+1;
        slides[slideIndex-1].style.animation = "literallyNothing 0s";
        showSlides();
    }
    }); 
}

if (mql.matches) {
    console.log("hello");
    let menuButton = document.createElement("button");
    menuButton.id = "menu-button";
    menuButton.innerText = "Menu";
    menuDiv.appendChild(menuButton);
    menuButton.classList.add("menu-button");

    menuButton.addEventListener("click", showMenu);
    function showMenu() {
        navDiv.classList.toggle("responsive");
        }
}

mql.onchange = (e) => {
    let menuButton = document.createElement("button");
    menuButton.id = "menu-button";
    if (e.matches) {
    console.log("small");
    menuButton.innerText = "Menu";
    menuDiv.appendChild(menuButton);
    menuButton.classList.add("menu-button");

    menuButton.addEventListener("click", showMenu);
    function showMenu() {
        navDiv.classList.toggle("responsive");
        }
    } else {
    console.log("large");
    document.getElementById("menu-button").remove();
     }
}
