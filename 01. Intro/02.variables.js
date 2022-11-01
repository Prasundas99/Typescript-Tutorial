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
var grettings = "Hello World";
console.log(grettings);
// 2. Number
var age = 30;
console.log(age);
// 3. Boolean
var isMarried = true;
console.log(isMarried);
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
