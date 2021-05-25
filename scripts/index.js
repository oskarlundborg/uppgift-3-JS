//Modal Script

const modal = document.getElementById("mainModal");
const enterBtn = document.getElementById("modal__enter__btn");
const closeBtn = document.getElementById("modal__close__btn");

enterBtn.onclick = function() {
    modal.style.display = "flex"
}

closeBtn.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}


//Navbar Script

const navbar = document.getElementById("navbar");
const navToggleBtn = document.getElementById("nav__toggle__btn");

navToggleBtn.onclick = function() {
    if (navbar.style.display == "none") {
        navbar.style.display = "flex";
    } else {
        navbar.style.display = "none";
    }
}

