const { fstat } = require("fs");
const inquirer = require("inquirer");
const Employee = require("./employee");
const fs = require('fs')

class Manager extends Employee {
    constructor (officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    
    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager"
    }
}





module.exports = Manager;