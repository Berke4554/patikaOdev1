var isim = prompt("Adınızı Giriniz");
var isimDoc = document.getElementById("myName");
isimDoc.innerHTML = isim;

var gunler = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

function updateTime() {
  // Şu anki tarihi al
  var currentDate = new Date();

  // Haftanın gününü al (0: Pazar, 1: Pazartesi, ...)
  var day = currentDate.getDay();

  // Şu anki saati ve dakikaları al
  var zaman = currentDate.toLocaleTimeString();

  // "time" adlı HTML elementini seç
  var timeDoc = document.getElementById("time");

  // "zaman" ve "gunler" dizisinden gün adını alarak saati güncelle
  timeDoc.innerHTML = zaman + " " + gunler[day];
}

updateTime(); // Sayfa yüklendiğinde zamanı güncelle

// Her saniyede bir updateTime fonksiyonunu çağır
setInterval(updateTime, 1000);
