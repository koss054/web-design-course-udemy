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

// Third problem solution
document.getElementById("calculate").onclick = function() {
    let studentResultElement = document.getElementById("result");

    let firstGrade = parseInt(document.getElementById("grade1").value);
    let secondGrade =parseInt(document.getElementById("grade2").value);
    let absences = document.getElementById("absences").value;

    console.log(firstGrade);
    console.log(secondGrade);
    console.log(absences);

    const TOTAL_CLASSES = 20;
    const MIN_ABSENCE_ALLOWED = 30;
    const MIN_GRADE_REQUIRED = 6.5;

    let absencesPercentage = (absences * 100) / TOTAL_CLASSES;
    let averageGrade = (firstGrade + secondGrade) / 2;

    console.log(absencesPercentage);
    console.log(averageGrade);

    studentResultElement.textContent = "Grade: " + averageGrade + " || Missed Classes: " + absencesPercentage + "% || ";

    if (absencesPercentage > MIN_ABSENCE_ALLOWED && averageGrade < 6.5) {
        studentResultElement.textContent += "FAILED BECAUSE OF: Both";
    } else if (absencesPercentage > MIN_ABSENCE_ALLOWED) {
        studentResultElement.textContent += "FAILED BECAUSE OF: Absences";
    } else if (averageGrade < MIN_GRADE_REQUIRED) {
        studentResultElement.textContent += "FAILED BECAUSE OF: Insufficient Grade";
    } else {
        studentResultElement.textContent += "PASSED";
    }
}