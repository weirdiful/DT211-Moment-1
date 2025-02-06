"use strict";

// Hämta modalen
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Hämta alla bilder med klassen "myImg"
var images = document.querySelectorAll(".myImg");

// Lägg till klick-händelse på varje bild
images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

// Stäng modalen vid klick på stängningsknappen
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
};

// Stäng modalen om användaren klickar utanför bilden
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};