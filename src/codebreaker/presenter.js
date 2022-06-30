import Codebreaker from "./codebreaker";

const numero = document.querySelector("#numero");
const form = document.querySelector("#form-adivinar");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cb = new Codebreaker("5");
  const mensaje = cb.adivinar(numero.value);

  resultado.innerHTML = mensaje;
});
