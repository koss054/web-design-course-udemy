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

// Second problem solution
let phones = 
        {
            'iphone_se_red': {
                'name': 'iPhone SE 64GB Red',
                'price': '450',
                'currency': 'US$',
                'imageUrl': "https://images.zentail.com/1021/272f41324a8ec0659ee7041c878f5ea0b682b3056482be112a3352dbfb729f63.jpg"
            },
            'iphone_11_black': {
                'name': 'iPhone 11 128GB Black',
                'price': '869',
                'currency': 'EUR',
                'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
            },
            'iphone_8_plus_silver': {
                'name': 'iPhone 8 Plus 64GB Silver',
                'price': '519',
                'currency': 'US$',
                'imageUrl': "https://th.bing.com/th/id/R.d0ec7d2c283165ebc68c0fc56f78f971?rik=6YCtwUCDT%2bo0Qg&pid=ImgRaw&r=0"
            }
        };

let currentPhone;

document.getElementById("iPhones").onchange = function() {
    let radio = document.getElementsByName("product");
    
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            currentPhone = phones[radio[i].value];

            document.getElementById("phone_image").src = currentPhone.imageUrl;
            document.getElementById("phone_name").textContent = currentPhone.name;
            document.getElementById("phone_price").textContent = currentPhone.currency + " " + currentPhone.price;
        }
    }
}

// Third problem solution
let isOn = false;

let ms = 0;
let sec = "0" + 0;
let min = "0" + 0;
let hour = "0" + 0;

document.getElementById("start_stop").onclick = function() {
    isOn = isOn == false ? isOn = true : isOn = false;

    if (isOn) {
        var stopwatchInterval = window.setInterval(function() {
            ms++;

            if (ms == 200) {
                sec++;

                if (sec < 10) {
                    sec = "0" + sec;
                }

                ms = 0;
            }

            if (sec == 60) {
                min++;

                if (min < 10) {
                    min = "0" + min;
                }

                sec = "0" + 0;
            }

            if (min == 60) {
                hour++;

                if (hour < 10) {
                    hour = "0" + hour;
                }

                min = "0" + 0;
            }

            if (ms < 10) {
                document.getElementById("stopwatch").textContent 
                = hour + ":" + min + ":" + sec + " 00" + ms;
            }
            else if (ms < 100) {
                document.getElementById("stopwatch").textContent 
                    = hour + ":" + min + ":" + sec + " 0" + ms;
            }
            else {
                document.getElementById("stopwatch").textContent 
                    = hour + ":" + min + ":" + sec + " " + ms;
            }

            

            if (!isOn) {
                clearInterval(stopwatchInterval);
            }
        }, 1)
    }       
}

document.getElementById("reset").onclick = function() {
    isOn = false;

    ms = "0" + 0;
    sec = "0" + 0;
    min = "0" + 0;
    hour = "0" + 0;

    ms--;
}