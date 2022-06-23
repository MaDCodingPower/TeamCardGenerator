const { fstat } = require("fs");
const inquirer = require("inquirer");
const Employee = require("./employee");
const fs = require('fs')

class Manager extends Employee {
    constructor (officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    
    getRole(){
        return "Manager"
    }
}



// prompt function to get manager information through inquirer
const promptUserManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Manager Name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Manager ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Manager Email',
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'Enter Manager Office Number',
        },
    ])
}

// Function to generate manager card and header of html, since the manager is required first and will always be generated.
const generateManager = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            My Team
        </header>
        <main>
            <div class="flexContainer">
                <section class="teamCard">
                    <section class="cardHeader">
                        <div class="employeeName text">
                        ${data.name}
                        </div>                    
                        <div class="employeeRole text">
                        Manager
                        </div>
                    </section>
                    <section class="employeeInfo">
                        <div class="id text">
                        ${data.id}
                        </div>                    
                        <a href = "mailto:${data.email}" class="email text">
                        ${data.email}
                        </a>                    
                        <div class="officeNumber text">
                        ${data.officeNumber}
                        </div>
                    </section>
                </section>`;
}

const generateCardManager = (answers) => {
    fs.writeFile("./dist/index.html", generateManager(answers), (err) => {
        if(err){
            console.error(err);
        }
        else {
            console.log("Manager Card added!")
        }
    })
}

module.exports = Manager;