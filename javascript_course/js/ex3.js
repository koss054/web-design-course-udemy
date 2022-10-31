// First problem solution
function convertTemperature(celsius) {
    return (9 * celsius / 5) + 32;
}

document.getElementById("convert").onclick = function() {
    let celsius = document.getElementById("temp_celsius").value;
    document.getElementById("temp_fahr").textContent = convertTemperature(celsius);
};

// Second problem solution
let startYear = 2022;
let endYear = 2050;
let yearElement = document.getElementById("anos_copa");

yearElement.textContent = "";

for (; startYear <= endYear; startYear += 4) {
    yearElement.innerHTML += '<li>' + startYear + '</li>';
}