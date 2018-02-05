//var global
//let local and can change
//const

//---------------------javascript---------------------------------------------
var name = "chin";
console.log("name is " + name);

function show1(name) {
    let age =23;
    const agecheck = 25;
    console.log(`my name is ${name}`);

    const i=30;
    const message = `you are so ${i>agecheck ? "old":"young"}`;
    console.message;
}
//show1(30)

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

const showtn = tn => console.log(tn);
showtn("bechin");

// define class
class Man{
    constructor(name,age,gender){
        this.name= name;
        this.age=age;
        this.gender = gender;
    }

    xinchao(){
        console.log(`${this.name} chao cac bac`);
    }

    playsocer(){
        console.log("i can play soccer");
    }
}

const bechin = new Man("bechin",36,"nam");
bechin.xinchao();


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

class vovanbechin extends Father{
    constructor(name,age,hobby){
        super(name,age);
        this.hobby = hobby;
    }

    sayHello() {

        console.log(`${this.name} thich ${this.hobby}`);
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
const bechin11 = new vovanbechin("voavnbechin",26,"chim")
bechin11.sayHello();



var obj = {
    name: 'ThaoPham',
    age: 18
}

var obj2 = obj;
obj.age = 20;
console.log(obj2);
//var copy = Object.assign({}, obj);

const obj4 = {...obj,age:40};
const obj3 = { ...obj, age: 40 };
obj.age = 30;
//console.log(obj4);

var mang =[1,2,3,4,5,6];

var arr= [0,...mang,8,9];
mang[2] = 1000;
//console.log(mang);
//console.log(arr);

var add=(a,b)=>a + b;
var add=(a,b)=>{return a + b};
var add=(a,b)=>{
  c = 50;//not pure function because site effect
  return a + b};
console.log(add(5,6));

var check = (a,b) => a+b;
var check=(a,b) => {return a+b};

const vidu= check(2,3);
console.log(vidu);