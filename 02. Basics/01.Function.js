"use strict";
exports.__esModule = true;
function addTwo(num) {
    // num.toUppercase(); // Error: Property 'toUppercase' does not exist on type 'number'.
    return num + 2;
}
addTwo(2);
// convert anyString to uppercase
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("anyString");
// create a function signUpUser that takes a username and password and returns a bpplean
function signUpUser(firstname, lastname, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    if (isPaid) {
        return firstname + lastname;
    }
}
signUpUser("John", "Doe", true);
signUpUser("John", "Doe");
signUpUser("John");
//--------------------------------------------------------------------------
// Better way to write functions in TypeScript
//  adding return type to the function
function addthree(num) {
    //return "string"; // Error: Type 'string' is not assignable to type 'number'.
    return num + 3;
}
addthree(3);
// Special scenario: when a function returns a boolean or a string
// apply the return type as boolean or string using the union type
function getValue(val) {
    if (val > 10) {
        return true;
    }
    else {
        return "false";
    }
}
// in arrow function
var getHello = function (name) {
    return "Hello " + name;
};
var heros = ["Batman", "Superman", "Spiderman"];
/**
 * (method) Array<string>.map<string>(callbackfn: (value: string, index: number, array: string[]) => string, thisArg?: any): string[]
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
 * @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
heros.map(function (hero) {
    return hero.toUpperCase();
});
var getHero = function (index) {
    return heros[index];
};
getHero(1);
// void function
function log(message) {
    console.log(message);
}
// never function
function throwError(message) {
    throw new Error(message);
}
