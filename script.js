function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}
function teklifGonder() {

let ad = document.getElementById("ad").value;
let telefon = document.getElementById("telefon").value;
let konum = document.getElementById("konum").value;
let makine = document.getElementById("makine").value;
let sure = document.getElementById("sure").value;
let mesaj = document.getElementById("mesaj").value;

let whatsappMesaj =
`🚜 *YENİ KİRALAMA TALEBİ*

👤 Ad Soyad: ${ad}

📞 Telefon: ${telefon}

📍 Çalışma Yeri: ${konum}

🚜 Makine: ${makine}

⏳ Kiralama Süresi: ${sure}

📝 Mesaj:
${mesaj}`;

let url = "https://wa.me/905462182726?text=" + encodeURIComponent(whatsappMesaj);

window.open(url, "_blank");

}

function toggleMenu() {
document.getElementById("menu").classList.toggle("active");
}

function secMakine(makineAdi) {
document.getElementById("makine").value = makineAdi;
document.getElementById("teklif").scrollIntoView({
behavior: "smooth"
});
}
