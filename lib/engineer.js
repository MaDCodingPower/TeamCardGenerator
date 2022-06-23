const Employee = require("./employee");

class Engineer extends Employee{
    constructor (github){
        super(name, id, email)
        this.github = github
    }

    getGithub(){
        return inquirer.prompt([
            {
            type: 'input',
            name: 'github',
            message: 'Enter Github Username',
            }
        ])
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;