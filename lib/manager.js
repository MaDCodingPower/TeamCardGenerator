const inquirer = require("inquirer");
const Employee = require("./employee");

class Manager extends Employee {
    constructor (officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
    }

    getOfficeNumber(){
        inquirer.prompt([
            {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter office number',
            }
        ])
    }
    
    
    getRole(){
        return "Manager"
    }
}

module.exports = Manager;