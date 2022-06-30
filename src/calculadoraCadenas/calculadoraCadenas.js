function calculadora(cadena) {
  if (cadena == "") {
    return 0;
  }
  if (cadena.length > 1) {
    let suma = cadena.split("+");

    return suma.reduce((a, b) => parseInt(a) + parseInt(b));
  }
  return parseInt(cadena);
}

export default calculadora;
