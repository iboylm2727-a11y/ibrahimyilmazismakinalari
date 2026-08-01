// HAMBURGER MENÜ

function toggleMenu(){

document.getElementById("menu").classList.toggle("active");

}



// MAKİNE SEÇİNCE TEKLİF BÖLÜMÜNE GİT

function secMakine(makineAdi){

document.getElementById("makine").value = makineAdi;

document.getElementById("teklif").scrollIntoView({
behavior:"smooth"
});

}



// WHATSAPP TEKLİF GÖNDERME

function teklifGonder(){


let ad = document.getElementById("ad").value;

let telefon = document.getElementById("telefon").value;

let konum = document.getElementById("konum").value;

let makine = document.getElementById("makine").value;

let sure = document.getElementById("sure").value;

let mesaj = document.getElementById("mesaj").value;



let whatsappMesaj =

`🚜 YENİ TEKLİF TALEBİ

👤 Ad Soyad:
${ad}

📞 Telefon:
${telefon}

📍 Çalışma Yeri:
${konum}

🚜 Makine:
${makine}

⏳ Süre:
${sure}

📝 Mesaj:
${mesaj}

------------------

İBRAHİM YILMAZ
Hafriyat & İş Makinaları Kiralama`;



let link =

"https://wa.me/905462182726?text=" 
+ encodeURIComponent(whatsappMesaj);



window.open(link,"_blank");


}
