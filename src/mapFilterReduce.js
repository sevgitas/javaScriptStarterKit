let cart=[
    {id:1,productName:"telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"Bardak",quantity:2,unitPrice:30},
    {id:3,productName:"kalem",quantity:1,unitPrice:20},
    {id:4,productName:"şarj aleti",quantity:2,unitPrice:100},
    {id:5,productName:"kitap",quantity:3,unitPrice:30},
    {id:6,productName:"pot",quantity:5,unitPrice:150},
]

//bana sepetimi göster derken map kullanıyouz. Arrayı tek tek dolaşıyor.
// her bir product için console.log işlemini yapars
cart.map(product=> console.log(product.productName))


console.log("<ul>")
cart.map(product =>{
    console.log("<li>" + product.productName+":"+product.unitPrice*product.quantity+"</li>")
     }
    )
console.log("<ul>")

// Filter fonksiyonu 
//örneğin aramalarda kullanılır.
// filtrelenen değerler 

let quantityOver2 = cart.filter(product=> product.quantity>2 )

console.log(quantityOver2)

// reduce da örneğin sepetteki toplamı görmek için kulalnılır.
// 0 acc nin ilk değeri 0'a product ın fiyatını ekleye ekleye sonuca ulaşır.

let total =cart.reduce((acc,product)=> acc+ product.unitPrice * product.quantity,0)

console.log(total)












//SPA SINGLE PAGE APPLICATION
// sepete ürün ekleyen fonksiyon
// referansa numarasını alıp, o referens numarasına id:7 değerini push ettik
function addToCard(sepet) {
    sepet.push({id:7,productName:"ruhsat",quantity:1,unitPrice:20})    
}

addToCard(cart)

console.log(cart)


let sayi=10
function sayiTopla(number) {
    number+=1
}
sayiTopla(sayi)
console.log(sayi)

//sayi değişmediği için 10 olarak gelir. Numberı çağırmadık sayiyi çağırdık.