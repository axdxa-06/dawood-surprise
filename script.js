const engineButton = document.querySelector(".engine-button");
const car = document.querySelector(".car-wrapper");
const hearts = document.querySelector(".heart-trail");

engineButton.addEventListener("click", () => {
    engineButton.style.display = "none";

    hearts.style.opacity = "1";
    hearts.classList.add("heart-fade");

    car.classList.add("drive-away");
});

const reverseButton = document.querySelector(".reverse-button");

reverseButton.addEventListener("touchstart", () => {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 150 - 75;

    reverseButton.style.transform = `translate(${x}px, ${y}px)`;
});
