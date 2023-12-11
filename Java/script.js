let firstname = prompt("Adınız nedir");

let nameDOM = document.querySelector("#name");
nameDOM.innerHTML = firstname

function tarihSaat() {
    let date = new Date().toLocaleString('tr-TR'); // tarih saati al
    let dateDOM = document.querySelector("#zaman")
    dateDOM.innerHTML = date; // zaman id'li elemente yazdır
};

setInterval(tarihSaat, 1000); 

tarihSaat();