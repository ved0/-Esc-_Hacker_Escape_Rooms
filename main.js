
const menuButton = document.querySelector("header > div.menuButton");
const header = document.querySelector("header");
const nav = document.querySelector("nav")

menuButton.addEventListener("click", function () {
    nav.insertBefore(menuButton, nav.firstChild);
    if (nav.classList.toggle("open")) {
        menuButton.style.zIndex = 1000;
        changeButton();
        nav.insertBefore(menuButton, nav.firstChild);
    } else {
        changeButtonToOriginal();
        header.insertBefore(menuButton, header.lastChild);
    }

}, false);


function changeButton() {
    const lineToHide = document.querySelectorAll("nav > div >img");
    let counter = 0;
    lineToHide.forEach(line => {
        if (counter == 0) {
            line.style.transform = "rotate(45deg)";
            line.classList.add("menuButtonLines");
            counter++;
        } else if (counter == 1) {
            line.style.display = "none";
            counter++;
        } else {
            line.style.transform = "rotate(-45deg)";
            line.style.padding = "0px";
            line.classList.add("menuButtonLines");
        }
    });
}

function changeButtonToOriginal() {
    const lineToShow = document.querySelectorAll("nav > div >img");
    let counter = 0;
    lineToShow.forEach(line => {
        if (counter == 0) {
            line.style.transform = "none";
            line.classList.remove("menuButtonLines");
            counter++;
        } else if (counter == 1) {
            line.style.display = "block";
            counter++;
        } else {
            line.style.transform = "none";
            line.style.paddingTop = "24px";
            line.classList.remove("menuButtonLines");
        }
    });
}