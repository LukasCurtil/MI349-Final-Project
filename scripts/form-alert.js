const submitModal = document.getElementById("submitModal");
const closeSubmitX = document.querySelector(".close-submit-modal");
const closeSubmitBtn = document.getElementById("closeSubmitBtn");
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitModal.style.display = "block";
    document.body.style.overflow = "hidden";
    contactForm.reset();
});

closeSubmitX.addEventListener("click", () => {
    submitModal.style.display = "none";
    document.body.style.overflow = "auto";
});

closeSubmitBtn.addEventListener("click", () => {
    submitModal.style.display = "none";
    document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
    if (e.target === submitModal) {
        submitModal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});
