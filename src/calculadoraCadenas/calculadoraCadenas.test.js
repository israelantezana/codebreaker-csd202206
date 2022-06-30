import calculadora from "./calculadoraCadenas";

describe("CalculadoraCadenas", () => {
  it("toma en cuenta una cadena vacia", () => {
    const resultado = calculadora("");
    expect(resultado).toEqual(0);
  });

  it("cadena con un solo numero", () => {
    const resultado = calculadora("6");
    expect(resultado).toEqual(6);
  });

  it("cadena con una suma de 2 numeros", () => {
    const resultado = calculadora("6+2");
    expect(resultado).toEqual(8);
  });

  it("cadena con una suma de 3 numeros", () => {
    const resultado = calculadora("6+2+12");
    expect(resultado).toEqual(20);
  });
});
