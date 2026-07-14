const engineButton = document.querySelector(".engine-button");
const car = document.querySelector(".car-wrapper");

engineButton.addEventListener("click", () => {
    engineButton.style.display = "none";
    car.style.transform = "translateX(500px)";
});
