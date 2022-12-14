
// Mobile Menu

document.getElementById("hamburguer-icon").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}

document.getElementById("sliding-header-menu-close-button").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}

// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

let aboutUsTabs = document.getElementsByClassName("single-tab");

for (let i = 0; i < aboutUsTabs.length; i++) {
  aboutUsTabs[i].onclick = function() {
    aboutUsTabs[i].style.backgroundColor = seletectedColor;
    aboutUsTabs[i].style.fontWeight = "bold";

    for (let k = 0; k < aboutUsTabs.length; k++) {
      if (k != i) {
        aboutUsTabs[k].style.backgroundColor = unseletectedColor;
        aboutUsTabs[k].style.fontWeight = "normal";
      }
    }

    let currentTab = aboutUsTabs[i].textContent;
    document.getElementById("box-text").innerHTML = aboutUs[currentTab];
  }
}

// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

let currentServiceIndex = 0;

document.getElementById("service-next").onclick = function() {
  currentServiceIndex = currentServiceIndex == ourServices.length - 1 
    ? currentServiceIndex = 0 : currentServiceIndex += 1; 

  document.getElementById("service-title").innerHTML = ourServices[currentServiceIndex].title + ".";
  document.getElementById("service-text").innerHTML = ourServices[currentServiceIndex].text;
}

document.getElementById("service-previous").onclick = function() {
  currentServiceIndex = currentServiceIndex == 0 
    ? currentServiceIndex = ourServices.length - 1 : currentServiceIndex -= 1;

  document.getElementById("service-title").innerHTML = ourServices[currentServiceIndex].title + ".";
  document.getElementById("service-text").innerHTML = ourServices[currentServiceIndex].text;  
}


// Footer

let currentDate = new Date();

document.getElementById("current_year").innerHTML = currentDate.getFullYear();
   


   