import allData from './data';
import {randomDelay} from '../utilities/randomDelay';


class Product{
    constructor(){}

    async getProduct():Promise<TProduct[]>{
        const products=Object.values(allData)
        await randomDelay()
        return products
    }

    async getProductById(id:string):Promise<TProduct | undefined> { 
        if(!Object.prototype.hasOwnProperty.call(allData,id))return;
        const productSelected=allData[id]
        await randomDelay()
        return productSelected
    }
}

export default Product