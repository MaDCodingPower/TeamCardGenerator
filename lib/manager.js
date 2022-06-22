const Employee = require("./employee");

class Manager extends Employee {
    constructor (officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){

    }
    
    getRole(){
        return "Manager"
    }
}

module.exports = Manager;