const buttons = document.querySelectorAll(".learn-more-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const lessonCard = button.parentElement;
    lessonCard.classList.toggle("active");
  });
});
