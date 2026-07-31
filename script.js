function whatsappTeklif(){

let makine = document.querySelector("select").value;

let mesaj = 
"Merhaba, iş makinesi kiralama hakkında bilgi almak istiyorum.%0A%0A" +
"Makine: " + makine;

let telefon = "905462182726";

window.open(
"https://wa.me/" + telefon + "?text=" + mesaj,
"_blank"
);

}
