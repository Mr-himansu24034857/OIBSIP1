function convertTemperature() {
  const tempInput = document.getElementById("temperatureInput").value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const resultDiv = document.getElementById("result");

  if (tempInput === "" || isNaN(tempInput)) {
    resultDiv.innerHTML = "Please enter a valid number!";
    return;
  }

  const temperature = parseFloat(tempInput);
  let result = "";

  if (unit === "Celsius") {
    result += `${(temperature * 9/5 + 32).toFixed(2)} °F (Fahrenheit)<br>`;
    result += `${(temperature + 273.15).toFixed(2)} K (Kelvin)`;
  } else if (unit === "Fahrenheit") {
    result += `${((temperature - 32) * 5/9).toFixed(2)} °C (Celsius)<br>`;
    result += `${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K (Kelvin)`;
  } else if (unit === "Kelvin") {
    result += `${(temperature - 273.15).toFixed(2)} °C (Celsius)<br>`;
    result += `${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F (Fahrenheit)`;
  }

  resultDiv.innerHTML = result;
}
