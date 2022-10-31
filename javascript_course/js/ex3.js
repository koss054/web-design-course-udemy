// First problem solution
function convertTemperature(celsius) {
    return (9 * celsius / 5) + 32;
}

document.getElementById("convert").onclick = function() {
    let celsius = document.getElementById("temp_celsius").value;
    document.getElementById("temp_fahr").textContent = convertTemperature(celsius);
};