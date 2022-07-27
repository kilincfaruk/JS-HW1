document.getElementById("myName").innerHTML = prompt("What is your name?");

let dayOfTheWeek = new Date().getDay();
let today;

switch(dayOfTheWeek){
    case 1: today = "Monday";break;
    case 2: today = "Tuesday";break;
    case 3: today = "Wednesday";break;
    case 4: today = "Thursday";break;
    case 5: today = "Friday";break;
    case 6: today = "Saturday";break;
    case 7: today = "Sunday";break;
}

function showTime() {
    const date = new Date();
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentSecond = date.getSeconds();
    currentHour = checkDigits(currentHour);
    currentMinute = checkDigits(currentMinute);
    currentSecond = checkDigits(currentSecond);
    document.getElementById('myClock').innerHTML = `${currentHour}:${currentMinute}:${currentSecond} ${today}`;
    setTimeout(showTime, 1000);
  }
  
  function checkDigits(num) {
    if (num < 10) {num = "0" + num};  // add a zero in front of single digit time elements
    return num;
  }
  
  showTime();
