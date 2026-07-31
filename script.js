// =====================================
// İBRAHİM YILMAZ HAFRİYAT
// script.js
// =====================================

// Menüde yumuşak kaydırma
document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

const hedef = document.querySelector(this.getAttribute('href'));

if(hedef){

hedef.scrollIntoView({

behavior:'smooth'

});

}

});

});


// Sayfa açılış animasyonu

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});


// Teklif Butonu

const buton=document.querySelector("form button");

if(buton){

buton.addEventListener("click",()=>{

const ad=document.querySelector('input[type="text"]').value;

const tel=document.querySelector('input[type="tel"]').value;

const sehir=document.querySelectorAll("input")[2].value;

const makine=document.querySelector("select").value;

const mesaj=document.querySelector("textarea").value;

let whatsappMesaj=

`Merhaba İbrahim Bey.

Ad Soyad: ${ad}

Telefon: ${tel}

Şehir: ${sehir}

Makine: ${makine}

Mesaj: ${mesaj}`;

let url="https://wa.me/905462182726?text="+encodeURIComponent(whatsappMesaj);

window.open(url,"_blank");

});

}


// Sayfa yukarı butonu oluştur

const btn=document.createElement("button");

btn.innerHTML="⬆";

btn.id="yukari";

document.body.appendChild(btn);

btn.style.position="fixed";
btn.style.bottom="20px";
btn.style.right="20px";
btn.style.width="50px";
btn.style.height="50px";
btn.style.borderRadius="50%";
btn.style.border="none";
btn.style.background="#f7c600";
btn.style.fontSize="22px";
btn.style.cursor="pointer";
btn.style.display="none";
btn.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

btn.style.display="block";

}else{

btn.style.display="none";

}

});

btn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

console.log("İbrahim Yılmaz Hafriyat sitesi başarıyla yüklendi.");
