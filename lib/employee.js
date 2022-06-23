const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getName() {
        inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: 'Enter Name of Employee',
            }
        ])
    }

    getId() {
        inquirer.prompt([
            {
            type: 'input',
            name: 'id',
            message: 'Enter ID of Employee',
            }
        ])
    }

    getEmail(){
        inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: 'Enter Email of Employee',
            }
        ])
    }

    getRole(){
        return "Employee";
    }

}

module.exports = Employee;