export const drawVinyl=(host:HTMLDivElement,miniCont:HTMLElement,div1:HTMLDivElement,image:HTMLImageElement,div2:HTMLDivElement, name:string,performer:string,price:number,img:string
)=>
{
    
    miniCont.classList.add("vinyl");
    host.appendChild(miniCont);

    div1=document.createElement("div");
    div1.classList.add("divImg");
    miniCont.appendChild(div1);

     
    image.classList.add("image");
    image.src=img;
    image.alt=name+" by: "+performer;
    div1.appendChild(image);

   
    div2.classList.add("divInfo");
    miniCont.appendChild(div2);

    const arrayOfTags:Array<string>=[name,performer,String(price)+ "€"];
    const arrayOfClassNames:Array<string>=["name","performer","price"];

    arrayOfTags.forEach((el,index)=>
        {
             let vinylInfo=document.createElement("label");
            vinylInfo.innerHTML=arrayOfTags[index];
            vinylInfo.classList.add(arrayOfClassNames[index]);
            div2.appendChild(vinylInfo);
        })
   
}