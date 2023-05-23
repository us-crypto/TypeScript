console.log("hi Sir");
let asdasda : number =20 ;
console.log(asdasda);
if (asdasda>1) {
    console.log("hi Sir" +asdasda);
}
let sales : number =123_456_789;
let sales2 =2;
let course : String ='WTF';
let published : boolean = true;
console.log("sales: " +sales);
let level;
level=1;
level='ts is  a joke kid of js';
render(level);
function render(params:any) {
    console.log(params);
    console.log("hi Sir" +asdasda);
}
let numbers :number[]=[1,2,3,4];
let arr:[ number, number, string] =[1,2,'3'];
console.log('short line');
numbers.forEach(n=>console.log(n.toString()));
console.log('long line');
let arr2: any []=[];
let arr3: any []=[];
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

const small=1;
const medium=2;
const large=3;
enum Size {Small, Medium, Large}        //automatic starts from 0 goes 
console.log(Size.Medium);
enum Size2 {Small=2, Medium, Large}     //automatic starts from 2 goes up
console.log(Size2.Medium);
enum Size3 {Small='S', Medium='M', Large='L'} //not automatic
console.log(Size3.Medium);
const enum SizeOptimized {Small, Medium, Large} // smaller js code
console.log(SizeOptimized.Medium);

function calculateTax(input:number,taxYear:number): number {
    
    if (taxYear>100) {
        return input*2;
    }else{
        return input*5;
    }
    
}
//optional tax year forces us to give|| in if in order to always have a value there
function calculateTax2(input:number,taxYear? :number): number {
    
    if ((taxYear||2022)>100) {
        return input*2;
    }else{
        return input*5;
    }
    
}
//default value to be overwritten if a input will be given
function calculateTax3(input:number,taxYear=2022): number {
    
    if (taxYear>100) {
        return input*2;
    }else{
        return input*5;
    }
    
}

let employee:{
    id:number,
    name:string,
    retire:(date:Date)=> void
}={
    id:1,
    name:'John',
    retire:(date:Date)=>{
        console.log('retired ' + date);
    }
}

//optional name to add it later
let employee2:{
    readonly id:number,
    name?:string,
}={
    id:1
}
employee2.name='Moji';
//giving emepty name to add later 
let employee3:{
    readonly id:number,
    name:string,
}={
    id:1,
    name:''
}
employee2.name='Moji';

/////from here next level 

type Employee={
    id:number,
    name:string,
    retire:(date:Date)=> void
}
let testEmployee :Employee={
    id: 1,
    name:'John',
    retire:(date:Date)=>{
        console.log('retired ' + date);
    }
}
function kgToLbs(weight:number|string): number {
    if (typeof weight==='number') {
        return weight*2;
    } else {
        return parseInt(weight)*2;
    }

}
console.log('here is the function location ')
console.log(kgToLbs(3));
console.log(kgToLbs('6'));

type Dragable={
    drag:()=> void
}

type Resizeable={
    resize:()=> void
}
type UIwidget=Dragable & Resizeable;

let widget:UIwidget={
    drag:()=>console.log('dragged'),
    resize:()=>console.log('resized')

}
function test(): number {
return 1;
    
}
type fix =50|100;
let num : fix=50;
type Metric = 'CM'|'INCH';
let metr :Metric ='CM';

function greet (name:string|null | undefined ){
    if (name) {
        console.log(' hi '+ name);
    } else {
                console.log(' Hola  ');
    }

}

greet(null);
