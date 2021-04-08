"use strict"
import {Person} from "./person.js"
export class Employee extends Person{

    constructor(name){
        super(name)

        // this.name = "";
        // this.dateOfBirth = null;
    }

    getSalary(){
        return this.salary;
    }
    getHireDate(){
        return this.hireDate
    }
    setSalary(newSalary){
        this.salary = newSalary;
    }
    setHireDate(hireDate){
        this.hireDate = hireDate;
    }

    doJob(title){
        return `${this.getName()} is a ${title} who earns $${this.salary}`;

    }

}