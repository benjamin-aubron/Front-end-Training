// document.addEventListener("DOMContentLoaded", function() {
//   // Initialisation du carousel avec le contenu de la div "about1"
//   document.getElementById("carousel").innerText = document.getElementById("about1").innerText;

//   // Écouteur d'événement pour le bouton "Left"
//   document.getElementById("btn_left").addEventListener("click", function() {
//       // Récupération de l'ID de la div actuellement affichée dans le carousel
//       var currentDivId = document.getElementById("carousel").innerText.trim();

//       // Récupération de l'ID de la div précédente
//       var prevDivId = currentDivId === "about1" ? "about4" : "about" + (parseInt(currentDivId.slice(-1)) - 1);

//       // Affichage du contenu de la div précédente dans le carousel
//       document.getElementById("carousel").innerText = document.getElementById(prevDivId).innerText;
//   });

//   // Écouteur d'événement pour le bouton "Right"
//   document.getElementById("btn_right").addEventListener("click", function() {
//       // Récupération de l'ID de la div actuellement affichée dans le carousel
//       var currentDivId = document.getElementById("carousel").innerText.trim();

//       // Récupération de l'ID de la div suivante
//       var nextDivId = currentDivId === "about4" ? "about1" : "about" + (parseInt(currentDivId.slice(-1)) + 1);

//       // Affichage du contenu de la div suivante dans le carousel
//       document.getElementById("carousel").innerText = document.getElementById(nextDivId).innerText;
//   });
// });




document.addEventListener("DOMContentLoaded", function() {
  //Initialisation on document loaded - carousel = about1
  const carousel = document.getElementById("carousel")
  const about1 = document.getElementById("about1");

  carousel.appendChild(about1.cloneNode(true));

  //Click on btn_right
  document.getElementById("btn_right").addEventListener("click",function () {
    //Get the current number of the CardId in the carousel
    const currentCardId = carousel.firstChild.id;
    const idNumber = 
    //Get the next CardId
    

    //Display the content of the next CardId
    console.log(currentCardId)
  })

})

