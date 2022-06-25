"use strict";
//Basic Types
let id = 5;
let company = "Martins";
let isPublished = true;
let x = "Hello";
let ids = [1, 4, 3];
let arr = [1, true, "martins"];
//Tuple
let person = [1, "martins", false];
//Tuple Array
let employee;
employee = [
    [2, "uzo"],
    [3, "goro"],
    [5, "mart"]
];
//Unions
let pid;
pid = 44;
pid = "yea bitch";
//Enum
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 10] = "up";
    direction1[direction1["down"] = 11] = "down";
    direction1[direction1["left"] = 12] = "left";
    direction1[direction1["right"] = 13] = "right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["up"] = "up";
    direction2["down"] = "down";
    direction2["left"] = "left";
    direction2["right"] = "right";
})(direction2 || (direction2 = {}));
const user = {
    id: 1,
    name: "martins"
};
//Type Assersion
let cid;
// let customerid = <number>cid
let customerid = cid;
// functions
function addNum(x, y) {
    return x + y;
}
const addNum2 = (w, z) => w + z;
// console.log(addNum(2, 5));
// console.log(addNum2(5,5));
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "martins"
};
const add = function (x, y) {
    return x + y;
};
const minus = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const brad = new Person(1, "martins");
// console.log(brad);
//Subclass
class Employee extends Person {
    constructor(position, id, name) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee("Martins", 3, "Developer");
// console.log(emp);
function getArrayTwo(items) {
    return new Array().concat(items);
}
// Generics 
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "John", "Jilli"]);
numArray.push();
