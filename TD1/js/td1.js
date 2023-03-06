'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
  console.log('In onLoad() function…');
  // Your JavaScript code goes here !
}

   function defineHeading1() {
  const heading = document.getElementById("title");
  if (heading) {
    document.title = heading.textContent;
  }
  }
  // appeler la méthode defineHeading1() lorsque la page est chargée
  document.addEventListener("DOMContentLoaded", defineHeading1);



  function defineHeading2() {
  var h2 = document.getElementsByTagName("h2")[0];
  if(h2) {
    document.title = h2.textContent;
  }
   }
   document.addEventListener("DOMContentLoaded", defineHeading2);


function defineHeading3() {
  var h2s = document.getElementsByTagName("h2"); //la variable h2s stocke les balises h2
  if (h2s.length > 0) {
    var h2 = h2s[h2s.length - 1];
    document.title = h2.innerHTML;
  } else {
    document.title = "Sam Benizri";
  }
  }
  document.addEventListener("DOMContentLoaded", defineHeading3);


function defineHeading4() {

  document.title = "Sam Benzri"

  if (firstOrLast.length % 2 == 0) {
    document.title = document.getElementsByClassName("firstOrLast")[0];
  }
  else if (firstOrLast.length % 2 != 0) {
    var hLast = firstOrLast[firstOrLast.length - 1];
    document.title = hLast.innerHTML;



  }
}

function swapInnerHTML() {

  var firstP = document.getElementsByTagName('p')[0];
  var secondP = document.getElementsByTagName('p')[1];

  var temp = firstP.innerHTML;

  firstP.innerHTML = secondP.innerHTML;
  secondP.innerHTML = temp;

}


function getNbDays() {
  const now = new Date();
  const endDate = new Date('2023-12-31'); // Remplacer cette date par la date souhaitée

  const diffTime = Math.abs(endDate - now);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const daysString = diffDays === 1 ? 'jour' : 'jours'; // Supprimer le "s" si nécessaire

  const p = document.querySelector('p'); // Remplacer 'p' par le sélecteur CSS de votre paragraphe
  p.textContent = p.textContent.replace('xxx', diffDays + ' ' + daysString);

}
const p = document.querySelector('p'); // Remplacer 'p' par le sélecteur CSS de votre paragraphe
p.addEventListener('click', getNbDays);


function updateClock1() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const time = now.toLocaleTimeString('fr-FR');
  clock.textContent = time;
}

function updateClock2() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const time = now.toLocaleTimeString('fr-FR');
  clock.textContent = time;
  setTimeout(updateClock2, 1000);
}

// Mettre à jour l'horloge avec setInterval toutes les secondes
setInterval(updateClock1, 1000);

// Mettre à jour l'horloge avec setTimeout toutes les secondes
updateClock2();


function updateGraphicClock() {
  const clockElement = document.getElementById("graphic-clock");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // créer une chaîne de caractères pour les heures, minutes et secondes
  const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  // créer les balises img pour les chiffres de l'heure
  const hoursFirstDigitImg = document.createElement("img");
  hoursFirstDigitImg.src = `assets/images/${hoursStr[0]}.gif`;

  const hoursSecondDigitImg = document.createElement("img");
  hoursSecondDigitImg.src = `assets/images/${hoursStr[1]}.gif`;

  // créer les balises img pour les deux points entre les heures et les minutes
  const colonImg = document.createElement("img");
  colonImg.src = "assets/images/minus.gif";

  // créer les balises img pour les chiffres des minutes
  const minutesFirstDigitImg = document.createElement("img");
  minutesFirstDigitImg.src = `assets/images/${minutesStr[0]}.gif`;

  const minutesSecondDigitImg = document.createElement("img");
  minutesSecondDigitImg.src = `assets/images/${minutesStr[1]}.gif`;

  // créer les balises img pour les deux points entre les minutes et les secondes
  const colonImg2 = document.createElement("img");
  colonImg2.src = "assets/images/plus.gif";

  // créer les balises img pour les chiffres des secondes
  const secondsFirstDigitImg = document.createElement("img");
  secondsFirstDigitImg.src = `assets/images/${secondsStr[0]}.gif`;

  const secondsSecondDigitImg = document.createElement("img");
  secondsSecondDigitImg.src = `assets/images/${secondsStr[1]}.gif`;

  // ajouter les balises img à l'élément avec l'id "graphic-clock"
  clockElement.innerHTML = "";
  clockElement.appendChild(hoursFirstDigitImg);
  clockElement.appendChild(hoursSecondDigitImg);
  clockElement.appendChild(colonImg);
  clockElement.appendChild(minutesFirstDigitImg);
  clockElement.appendChild(minutesSecondDigitImg);
  clockElement.appendChild(colonImg2);
  clockElement.appendChild(secondsFirstDigitImg);
  clockElement.appendChild(secondsSecondDigitImg);

  setTimeout(updateGraphicClock, 1000); // appeler la fonction dans une seconde
}

updateGraphicClock(); // appeler la fonction pour la première fois

const input = document.getElementById("number-input");

input.addEventListener("input", () => {
  const value = input.value.trim();

  if (value === "") {
    input.classList.remove("red", "green");
    input.classList.add("white");
  } else if (isNaN(value)) {
    input.classList.remove("green", "white");
    input.classList.add("red");
  } else {
    input.classList.remove("red", "white");
    input.classList.add("green");
  }
});

// Récupère tous les éléments toggle-icon
var toggleIcons = document.querySelectorAll('.toggle-icon');

// Boucle à travers tous les toggle-icon et ajoute un événement clic
toggleIcons.forEach(function (icon) {
  icon.addEventListener('click', function () {

    // Trouve le menu qui suit l'icône de basculement
    var subMenu = icon.parentNode.nextElementSibling;

    // Change la classe toggle-icon pour ouvrir ou fermer l'icône
    icon.classList.toggle('open');

    // Change la propriété display du sous-menu pour l'ouvrir ou le fermer
    if (subMenu.style.display === 'block') {
      subMenu.style.display = 'none';
    } else {
      subMenu.style.display = 'block';
    }
  });
});