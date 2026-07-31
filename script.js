function whatsappTeklif(){

let bilgiler = document.querySelectorAll("#teklif input");
let makine = document.querySelector("#teklif select").value;
let sure = document.querySelectorAll("#teklif select")[1].value;
let not = document.querySelector("#teklif textarea").value;

let mesaj =
"Merhaba, iş makinesi kiralama için teklif almak istiyorum.%0A%0A" +
"🚜 Makine: " + makine + "%0A" +
"⏰ Çalışma Süresi: " + sure + "%0A" +
"👤 Ad Soyad: " + bilgiler[0].value + "%0A" +
"📞 Telefon: " + bilgiler[1].value + "%0A" +
"📍 İl: " + bilgiler[2].value + "%0A" +
"📍 Konum: " + bilgiler[3].value + "%0A" +
"📝 Not: " + not;


let telefon = "905462182726";

window.open(
"https://wa.me/" + telefon + "?text=" + mesaj,
"_blank"
);

}
