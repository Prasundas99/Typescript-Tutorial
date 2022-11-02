// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

// type restriction
type User = [number, string]

const newUser: User = [112, "example@google.com"]

// immutable object
newUser[1] = "com"
