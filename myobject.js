// object syntax
// First: Obect Contructor
const obj1 = new Object ({
    name: 'Adegbite',
    age: 26,
    phone: '08032366804' 
})
console.log(obj1.name + ' is ' + obj1.age + ' with ' + obj1.phone);

//Second: Object Literal
const obj2 = {
    School: 'OGS',
    State:'Osun'
}

console.log(obj1.name + ' went to ' + obj2.School + ' at the age of ' + obj1.age);

// How to add to object properties
obj2.city = 'Osogbo'

console.log(obj2.city);

// How to delete from Object properties
delete obj2.School
console.log(obj2.School);

// How to use square bracket
// For multiword properties like 'Last Name', 'Last-Name'
// You use it when you don't have standard/valid variable name.

obj2["First Name"] = 'Adekunle'

console.log(obj2["First Name"]);

// Property value Shorthand
// declare variable
let name = 'oluwasetemi';
let age = 20;

const temp = {
    name,
    age
}

// creating a function that return an object
function shotname(lg, region){
    return {
        lg:lg,
        region:region,
    }
}
let me = shotname('Olorunda', 'SW')

console.log(me.lg);

function shortname(lg1, region1) {
    return {
        lg1,
        region1
    } 
}
let me1 = shortname('Osogbo','South West') 

console.log(me1.region1);

// Existence check
// it provide a way to test whether the property exists.
// syntx: key in object
console.log('lg1' in me1);

// loop through all the properpties of an object
for (let lg1 in me1) {
    console.log(object);
}

// what about the other things we talked about?
