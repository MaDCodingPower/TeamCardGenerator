// importing all necessary items
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Employee = require("./lib/employee")
const fs = require("fs")
const inquirer = require('inquirer');

// footer html to add at the end
const HTMLFooter = () => {
    fs.appendFile('./dist/index.html', `</div>
    </main>
</body>
</html>`, (err) =>
    err ? console.error(err) : console.log("successfully created Team Roster!")
)
} 


// below are three sections for class-based functions to generate, add, and write cards for the three subclasses: manager, engineer, and intern

// ----------------------------------------------------------------------------------------
// Manager Section


// prompt function to get manager information through inquirer
const promptUserManager = () => {
    return inquirer.prompt([
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
                        ${data.officenumber}
                        </div>
                    </section>
                </section>`;
}

// function to actually write the manager card information to the html file
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

//---------------------------------------------------------------------------------------------------------------------
// Intern Section

// prompt function to obtain intern information through inquirer
const promptUserIntern = () => {
    return inquirer.prompt([
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

const generateCardIntern = (answers) => {
    fs.appendFile("./dist/index.html", generateIntern(answers), (err) => {
        if(err){
            console.error(err);
        }
        else {
            console.log("Intern Card added!")
        }
    })
}

// -------------------------------------------------------------------
// Engineer Section

// prompt function to get information about engineer through inquirer
const promptUserEngineer = () =>{
    return inquirer.prompt ([
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
    ]);
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


const generateCardEngineer = (answers) => {
    fs.appendFile("./dist/index.html", generateEngineer(answers), (err) => {
        if(err){
            console.error(err);
        }
        else {
            console.log("Engineer Card added!")
        }
    })
    
}

// -------------------------------------------------------------------------------------------------------------

// function to prompt user if they wish to add another employee or if they are finished building team
const userCheck = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add an Engineer, an Intern, or are you finished building your team?',
            name: 'continue',
            choices: ['Engineer', 'Intern', 'Finished']
        }
    ])
    .then(answer => {
        if (answer.continue === "Engineer"){
            promptUserEngineer()
                .then((answers) => generateCardEngineer(answers))
                .then (userCheck)
                .catch(console.error)
        } else if (answer.continue === "Intern"){
            promptUserIntern()
                .then((answers) => generateCardIntern(answers))
                .then(userCheck)
                .catch(console.error)
        } else {
            HTMLFooter();
        }
    })
    .catch(console.error);
}


init = () => {
    promptUserManager()
        .then((answers) => generateCardManager(answers))
        .then(userCheck)
        .catch(console.error);  
}
init();