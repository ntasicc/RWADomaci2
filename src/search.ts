import { resolve } from "../webpack.config";
import { Vinyl } from "./vinyl";

export const search=async(inp:number,arr:Array<Vinyl>):Promise<Array<Vinyl>>=>
{   
    const newArray:Array<Vinyl>=arr.filter(el=>el.getPrice()<=inp);

    return new Promise<Array<Vinyl>>((resolve,reject)=>
    {
        if(newArray.length!==0)
        resolve(newArray)
        else
        reject("There are no vinyls below your price");
    })
    
    
}