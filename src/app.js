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
