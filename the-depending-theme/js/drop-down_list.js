let itemLists = document.querySelectorAll('.question');
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

