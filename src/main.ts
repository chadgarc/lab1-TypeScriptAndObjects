import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { Product } from "./models/Product";
import { taxCalculator } from "./utils/taxCalculator";
import { Sort } from "./utils/Sort";

const output = document.getElementById("output");

function printToHTML(message: string): void {
    if (output) {
        const p = document.createElement("p");
        p.textContent = message;
        output.appendChild(p);
    }
}

function addBr(){
    output?.appendChild(document.createElement("br"));
}

const items: Product[] = []

items.push(new PhysicalProduct("FANT-1025","Harry Potter: Chamber of Secrets",0.32,20));
items.push(new PhysicalProduct("FANT-2142","Percy Jackson & The Lightning Thief",0.45,18));
items.push(new PhysicalProduct("FANT-2254","Percy Jackson & The Sea of Monsters",0.47,19));
items.push(new PhysicalProduct("FANT-3653","Harry Potter: Prisoner of Azkaban",0.50,22));
items.push(new DigitalProduct("SONY-1124","God of War III", 34600, 20));
items.push(new DigitalProduct("SONY-7781","Final Fantasy VII Remake",65000,35));
items.push(new DigitalProduct("SONY-9751","God of War Ragnarok",72000,40));
items.push(new DigitalProduct("SONY-9424","Final Fantasy VII Rebirth",68000,38));

addBr();
console.log("\n\nITEMS DETAILS AND PRICE WITH TAXES\n\n");
printToHTML("\n\nITEMS DETAILS AND PRICE WITH TAXES\n\n");
addBr();


items.forEach(item => {
    console.log(item.displayDetails());
    printToHTML(item.displayDetails());
    
    console.log('Final price: $'+taxCalculator(item).toFixed(2)+"\n\n");
    printToHTML('Final price: $'+taxCalculator(item).toFixed(2)+"\n\n");
    addBr();
});

addBr();
console.log("\n\nSORTED BY NAME\n\n");
printToHTML("\n\nSORTED BY NAME\n\n");
addBr();

Sort.byName(items).forEach(item => {
    console.log(item.displayDetails()+"\n\n");
    printToHTML(item.displayDetails()+"\n\n");
    addBr();
});

addBr();
console.log("\n\nSORTED BY PRICE\n\n");
printToHTML("\n\nSORTED BY PRICE\n\n");
addBr();
Sort.byPrice(items).forEach(item => {
    console.log(item.displayDetails()+"\n\n")
    printToHTML(item.displayDetails()+"\n\n")
    addBr();
});

addBr();
console.log("\n\nBULK DISCOUNT, 50% TO WEIGHT UNDER .46 KG\n\n");
printToHTML("\n\nBULK DISCOUNT, 50% TO WEIGHT UNDER .46 KG\n\n");
addBr();
items.forEach(item => {
    if(item instanceof PhysicalProduct){
        const maxWeight = .46;
        const discount = 50;
        if(item.getWeightValue() < maxWeight){
            item.applyBulkDiscount(discount,maxWeight);
            console.log("Final price of " + item.getName() + " after discount: $" + item.getPriceWithTax().toFixed(2));
            printToHTML("Final price of " + item.getName() + " after discount: $" + item.getPriceWithTax().toFixed(2));
            addBr();
        }
    }
});