
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
    let selectedColor = "colored";                              // Default color is colored - can be done better
    let selectedQuality = "Basic (150g / m2)";                  // Default quality is basic - can be done better
    let selectedStyle = $("#style").val();                      
    let currentTShirtImage = $("#photo-product");

    changeImage(selectedColor, selectedStyle, currentTShirtImage);
    changeOrderDetails(selectedStyle, selectedQuality, selectedColor, selectedQuantity);

    // Quantity functionality
    $("#quantity").change(function() {
        selectedQuantity = parseInt($("#quantity").val());
    });

    // Color buttons functionality
    $("#white").click(function() {
        $("#white").addClass("selected");
        $("#colored").removeClass("selected");

        selectedColor = "white";
        changeImage(selectedColor, selectedStyle, currentTShirtImage);
    });
    
    $("#colored").click(function() {
        $("#colored").addClass("selected");
        $("#white").removeClass("selected");

        selectedColor = "colored";
        changeImage(selectedColor, selectedStyle, currentTShirtImage);
    });

    // Quality of fabric buttons functionality
    $("#q150").click(function() {
        $("#q150").addClass("selected");
        $("#q190").removeClass("selected");
        
        selectedQuality = "Basic (150g / m2)";
    });

    $("#q190").click(function() {
        $("#q190").addClass("selected");
        $("#q150").removeClass("selected");
        
        selectedQuality = "High (190g / m2)";
    });

    // Style functionality
    $("#style").change(function() {
        selectedStyle = $("#style").val();

        changeImage(selectedColor, selectedStyle, currentTShirtImage);
        changeOrderDetails(selectedStyle, selectedQuality);
    });

    // Change image function
    function changeImage(color, style, image) {
        if (color == "white") {
            image = style == "printed"
            ? image.attr("src", "img/v-white-personalized.jpg")
            : image.attr("src", "img/v-white.jpg");
        } else if (color == "colored") {
            image = style == "printed"
            ? image.attr("src", "img/v-color-personalized.png")
            : image.attr("src", "img/v-color.jpg");
        }   
    }

    // Change order details function
    function changeOrderDetails(style, quality, color, quantity) {
        $("#result-style").text(style.charAt(0).toUpperCase() + style.slice(1));
        $("#result-quality").text(quality);
        $("#result-color").text(color.charAt(0).toUpperCase() + color.slice(1));
        $("#result-quantity").text(quantity.toString());

        // Total
        let currentProduct = products[color];
        $("#total-price").text((currentProduct[style]["unit_price"] * quantity).toFixed(2));
    }
});










