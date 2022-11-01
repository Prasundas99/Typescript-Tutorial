/**
 * variables in TypeScript are similar to variables in JavaScript
 * the main difference is that we can define the type of the variable
 * - string
 * - number
 * - boolean
 * - any
 * - array
 * - tuples
 * - enum
 * - void
 * - null
 * - undefined
 * - never
 * - object
 */

// Declaring vaiables in TypeScript with its types
// 1. String
let grettings: string = "Hello World";

console.log(grettings);

// grettings = 6; // Error: Type 'number' is not assignable to type 'string'.
// this is the type safety feature of TypeScript that prevents us from assigning a value of a different type to a variable
// and more easily find bugs in our code also TS will give some auto completion related to that data type


// 2. Number
let age: number = 30;

console.log(age);

// 3. Boolean
let isMarried: boolean = true;

console.log(isMarried);

// 4. Any
let anything: any = "Hello World";

console.log(anything);

anything = 30;

console.log(anything);

anything = true;

console.log(anything);

// 5. Array
let hobbies: string[] = ["Cooking", "Sports"];

console.log(hobbies);

// 6. Tuples
let address: [string, number] = ["Superstreet", 99];

console.log(address);

// 7. Enum
enum Color {
  Gray, // 0
  Green = 100, // 100
  Blue = 2, // 2
}

let myColor: Color = Color.Green;

console.log(myColor);

export {};

