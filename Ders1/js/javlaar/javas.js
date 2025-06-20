
function selamVer () {
    console.log("merhaba");
}
selamVer();

 function topla(a,b){
    console.log(a)
    console.log(b)
    return a+b
}

 //* pop sondaki eleman 
var sehirler = ["Ankara","İstanb","İzmir","Adana"]

 //* shift sola kaydır  sehirler.shift
 //* push yeni ekle  sehirler.push ("Mersin")
//* concat dizileri topla sehirler.concat (sehirler)
  // *sort sehirleri yazıyo
  //* length



var kullanicilar = [
    {email:"oguzbilen@gmail.com", sifre:"12345"},
    {email:"bilenoguz@gmail.com", sifre:"12345"}
]

var tivitler = [
    {email:"oguzbilen@gmail.com", tivit:"Bugün hava çok güzel"},
    {email:"bilenoguz@gmail.com", tivit:"Bugün hava çok güzel 2"},
    {email:"oguzbilen1@gmail.com", tivit:"Kapıyı ben açacağım!"}
]

var email = prompt("email?")
var sifre = prompt("şifre?")

    



function giris(){
    if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) ||
       (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)){
        console.log(tivitler)
    } else {
        console.log("Kullanici adi veya şifresi hatali")
    }
}

giris(email,sifre)