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




// Hämta alla produkter
const products = document.querySelectorAll(".produkt");

// Loopa igenom varje produkt
products.forEach(product => {
    const stars = product.querySelectorAll(".star");
    
    stars.forEach(star => {
        star.addEventListener("click", function () {
            const rating = this.getAttribute("data-rating");

            stars.forEach(s => {
                if (s.getAttribute("data-rating") <= rating) {
                    s.classList.add("selected");
                } else {
                    s.classList.remove("selected");
                }
            });

            // Här kan du spara betyget för den specifika produkten i din databas eller göra något annat med det
            // Exempel: spara betyget i en variabel för den specifika produkten
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
  // Här sparar vi kundvagnen som ett tomt array
  let kundvagn = [];

  // Här hämtar vi kundvagn-ikonen och antalet i kundvagnen
  const kundvagnIcon = document.querySelector(".fa-shopping-cart");
  const kundvagnAntal = document.getElementById("kundvagn-antal");

  // Här hämtar vi alla "Köp nu"-knappar
  const buyButtons = document.querySelectorAll(".buy-button");

  // Lägg till en click-händelse på varje "Köp nu"-knapp
  buyButtons.forEach(button => {
      button.addEventListener("click", function () {
          // Här kan du lägga till den valda produkten i kundvagnen
          const produktInfo = {
              namn: this.parentElement.querySelector("p").textContent,
              pris: this.parentElement.querySelector("p").textContent,
          };
          kundvagn.push(produktInfo);

          // Uppdatera antalet i kundvagn-ikonen
          kundvagnAntal.textContent = kundvagn.length;

          // Du kan också uppdatera kundvagnen på andra sätt här, t.ex. visa en popup med innehållet.
      });
  });
});







//----------------------------//




// Variabel för kundvagnsinnehåll (dina produkter)
const kundvagn = [];

// Visa kundvagnsrutan
function showKundvagnPopup() {
    const kundvagnPopup = document.getElementById("kundvagn-popup");
    kundvagnPopup.style.display = "block";
    updateKundvagnPopup(); // Uppdatera innehållet
}

// Lägg till produkt i kundvagnen
function addToKundvagn(namn, pris, bildSrc) {
    const produkt = {
        namn: namn,
        pris: pris,
        bild: bildSrc
    };
    kundvagn.push(produkt);
    updateKundvagnCount();
   
}

// Uppdatera kundvagnsrutan med innehåll och totalpris
function updateKundvagnPopup() {
    const kundvagnPopup = document.getElementById("kundvagn-popup");
    const kundvagnInnehall = document.getElementById("kundvagn-innehall");
    const totalSumma = document.getElementById("total-summa");

    // Rensa befintligt innehåll
    kundvagnInnehall.innerHTML = "";

    let summa = 0;

    // Loopa igenom produkter i kundvagnen
    for (const produkt of kundvagn) {
        const produktItem = document.createElement("div");
        produktItem.classList.add("kundvagn-objekt");

        const produktBild = document.createElement("img");
        produktBild.src = produkt.bild;
        produktItem.appendChild(produktBild);

        const produktInfo = document.createElement("div");
        produktInfo.classList.add("produkt-info");
        produktInfo.textContent = produkt.namn + " - " + produkt.pris + " kr";
        produktItem.appendChild(produktInfo);

        kundvagnInnehall.appendChild(produktItem);

        // Uppdatera total summa
        summa += parseInt(produkt.pris, 10);
    }

    // Uppdatera totalpriset
    totalSumma.textContent = "Total summa: " + summa + " kr";
}











// Stäng kundvagnsrutan
function closeKundvagnPopup() {
  const kundvagnPopup = document.getElementById("kundvagn-popup");
  kundvagnPopup.style.display = "none";
}