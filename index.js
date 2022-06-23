// importing all necessary items
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Employee = require("./lib/employee")
const fs = require("fs")
const inquirer = require('inquirer')

const HTMLFooter = `</div>
    </main>
</body>
</html>`




// three inquirer prompts to collect information for manager, engineers and interns
const promptUser = () => {
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

const promptUserIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Intern Name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Intern ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Intern Email',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter Intern School',
        }
    ])
}


const promptUserEngineer = () =>{
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Engineer Name',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Engineer Email',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter Github Username',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Engineer ID',
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

// function to append to html file with any engineer cards
const generateEngineer = (data) => {
    return`<section class="teamCard">
                <section class="cardHeader">
                    <div class="employeeName text">
                    ${data.name}
                    </div>                    
                    <div class="employeeRole text">
                    Engineer
                    </div>
                </section>
                <section class="employeeInfo">
                    <div class="id text">
                    ${data.id}
                    </div>                    
                    <a href = "mailto:${data.email}" class="email text">
                    ${data.email}
                    </a>                    
                    <a href="https://github.com/${data.github}" class="github text">
                    ${data.github}
                    </a>
                </section>
            </section>`
}

// function to apppend inter cards to html file
const generateIntern = (data) => {
    return`<section class="teamCard">
                <section class="cardHeader">
                    <div class="employeeName text">
                    ${data.name}
                    </div>                    
                    <div class="employeeRole text">
                    Intern
                    </div>
                </section>
                <section class="employeeInfo">
                    <div class="id text">
                    ${data.id}
                    </div>                    
                    <a href = "mailto:${data.email}" class="email text">
                    ${data.email}
                    </a>                    
                    <div class="school text">
                    ${data.school}
                    </div>
                </section>
            </section>`
}

