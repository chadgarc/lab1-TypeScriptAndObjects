import { Product } from './Product';

export class PhysicalProduct extends Product{
    protected weight: number;
    protected tax = 10;

    constructor(sku:string, name:string, weight:number, price:number){
        super(sku,name,price);
        this.weight = weight || 0;
    }

    getWeight(): string{
        return `${this.weight} kg`
    }

    getWeightValue():number {
        return this.weight;
    }

    displayDetails(){
        return `${super.displayDetails()}, weight: ${this.getWeight()}`
    }

    applyBulkDiscount(discount:number, maxWeight:number): void{
        if( this.weight < maxWeight ){
            this.price *= 1 - ( discount / 100 );
        }
    }
}