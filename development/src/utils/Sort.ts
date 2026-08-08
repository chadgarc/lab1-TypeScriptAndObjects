import { Product } from "../models/Product";

export class Sort{
    constructor(){

    }

    static byName(product: Product[]): Product[]{
        return product.sort((a,b) => a.getName().localeCompare(b.getName()));
    }

    static byPrice(product: Product[]): Product[]{
        return product.sort((a,b) => a.getPrice() - b.getPrice() );
    }
}