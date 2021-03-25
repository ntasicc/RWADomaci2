import { resolve } from "../webpack.config";
import { Vinyl } from "./vinyl";

export const sort=async(inp:string,arr:Array<Vinyl>):Promise<Array<Vinyl>>=>
{   
    return new Promise<Array<Vinyl>>((resolve,reject)=>
    {
        let cond1:number;
    let cond2:number;
    if(inp==="Low")
    {
        cond1=-1;
        cond2=1;
    }
    else
    {
        cond1=1;
        cond2=-1;
    }
    const newArray:Array<Vinyl>=arr.sort((a,b)=> (a.getPrice() < b.getPrice()) ? cond1: cond2);
        if(newArray.length!==0)
        resolve(newArray)
        else
        reject("Error");
    })
    
    
}