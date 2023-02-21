menuBtn = document.querySelector(".menu");
mainNav = document.querySelector(".nav-wrapper");
extensionContent = document.querySelectorAll(".extension");
extensionBtn = document.querySelectorAll(".main-btn");
arrowDark = document.querySelectorAll(".arrow-dark");

menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("hide");

    if (mainNav.classList.contains("hide")) {
        menuBtn.src = "images/icon-hamburger.svg";
    } else {
        menuBtn.src = "images/icon-close.svg";
    }
});

for (let i = 0; i < extensionBtn.length; i++) {
    extensionBtn[i].addEventListener("click", () => {
        extensionContent[i].classList.toggle("hide-extension");
        arrowDark[i].classList.toggle("arrow-transform");
        extensionBtn[i].classList.toggle("opacity-drop");
    });
}
