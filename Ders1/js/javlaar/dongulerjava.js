var kullanicilar = [
    {email:"oguzbilen@gmail.com", sifre:"12345"},
    {email:"bilenoguz@gmail.com", sifre:"12345"}
]

var tivitler = [
    {email:"oguzbilen@gmail.com", tivit:"Bugün hava çok güzel"},
    {email:"bilenoguz@gmail.com", tivit:"Bugün hava çok güzel 2"},
    {email:"oguzbilen1@gmail.com", tivit:"Kapiyi ben acacagim!"}
]

    var email = prompt("email?")
    var sifre = prompt("şifre?")




    function kullaniciVarmi(email,sifre){
        console.log(email);
        console.log(sifre);
    for(i = 0; i < kullanicilar.length;i++){
        if(kullanicilar[i].email==email && kullanicilar[i].sifre==sifre){
            return true;
        }
    }  return false;
}
    function giris(){
        if(kullaniciVarmi(email,sifre)){
         console.log(tivitler)
        }else{
            console.log("kullanici adi veya sifresi hatali")
        }
        
        
        
    }

giris(email,sifre)