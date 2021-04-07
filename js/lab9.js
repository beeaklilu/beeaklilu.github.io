"use strict"

//Question 1
const person = {
    name: "",
    dateOfBirth: null,
    getName: function(){
        return this.name
    },
    setName: function(value){
        this.name = value;
    }

}

let john = Object.create(person);
john.setName("John");
john.dateOfBirth = new Date(1998,11,10);

console.log(`The person's name is ${john.getName()}`)
console.log(`${john.getName()} was born on ${john.dateOfBirth.getFullYear()}-${john.dateOfBirth.getMonth() + 1}-${john.dateOfBirth.getDate()}`)


//Question 2
const emp = Object.create(person);
emp.salary = 0.0;
emp.hirDate = new Date();

emp.doJob = function(title){
    console.log(`${this.getName()} is a ${title} who earns $${this.salary}`)

}

const anna = Object.create(emp)
anna.setName("Anna");
anna.salary = 249995.50;
anna.doJob("Programmer");

//Question 3
function Person(){
    this.name = "";
    this.dateOfBirth = null;
    this.getName = function () {
        return this.name;
    };
    this.setName =function (value) {
        this.name = value;
    };
    this.toString = function(){
        return `{Name: ${this.getName()}, DateOfBirth: ${this.dateOfBirth.toISOString().substring(0,10)}}`;
    }

}

const personObj = new Person();
personObj.setName("Peter")
personObj.dateOfBirth = new Date(1985,10,10);
console.log(personObj.toString())
