const texto = "Olá! Sou o Eduardo Bortolato";
const elemento = document.querySelector(".digitando");
let index = 0;
let intervalo;

function digitar() {
  if (index < texto.length) {
    elemento.textContent += texto.charAt(index);
    index++;
  } else {
    clearInterval(intervalo);
  }
}

// Detecta quando a seção aparece na tela
const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      elemento.textContent = "";
      index = 0;
      clearInterval(intervalo);
      intervalo = setInterval(digitar, 100);
    }
  },
  {
    threshold: 0.6, // dispara quando 60% da seção estiver visível
  }
);

observer.observe(document.querySelector(".sobre"));
