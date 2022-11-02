
var products = {
    'white': {
        
        'plain': {
            'unit_price': 5.12,
            'photo': 'v-white.jpg' 
        },
        'printed': {
            'unit_price': 8.95,
            'photo': 'v-white-personalized.jpg' 
        }
    },
    
    'colored': {
        'plain': {
            'unit_price': 6.04,
            'photo': 'v-color.jpg' 
        },
        'printed': {
            'unit_price': 9.47,
            'photo': 'v-color-personalized.png' 
        }
    }
}


// Search params

var search_params = {
    "quantity": "",
    "color": "",
    "quality": "",
    "style": "",
}


// Additional pricing rules:

// 1. The prices above are for Basic quality (q150). 
// The high quality shirt (190g/m2) has a 12% increase in the unit price.

// 2. Apply the following discounts for higher quantities: 
    // 1: above 1.000 units - 20% discount
    // 2: above 500 units - 12% discount
    // 3: above 100 units - 5% discount


// Solution:

$(function(){
    let selectedQuantity = parseInt($("#quantity").val());
    let selectedColor = "white";                            // Default color is white
    let selectedStyle = $("#style").val();
    let currentTShirtImage = $("#photo-product");

    // Quantity functionality
    $("#quantity").change(function() {
        selectedQuantity = parseInt($("#quantity").val());
    });

    // Color buttons functionality
    $("#white").click(function() {
        $("#white").addClass("selected");
        $("#colored").removeClass("selected");

        selectedColor = "white";
    });
    
    $("#colored").click(function() {
        $("#colored").addClass("selected");
        $("#white").removeClass("selected");

        selectedColor = "colored";
    });

    // Quality of fabric buttons functionality
    $("#q150").click(function() {
        $("#q150").addClass("selected");
        $("#q190").removeClass("selected");
        console.log("qt150 clicked");
    });

    $("#q190").click(function() {
        $("#q190").addClass("selected");
        $("#q150").removeClass("selected");
        console.log("q190 clicked");
    });

    // Style functionality
    $("#style").change(function() {
        selectedStyle = $("#style").val();
    });

    // Change image function
/*     function changeImage(color, style, image) {
        if (color == "") {
            currentTShirtImage = selectedStyle == "printed"
            ? currentTShirtImage.attr("src", "img/v-white-personalized.jpg")
            : currentTShirtImage.attr("src", "img/v-white.jpg");
        }
    } */

});










