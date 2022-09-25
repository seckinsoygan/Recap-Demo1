var kullanicilar = [
    {email:"seckinsoygann@gmail.com",sifre:"12345"},
    {email:"seckinsoy48@gmail.com",sifre:"12345"}
]

var tivitler = [
    {email:"seckinsoygann@gmail.com",tivit:"Bugün hava çok güzel"},
    {email:"seckinsoy48@gmail.com",tivit:"Yemeksepeti,getirden daha iyi"},
    {email:"seckinsoygann@gmail.com",tivit:"Bilgisayar mühendisliği ögrencisi"}
]

var email=prompt("email?");
var sifre=prompt("sifre?");

function kullanicivarmi(email,sifre){
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email==email && kullanicilar[i].sifre==sifre){
            return true;
        }
    }
    return false;
}
function giris(){
    if(kullanicivarmi(email,sifre)){
        console.log(tivitler);
    }else{
        console.log("Bilgiler hatali kontrol ediniz...");
    }
}
giris(email,sifre);