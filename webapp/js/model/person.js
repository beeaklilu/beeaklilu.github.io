export class Person{
    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    getName(){
       return this.name
    }
    setName(value){
        this.name = value;
    }
    getDateOfBirth(){
        return this.getDateOfBirth;
    }
    setDateOfBirth(newDateOfBirth){
        this.dateOfBirth = newDateOfBirth;
    }
    toString(){
        return `Name: ${this.getName()}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth() + 1}-${this.dateOfBirth.getDate()}`
    }
}