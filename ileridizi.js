const dizi=[1,2,3,4,5]

const kareDizisi=[];

dizi.forEach(sayi=>{  //Js forEach kullanimi
    kareDizisi.push(sayi*sayi);
})    

kareDizisi.forEach(a=>{
    console.log(a);
})

console.log(kareDizisi);

//map (Data Transform Object amaçlı kullanılmakta sektörde.)
const mapDizi = dizi.map(sayi=> sayi*3)
console.log(mapDizi);

//filter

const filterDizi=dizi.filter(sayi=> sayi>2);
console.log(filterDizi);

//reduce acc=default olarak başlangıç değeri olarak 0 alır.

const toplam = dizi.reduce((acc,sayi)=>{
    return acc+sayi;
})
console.log(toplam);

