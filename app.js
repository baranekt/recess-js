//-----SLİDER-----
var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 6000);
//-----SLİDER-----
//------------------------------
//-----TİME------
const suanki_zaman = document.getElementById('suan');

setInterval(suanki_zamanFunc, 1000);

function suanki_zamanFunc(){
  var sonuc = new Array(2);
  var simdi = new Date();
    
    sonuc[0] = simdi.getHours();
    sonuc[1] = simdi.getMinutes();
    
    // Saat, Dakika ve Saniye 10'dan ufaksa önlerine '0' ekleniyor.
    for(i = 0;i < 2;i++)
        sonuc[i] = sonuc[i] < 10 ? '0' + sonuc[i] : sonuc[i];
    
    suanki_zaman.innerHTML = sonuc[0] + ":" + sonuc[1];
    
    return sonuc;    // return ['23', '59']
}
//------------------------------------------------
//------------------------------------------------
//-----ÇİZELGE MENU DOM---------
const ders1 = document.getElementById('ders1');
const ders2 = document.getElementById('ders2');
const ders3 = document.getElementById('ders3');
const ders4 = document.getElementById('ders4');
const ders5 = document.getElementById('ders5');
const ders6 = document.getElementById('ders6');
const ders7 = document.getElementById('ders7');
const ders8 = document.getElementById('ders8');
const ders9 = document.getElementById('ders9');
const ders10 = document.getElementById('ders10');
const ders11 = document.getElementById('ders11');
const ders12 = document.getElementById('ders12');
const tnf1 = document.getElementById('tnf1');
const tnf2 = document.getElementById('tnf2');
const tnf3 = document.getElementById('tnf3');
const tnf4 = document.getElementById('tnf4');
const tnf5 = document.getElementById('tnf5');
const ogle = document.getElementById('ogle');
const tnf6 = document.getElementById('tnf6');
const tnf7 = document.getElementById('tnf7');
const tnf8 = document.getElementById('tnf8');
const tnf9 = document.getElementById('tnf9');
const tnf10 = document.getElementById('tnf10');
const tnf11 = document.getElementById('tnf11');

//------------------------------
//------------------------------
setTimeout(function(){window.location.reload(1);}, 30000); // 30sn bir resfresh
//------------------------------

var simdi = new Date();

buay = simdi.getMonth();
buay+=1;
bugun = simdi.getDate();

tamtarih = buay+"/"+bugun+"/";

saatt = simdi.getHours();
dakka = simdi.getMinutes();

var hours = saatt.toString();
var minutes = dakka.toString();

minutes = minutes < 10 ? '0' + minutes : minutes; //1505 i 155 olarak görüyor. bu satırda bug ı fixledik

toplam = hours + minutes;

if (toplam>=800 && toplam<840) {
  CountDownTimer(tamtarih+"2021 8:40");
  ders1.style.color="#333"
  ders1.style.background="#00aa00";
}
else if (toplam>=840 && toplam<850) {
  CountDownTimer(tamtarih+"2021 8:50");
  ders1.style.color="white"
  ders1.style.background="#333";
  tnf1.style.color="#333"
  tnf1.style.background="#00aa00";
}
else if (toplam>=850 && toplam<930) {
  CountDownTimer(tamtarih+"2021 9:30");
  tnf1.style.color="white"
  tnf1.style.background="#333";
  ders2.style.color="#333"
  ders2.style.background="#00aa00";
}
else if (toplam>=930 && toplam<940) {
  CountDownTimer(tamtarih+"2021 9:40");
  ders2.style.color="white"
  ders2.style.background="#333";
  tnf2.style.color="#333"
  tnf2.style.background="#00aa00";
}
else if (toplam>=940 && toplam<1020) {
  CountDownTimer(tamtarih+"2021 10:20");
  tnf2.style.color="white"
  tnf2.style.background="#333";
  ders3.style.color="#333"
  ders3.style.background="#00aa00";
}
else if (toplam>=1020 && toplam<1030) {
  CountDownTimer(tamtarih+"2021 10:30");
  ders3.style.color="white"
  ders3.style.background="#333";
  tnf3.style.color="#333"
  tnf3.style.background="#00aa00";
}
else if (toplam>=1030 && toplam<1110) {
  CountDownTimer(tamtarih+"2021 11:10");
  tnf3.style.color="white"
  tnf3.style.background="#333";
  ders4.style.color="#333"
  ders4.style.background="#00aa00";
}
else if (toplam>=1110 && toplam<1120) {
  CountDownTimer(tamtarih+"2021 11:20");
  ders4.style.color="white"
  ders4.style.background="#333";
  tnf4.style.color="#333"
  tnf4.style.background="#00aa00";
}
else if (toplam>=1120 && toplam<1200) {
  CountDownTimer(tamtarih+"2021 12:00");
  tnf4.style.color="white"
  tnf4.style.background="#333";
  ders5.style.color="#333"
  ders5.style.background="#00aa00";
}
else if (toplam>=1200 && toplam<1210) {
  CountDownTimer(tamtarih+"2021 12:10");
  ders5.style.color="white"
  ders5.style.background="#333";
  tnf5.style.color="#333"
  tnf5.style.background="#00aa00";
}
else if (toplam>=1210 && toplam<1250) {
  CountDownTimer(tamtarih+"2021 12:50");
  tnf5.style.color="white"
  tnf5.style.background="#333";
  ders6.style.color="#333"
  ders6.style.background="#00aa00";
}
else if (toplam>=1250 && toplam<1330) {
  CountDownTimer(tamtarih+"2021 13:30");
  ders6.style.color="white"
  ders6.style.background="#333";
  ogle.style.color="#333"
  ogle.style.background="#00aa00";
}
else if (toplam>=1330 && toplam<1410) {
  CountDownTimer(tamtarih+"2021 14:10");
  ogle.style.color="white"
  ogle.style.background="#333";
  ders7.style.color="#333"
  ders7.style.background="#00aa00";
}
else if (toplam>=1410 && toplam<1415) {
  CountDownTimer(tamtarih+"2021 14:15");
  ders7.style.color="white"
  ders7.style.background="#333";
  tnf6.style.color="#333"
  tnf6.style.background="#00aa00";
}
else if (toplam>=1415 && toplam<1455) {
  CountDownTimer(tamtarih+"2021 14:55");
  tnf6.style.color="white"
  tnf6.style.background="#333";
  ders8.style.color="#333"
  ders8.style.background="#00aa00";
}
else if (toplam>=1455 && toplam<1505) {
  CountDownTimer(tamtarih+"2021 15:05");
  ders8.style.color="white"
  ders8.style.background="#333";
  tnf7.style.color="#333"
  tnf7.style.background="#00aa00";
}
else if (toplam>=1505 && toplam<1545) {
  CountDownTimer(tamtarih+"2021 15:45");
  tnf7.style.color="white"
  tnf7.style.background="#333";
  ders9.style.color="#333"
  ders9.style.background="#00aa00";
}
else if (toplam>=1545 && toplam<1550) {
  CountDownTimer(tamtarih+"2021 15:50");
  ders9.style.color="white"
  ders9.style.background="#333";
  tnf8.style.color="#333"
  tnf8.style.background="#00aa00";
}
else if (toplam>=1550 && toplam<1630) {
  CountDownTimer(tamtarih+"2021 16:30");
  tnf8.style.color="white"
  tnf8.style.background="#333";
  ders10.style.color="#333"
  ders10.style.background="#00aa00";
}
else if (toplam>=1630 && toplam<1635) {
  CountDownTimer(tamtarih+"2021 16:35");
  ders10.style.color="white"
  ders10.style.background="#333";
  tnf9.style.color="#333"
  tnf9.style.background="#00aa00";
}
else if (toplam>=1635 && toplam<1715) {
  CountDownTimer(tamtarih+"2021 17:15");
  tnf9.style.color="white"
  tnf9.style.background="#333";
  ders11.style.color="#333"
  ders11.style.background="#00aa00";
}
else if (toplam>=1715 && toplam<1720) {
  CountDownTimer(tamtarih+"2021 17:20");
  ders11.style.color="white"
  ders11.style.background="#333";
  tnf10.style.color="#333"
  tnf10.style.background="#00aa00";
}
else if (toplam>=1720 && toplam<1800) {
  CountDownTimer(tamtarih+"2021 18:00");
  tnf10.style.color="white"
  tnf10.style.background="#333";
  ders12.style.color="#333"
  ders12.style.background="#00aa00";
}

