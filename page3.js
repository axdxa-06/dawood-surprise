console.log("Page 3 JS loaded");


const envelopes = document.querySelectorAll(".envelope");


console.log("Envelopes found:", envelopes.length);



envelopes.forEach((envelope) => {

    envelope.addEventListener("click", () => {


        const memoryNumber = envelope.dataset.memory;


        const memoryScreen = document.getElementById(
            "memory" + memoryNumber
        );


        if (memoryScreen) {

            memoryScreen.classList.add("show");

        }


    });

});





const closeButtons = document.querySelectorAll(".close-memory");



closeButtons.forEach((button) => {


    button.addEventListener("click", () => {


        const memoryScreen = button.closest(".memory-screen");


        memoryScreen.classList.remove("show");


    });


});
