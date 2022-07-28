let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let dots = document.querySelectorAll('.dot');
var slides = document.getElementsByClassName("mySlides");
var slideIndex = 1;
showSlides(slideIndex);


// функции кнопок контроля
next.onclick=function plusSlides() {
  showSlides(slideIndex += 1);  
}
prev.onclick=function minusSlides() {
    showSlides(slideIndex += -1);    
  }

    for( let dot of dots){
        dot.onclick=function currentSlide() {
            showSlides(slideIndex = dot.dataset.img);               
        }
    }

function showSlides(n) {
  var i;
  //var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//let itemLists = document.querySelectorAll('.question');
let ArrImg=["img/open_icon_978.png","img/close_icon_994.png"];
let ArrWebP=["img/open_icon_978.webp","img/close_icon_994.webp"];
let itemWebP = document.querySelectorAll('.qustion-headline > picture > source');
let itemImg = document.querySelectorAll(".positionImg")

for(let itemList of itemLists ){
  
    itemList.onclick=function chekActiv()
    {
        let activItemS=document.querySelectorAll('.activ');    
    
        for (i = 0; i < activItemS.length; i++)  
        {       
            activItemS[i].classList.remove("activ");         
        }
    
        let itemDropDownS = itemList.querySelectorAll(".qustion-text");
         
        for (i = 0; i < itemDropDownS.length; i++) 
        {       
            itemDropDownS[i].classList.add("activ");      
        }


        for (i = 0; i < itemImg.length; i++)  
        {       
            itemImg[i].src=ArrImg[0];
            itemWebP[i].setAttribute("srcset", ArrWebP[0]);
        }
        let itemWebPActiv = itemList.querySelectorAll('.qustion-headline > picture > source');
        let itemImgActiv = itemList.querySelectorAll(".positionImg")

        for (i = 0; i < itemImgActiv.length; i++)  
        {       
            itemImgActiv[i].src=ArrImg[1];
            itemWebPActiv[i].setAttribute("srcset", ArrWebP[1]);
        }

    }
}

