const User: object = {
  name: "John",
  age: 30,
  isPaid: true,
  email: "john@user.com",
};

// Object type
// const user: object = {
//   name: "John",
//   age: 30,
//   isPaid: true,
//   email: "
// };

// better way

function createUser({
  name,
  age,
  isPaid,
  email,
}: {
  name: string;
  age: number;
  isPaid: boolean;
  email: string;
}) {
  return { name, age, isPaid, email };
}

let userObj: object = createUser({
  name: "John",
  age: 30,
  isPaid: true,
  email: "john@user.com",
});

//-------------------------------------------------------------------------

// Type alias with using coordinate
type Coordinate = {
  x: number;
  y: number;
};

function createCoordinate({ x, y }: Coordinate): Coordinate {
  return { x, y };
}

function printCorrdinate(pt: Coordinate) {
  console.log(`x: ${pt.x}, y: ${pt.y}`);
}

//-------------------------------------------------------------------------

// Readonly: to make the object immutable
type User = {
  readonly _id: string; // readonly property which cannot be changed down the line
  name: string;
  age: number;
  isPaid: boolean;
  creditCardDetails?: {
    // marked as optional
    cardNumber: number;
    cardExpiry: string;
  };
};

const user: User = {
  _id: "123",
  name: "John",
  age: 30,
  isPaid: true,
};

user.name = "John Doe";
//user._id = '456' // Error: Cannot assign to '_id' because it is a read-only property.

// combining types

type cardDate = {
  cardNumber: number;
};

type cardNumber = {
  cardNumber: number;
};

// & operator is used to combine types
// | operator is used to create union type
type CreditCardDetails = cardDate | cardNumber;
type cardDetails = cardDate &
  cardNumber & {
    cvv: number;
  };

export {};
