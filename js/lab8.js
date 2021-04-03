"use strict";
// question 6
var add = (function(){
    let counter = 0;
    const add = function (){
        counter += 1;
    }
    const reset = function (){
        counter = 0;
    }

    const getCounter = function (){
        return counter;
    }
    return {
        add: add,
        reset: reset,
        counter: getCounter
    }
})();

console.log(add.counter());
add.add();
console.log(add.counter());
add.reset();
console.log(add.counter());

// question 7
// A free variable is a variable that is not a local or a parameter so in this case counter is the free variable

//question 8
function make_adder(inc){
    let counter = 0;
    return function(){
        return counter += inc;
    }
}
let add5 = make_adder(5)
console.log(add5());
console.log(add5());
console.log(add5());

// question 9
// Put all code in module IIFE
// (function(){
// 
// })();

// question 10

let empObj = (()=>{
    let name;
    let age;
    let salary;

    function setAge(newAge){
        age = newAge;
    }
    function setSalary(newSalary){
        salary = newSalary;
    }
    function setName(newName){
        name = newName;
    }
    function getAge(){
        return age;
    }
    function getSalary(){
        return salary;
    }
    function getName(){
        return name;
    }
    return {
        setName: setName,
        setSalary: setSalary,
        setAge: setAge,
        increaseSalary: (percentage)=>{
            setSalary(getSalary() + percentage * getSalary());
        },
        incrementSalary: ()=>{
            setAge(getAge() + 1);
        }
    }
})();

// question 11
empObj.address = ""
empObj.getAddress = function(){
    return this.address;
}
empObj.setAddress = function(newAddress){
    this.address = newAddress;
}