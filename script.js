const dropdownElm = document.querySelector(".dropdown-content")
const caretIcon = document.querySelector(".fa-caret-down")

const dropDownElm = document.querySelector("nav .dropbtn")
dropDownElm.addEventListener("click", dropdownKlikk)

function dropdownKlikk(event) {
    // Toggle dropdown visibility
    if (dropdownElm.style.display === "flex") {
        dropdownElm.style.display = "none"
        caretIcon.classList.remove("rotate")
    } else {
        dropdownElm.style.display = "flex"
        caretIcon.classList.add("rotate")
    }
}

// Hide the navbar dropdown when clicking anywhere in the document:
document.body.addEventListener("click", documentKlikk)

function documentKlikk(event) {
    // Hide the navbar dropdown if clicking anywhere:
    if (event.target != dropDownElm) {
        dropdownElm.style.display = "none"
        caretIcon.classList.remove("rotate")
    }
}

