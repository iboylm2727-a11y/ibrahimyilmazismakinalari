function whatsappTeklif(){

let makine = document.querySelector("select").value;
let sure = document.querySelectorAll("select")[1].value;

let ad = document.querySelectorAll("input")[0].value;
let telefon = document.querySelectorAll("input")[1].value;
let sehir = document.querySelectorAll("input")[2].value;
let konum = document.querySelectorAll("input")[3].value;

let mesaj = document.querySelector("textarea").value;


let text =
"Merhaba, iş makinesi kiralama hakkında bilgi almak istiyorum.%0A%0A" +
"Makine: " + makine + "%0A" +
"Süre: " + sure + "%0A" +
"Ad Soyad: " + ad + "%0A" +
"Telefon: " + telefon + "%0A" +
"Şehir: " + sehir + "%0A" +
"Şantiye Konumu: " + konum + "%0A" +
"Mesaj: " + mesaj;


window.open(
"https://wa.me/905462182726?text=" + text,
"_blank"
);

}
