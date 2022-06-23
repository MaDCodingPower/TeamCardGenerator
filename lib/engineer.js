const Employee = require("./employee");

class Engineer extends Employee{
    constructor (github){
        super(name, id, email)
        this.github = github
    }

    getRole(){
        return "Engineer"
    }
}


// prompt function to get information about engineer through inquirer
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


module.exports = Engineer;