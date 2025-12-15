const buttons = document.querySelectorAll(".cercle-border");

buttons[1].classList.add("active");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((otherButton) => {
            otherButton.classList.remove("active");
        });
        
        button.classList.add("active");
    })
})