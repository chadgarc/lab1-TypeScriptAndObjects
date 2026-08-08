import { Product } from './Product';
import type { DiscountableProduct } from './Product';

export class DigitalProduct extends Product implements DiscountableProduct {
    protected fileSize: number;

    constructor(sku:string, name:string, fileSize:number, price:number){
        super(sku, name, price);
        this.fileSize = fileSize || 0;
    }

    getFileSize(): string{
        return `${this.fileSize} MB`
    }

    displayDetails(){
        return `${super.displayDetails()}, file size: ${this.getFileSize()}`
    }

    applyDiscount(discount:number): void {
        this.price *= ( 1 - discount / 100 )
    }
}