const envelopes = document.querySelectorAll(".envelope");


envelopes.forEach((envelope) => {

    envelope.addEventListener("click", () => {

        const memoryNumber = envelope.dataset.memory;

        const memoryScreen = document.getElementById(
            "memory" + memoryNumber
        );


        memoryScreen.classList.add("show");

    });

});



const closeButtons = document.querySelectorAll(".close-memory");


closeButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        button.parentElement.classList.remove("show");

    });

});
