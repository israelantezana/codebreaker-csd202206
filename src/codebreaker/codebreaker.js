export default class Codebreaker {
  constructor(secreto) {
    this.secreto = secreto;
  }
  adivinar(numero) {
    if (this.secreto == numero) {
      return "Ganaste!";
    }
    return "";
  }
}
