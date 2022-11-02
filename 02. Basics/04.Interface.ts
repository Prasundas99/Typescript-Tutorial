interface Person {
  readonly dbId: number;
  _id: string;
  name: string;
  googleId?: string;
  //Interesting part of interface are its function
  //startTrial: () => string; //way 1
  startTrial() : string; // way 2
}

//called reopening of interface
interface Person {
    token: string;
}


//interface can be extended also 
interface Admin extends Person {
    role: "Admin" | "User";
}



const person: Person = {
  dbId: 0,
  _id: "123",
  name: "John",
  startTrial: () => {
    return "Trial started";
  },
    token: "123"
};






