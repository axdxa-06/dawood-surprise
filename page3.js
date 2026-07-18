console.log("Page 3 JS loaded");

const envelopes = document.querySelectorAll(".envelope");

console.log("Envelopes found:", envelopes.length);


envelopes.forEach((envelope) => {

    envelope.addEventListener("click", () => {

        console.log("Envelope clicked");

        envelope.classList.add("open");

    });

});
