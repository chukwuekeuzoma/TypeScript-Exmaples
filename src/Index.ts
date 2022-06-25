//Basic Types
let id:number = 5;
let company:string = "Martins";
let isPublished:boolean = true;
let x:any = "Hello";
let ids:number[] = [1,4,3];
let arr:any[] =[1, true, "martins"]

//Tuple
let person:[number, string, boolean] = [1,"martins",false]

//Tuple Array
let employee:[number, string][];
employee=[
    [2,"uzo"],
    [3,"goro"],
    [5,"mart"]
]

//Unions
let pid:string | number 
pid= 44
pid="yea bitch"

//Enum
 enum direction1 {
     up = 10,
     down,
     left,
     right
 }

 enum direction2 {
    up = "up",
    down = "down",
    left = "left",
    right = "right"
}

//  console.log(direction2.down);
 
//Objects
type User = {
    id:number,
    name:string,
}

const user: User = {
    id:1,
    name:"martins"
}

//Type Assersion

let cid:any 

// let customerid = <number>cid
let customerid = cid as boolean

// functions

function addNum (x:number, y:number):number {
  return x + y
}

const addNum2 = (w:number, z:number):number =>  w + z

// console.log(addNum(2, 5));
// console.log(addNum2(5,5));

// Void

function log (message: string | number ):void {
   console.log(message);
   
}

// log("martins")

//interfaces and
// you can read only properties
interface Userinterface  {
    readonly id:number,
    name:string,
    age?:number
}

const user1: Userinterface  = {
    id:1,
    name:"martins"
}

// read only Interface with functions

interface MathFunc {
    (x:number, y: number):number;
}

const add: MathFunc = function (x:number, y:number):number{
    return x + y 
}

const minus: MathFunc =(x:number, y:number):number => x - y

// classes

interface Personinterface  {
    id:number,
    name:string,
    register():string
}

class Person implements Personinterface{
    id:number;
    name:string;
  
    constructor(id:number, name:string) {
        this.id = id,
        this.name = name
    }

    register(): string {
        return `${this.name} is registered`
    }
}

const brad = new Person(1, "martins");

// console.log(brad);

//Subclass
class Employee extends Person {
   position: string

   constructor (position: string, id:number, name:string) {
       super(id, name)
       this.position = position
   }

}

const emp = new Employee("Martins", 3, "Developer")

// console.log(emp);

function getArrayTwo(items:any[]):any[] {
    return new Array().concat(items)
}
// Generics 
function getArray<T>(items:T[]):T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["brad", "John", "Jilli"])

numArray.push()






