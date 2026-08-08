(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{sku;name;price;tax=0;constructor(e,t,n){this.sku=e||``,this.name=t||``,this.price=n||0}getName(){return this.name}getPrice(){return this.price}displayDetails(){return`Product with sku: ${this.sku}, name: ${this.name}, price: $${this.price.toFixed(2)}`}getPriceWithTax(){return this.price*(1+this.tax/100)}},t=class extends e{weight;tax=10;constructor(e,t,n,r){super(e,t,r),this.weight=n||0}getWeight(){return`${this.weight} kg`}getWeightValue(){return this.weight}displayDetails(){return`${super.displayDetails()}, weight: ${this.getWeight()}`}applyBulkDiscount(e,t){this.weight<t&&(this.price*=1-e/100)}},n=class extends e{fileSize;constructor(e,t,n,r){super(e,t,r),this.fileSize=n||0}getFileSize(){return`${this.fileSize} MB`}displayDetails(){return`${super.displayDetails()}, file size: ${this.getFileSize()}`}applyDiscount(e){this.price*=1-e/100}};function r(e){return e.getPriceWithTax()}var i=class{constructor(){}static byName(e){return e.sort((e,t)=>e.getName().localeCompare(t.getName()))}static byPrice(e){return e.sort((e,t)=>e.getPrice()-t.getPrice())}},a=document.getElementById(`output`);function o(e){if(a){let t=document.createElement(`p`);t.textContent=e,a.appendChild(t)}}function s(){a?.appendChild(document.createElement(`br`))}var c=[];c.push(new t(`FANT-1025`,`Harry Potter: Chamber of Secrets`,.32,20)),c.push(new t(`FANT-2142`,`Percy Jackson & The Lightning Thief`,.45,18)),c.push(new t(`FANT-2254`,`Percy Jackson & The Sea of Monsters`,.47,19)),c.push(new t(`FANT-3653`,`Harry Potter: Prisoner of Azkaban`,.5,22)),c.push(new n(`SONY-1124`,`God of War III`,34600,20)),c.push(new n(`SONY-7781`,`Final Fantasy VII Remake`,65e3,35)),c.push(new n(`SONY-9751`,`God of War Ragnarok`,72e3,40)),c.push(new n(`SONY-9424`,`Final Fantasy VII Rebirth`,68e3,38)),s(),console.log(`

ITEMS DETAILS AND PRICE WITH TAXES

`),o(`

ITEMS DETAILS AND PRICE WITH TAXES

`),s(),c.forEach(e=>{console.log(e.displayDetails()),o(e.displayDetails()),console.log(`Final price: $`+r(e).toFixed(2)+`

`),o(`Final price: $`+r(e).toFixed(2)+`

`),s()}),s(),console.log(`

SORTED BY NAME

`),o(`

SORTED BY NAME

`),s(),i.byName(c).forEach(e=>{console.log(e.displayDetails()+`

`),o(e.displayDetails()+`

`),s()}),s(),console.log(`

SORTED BY PRICE

`),o(`

SORTED BY PRICE

`),s(),i.byPrice(c).forEach(e=>{console.log(e.displayDetails()+`

`),o(e.displayDetails()+`

`),s()}),s(),console.log(`

BULK DISCOUNT, 50% TO WEIGHT UNDER .46 KG

`),o(`

BULK DISCOUNT, 50% TO WEIGHT UNDER .46 KG

`),s(),c.forEach(e=>{if(e instanceof t){let t=.46;e.getWeightValue()<t&&(e.applyBulkDiscount(50,t),console.log(`Final price of `+e.getName()+` after discount: $`+e.getPriceWithTax().toFixed(2)),o(`Final price of `+e.getName()+` after discount: $`+e.getPriceWithTax().toFixed(2)),s())}});