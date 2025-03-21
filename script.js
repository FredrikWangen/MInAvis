const dropdownElm = document.querySelector(".dropdown-content")
const caretIcon = document.querySelector(".fa-caret-up")

const dropDownElm = document.querySelector("nav .dropbtn")
dropDownElm.addEventListener("click", dropdownKlikk)

function dropdownKlikk(event) {
    // Toggle dropdown visibility
    if (dropdownElm.style.display === "flex") {
        dropdownElm.style.display = "none"
    } else {
        dropdownElm.style.display = "flex"
    }

    // Toggle rotate class on the caret icon
    caretIcon.classList.toggle("rotate")
}

function documentKlikk(event) {
    // Hide the navbar dropdown
    dropdownElm.style.display = "none"
}