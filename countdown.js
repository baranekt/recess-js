const suankiSayim = document.getElementById('suankiSayim');

function zilcalma() {
  var player= document.getElementById('au');
  player.play();
}

function CountDownTimer(dt)
 {
 var end = new Date(dt);
 
 var _second = 1000;
 var _minute = _second * 60;
 var _hour = _minute * 60;
 var _day = _hour * 24;
 var timer;
 
function showRemaining() {
 var now = new Date();
 var distance = end - now;

 if (distance < 0) {
 
  clearInterval(timer);
  suankiSayim.innerHTML = 'DOLDU!';
  zilcalma();
 
  return;
 }
 var days = Math.floor(distance / _day);
 var hours = Math.floor((distance % _day) / _hour);
 var minutes = Math.floor((distance % _hour) / _minute);
 var seconds = Math.floor((distance % _minute) / _second);
 
 suankiSayim.innerHTML = '';
 suankiSayim.innerHTML = '';
 suankiSayim.innerHTML += minutes + ':';
 suankiSayim.innerHTML += seconds + '';
 }
 
timer = setInterval(showRemaining, 1000);
 }
