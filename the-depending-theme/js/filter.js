let filters = document.querySelectorAll('.sort-item');

let portfolioItems=document.querySelectorAll('.project-item');
console.log(portfolioItems);

for(let filter of filters ){

    filter.onclick=function (){

        for (i = 0; i < filters.length; i++)  
        {       
            filters[i].classList.remove("sort-activ");         
        }
        filter.classList.add("sort-activ"); 

        //let filterName=document.querySelectorAll(filter.getAttribute("data-sort"));
        //console.log(filterName);
        if(filter.getAttribute("data-sort")=="all")
        {
            let sortActivItem=document.querySelectorAll(".sort-hiden");
            for (i = 0; i < sortActivItem.length; i++)  
            {       
                sortActivItem[i].classList.remove("sort-hiden");         
            }
        }
        else{
            for (i = 0; i < portfolioItems.length; i++)  
            {    if(portfolioItems[i].classList.contains(filter.getAttribute("data-sort")) ){
                    
                    portfolioItems[i].classList.remove("sort-hiden")
                }
                else
                {
                    portfolioItems[i].classList.add("sort-hiden")
                }
                         
            }
            
        }

    }
}
