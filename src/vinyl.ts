import {drawVinyl} from "./drawVinyl"
export class Vinyl
{
    private id: number;
    private name: string;
    private performer:string;
    private price: number;
    private img: string;
    private miniCont:HTMLElement;

    constructor(id:number,name:string,performer:string,price:number,img:string)
    {
        this.id=id;
        this.name=name;
        this.performer=performer;
        this.price=price;
        this.img=img;
        this.miniCont=null;
    }

    drawVinyl(host:HTMLDivElement)
    {
        this.miniCont=document.createElement("div");
        let div1:HTMLDivElement=document.createElement("div");
        let image:HTMLImageElement=document.createElement("img");
        let div2:HTMLDivElement=document.createElement("div");
        let vinylInfo:HTMLParagraphElement=document.createElement("p");
        drawVinyl(host,this.miniCont,div1,image,div2,this.name,this.performer,this.price,this.img);
        
    }

    getPrice():number{
        return this.price;
    }
}