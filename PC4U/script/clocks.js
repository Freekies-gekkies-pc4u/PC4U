function clock() {// We create a new Date object and assign it to a variable called "time".
var time = new Date(), hours = time.getHours(), minutes = time.getMinutes(), seconds = time.getSeconds();



document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);


  
function harold(standIn) {
  if (standIn < 10) {
    standIn = '0' + standIn
  }
  return standIn;
}
}

setInterval(clock, 1000);