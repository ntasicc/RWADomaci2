import { Vinyl } from "./vinyl";
import {search} from "./search"

export const drawShop =(host:HTMLElement,sideDiv:HTMLDivElement,mainDiv:HTMLDivElement,
    title:HTMLHeadingElement, container:HTMLDivElement,searchDiv:HTMLDivElement,
    label:HTMLLabelElement, input:HTMLInputElement,buttonDiv:HTMLDivElement,
    searchBtt:HTMLButtonElement,refreshhBtt:HTMLButtonElement,shopName:string,arr:Array<Vinyl>,sortBtt:HTMLButtonElement
    ,select:HTMLSelectElement)=>
{
     
        sideDiv.classList.add("searchDiv");
        host.appendChild(sideDiv);
        
        mainDiv.classList.add("searchDiv");
        host.appendChild(mainDiv);
         
        title.classList.add("shopTitle");
        title.innerHTML=shopName;
        mainDiv.appendChild(title);

        
        container.classList.add("vinArr");
        mainDiv.appendChild(container);

       arr.forEach(el=>
            {
                el.drawVinyl(container);
            });
        
        
        searchDiv.classList.add("searchDiv");
        sideDiv.appendChild(searchDiv);

            label= document.createElement("label");
            label.innerHTML="Max price";
            searchDiv.appendChild(label);
    
            
            input.type="number";
            input.classList.add("maxPrice");
            input.placeholder="Enter..";
            searchDiv.appendChild(input);

             
            buttonDiv.classList.add("buttonDiv");
            searchDiv.appendChild(buttonDiv);
            

            let sortDiv=document.createElement("div");
            sortDiv.classList.add("sortDiv");
            searchDiv.appendChild(sortDiv);

            sortBtt.innerHTML="Sort";
            sortBtt.classList.add("sortBtt");
            sortDiv.appendChild(sortBtt);

            select.classList.add("select");
            const arrayOptions:Array<string>=["Low","High"];
            arrayOptions.forEach(el=>
                {
                    let a=document.createElement("option");
                    a.innerHTML=el;
                    select.appendChild(a);
                });
            sortDiv.appendChild(select);
    
            
            searchBtt.innerHTML="Search";
            searchBtt.classList.add("searchBtt");
          
            buttonDiv.appendChild(searchBtt);
         
            refreshhBtt.innerHTML="&#8634";
            refreshhBtt.classList.add("refreshBtt");
            refreshhBtt.hidden=true;
            refreshhBtt.onclick=ev =>{
                window.location.reload();
            }
            buttonDiv.appendChild(refreshhBtt);
}