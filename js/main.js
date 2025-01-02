// BURGERMENU //

const burgerMenu = document.querySelector('.burgermenu');
const dropdownMenu = document.querySelector('.dropdown-menu');


document.querySelector(".dropdown-menu").classList.remove("hide");


burgerMenu.addEventListener('click', function() {

    if(dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block';
    }

    else {
        dropdownMenu.style.display = 'none';
    }
});

// BURGERMENU //



// PORTFOLIO //

document.querySelector("#portfolio-container1").addEventListener("click", function () {
    const element = document.getElementById("element1");
  
    if (element.classList.contains("overlay_2_hidden")) {
      element.classList.remove("overlay_2_hidden");
      element.classList.add("overlay_2");
    } else if (element.classList.contains("overlay_2")) {
      element.classList.remove("overlay_2");
      element.classList.add("overlay_2_hidden");
    }
  });

document.querySelector("#portfolio-container2").addEventListener("click", function () {
    const element = document.getElementById("element2");
  
    if (element.classList.contains("overlay_2_hidden")) {
      element.classList.remove("overlay_2_hidden");
      element.classList.add("overlay_2");
    } else if (element.classList.contains("overlay_2")) {
      element.classList.remove("overlay_2");
      element.classList.add("overlay_2_hidden");
    }
  });

  document.querySelector("#portfolio-container3").addEventListener("click", function () {
    const element = document.getElementById("element3");
  
    if (element.classList.contains("overlay_2_hidden")) {
      element.classList.remove("overlay_2_hidden");
      element.classList.add("overlay_2");
    } else if (element.classList.contains("overlay_2")) {
      element.classList.remove("overlay_2");
      element.classList.add("overlay_2_hidden");
    }
  });

  document.querySelector("#portfolio-container4").addEventListener("click", function () {
    const element = document.getElementById("element4");
  
    if (element.classList.contains("overlay_2_hidden")) {
      element.classList.remove("overlay_2_hidden");
      element.classList.add("overlay_2");
    } else if (element.classList.contains("overlay_2")) {
      element.classList.remove("overlay_2");
      element.classList.add("overlay_2_hidden");
    }
  });

  document.querySelector("#portfolio-container5").addEventListener("click", function () {
    const element = document.getElementById("element5");
  
    if (element.classList.contains("overlay_2_hidden")) {
      element.classList.remove("overlay_2_hidden");
      element.classList.add("overlay_2");
    } else if (element.classList.contains("overlay_2")) {
      element.classList.remove("overlay_2");
      element.classList.add("overlay_2_hidden");
    }
  });

  document.querySelector("#portfolio-container6").addEventListener("click", function () {
    const element = document.getElementById("element6");
  
    if (element.classList.contains("overlay_2_hidden")) {
      element.classList.remove("overlay_2_hidden");
      element.classList.add("overlay_2");
    } else if (element.classList.contains("overlay_2")) {
      element.classList.remove("overlay_2");
      element.classList.add("overlay_2_hidden");
    }
  });

// PORTFOLIO //
