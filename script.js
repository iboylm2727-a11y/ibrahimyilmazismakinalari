function whatsappTeklif(){

let secimler = document.querySelectorAll("#teklif select");
let kutular = document.querySelectorAll("#teklif input");
let mesajKutusu = document.querySelector("#teklif textarea");

let mesaj =
"Merhaba, iş makinesi kiralama hakkında bilgi almak istiyorum.\n\n" +
"🚜 Makine: " + secimler[0].value + "\n" +
"⏰ Süre: " + secimler[1].value + "\n" +
"👤 Ad Soyad: " + kutular[0].value + "\n" +
"📞 Telefon: " + kutular[1].value + "\n" +
"📍 İl: " + kutular[2].value + "\n" +
"📍 Konum: " + kutular[3].value + "\n" +
"📝 Not: " + mesajKutusu.value;


let telefon = "905462182726";

window.open(
"https://wa.me/" + telefon + "?text=" + encodeURIComponent(mesaj),
"_blank"
);

}
