import {Vinyl} from "./vinyl";
import {drawShop} from "./drawShop"
import {search} from "./search"
import {sort} from "./sort"

export class Shop
{
    private arr: Vinyl[];
    private shopName: string;
    private container:HTMLDivElement;

    constructor(name:string)
    {
         this.shopName=name;
         this.container=null;
         this.arr=[];
    }

    addVinyl(vin:Vinyl):number{
        return this.arr.push(vin);
    }

    getElements(): Vinyl[] {
        return this.arr;
    }
    draw() 
    {
        let sideDiv:HTMLDivElement=document.createElement("div");
        let mainDiv:HTMLDivElement= document.createElement("div");
        let title:HTMLHeadingElement= document.createElement("h1");
        this.container=document.createElement("div");
        let searchDiv:HTMLDivElement= document.createElement("div");
        let label:HTMLLabelElement= document.createElement("label");
        let input:HTMLInputElement=document.createElement("input");
        let buttonDiv:HTMLDivElement= document.createElement("div");
        const searchBtt:HTMLButtonElement=document.createElement("button");
        let refreshhBtt:HTMLButtonElement=document.createElement("button"); 
        let sortBtt:HTMLButtonElement=document.createElement("button"); 
        let select:HTMLSelectElement=document.createElement("select");
         drawShop(document.body,sideDiv,mainDiv,title,this.container,searchDiv,label,input,buttonDiv,searchBtt,refreshhBtt,this.shopName,this.arr,sortBtt,select);
         searchBtt.onclick=(ev) =>{
            
            search(Number(input.value),this.arr).then((num)=>
            {
                this.container.innerHTML="";
                num.forEach(el=>el.drawVinyl(this.container));
                refreshhBtt.hidden=false;
            }).catch((err)=>{ alert(err)});

            sortBtt.disabled=true;
            select.disabled=true;
        }

        sortBtt.onclick=ev=>{
            let inp:string=select.options[select.selectedIndex].text;
            sort(inp,this.arr).then((arrr)=>{
                this.container.innerHTML="";
                arrr.forEach(el=>el.drawVinyl(this.container));
                refreshhBtt.hidden=false;
            }).catch((err)=>{ alert(err)});
        }

       
    }
}