// Asal Sayı Bulan Fonksiyon
function findPrimeNumbers(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
      let control = 0
  
      for (let j = 2; j < numbers[i]; j++) {
        if (numbers[i]%j==0)
          control++
      
      }
      if(control==0)
        console.log(numbers[i] + ":" + "asaldır.")
      else
        console.log(numbers[i] + ":" + "asal değildir.")
    }
  }
  
  findPrimeNumbers(2,5,2,8,75,137,4)
  
  //Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan fonksiyon
  
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
    
    } else {
      console.log(sayi1 + " ve "+sayi2 +" arkadaş sayı değillerdir.")
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
  
  function asalSayiBulma2() {
    console.log("Asal Sayılar:")
    for (let i = 0; i < 1000; i++) {

      let control=0
      for (let k = 2; k < i; k++) {

        if(i%k==0)
         control=control+1 
      }
      if(control==0){

        console.log(i)
      } 
    }
  }

  asalSayiBulma2()