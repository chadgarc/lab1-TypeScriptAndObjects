# TypeScript OOP Inventory Tracker

## 📘 Scenario
The company you work for manages a large inventory of both physical and digital products.  
To improve maintainability and scalability, the team is transitioning to an **object‑oriented architecture** using **TypeScript**, leveraging:

- Inheritance  
- Encapsulation  
- Abstraction  
- Polymorphism  
- Static typing  
- ES Modules  

This project is a focused on TypeScript and OOP.

---

## 🎯 Objective
Build a small but complete inventory tracker that:

- Differentiates physical and digital products  
- Calculates taxes based on product type  
- Applies discounts  
- Sorts products by name and price  
- Uses modules to separate responsibilities

---

## 🧱 Project Structure

```bash
project-root/
├── development/
│   ├── index.html
│   ├── css/
│   │   └── input.css
│   └── src/
│       ├── models/
│       │   ├── Product.ts
│       │   ├── PhysicalProduct.ts
│       │   └── DigitalProduct.ts
│       ├── utils/
│       │   ├── taxCalculator.ts
│       │   └── Sort.ts
│       └── main.ts
│
├── docs/                ← GitHub Pages output
│   ├── index.html
│   └── assets/
│       ├── index-xxxx.css
│       └── index-xxxx.js
│
├── vite.config.ts
├── tsconfig.json
└── package.json
```


---

## ⚙️ Tech Stack

- **TypeScript**
- **Vite** (bundler + dev server)
- **Tailwind CSS v4**
- **pnpm** (package manager)
- **GitHub Pages** (deployment via `docs/` folder)

---

## 🧩 Implementation Summary

### 🟦 Product (Base Class)
- `sku`
- `name`
- `price`
- `displayDetails()`
- `getPriceWithTax()`

### 🟩 PhysicalProduct (extends Product)
- `weight`
- 10% tax rate  
- `getWeight()` / `getWeightValue()`
- `applyBulkDiscount()` (challenge feature)

### 🟪 DigitalProduct (extends Product)
- `fileSize`
- No tax  
- `getFileSize()`

### 🟧 Utilities

#### `taxCalculator.ts`
- `calculateTax(product)`

#### `Sort.ts`
- `byName(products)`
- `byPrice(products)`

---

## 🖥️ UI Implementation
Although the lab allowed an optional UI, a simple HTML output was implemented.

Two helper functions were created:

- `printToHTML()` → creates a `<p>` element and inserts text  
- `addBr()` → inserts `<br>` for spacing  

This mirrors console output directly into the webpage.

Tailwind CSS was used for basic styling.

---

## 🚀 Development

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Generate production build:

```bash
pnpm build

```

## 🌐 GitHub Pages Deployment (docs/ workflow)
To avoid MIME issues and absolute path problems with Vite builds, the project was reorganized:

development/ → source CSS + working environment

docs/ → final compiled output for GitHub Pages, were I copied and pasted dist output

## 🧪 Features Implemented
- Physical and digital product classes
- Tax calculation
- Bulk discount for physical products
- Sorting by name and price
- Console + HTML output
- Modular architecture
- TypeScript OOP principles
- Simple Tailwind styling

## 🧠 Critical Thinking

- TypeScript enforces type safety, preventing invalid operations at compile time.
- Inheritance reduces duplication between product types.
- Encapsulation keeps data protected and organized.
- Polymorphism allows new product types (e.g., SubscriptionProduct) to be added easily.
- The modular structure improves maintainability and scalability.

## 🧑‍💻 Personal Notes
- Having prior Java OOP experience made TypeScript classes feel familiar.
- Vite was extremely convenient for development.
- On Linux, npm caused issues, but pnpm worked flawlessly and resolved conflicts automatically.
- I reorganized my environment to keep development/ and docs/ separate, ensuring GitHub Pages works smoothly.

