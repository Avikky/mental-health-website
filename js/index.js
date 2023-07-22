// introduction to programming using js

// variables
// ways to declare variables in js
let num = 'a number';
let vx;
var vy;
const x = 1; //must be initiallised at the point of declaration
const y = 1;
var b  = 3;
let firstname, lastname;

// how to work with vairables in js
firstname = 'Victor'
lastname = "Anih"


// concatenation in js

let fullname = firstname +' '+ lastname; 

let sum = x + y;

// console.log(sum);

/**
 * Data types
 * we have a various datatypes in javascript
 * array
 * object
 * boolean
 * number
 * string
 * undefined
 * Null
 */

// arrays is a type datatype that helps to hold a group of data
let arr = [2, 3, 4]; // indexes count starts from 0-infinity

let arr2 = ['name', 23, 'address'];

// console.log(arr2[1])

//object
let person = {
    'firstname': 'Victor',
    'lastname': 'Anih',
    'age': 35,
    'address': 'Remote address',
    'education': {
        'primary': 'Army Command secondary school',
        'higher': 'University of Ife',
        'certifications': ['Cloud Engineer', 'Javascript developer', 'google expert in Firebase']
    }
}

// console.log(person.education.certifications[0]);
/**
 * Boolean data type
 * Boolean datatype helps when writing statements 
 * its is used to define truth or falsy statements in programming
 */

const male = true;
const animal = false;

if(false){
    
    console.log('animal seems to be true')
}else{
    console.log('animal seems to be false')
}

let xavi = null;

console.log(xavi = 'is a player');


function displayPerson() {
    console.log(person)
}
displayPerson();

/** a and b are called function arguement or you can refer it to be the input the function needs to work */
function add(a, b){
    let sum = a + b;
    console.log(sum)
}

// add(20, 40);
const subtract = function (x,y) {
    let sub = x - y;
    console.log(sub);
}





























