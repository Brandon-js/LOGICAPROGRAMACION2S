let temperaturaCelsius;


do {
  let input = prompt("¿Cuántos gradoshay hoy?");
  temperaturaCelsius = parseFloat(input);

  
  if (isNaN(temperaturaCelsius)) {
    alert("Por favor, ingrese un número válido.");
  }
} while (isNaN(temperaturaCelsius));

let temperaturaFarenheit = (temperaturaCelsius * 9/5) + 32;
let temperaturaKelvin = temperaturaCelsius + 273.15;

document.write(`Hay ${temperaturaCelsius} grados Celsius, lo que equivale a ${temperaturaFarenheit} grados Fahrenheit y ${temperaturaKelvin} grados Kelvin`);