const score: Array<number> = []
const names:Array<string> = []

// Example 1
function identityOne(val: boolean | number): boolean | number{
    return val
}


// Example 2 - Type any is not recommended
function identityTwo(val: any):any{
    return val
}

// Example 3 - Generic function we can see the type of the function
function identityThree<Type>(val: Type): Type {
    return val
}

// identityThree(true)

// Generic  but in shorter way
function identityFour<T>(val: T): T {
    return val
}



interface Bootle{
    brand: string,
    type: number
}

// identityFour<Bootle>({})

function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}


const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}

// anotherFunction(3, {})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}