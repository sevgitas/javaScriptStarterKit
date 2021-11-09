console.log("Merhaba Kodlama.io")
// kullanıcı etkileşimini maksimize ediyoruz. dinamizmi sağlıyoruz js ile.
// js type safe değildir.
var dolarDun =9.2014 // genelde bu veriler backend kısmından alınır.
dolarDun="ankara"
var dolarBugun = 9.30

console.log(dolarDun)

// const ile sabit tanımlanır. read only

const euroDun=11
//euroDun=11.30

console.log(euroDun)

const isim="sevgi"
console.log(isim)
//array
//camelCasing -> ilk harf küçük ikinci harf büyük tanımlama
//PascalCasing -> iki harf de büyük
let konutKredileri= ["konut kredisi","emlak konut kredisi","kamu konut kredisi","araç kredisi","ihtiyaç kredisi"]
console.log("<ul>")
    for (let i = 0;i<konutKredileri.length ; i++) {
      // console.log("<li>"+i+"</li>")
       console.log("<li>"+konutKredileri[i]+"</li>")
        
    }
console.log("</ul>")
console.log(konutKredileri)



var sayi1=10
sayi1="hareket proje"
console.log(sayi1)

let say1=20
console.log(say1)

let ogr={id:1,name:"sevgi"}
console.log(ogr)

function saved(ogrenci,puan=10) {
  console.log(ogrenci.name + ":" + puan)
}

saved(ogr)
saved(ogr,100)
// eğer puanı kendimiz parametre olarak belirtmezsek function içeridinde default olarak belirtilen 10 değerini alır. 1. sevgi : 10    2. sevgi:100 şekilde çıktı verir.
// c# ve js de default parametrenin en sonda yazılması gerekir. function(puan=10,ogrenci) şeklinde bir yazım yanıştır.

function deneme(puan=10,student) {
  console.log(student.name +":"+puan)
}

deneme(undefined,ogr)  

// deneme(ogr)  bu şekilde bir tanımlamada ogr puan=10 default parametresini alır.ilk olarak undefined yazıırsa o aslında olmayan değere karşılık gelerek ogr yi strudente atar.

// ARRAY TANIMLAMA
let students=["sevgi","erdem","yusuf","ayşe"]
console.log(students)

let students2=[ogr,{id:2,name:"yusuf"},10,{city:"İstanbul"}]
console.log(students2)
 
// REST

let showProducts = function (id,...products) {
  console.log(id)
  console.log(products)
  // console.log(products[0])
}
// ...products şeklinde yazmak array olduğu anlamına gelir.
showProducts(10,"elma","armut","karpuz","pırasa")
showProducts(10,["elma","armut","karpuz","pırasa"])
// ikinci şekildeki yazımda array içinde array yazılmış oluyor. arrayın 0. inci indisindeki değer ["elma","armut","karpuz","pırasa"] şeklinde olur. İlk yazım şeklinde ise "elma" 0. indis olarak gelecekti. 
// Rest Parameters: Fonksiyonlara sınır sayısı olmadan parametre geçmeye olanak verir.
// Rest paramters fonskiyonun son parametresi olmalı


