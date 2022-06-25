const Employee = require("./employee");

class Engineer extends Employee{
    constructor (name, id, email, github){
        super(name, id, email)
        this.github = github
    }

    getGithub(){
        return this.Github
    }

    getRole(){
        return "Engineer"
    }
}




module.exports = Engineer;