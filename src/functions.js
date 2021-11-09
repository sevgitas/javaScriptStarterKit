function addToCart(productName="elma",quantity) {
  console.log(productName,quantity)  
}

addToCart("yumurta",10)

console.log("sevgi")

let sayHello = () =>{
    console.log("hello sevgi")
}
sayHello()

let sayHello2 =function() {
    console.log("hello sevgi")  
}

sayHello2();


function addToCart2(productName,quantity,unitPrice) {
  
}

addToCart2("elma",5,10)
addToCart2("armut",2,10)


let product1={productName:"elma",unitPrice:10,quantity:5}
function addToCart3(product) {
  console.log("ürün : "+product.productName+" miktar :"+product.quantity+" birim fiyat : "+product.unitPrice)
}


// object tanımladık 
addToCart3(product1)

let product2={productName:"elma",unitPrice:10,quantity:5}
let product3={productName:"elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="KARPUZ"
console.log(product3.productName)

let sayi1=10
let sayi2=20
sayi1=sayi2
console.log(sayi1)

// obje ve array referans tip
// değer tip: 

function addToCart4(x) {
  console.log(x)
}
let products=[
  {productName:"elma",unitPrice:10,quantity:5},
  {productName:"armut",unitPrice:10,quantity:5},
  {productName:"kiraz",unitPrice:10,quantity:5}
]

addToCart4(products)

function add(number1,number2) {
  console.log(number1+number2+number2)
  
}

add(20,50)

function add2(...numbers) {
  console.log(numbers)
}

add2(1,2,5,6,5,5,55,5)
// REST KONUSU BU ŞEKİLDE
// rest her zaman fonksiyonun sonuna yazılır.
function  add3(...numbers) {
  let total=0
  for (let i = 0; i < numbers.length; i++) {
    total=total+numbers[i]
  }
  console.log(total)
}

add3(1,5,2,2,1000,2,2,2,2)

// math.max in içerisine array i ayırmadan gönderemeyiz. ...sayilar şekilde yazılması içerisinde ayrılmasını sağlar.
let sayilar=[10,20,50,30,47]
console.log(...sayilar)
console.log(Math.max(...sayilar))


//-----------------------------------------------------------------------------

// GİRİLEN SAYILARIN ASAL OLUP OLMADIĞINI BULAN FONKSİYON
function AsalSayiBul(...sayilar) {
  for (let i = 0; i < sayilar.length; i++) {
    let kontrol = 0

    for (let j = 2; j < sayilar[i]; j++) {
      if (sayilar[i]%j==0)
        kontrol++
    
    }
    if(kontrol==0)
      console.log(sayilar[i] + ":" + "asaldır.")
    else
      console.log(sayilar[i] + ":" + "asal değildir.")
  }
}

AsalSayiBul(2,5,2,8,75,137,4)

//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

function FriendNumbers(sayi1,sayi2) {
  let sayi1Bolen =0
  let sayi2Bolen=0
  
  for (let i = 0; i < sayi1; i++) {
    if (sayi1%i==0)
      sayi1Bolen=sayi1Bolen+i
  }
  for (let k = 0; k < sayi2; k++) {
    if (sayi2%k==0)
      sayi2Bolen=sayi2Bolen+k
  }
  if (sayi1Bolen==sayi2  && sayi2Bolen==sayi1 ) {
    console.log(sayi1 + " ve "+sayi2 +" arkadaş sayılardır.")
    console.log(sayi1Bolen)
    console.log(sayi2Bolen)
  } else {
    console.log(sayi1 + " ve "+sayi2 +" arkadaş sayı değillerdir.")
    console.log(sayi1Bolen)
    console.log(sayi2Bolen)
  }
}

FriendNumbers(220, 284)
FriendNumbers(2620, 2924)
FriendNumbers(3,5)

//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
// bazı pozitif tam sayıların pozitif bölenleri toplamı, sayının kendisinin iki katına eşittir. Bu tür sayılara “mükemmel sayı” denir.

function PerfectNumbers() {
  for (let i = 0; i < 1001; i++) {
    let bolenToplam=0
    for (let k = 0; k < i+1; k++) {
      if(i%k==0)
        bolenToplam=bolenToplam+k
      
    }
    if(i*2==bolenToplam)
      console.log(i+" sayısı mükemmel sayıdır.")
  }
}

PerfectNumbers()

//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function asalSayilar2() {
  for (let i = 0; i < 1001; i++) {
    let kontrol=0
    for (let k = 2; k < i; k++) {
      if(i%k==0)
       kontrol=kontrol+1
      
    }
    if(kontrol==0)
      console.log("Asal Sayılar:")
      console.log(i)
  }
}


asalSayilar2()