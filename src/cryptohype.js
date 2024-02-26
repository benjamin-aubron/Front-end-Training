


function calculateCountdown (){
  
  const now = new Date();
  
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  const countdownHours = 23-hours;
  const countdownMinutes = 59-minutes;
  const countdownSeconds = 59-seconds;
  
  const formattedHours = countdownHours < 10 ? `0${countdownHours}` : countdownHours;
  const formattedMinutes = countdownMinutes < 10 ? `0${countdownMinutes}` : countdownMinutes;
  const formattedSeconds = countdownSeconds < 10 ? `0${countdownSeconds}` : countdownSeconds;
  
  const finalCountdown = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  
  return finalCountdown
  
}



function updateCountdown() {

  const countdown = document.querySelector(".countdown");


  if (countdown) {
      setInterval(function () {
          countdown.textContent = calculateCountdown();
      }, 1000);
  } else {
      console.error("Error");
  }
}


updateCountdown();
