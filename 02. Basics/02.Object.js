"use strict";
exports.__esModule = true;
var User = {
    name: 'John',
    age: 30,
    isPaid: true,
    email: 'john@user.com'
};
// Object type
// const user: object = {
//   name: "John",
//   age: 30,
//   isPaid: true,
//   email: "
// };
// better way
function createUser(_a) {
    var name = _a.name, age = _a.age, isPaid = _a.isPaid, email = _a.email;
    return { name: name, age: age, isPaid: isPaid, email: email };
}
var userObj = createUser({
    name: 'John',
    age: 30,
    isPaid: true,
    email: 'john@user.com'
});
function createCoordinate(_a) {
    var x = _a.x, y = _a.y;
    return { x: x, y: y };
}
function printCorrdinate(pt) {
    console.log("x: ".concat(pt.x, ", y: ").concat(pt.y));
}
var user = {
    _id: '123',
    name: 'John',
    age: 30,
    isPaid: true
};
user.name = 'John Doe';
