function klikk() {
    const dropdownElm = document.querySelector(".dropdown-content");
    const caretIcon = document.querySelector(".fa-caret-up");

    // Toggle dropdown visibility
    if (dropdownElm.style.display === "flex") {
        dropdownElm.style.display = "none";
    } else {
        dropdownElm.style.display = "flex";
    }

    // Toggle rotate class on the caret icon
    caretIcon.classList.toggle("rotate");
}