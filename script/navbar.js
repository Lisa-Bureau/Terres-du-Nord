const buttons = document.querySelectorAll(".cercle-border");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((otherButton) => {
            otherButton.classList.remove("active");
        });
        
        button.classList.add("active");
    })
})