const multimedias = document.querySelectorAll(".lien-conteneur-photo");
const modal = document.querySelector("#modal");
const modalImg = document.querySelector("#modal-img");
const modalVideo = document.querySelector("#modal-video");
const closeBtn = document.querySelector(".close");

multimedias.forEach((multimedia) => {
    multimedia.addEventListener("click", function(event) {
        event.preventDefault();
        const url = this.href;
        modal.showModal();

        modalImg.style.display = "none";
        modalVideo.style.display = "none";
        modalVideo.pause();

        if (url.match(/\.(mp4|mov)$/i)) {
            modalVideo.src = url;
            modalVideo.style.display = "block";
        } else {
            modalImg.src = url;
            modalImg.style.display = "block";
        }
    })
})

closeBtn.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});