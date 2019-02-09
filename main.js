// First Program
console.log('Hello World');

// Log To Console
console.log(123);
console.log(true);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });

console.error('Thiis is some error');
// console.clear();
console.warn('This is warning');

// Time Start To End
console.time('Start');
console.log('1');
console.log('2');
console.log('3');
console.timeEnd('End');

//Variable 
// Var,Let,Const

var name = 'John Doe';
console.log(name);
// Init var
var greet;
console.log(greet);
greet = 'Hello';
console.log(greet);

// Rules Of Variable
// Letters,Numbers,underscore,Dollar Sign
// Can not start with numbers
//can not have white space

// Camell Case
var firstName = 'John';
var lastName = 'Doe'
// Pascal Case
var FirstName = 'Murad';
//UnderScore
var first_name;
//Lower Case
var fisrtname;

//Let
let num = 5;

function myNum() {
    let num = 56;
    console.log(num);
}
myNum();
console.log(num);

// Const
// can not re-assign
//Have to assign
//can push or set property but can not reassign const

const person = {
    name: 'John',
    age: 25
}
console.log(person.name + ' ' + person.age);

// Data Types
// Primitive
// String
const brand = 'Apple';
console.log(typeof brand);
// Number
const age = 25;
console.log(typeof age);
// Boolean
const hasKid = false;
console.log(typeof hasKid);
// Null
const car = null;
console.log(typeof car);
// Undefined
let Undefined;
console.log(typeof Undefined);
// Symbols
const sym = Symbol();
console.log(typeof sym);

// Reference or Non Primitive
// Arrays
const hobbies = ['Programming', 'Physics', 'Cosmology'];
console.log(typeof hobbies);
// Objects Literals
const address = {
    street: 'Mirpur 02',
    city: 'Dhaka',
    State: 'Dhaka'
}
console.log(typeof address);
// Functions
const myFunc = function () {

}
console.log(typeof myFunc);
// Dates
const today = new Date();
console.log(typeof today);
console.log(today);
// Anything Else

// Numbers | The Math Object
const num1 = 100;
const num2 = 50;

let value;
value = num1 + num2;
value = num1 - num2;
value = num1 * num2;
value = num1 / num2;
value = num1 % num2;

// Math Objects
value = Math.PI;
value = Math.E;
value = Math.round(2.4);
value = Math.pow(2, 3);
value = Math.ceil(2.5);
value = Math.floor(2.8);
value = Math.sqrt(64);
value = Math.abs(-5);
value = Math.min(34, 65, 76, 87);
value = Math.max(54, 56, 98, 32, 12);
value = Math.floor(Math.random() * 20);
console.log(value);

// String Method Concatenation
let brandName = 'Toyota';
let modelName = 'Royal Crown';
let carInfo = modelName + ',' + brandName;
console.log(carInfo);
// Concate Method
console.log(brandName.concat(',', modelName));
//Escaping
var someString = 'That\'s awesome, I can\'t wait';
//String Length
console.log(someString.length);
//Change Case  
console.log(brandName.toUpperCase());
console.log(brandName.toLowerCase());
// IndexOf()
console.log(brandName.indexOf('y'));
console.log(brandName.lastIndexOf('o'));
// charAt()
console.log(brandName.charAt(2));
//Get Last char
console.log(brandName.charAt(brandName.length - 1));
// Substring()
console.log(modelName.substring(0, 4));
// slice()
console.log(someString.slice(5, 10));
// Split()
const str = 'This is string';
const temp = str.split(' ');
console.log(temp);
const skills = 'html css js php java vue';
console.log(skills.split(' '))
// Replace()
console.log(str.replace('string', 'new string'));
//Includes()
console.log(str.includes('string'));

// Template Literals
const myName = 'Murad';
const myAge = 25;
const myJob = 'Web Development';
const myCity = 'Dhaka';
let myInfo = `<ul>
                    <li>${myName}</li>
                     <li>${myAge}</li>
                     <li>${myJob}</li>
                     <li>${myCity}</li>
                  </ul>`;
// document.body.innerHTML = myInfo;

// Arrays | Array Method
const numbers = [34, 54, 56, 67, 76, 87];
numbers[6] = 45;
console.log(numbers.length);
console.log(numbers.indexOf(45));
const numbers2 = new Array(34, 54, 65, 76, 89);
console.log(numbers2);
const fruit = ['apple', 'banana', 'orange', 'pear'];
console.log(fruit[2]);
const mixed = [24, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];
console.log(mixed);
// Check Is Array or not
console.log(Array.isArray(mixed));
// Array Built Method
// Push() | Add to end
numbers.push(90);
//Unshift() Add to front
numbers.unshift(34);
// take off from end
numbers.pop();
// take off from front
numbers.shift();
//splice values from array
numbers.splice(1, 2);
// Reverse
numbers.reverse();
// concate array
console.log(numbers.concat(numbers2));
// sort array
console.log(numbers.sort());
let sortNum = numbers.sort(function (x, y) {
    return x - y;
});
console.log(sortNum);
let revNum = numbers.sort(function (x, y) {
    return y - x;
});
console.log(revNum);
console.log(fruit.sort());
// Find()
function findNum(num) {
    return num < 50;
}
let n = numbers.find(findNum);
console.log(n);
// Object Literals
let mySelf = {
    firstName: 'Murad',
    lastName: 'Hossain',
    hobbies: ['Traveling', 'Drawing', 'Programming'],
    address: {
        district: 'Laksmipur',
        city: 'Dhaka'
    },
    getBirthYear: function () {
        return 1994;
    }
}
console.log(mySelf.firstName);
console.log(mySelf.getBirthYear());

// Dates and Time
const todays = new Date();
console.log(todays);
let birthDate = new Date('25-12-1994 12:24:00');
console.log(birthDate);
console.log(todays.getDate());
console.log(todays.getMonth());
console.log(todays.getDay());
console.log(todays.getFullYear());
console.log(todays.getMinutes());
console.log(todays.getSeconds());
console.log(todays.getMilliseconds())
console.log(todays.getTime());

birthDate.setMonth(2);
birthDate.setDate(3);
birthDate.setFullYear(2020);
birthDate.setHours(2);
birthDate.setMinutes(25);
birthDate.setMilliseconds(30);

// If | If Else Statement
const id = 10;
if (id == 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

if (id != 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

if (typeof nid !== 'undefined') {
    console.log('The nid is ' + nid);
} else {
    console.log('No Nid');
}
const color = 'Green';
if (color === 'Red') {
    console.log('Color is red');
} else if (color === 'Green') {
    console.log('Color is Green');
} else {
    console.log('Don\'t know the color');
}

const ageOfX = 50;
if (ageOfX >= 20 && ageOfX <= 50) {
    console.log('Age is under 20 to 40');
}
// Ternary Operator
console.log(id == 100 ? 'Correct' : 'Incorrect');

// Switch Statements
let colour = 'red';
switch (colour) {
    case 'blue':
        console.log('Color is blue');
        break;
    case 'black':
        console.log('Color is black');
        break;
    case 'red':
        console.log('color is red');
        break;
    default:
        console.log('Don\'t know color');
}
let day;
switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}
console.log(day);

// Functions Declarations Expressions
function greeting() {
    // console.log('Hello');
    return 'Hello ' + this.name;
}
console.log(greeting());

function square(x) {
    return x * x;
}
console.log(square(4));
// Immediatley Invoking Function Expression
(function (name) {
    console.log('Immediatley invoking fiunction ran..' + name);
})('Murad');

const todo = {
    add: function () {
        console.log('Add todo..');
    },
    edit: function (id) {
        console.log('Edit todo id' + id);
    }
}
todo.delete = function () {
    console.log('delete todo...');
}
todo.add();
todo.edit();
todo.delete();

// Loops
// For Loops
for (let i = 0; i <= 10; i++) {
    // console.log(i);
    if (i === 2) {
        console.log('two is great number');
        continue;
    }
    console.log(i);
    if (i === 5) {
        break;
    }
}
// While Loop
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}
// Do While Loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// Iterate Array
    const cars = ['Ford','Toyota','Honda','Audi'];
    for(let i=0; i<cars.length; i++){
        console.log(cars[i]);
    }

    cars.forEach(function(car,index,array){
        console.log(`${index} : ${car}`);
        console.log(array);
    });

    const users = [
        {id: 1,name: 'John'},
        {id: 2,name: 'Sara'},
        {id: 3,name: 'Karen'}
    ];

    const ids = users.map(function (user) {  
        return user.id;
    });
    console.log(ids);

    const user = {
        firstName: 'John',
        lastName: 'Doe',
        age: 40
    }
    // For in Loop | Key Value Pairs
    for(let x in user){
        console.log(x,user[x]);
    }

// Scope
    var a = 5;
    let b = 6;
    const c = 7;

    function scope(){
        var a = 7;
        let b = 6;
        const c = 5;
        console.log('Function Scope: ',a,b,c);
    }
    scope();
    console.log('Global Scope: ',a,b,c);

console.log('End World');