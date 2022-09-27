class Personel{

    constructor(ad,soyad){
        this.ad=ad;
        this.soyad=soyad;
    }

    kaydet(){
        console.log("Personel Kaydedildi...",this.ad);
    }
}

const personel1 = new Personel();

personel1.kaydet();
personel1.ad="Seckin";
personel1.soyad="Soygan";

console.log(personel1.ad+" "+personel1.soyad);

