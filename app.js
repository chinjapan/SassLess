//var global
//let local and can change
//const

//---------------------javascript---------------------------------------------
var name = "chin";
console.log("name is " + name);

function Show(name) {

    let age1 = 23;
    const age = 24;

    console.log("I am " + age + "years old");

    console.log(`My name is ${name}. my old is ${age}`);   // ES6 chuoi

    const i = 30;
    const message = `you are so ${i > 30 ? "old" : "young"}`; //ES6 lenh trong chuoi
    console.log(message);
    //age = 25;
}
Show(name);

function nameFunc(a, b, c) {
}
const nameFunc1 = function (a, b, c) {
}
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     },

// };
//console.log(person.fullName());

// Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// Create a Person object
// var myFather = new Person("John", "Doe", 50, "blue");
// console.log(myFather);

//----------------------------------------------------



/////ES6 khai bao ham

const showMessage = message => console.log(message);
showMessage("Hellog world");
var stop = 1;


// define Class
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sayHello() {
        console.log(`${this.name} chao cac bac`);
    }
    playFootball() {
        console.log("i can play football");
    }
}

const teo = new Person('Quang Teo', 2, "male");
const ti = new Person('Quang Ti', 3, "male");

console.log(`Toi la ${teo.name} ${teo.age} tuoi`);
teo.sayHello();
console.log(`Toi la ${ti.name} ${ti.age} tuoi`);
ti.sayHello();

//Ke thua

class Father {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`${this.name} chao cac bac`);
    }
}

class Son extends Father {
    constructor(name, age, hobby){
        super(name, age); // giogn nhu base trong c#, trong react no ke thua lai component
        this.hobby = hobby;
    }
    sayHello(){
        console.log(`${this.name} thich ${this.hobby}`);
    }
}

// const teo = new Son("Teo", 20, "Chich");
// teo.sayHello();

var obj = {
    name: 'ThaoPham',
    age: 18
}
var obj2 = obj;
obj.age = 20;
console.log(obj2);
//var copy = Object.assign({}, obj);
const obj3 = { ...obj, age: 40 };
obj.age = 30;
console.log(obj3);
var mang =[1,2,3,4,5,6];
var arr= [0,...mang,8,9];
mang[2] = 1000;
console.log(mang);
console.log(arr);

var add=(a,b)=>a + b;
var add=(a,b)=>{return a + b};
var add=(a,b)=>{
  c = 50;//not pure function because site effect
  return a + b};
console.log(add(5,6));