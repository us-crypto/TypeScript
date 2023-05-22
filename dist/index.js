"use strict";
console.log("hi Sir");
let asdasda = 20;
console.log(asdasda);
if (asdasda > 1) {
    console.log("hi Sir" + asdasda);
}
let sales = 123456789;
let sales2 = 2;
let course = 'WTF';
let published = true;
console.log("sales: " + sales);
let level;
level = 1;
level = 'ts is  a joke kid of js';
render(level);
function render(params) {
    console.log(params);
    console.log("hi Sir" + asdasda);
}
let numbers = [1, 2, 3, 4];
let arr = [1, 2, '3'];
console.log('short line');
numbers.forEach(n => console.log(n.toString()));
console.log('long line');
let arr2 = [];
let arr3 = [];
numbers.forEach(element => {
    console.log('numbers lines');
    console.log(element.toString());
    console.log(' that shall be written ' + element);
    arr2.push(element);
    arr3.push(element.toString());
});
arr2.forEach(element => {
    console.log('arr2 (element directly push) lines');
    console.log(element);
});
arr3.forEach(element => {
    console.log('arr3 (toString push) lines');
    console.log(element);
});
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {})); //automatic starts from 0 goes 
console.log(Size.Medium);
var Size2;
(function (Size2) {
    Size2[Size2["Small"] = 2] = "Small";
    Size2[Size2["Medium"] = 3] = "Medium";
    Size2[Size2["Large"] = 4] = "Large";
})(Size2 || (Size2 = {})); //automatic starts from 2 goes up
console.log(Size2.Medium);
var Size3;
(function (Size3) {
    Size3["Small"] = "S";
    Size3["Medium"] = "M";
    Size3["Large"] = "L";
})(Size3 || (Size3 = {})); //not automatic
console.log(Size3.Medium);
console.log(1 /* SizeOptimized.Medium */);
function calculateTax(input, taxYear) {
    if (taxYear > 100) {
        return input * 2;
    }
    else {
        return input * 5;
    }
}
//optional tax year forces us to give|| in if in order to always have a value there
function calculateTax2(input, taxYear) {
    if ((taxYear || 2022) > 100) {
        return input * 2;
    }
    else {
        return input * 5;
    }
}
//default value to be overwritten if a input will be given
function calculateTax3(input, taxYear = 2022) {
    if (taxYear > 100) {
        return input * 2;
    }
    else {
        return input * 5;
    }
}
let employee = {
    id: 1,
    name: 'John',
    retire: (date) => {
        console.log('retired ' + date);
    }
};
//optional name to add it later
let employee2 = {
    id: 1
};
employee2.name = 'Moji';
//giving emepty name to add later 
let employee3 = {
    id: 1,
    name: ''
};
employee2.name = 'Moji';
let testEmployee = {
    id: 1,
    name: 'John',
    retire: (date) => {
        console.log('retired ' + date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2;
    }
    else {
        return parseInt(weight) * 2;
    }
}
console.log('here is the function location ');
console.log(kgToLbs(3));
console.log(kgToLbs('6'));
//# sourceMappingURL=index.js.map