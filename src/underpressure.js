

document.addEventListener("DOMContentLoaded", function() {
  //Initialisation on document loaded -> carousel = about1
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


document.addEventListener("DOMContentLoaded", function() {
  //Initialisation on document loaded -> brew_left = none, brew_center = beans1, brew_right = beans2
  const carouselBrewLeft = document.getElementById("carousel_brew_left")
  const carouselBrewCenter = document.getElementById("carousel_brew_center")
  const carouselBrewRight = document.getElementById("carousel_brew_right")
  const beans1 = document.getElementById("beans1");
  const beans2 = document.getElementById("beans2");
  const rightButton = document.getElementById("btn_right_brew")
  const leftButton = document.getElementById("btn_left_brew")
  
  carouselBrewCenter.appendChild(beans1.cloneNode(true));
  carouselBrewRight.appendChild(beans2.cloneNode(true));
  leftButton.classList.add("hidden")

 
  //Click on btn_right_brew
  document.getElementById("btn_right_brew").addEventListener("click",function () {
    
    //Carousel center
    const cardIdNumberCenter = carouselBrewCenter.lastChild.id.slice(-1);
    while (carouselBrewCenter.firstChild) {
      carouselBrewCenter.removeChild(carouselBrewCenter.firstChild);
    }
    const nextCardIdNumberCenter = parseInt(cardIdNumberCenter) + 1;
    const nextCardCenter = document.getElementById("beans"+nextCardIdNumberCenter.toString())
    carouselBrewCenter.appendChild(nextCardCenter.cloneNode(true));

    //Carousel right
    if (carouselBrewRight.hasChildNodes()) {
      const currentCardIdNumberRight = carouselBrewRight.lastChild.id.slice(-1);
      while (carouselBrewRight.firstChild) {
        carouselBrewRight.removeChild(carouselBrewRight.firstChild);
      }
      if (currentCardIdNumberRight < 3) {
        const nextCardIdNumberRight = parseInt(currentCardIdNumberRight) + 1;
        const nextCardRight = document.getElementById("beans"+nextCardIdNumberRight.toString())
        carouselBrewRight.appendChild(nextCardRight.cloneNode(true));
      }
    }

    //Carousel left
    const cardIdNumberLeft = carouselBrewCenter.lastChild.id.slice(-1)-1;
    if (cardIdNumberLeft > 0) {
      if (carouselBrewLeft.hasChildNodes()) {
        while (carouselBrewLeft.firstChild) {
          carouselBrewLeft.removeChild(carouselBrewLeft.firstChild);
        }
        if (cardIdNumberLeft < 3) {
          const cardLeft = document.getElementById("beans"+parseInt(cardIdNumberLeft).toString())
          carouselBrewLeft.appendChild(cardLeft.cloneNode(true));
        }
      } else {
        if (cardIdNumberLeft < 3) {
          const cardLeft = document.getElementById("beans"+parseInt(cardIdNumberLeft).toString())
          carouselBrewLeft.appendChild(cardLeft.cloneNode(true));
        }
      }
    }

    if (nextCardIdNumberCenter == 2) {
      leftButton.classList.remove("hidden");
    } else if (nextCardIdNumberCenter == 3){
      rightButton.classList.add("hidden");
    }

  })


  //Click on btn_left_brew
  document.getElementById("btn_left_brew").addEventListener("click",function () {
  
    //Carousel center
    const cardIdNumberCenter = carouselBrewCenter.lastChild.id.slice(-1);
    while (carouselBrewCenter.firstChild) {
      carouselBrewCenter.removeChild(carouselBrewCenter.firstChild);
    }
    const nextCardIdNumberCenter = parseInt(cardIdNumberCenter) - 1;
    const nextCardCenter = document.getElementById("beans"+nextCardIdNumberCenter.toString())
    carouselBrewCenter.appendChild(nextCardCenter.cloneNode(true));

    //Carousel right
    const cardIdNumberRight = parseInt(cardIdNumberCenter) + 1;
    while (carouselBrewRight.firstChild) {
      carouselBrewRight.removeChild(carouselBrewRight.firstChild);
    }
    const nextCardIdNumberRight = cardIdNumberRight - 1;
    const nextCardRight = document.getElementById("beans"+nextCardIdNumberRight.toString())
    carouselBrewRight.appendChild(nextCardRight.cloneNode(true));

    // //Carousel left
    const cardIdNumberLeft = parseInt(cardIdNumberCenter) - 2;
    if (cardIdNumberLeft > 0) {
      while (carouselBrewLeft.firstChild) {
        carouselBrewLeft.removeChild(carouselBrewLeft.firstChild);
      }
      const cardLeft = document.getElementById("beans"+parseInt(cardIdNumberLeft).toString())
      carouselBrewLeft.appendChild(cardLeft.cloneNode(true));
    } else {
      while (carouselBrewLeft.firstChild) {
        carouselBrewLeft.removeChild(carouselBrewLeft.firstChild);
      }
    }

    if (nextCardIdNumberCenter == 1) {
      leftButton.classList.add("hidden");
    } else if (nextCardIdNumberCenter == 2){
      rightButton.classList.remove("hidden");
    }

  })
  


})

