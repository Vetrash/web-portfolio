//блок сервиса
let docServices = document.querySelector('.services-container')
let btnLeftServices = docServices.querySelector('.arrow-left')
let btnrightServices = docServices.querySelector('.arrow-right')
let imgCartsServices = docServices.querySelectorAll('.image')
let articlesServices= docServices.querySelectorAll('.carousel-item-text p:first-child')
let subArticlesServices= docServices.querySelectorAll('.carousel-item-text p:nth-child(2)')


let arrImageServices=["../img/3f66becac7014b0d5b8d3e4a49ba24fd_kopiya_105.png",
"../img/778b9dcee84f8311a253af356bf6ce89_kopiya_106.png",
"../img/552c63fb814b4297069592a64109882e_kopiya_2_119.png",
"../img/5c1b40f6a0abddcb36c27c0cb7e8d4ec.png",
"../img/0b946457b74f82242de4cb2e13fd90ec.png",
"../img/08983156f390e7d9d296986a8c1f20c2.png",
"../img/47e0850fdc4aa88586c6ab2a8ac248d0.png",
"../img/17f55d96063359901dbbfab5f08215d0.png",
]
let arrWebpServices=["../img/3f66becac7014b0d5b8d3e4a49ba24fd_kopiya_105.webp",
"../img/778b9dcee84f8311a253af356bf6ce89_kopiya_106.webp",
"../img/552c63fb814b4297069592a64109882e_kopiya_2_119.webp",
"../img/5c1b40f6a0abddcb36c27c0cb7e8d4ec.webp",
"../img/0b946457b74f82242de4cb2e13fd90ec.webp",
"../img/08983156f390e7d9d296986a8c1f20c2.webp",
"../img/47e0850fdc4aa88586c6ab2a8ac248d0.webp",
"../img/17f55d96063359901dbbfab5f08215d0.webp",
]
let arrArticleServices=[
    'ВОЛОСЫ',
    'НОГТИ',
    'МАКИЯЖ',
    'РЕСНИЦЫ',
    'БРОВИ',
    'ЗАГАР',
    'КОСМЕТОЛОГИЯ',
    'ЭПИЛЯЦИЯ',
]
let arrSubArticleServices=[
    'окрашивание <br> стрижка <br> укладка',
    'наращивание <br> маникюр <br> покрытие',
    'повседневный <br> свадебный <br> вечерний',
    'наращивание <br> ламинирование <br> <br>',
    'оформление,<br> окрашивание,<br> долговременная укладка',
    'солярий,<br> моментальный загар <br> <br>',
    'подтяжка лица,<br> уход за руками <br> <br>',
    'шугаринг<br> лазерная электроэпиляция <br> <br>',
]
let indexImgServices=[0,1,2]

btnLeftServices.addEventListener("click",leftServices);
btnrightServices.addEventListener("click", rightServices);

function leftServices(){
     
    indexImgServices = indexImgServices.map((item)=>{
        return item-1<0?arrImageServices.length-1:item-1
    })
    
        
    render(imgCartsServices,arrImageServices,arrWebpServices,indexImgServices,articlesServices,subArticlesServices,arrArticleServices,arrSubArticleServices)     
}

function rightServices(){
    indexImgServices = indexImgServices.map((item)=>{
        return item+1>arrImageServices.length-1?0:item+1;
    })            
    render(imgCartsServices,arrImageServices,arrWebpServices,indexImgServices,articlesServices,subArticlesServices,arrArticleServices,arrSubArticleServices)      
}
//блок сервиса

function render(cart,img,webp,indexNum,articles,subArticles,arrArticle,arrSubArticle){  
    
    cart.forEach((item,index)=>{
        item.src=img[indexNum[index]]
        item.previousSibling.srcset=webp[indexNum[index]]
        if(articles.length>0){articles[index].innerText=arrArticle[indexNum[index]]}
        if(subArticles.length>0){
            subArticles[index].innerHTML=arrSubArticle[indexNum[index]]
        }
        
        
    })
}

//блок мастеров
let docMasters = document.querySelector('.masters-container')
let btnLeftMasters = docMasters.querySelector('.arrow-left')
let btnrightMasters = docMasters.querySelector('.arrow-right')
let imgCartsMasters = docMasters.querySelectorAll('.image')
let articlesMasters= docMasters.querySelectorAll('.carousel-item-text p:first-child')
let subArticlesMasters= docMasters.querySelectorAll('.carousel-item-text p:nth-child(2)')

let arrImageMasters=["../img/659c37e33f116926f90802405f9d9930_310.png",
"../img/f57f5889279c67683d3a2d52b800c840_311.png",
"../img/99fb472e1328666bca21dfa8d44e7a42_309.png",
"../img/2b0bbd859f66b511bdaecacd2cbb2e1b.png",
"../img/6e914787e75883e9cc902bf3d819ea76.png",
"../img/34bcc4ea2ab56c11d8c7a4a3eaf48743.png",
"../img/67719c8bc499b8d3da67bee718bcf183.png",
"../img/9808ad2f0e65be33f69f773958884c63.png",
"../img/e3c806b53e37d29023aeea8490201176.png",
]
let arrWebpMasters=["../img/659c37e33f116926f90802405f9d9930_310.webp",
"../img/f57f5889279c67683d3a2d52b800c840_311.webp",
"../img/99fb472e1328666bca21dfa8d44e7a42_309.webp",
"../img/2b0bbd859f66b511bdaecacd2cbb2e1b.webp",
"../img/6e914787e75883e9cc902bf3d819ea76.webp",
"../img/34bcc4ea2ab56c11d8c7a4a3eaf48743.webp",
"../img/67719c8bc499b8d3da67bee718bcf183.webp",
"../img/9808ad2f0e65be33f69f773958884c63.webp",
"../img/e3c806b53e37d29023aeea8490201176.webp",
]
let arrArticleMasters=[
'Александра',
'Анастасия',
'Алия',
'Мария',
'Оксана',
'Ольга',
'Полина',
'Марина',
'Елена',
]
let arrSubArticleMasters=[
'мастер маникюра <br> <br>',
'мастер наращивания ресниц',
'мастер бровист <br> <br>',
'мастер по долговременной укладке бровей',
'мастер лазерной эпиляции и шугаринга',
'мастер маникюра <br> <br>',
'парикхмахер <br> <br>',
'визажист <br> <br>',
'мастер по ламинированию ресниц',
]
let indexImgMasters=[0,1,2]


btnLeftMasters.addEventListener("click", leftMasters);
btnrightMasters.addEventListener("click", rightMasters);
function leftMasters(){
   
    indexImgMasters = indexImgMasters.map((item)=>{
        return item-1<0?arrImageMasters.length-1:item-1
    })
   
        
    render(imgCartsMasters,arrImageMasters,arrWebpMasters,indexImgMasters,articlesMasters,subArticlesMasters,arrArticleMasters,arrSubArticleMasters)     
}

function rightMasters(){
    indexImgMasters = indexImgMasters.map((item)=>{
        return item+1>arrImageMasters.length-1?0:item+1;
    })            
    render(imgCartsMasters,arrImageMasters,arrWebpMasters,indexImgMasters,articlesMasters,subArticlesMasters,arrArticleMasters,arrSubArticleMasters)      
}
//блок работ
let docWork = document.querySelector('.work-container')
let btnLeftWork = docWork.querySelector('.arrow-left')
let btnrightWork = docWork.querySelector('.arrow-right')
let imgCartsWork = docWork.querySelectorAll('.image-work')

let arrImageWork=["../img/d818733d26d127ad8d30b0a9eb7c087c_230.png",
"../img/0799ecf1efc2b2bfc2dd3e6d7f0cd1f1_229.png",
"../img/9be3513f58aeea8fdc523fec2d25fffd_234.png",
"../img/0f5a8ec2b63f64a8a5b61c5551ceaee3_231.png",
"../img/b08f4f5d6d7058020e902e22c99a65c7.png",
"../img/3d26cf77c5169e191f7fc0e5f2a4d873.png",
"../img/1fac47bc8f9c3973233d46fbde994c68.png",
"../img/0fca79893204402f57666624222a804d.png",
"../img/0a17a52b4e2ce5a4952026e2401f7050.png",
"../img/ebfc74489aed6e4a13f63647ab9375f6.png",
"../img/5c1b40f6a0abddcb36c27c0cb7e8d4ec.png",
"../img/0b946457b74f82242de4cb2e13fd90ec.png",

]
let arrWebpWork=["../img/d818733d26d127ad8d30b0a9eb7c087c_230.webp",
"../img/0799ecf1efc2b2bfc2dd3e6d7f0cd1f1_229.webp",
"../img/9be3513f58aeea8fdc523fec2d25fffd_234.webp",
"../img/0f5a8ec2b63f64a8a5b61c5551ceaee3_231.webp",
"../img/b08f4f5d6d7058020e902e22c99a65c7.webp",
"../img/3d26cf77c5169e191f7fc0e5f2a4d873.webp",
"../img/1fac47bc8f9c3973233d46fbde994c68.webp",
"../img/0fca79893204402f57666624222a804d.webp",
"../img/0a17a52b4e2ce5a4952026e2401f7050.webp",
"../img/ebfc74489aed6e4a13f63647ab9375f6.webp",
"../img/5c1b40f6a0abddcb36c27c0cb7e8d4ec.webp",
"../img/0b946457b74f82242de4cb2e13fd90ec.webp",
]

let indexImgWork=[0,1,2,3]

btnLeftWork.addEventListener("click", leftWork);
btnrightWork.addEventListener("click", rightWork);
function leftWork(){
    
    indexImgWork = indexImgWork.map((item)=>{
        return item-1<0?arrImageWork.length-1:item-1
    })
    
        
    render(imgCartsWork,arrImageWork,arrWebpWork,indexImgWork,[],[],[],[])     
}

function rightWork(){
    indexImgWork = indexImgWork.map((item)=>{
        return item+1>arrImageWork.length-1?0:item+1;
    })            
    render(imgCartsWork,arrImageWork,arrWebpWork,indexImgWork,[],[],[],[])      
}

//Запись
let btn = document.querySelector('.btn')
let nameUser = document.querySelector('.name')
let phone = document.querySelector('.tel')
let servis = document.querySelector('.servis')
btn.addEventListener("click", submit);
function submit() {
       if(nameUser.value.length === 0 || servis.value.length === 0 || phone.value.length === 0){
        alert(`Просим заполнить все поля перед отправкой.`)  
    }
    else{
        alert(`${nameUser.value} вы оставили заявку на ${servis.value}. Скоро с вами свяжется менеджер для уточнения.`)
    }

}




let burgerIMG = document.querySelector('.burger-img');
let burgerMenu= document.querySelector('.burger-menu');
let body= document.querySelector('body');
burgerIMG.addEventListener("click", Activ);
const burgerLine = document.querySelectorAll(".burger-line")
burgerLine.forEach((el)=>{
    el.addEventListener("click", Activ); 
})


function Activ()
{    
        burgerMenu.classList.toggle("activ-burger-menu");
        body.classList.toggle("lock");  
}
