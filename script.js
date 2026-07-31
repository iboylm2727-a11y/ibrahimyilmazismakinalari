function whatsappTeklif(){

let selectler = document.querySelectorAll("#teklif select");
let inputlar = document.querySelectorAll("#teklif input");
let textarea = document.querySelector("#teklif textarea");

let mesaj = 
"Merhaba, iş makinesi kiralama hakkında bilgi almak istiyorum.%0A%0A" +
"🚜 Makine: " + selectler[0].value + "%0A" +
"⏰ Çalışma Süresi: " + selectler[1].value + "%0A" +
"👤 Ad Soyad: " + inputlar[0].value + "%0A" +
"📞 Telefon: " + inputlar[1].value + "%0A" +
"📍 İl: " + inputlar[2].value + "%0A" +
"📍 Konum: " + inputlar[3].value + "%0A" +
"📝 Not: " + textarea.value;


window.open(
"https://wa.me/905462182726?text=" + mesaj,
"_blank"
);

}
