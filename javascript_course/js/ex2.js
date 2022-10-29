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

// Second problem solution
let classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 

document.getElementById("best_students").innerHTML = classification.slice(0, 3);