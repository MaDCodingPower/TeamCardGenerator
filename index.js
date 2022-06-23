// importing all necessary items
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Employee = require("./lib/employee")
const fs = require("fs")
const inquirer = require('inquirer')

// footer html to add at the end
const HTMLFooter = () => {
    fs.appendFile('./dist/index.html', `</div>
    </main>
</body>
</html>`, (err) =>
    err ? console.error(err) : console.log("successfully created Team Roster!")
)
} 

// function to prompt user if they wish to add another employee or if they are finished building team
const userCheck = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add an Engineer, an Intern, or are you finished building your team?',
            name: 'continue',
            choices: ['Engineer', 'Intern', 'Finished']
        }
    ])
    .then(answer => {
        if (answer.continue === "Engineer"){
            generateEngineer();
            generateCardEngineer();
        } else if (answer.continue === "Intern"){
            generateIntern();
            generateCardIntern();
        } else {
            HTMLFooter();
        }
    })
    .catch((err) => console.error(err));
}


init = () => {
    promptUserManager()
        .then((answers) => generateCardManager(answers))
        .then(userCheck)
        .catch((err) => console.error(err));  
}