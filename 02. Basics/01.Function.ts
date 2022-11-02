function addTwo(num: number) {
  // num.toUppercase(); // Error: Property 'toUppercase' does not exist on type 'number'.
  return num + 2;
}
addTwo(2);

// convert anyString to uppercase
function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("anyString");

// create a function signUpUser that takes a username and password and returns a bpplean
function signUpUser(
  firstname: string,
  lastname?: string,
  isPaid: boolean = false
) {
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
function addthree(num: number): number {
  //return "string"; // Error: Type 'string' is not assignable to type 'number'.
  return num + 3;
}

addthree(3);

// Special scenario: when a function returns a boolean or a string
// apply the return type as boolean or string using the union type
function getValue(val: number): boolean | string {
  if (val > 10) {
    return true;
  } else {
    return "false";
  }
}

// in arrow function
const getHello = (name: string): string => {
  return "Hello " + name;
};

const heros = ["Batman", "Superman", "Spiderman"];

/**
 * (method) Array<string>.map<string>(callbackfn: (value: string, index: number, array: string[]) => string, thisArg?: any): string[]
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
 * @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
heros.map((hero): string => {
  return hero.toUpperCase();
});

const getHero = (index: number): string => {
  return heros[index];
};

getHero(1);

// void function
function log(message: string): void {
    console.log(message);
}

// never function
function throwError(message: string): never {
    throw new Error(message);
}

/**
 * difference between void and never
 * void: function that returns nothing
 * never: function that never returns anything, forceful termination of the program
 */

export {};
