const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav__menu")

let navOpen = false

navBtn.addEventListener("click" , function() {
    if (navOpen){
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("nav__menu--open")
        navOpen = false
    } else{
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav__menu--open")
        navOpen = true
    }


}) 