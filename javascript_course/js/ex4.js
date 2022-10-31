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

    let orderDate = new Date();    

    document.getElementById("order_date").textContent 
        = orderDate.getFullYear() + "-" + (orderDate.getMonth() + 1) + "-" + orderDate.getDate();
    
    let deliveryDate = new Date();
    deliveryDate.setDate(orderDate.getDate() + shipments[shipmentType].leadTime);

    document.getElementById("delivery_date").textContent 
        = deliveryDate.getFullYear() + "-" + (deliveryDate.getMonth() + 1) + "-" + deliveryDate.getDate();

    document.getElementById("delivery_fee").textContent = shipments[shipmentType].fee;
}