

document.addEventListener("DOMContentLoaded", function() {
  //Initialisation on document loaded - carousel = about1
  const carousel = document.getElementById("carousel")
  const about1 = document.getElementById("about1");

  carousel.appendChild(about1.cloneNode(true));

  //Click on btn_right
  document.getElementById("btn_right").addEventListener("click",function () {
    //Get the current number of the CardId in the carousel
    const currentCardIdNumber = carousel.firstChild.id.slice(-1);
    //Get the next CardId 
    const nextCardIdNumber = currentCardIdNumber == 4 ? 1 : parseInt(currentCardIdNumber) + 1;
    const nextCard = document.getElementById("about"+nextCardIdNumber.toString())

    //Display the content of the next CardId
    while (carousel.firstChild) {
      carousel.removeChild(carousel.firstChild);
    }
    carousel.appendChild(nextCard.cloneNode(true));
  })

  //Click on btn_left
  document.getElementById("btn_left").addEventListener("click",function () {
    //Get the current number of the CardId in the carousel
    const currentCardIdNumber = carousel.firstChild.id.slice(-1);
    //Get the previous CardId 
    const previousCardIdNumber = currentCardIdNumber == 1 ? 4 : parseInt(currentCardIdNumber) - 1;
    const previousCard = document.getElementById("about"+previousCardIdNumber.toString())

    //Display the content of the next CardId
    while (carousel.firstChild) {
      carousel.removeChild(carousel.firstChild);
    }
    carousel.appendChild(previousCard.cloneNode(true));
  })

})

