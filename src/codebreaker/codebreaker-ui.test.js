import fs from "fs";

describe("Codebreaker UI", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
  });
  it("muestra un mensaje de bienvenida", () => {
    const h1 = document.querySelector("h1");
    expect(h1.innerHTML).toEqual("Bienvenido al codebreaker");
  });

  it("adivino con codigo ganador", () => {
    const numero = document.querySelector("#numero");
    const form = document.querySelector("#adivinar-submit");
    const resultado = document.querySelector("#resultado");
    numero.value = "5";
    form.click();
    expect(resultado.innerHTML).toEqual("Ganaste!");
  });
});
