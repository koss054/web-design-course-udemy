/* alert("Testing the alert command");
console.log("Testing the console log"); */

// Date & Time Challenge
/* let orderDate = new Date("2020-03-26");
let deliverDate = new Date("2020-04-02");

let difference = Math.floor((deliverDate - orderDate) / 86400000);

document.getElementById("delivery_time").textContent = difference.toString(); */

// Date & Time Extra CHallenge
/* let orderDate = new Date("2020-03-26");
let daysToDeliver = 7;

let deliverDate = orderDate;
deliverDate.setDate(orderDate.getDate() + daysToDeliver);

console.log(deliverDate); */

// Clock Challenge
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");

window.setInterval(function(){
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    hours = hours < 10 ? "0" + hours.toString() : hours.toString();
    minutes = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    seconds = seconds < 10 ? "0" + seconds.toString() : seconds.toString();

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}, 1000);
