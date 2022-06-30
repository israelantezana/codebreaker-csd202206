import Codebreaker from "./codebreaker";

describe("Codebreaker logica", () => {
  it("reconoce como ganador si codigo coincide", () => {
    const cb = new Codebreaker("5");
    const mensaje = cb.adivinar("5");
    expect(mensaje).toEqual("Ganaste!");
  });

  it("no da ninguna pista si el intento no coincide", () => {
    const cb = new Codebreaker("5");
    const mensaje = cb.adivinar("3");
    expect(mensaje).toEqual("");
  });
});
