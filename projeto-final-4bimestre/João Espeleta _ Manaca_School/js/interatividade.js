/*botão conheça mais*/
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn-conheca-mais");

  button.classList.add("bounce");

  setTimeout(() => {
    button.classList.remove("bounce");
  }, 1000);
});

/*efeito typing*/
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing-effect");

  typingElement.addEventListener("animationend", () => {
    typingElement.setAttribute("data-typed", "true");
  });
});
