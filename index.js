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

function giris(){
    if((email==kullanicilar[0].email && sifre==kullanicilar[0].sifre)
    ||(email==kullanicilar[1].email && sifre==kullanicilar[1].sifre)){

        console.log(tivitler);
    }else{
        console.log("Bilgiler hatali kontrol ediniz...");
    }
}
giris(email,sifre);