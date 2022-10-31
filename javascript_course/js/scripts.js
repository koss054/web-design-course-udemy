/* alert("Testing the alert command");
console.log("Testing the console log"); */

// Date & Time Challenge
let orderDate = new Date("2020-03-26");
let deliverDate = new Date("2020-04-02");

let difference = Math.floor((deliverDate - orderDate) / 86400000);

document.getElementById("delivery_time").textContent = difference.toString();