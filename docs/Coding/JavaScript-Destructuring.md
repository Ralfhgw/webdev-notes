### BASIC
#### 1. Array Destructuring
#### TODO: Extract the first and second color into variables firstColor and secondColor
```
const colors = ["red", "green", "blue"];
const firstColor = colors[0];
const secondColor = colors[1];
console.log("1.", firstColor, secondColor);
---
> 1. red green
```
#### 2. Skipping Values
#### TODO: Use destructuring to assign 10 to a and 30 to b (skip 20)
```
const numbers = [10, 20, 30, 40];
const a = numbers[0];
const b = numbers[2];
console.log("2.", a, b);
---
> 2. 10 30
```
#### 3. Object Destructuring
#### TODO: Extract name and city into variables
```
const person = { name: "Alice", age: 25, city: "Berlin" };
const firstName = person.name;
const city = person.city;
console.log("3.", firstName, city)
---
> 3. Alice Berlin
```
#### 4. Renaming While Destructuring
#### TODO: Extract brand into a variable called manufacturer
```
const car = { brand: "Tesla", model: "3" };
const manufacturer = car.brand;
console.log("4.", manufacturer);
---
> 4. Tesla
```
### INTERMEDIATE
#### 5. Rest with Arrays
#### TODO: Put the first letter in head and the rest in tail
```
const letters = ["a", "b", "c", "d", "e"];
const [head, ...tail] = letters;
console.log("5.", head, tail);
---
> 5. a (4) ['b', 'c', 'd', 'e']
```
#### 6. Rest with Objects
#### TODO: Extract id into a variable, and put the rest into a variable called details
```
const user = { id: 42, username: "bob42", email: "bob@example.com" };
const {id, ...details} = user;
const userID = user.id;
console.log("6.1", userID);
console.log("6.2", details);
---
> 6.1 42
> 6.2 {username: 'bob42', email: 'bob@example.com'}
```
#### 7. Default Values
#### TODO: Destructure theme and language (default to "en" if missing)
```
const settings = { theme: "dark" };
const settingsExtended = {
  ...settings,
  language: "en",
};
console.log("7.", settingsExtended);
---
> 7. {theme: 'dark', language: 'en'}
```
#### 8. Spread with Arrays
#### TODO: Create one array combined = [1, 2, 3, 4, 5]
```
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combinedArray = [...arr1, ...arr2];
console.log("8.", combinedArray);
---
> 8. (5) [1, 2, 3, 4, 5]
```
#### 9. Spread with Objects
#### TODO: Merge them so finalSettings has darkMode: true, showSidebar: true
```
const defaults = { darkMode: false, showSidebar: true };
const userSettings = { darkMode: true };
const combinedObject = { ...defaults, ...userSettings};
console.log(combinedObject);
---
> {darkMode: true, showSidebar: true}
```
### CHALLENGE
#### 10. Function Parameters with Destructuring
#### TODO: Write a function that takes a user object like:
```
// { name: "Lisa", age: 20, city: "Paris" }
// and logs: "Lisa (20) from Paris"
const obj = { name: "Lisa", age: 20, city: "Paris" };
function excercise( { name, age, city }) {
  console.log("10. ", name + " (" + age + ") from " + city);
}
excercise(obj);
---
> 10.  Lisa (20) from Paris
```
#### 11. Swapping Values
#### TODO: Use array destructuring to swap values of x and y
```
let x = 5,
  y = 10;

[x, y]=[y, x];
console.log("11. x=" + x + " y=" + y)
---
> 11. x=10 y=5
```
#### 12. Deep Destructuring
#### TODO: Extract coach and the name of the goalkeeper
```
const team = {
  coach: "Marta",
  players: [
    { name: "Anna", position: "forward" },
    { name: "Sophie", position: "goalkeeper" },
  ],
};

const { 
  coach, 
  players: [, { name: goalkeeperName }] 
} = team;
console.log("12.", coach, goalkeeperName);
---
> 12. Marta Sophie
```
#### 13. Combine Rest + Spread
#### TODO: Extract the first two numbers into variables,
```
const nums = [1, 2, 3, 4, 5];
const [first, second, ...rest] = nums;
const newArray = [first, second, ...rest, 99];
console.log("13.", newArray);
---
> (6) [1, 2, 3, 4, 5, 99]
```