// First problem solution
function convertTemperature(celsius) {
    return (9 * celsius / 5) + 32;
}

document.getElementById("fahr_1").innerHTML =
    convertTemperature(parseInt(document.getElementById("celsius_1").innerHTML));

document.getElementById("fahr_2").innerHTML =
    convertTemperature(parseInt(document.getElementById("celsius_2").innerHTML));

document.getElementById("fahr_3").innerHTML =
    convertTemperature(parseInt(document.getElementById("celsius_3").innerHTML));