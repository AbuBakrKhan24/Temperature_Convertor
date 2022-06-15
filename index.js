// Working 100% Celcius to Fahrenheit

function CelciusToFahremheit() {
  let cTemp = document.temp_info.Celcius.value;
  let cToFahr = (cTemp * 9) / 5 + 32;
  let message = cTemp + "\xB0C is " + cToFahr + " \xB0F.";
  console.log(message);
  document.temp_info.Temperature1.value =
    cTemp + "\xB0C is " + cToFahr + " \xB0F.";
}

// Working 100% Fahrenheit to Celcius
function FahrenheitToCelcius() {
  let fTemp = document.temp_info.Fahrenheit.value;
  let fToCel = ((fTemp - 32) * 5) / 9;
  let message = fTemp + "\xB0F is " + fToCel + "\xB0C.";
  console.log(message);
  document.temp_info.Temperature2.value =
    fTemp + "\xB0F is " + fToCel + "\xB0C.";
}
