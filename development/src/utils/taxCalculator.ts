import { Product } from '../models/Product';

export function taxCalculator(product: Product): number{
    return product.getPriceWithTax();
}