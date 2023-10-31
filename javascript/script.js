var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";}





 // JavaScript-kod för att hantera kundvagnsinteraktionen
let antalProdukter = 0;
const kundvagnIkon = document.querySelector('.kundvagn');
const kundvagnAntal = document.getElementById('kundvagn-antal');

const köpKnappar = document.querySelectorAll('.köp-knapp');
köpKnappar.forEach((knapp) => {
  knapp.addEventListener('click', () => {
    antalProdukter++;
    uppdateraKundvagn();
  });
});

function uppdateraKundvagn() {
  kundvagnAntal.textContent = antalProdukter;
}

// Övriga JavaScript-interaktioner efter behov





var video = document.getElementById("myVideo");

function toggleVideo() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

