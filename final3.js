"use strict";



var photoDivs2 = document.getElementsByClassName("imageHolder2");

var nextButton2 = document.getElementById("button_next2");

var previousButton2 = document.getElementById("button_previous2");


var currentPhotoNumber2 = 0;

photoDivs2[currentPhotoNumber2].classList.remove('hideThisDiv2');

nextButton2.addEventListener('click', function() {
  photoDivs2[currentPhotoNumber2].classList.add("hideThisDiv2");
  currentPhotoNumber2 = currentPhotoNumber2 + 1;

  if (currentPhotoNumber2 === photoDivs2.length) {
    currentPhotoNumber2 = 0;
  }

  photoDivs2[currentPhotoNumber2].classList.remove('hideThisDiv2');

});

previousButton2.addEventListener('click', function() {
  photoDivs2[currentPhotoNumber2].classList.add("hideThisDiv2");
  currentPhotoNumber2 = currentPhotoNumber2 - 1;

  if (currentPhotoNumber2 < 0) {
    currentPhotoNumber2 = photoDivs2.length - 1;
  }

  photoDivs2[currentPhotoNumber2].classList.remove('hideThisDiv2');

});
