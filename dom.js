//document.getElementById("bio").innerHTML="Seckin Soygan : 1998"

// var intro1=document.getElementById("intro1");

// var mesaj=document.getElementById("mesaj");

// mesaj.innerHTML=intro1.innerHTML;

// var tumlisteler=document.getElementsByTagName("ul"); //Tag name üzerinden erişim sağlar. Bütün ul lere erişir.
// var sehirler=tumlisteler[0];

// tumElemanlar=sehirler.getElementsByTagName("li");

// for(i=0;i<tumElemanlar.length;i++){
//     alert(tumElemanlar[i].innerHTML);
// }

// var classElemanları=document.getElementsByClassName("intro1");

// var isimelemanları=document.getElementsByName("musteriAdi"); //nameye göre veriyi çağırır.
// alert(isimelemanları[0].value);

//Mousenin üzerine gelme durumu EVENT dir.

// var seckin=document.getElementById("seckin").addEventListener("click",rengiDegistir);

// function rengiDegistir(){
//     document.getElementById("div1").style.color="red";
// }

// var node=document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);

//================================================================================
var baslik=document.createElement("h2");
var node=document.createTextNode("Merhaba Javascript");
baslik.appendChild(node);

var div1=document.getElementById("div1");
var p2=document.getElementById("p2");

div1.insertBefore(baslik,p2); //div1 içine p2 den önce baslik değişkenini ekle

alert("p2 siliniyor...");
div1.removeChild(p2); //div1 içindeki p2 yi siliyor...

alert("değiştiriliyor...");
var p1=document.getElementById("p1"); 
div1.replaceChild(baslik,p1); //p1 yerine baslik yerleştirildi...


