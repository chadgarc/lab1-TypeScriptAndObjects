
export class Product{
    protected sku: string;
    protected name: string;
    protected price: number;
    protected tax: number = 0;

    constructor(sku:string, name:string, price:number){
        this.sku = sku || "";
        this.name = name || "";
        this.price = price || 0;
    }

    getName(): string{
        return this.name;
    }

    getPrice(): number{
        return this.price;
    }

    displayDetails(){
        return `Product with sku: ${this.sku}, name: ${this.name}, price: $${this.price.toFixed(2)}`
    }

    getPriceWithTax(){
        return this.price * (1 + this.tax / 100)
    }
}

export interface DiscountableProduct{
    applyDiscount( discount: number ): void;
}