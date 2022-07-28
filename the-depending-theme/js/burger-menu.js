let burgerIMG = document.querySelector('.burger-img');
let burgerMenu= document.querySelector('.burger-menu');
let body= document.querySelector('body');
//let burgerline= document.querySelectorAll('.burger-line');

burgerIMG.onclick=function Activ()
    {
        burgerMenu.classList.toggle("activ-burger-menu");
        body.classList.toggle("lock");
        //for(i=0;i<burgerline.length;i++){
       // burgerline[i].classList.toggle("activ-burger-line");
       // }
        
    }