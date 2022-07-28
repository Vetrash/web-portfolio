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