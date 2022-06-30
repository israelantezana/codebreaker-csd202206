import fs from "fs";

describe("Codebreaker UI", () => {
  it("muestra un mensaje de bienvenida", () => {
    document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
    const h1 = document.querySelector("h1");
    expect(h1.innerHTML).toEqual("Bienvenido al codebreaker");
  });
});
