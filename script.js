const engineButton = document.querySelector(".engine-button");
const car = document.querySelector(".car-wrapper");
const hearts = document.querySelector(".heart-trail");

engineButton.addEventListener("click", () => {
    engineButton.style.display = "none";

    hearts.style.opacity = "1";
    car.classList.add("drive-away");
});

const reverseButton = document.querySelector(".reverse-button");

reverseButton.addEventListener("touchstart", () => {
    reverseButton.style.transform = "translateX(120px)";
});
