```javascript
const sales = [
  {
    id: 1,
    customer: { name: "Alice", state: "CA" },
    items: [
      { product: "Book", price: 15, quantity: 2 },
      { product: "Pen", price: 2, quantity: 5 },
    ],
  },
  {
    id: 2,
    customer: { name: "Bob", state: "NY" },
    items: [
      { product: "Book", price: 15, quantity: 1 },
      { product: "Laptop", price: 900, quantity: 1 },
    ],
  },
  {
    id: 3,
    customer: { name: "Charlie", state: "CA" },
    items: [{ product: "Pen", price: 2, quantity: 10 }],
  },
  {
    id: 4,
    customer: { name: "Diana", state: "TX" },
    items: [
      { product: "Book", price: 15, quantity: 3 },
      { product: "Pen", price: 2, quantity: 1 },
    ],
  },
];
```

### BASIC
#### 1. Access Nested Data
#### TODO: Log the name of the first customer
```javascript
console.log("1a.", sales[0].customer.name);
---
> 1a. Alice
```
#### TODO: Log the product name of the second item in the first sale
```javascript
console.log("1b.", sales[1].items[0].product);
---
> 1b. Book
```
#### 2. Calculate Sale Total
#### TODO: Write code that calculates the total price of the first sale
#### (Hint: multiply price * quantity for each item and sum them up)
```javascript
let total = 0;
for (const item of sales[0].items) {
  total += item.price * item.quantity;
}
console.log("2. Sale total:", total);
---
2. Sale total: 40
```
### INTERMEDIATE
#### 3. Group Total Sales by State (for loop)
#### TODO: Sum all sales amounts per state using a for loop
```javascript
const salesByState = {};
for (const sale of sales) {
  const state = sale.customer.state;
  
  let saleTotal = 0;
  for (const item of sale.items) {
    saleTotal += item.price * item.quantity;
  }
  
  if (salesByState[state]) {
    salesByState[state] += saleTotal;
  } else {
    salesByState[state] = saleTotal;
  }
}
console.log("3. Sales by state:", salesByState);
---
3. Sales by state: {CA: 60, NY: 915, TX: 47}
```
#### 4. Group Total Sales by State (reduce)
#### TODO: Do the same using Array.reduce
```javascript
const salesByStateReduce = sales.reduce((acc, sale) => {
  const state = sale.customer.state;
  
  const saleTotal = sale.items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
  
  acc[state] = (acc[state] || 0) + saleTotal;
  
  return acc;
}, {});
console.log("4. Sales by state (reduce):", salesByStateReduce);
---
> 4. Sales by state (reduce): {CA: 60, NY: 915, TX: 47}
```
### CHALLENGE
#### 5. Count Items Sold per State
#### TODO: For each state, calculate how many total items were sold (sum of all quantities)
```javascript
const itemCountByState = sales.reduce((acc, sale) => {
  const state = sale.customer.state;
  
  // Summiere alle Mengen für diesen Sale
  const itemCount = sale.items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
  
  acc[state] = (acc[state] || 0) + itemCount;
  
  return acc;
}, {});
console.log("5. Items sold per state:", itemCountByState);
---
> 5. Items sold per state: {CA: 17, NY: 2, TX: 4}
```
#### 6. Group by Product across All States
#### TODO: Calculate total revenue per product (Book, Pen, Laptop)
```javascript
const revenueByProduct = sales.reduce((acc, sale) => {
  sale.items.forEach(item => {
    const product = item.product;
    const revenue = item.price * item.quantity;
    
    acc[product] = (acc[product] || 0) + revenue;
  });
  
  return acc;
}, {});
console.log("6. Revenue by product:", revenueByProduct);
---
> 6. Revenue by product: {Book: 90, Pen: 32, Laptop: 900}
```
#### 7. Multiple Aggregations per State
#### TODO: For each state, calculate:
####  - total revenue
####  - number of transactions
####  - average transaction value
```javascript
const statsSummary = sales.reduce((acc, sale) => {
  const state = sale.customer.state;

  // Berechne Umsatz für diese Transaktion
  const saleTotal = sale.items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  // Initialisiere State-Objekt falls nicht vorhanden
  if (!acc[state]) {
    acc[state] = { revenue: 0, count: 0, average: 0 };
  }

  // Aktualisiere Werte
  acc[state].revenue += saleTotal;
  acc[state].count += 1;
  acc[state].average = acc[state].revenue / acc[state].count;

  // Sehr wichtig: Akkumulator zurückgeben!
  return acc;
}, {}); // Initialwert ist ein leeres Objekt

console.log(statsSummary);
---
CA:{revenue: 60, count: 2, average: 30}
NY:{revenue: 915, count: 1, average: 915}
TX:{revenue: 47, count: 1, average: 47}
[[Prototype]]:Object
```