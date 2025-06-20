// var intro1 = document.getElementById("intro1");  ögeyi secip intro 1 degiskene ata
 
// var mesaj = document.getElementById("mesaj");  id secip mesaj degiskeni ata

// mesaj.innerHTML = intro1.innerHTML;   intro1i alip tüm listeler degiskenine ata


// var tümListeler = document.getElementsByTagName("ul"); ul ögesini al 
// var sehirler = tümListeler[0]

// tümElemanlar = sehirler.getElementsByTagName("li");  liseteyi sec

// for(i = 0;i<tümElemanlar.length;i++) { bütün ögeleri tek tek acip 
//     alert(tümElemanlar[i].innerHTML); alert göster
// } 




// var classElemanlari = document.getElementsByClassName("intro1"); bütün intro 1 ögelerini al


// alert(classElemanlari[0].innerHTML);

//  var queryElemanlari = document.querySelectorAll("p.intro1"); bütün  p etiketli intro 1 elemenalari sec 
//  alert(queryElemanlari.length);  ögelerin kac tane oldugunu göster



// var isimElemanlari = document.getElementsByName("musteriAdi");  müsteri  adi formlari sec
// alert(isimElemanlari[0].value); alertle göster kullanicinin girdigi metni


// var oguz = document.getElementById("oguz").addEventListener("mouseover",rengiDegistir); 

// function rengiDegistir () {
//     document.getElementById("div1").style.color = "red";
//     var isimElemanlari = document.getElementsByName("musteriAdi");
//     isimElemanlari[0].value="Oguz";
// }


// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);

var baslik = document.createElement("h2");
var node = document.createTextNode("merhaba JS");
baslik.appendChild(node)

var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2")


div1.insertBefore(baslik , p2) //* öncelikle önüne 

alert("p2 siliniyor")
div1.removeChild(p2);   //* p2yi silmek icin remove child


alert("p2 degisitiriliyor");
var p1 = document.getElementById("p1")      //* değiştirmek için
div1.replaceChild(baslik,p1)


//* ecma script  javascriptlerin aynı standartta calismasini sagliyo

//* var yerine let ve const kullancaz
