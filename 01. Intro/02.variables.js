"use strict";
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
exports.__esModule = true;
// Declaring vaiables in TypeScript with its types
// 1. String
var grettings = "Hello World";
console.log(grettings);
// grettings = 6; // Error: Type 'number' is not assignable to type 'string'.
// this is the type safety feature of TypeScript that prevents us from assigning a value of a different type to a variable
// and more easily find bugs in our code also TS will give some auto completion related to that data type
grettings.toUpperCase(); // this will give auto completion related to string
console.log(grettings.toUpperCase());
// 2. Number
var age = 30;
console.log(age);
age.toPrecision(2); // this will give auto completion related to number
// number is for numbers like 1, 5.3, -10. JavaScript does not have a special runtime value for integers, so there's no equivalent to the int or float - everything is a number.
// 3. Boolean
var isMarried = true;
console.log(isMarried);
// Type inference
// TypeScript can infer the type of a variable based on the value assigned to it
var name = "John";
// name = 6; // Error: Type 'number' is not assignable to type 'string'.
// name = true; // Error: Type 'boolean' is not assignable to type 'string'.
// name = null; // Error: Type 'null' is not assignable to type 'string'.
console.log(name);
// 4. Any
var anything = "Hello World";
console.log(anything);
anything = 30;
console.log(anything);
anything = true;
console.log(anything);
// 5. Array
var hobbies = ["Cooking", "Sports"];
console.log(hobbies);
// 6. Tuples
var address = ["Superstreet", 99];
console.log(address);
// 7. Enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
