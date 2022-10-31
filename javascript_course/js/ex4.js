// First problem solution
let shipments = 
        {
            'standard': {
                'leadTime': 7,
                'fee': 2
            },
            'express': {
                'leadTime': 3,
                'fee': 4.5
            }
        };

document.getElementById("shipments").onchange = function() {
    let selectedField = document.getElementById("shipments");
    let selectedOption = selectedField.options.selectedIndex;

    let shipmentType  = "";
    shipmentType = selectedOption == 1 ? shipmentType = 'standard' : shipmentType = 'express';

    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;
    let currentDay = date.getDate();

    document.getElementById("order_date").textContent = currentYear + "-" + currentMonth + "-" + currentDay;
}