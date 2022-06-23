const Employee = require("./employee");

class Intern extends Employee{
    constructor (school){
        super(name, id, email)
        this.school = school;
    }

    getSchool()

    getRole(){
        return "Intern"
    }
}

// prompt function to obtain intern information through inquirer
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
    fs.writeFile("./dist/index.html", generateIntern(answers), (err) => {
        if(err){
            console.error(err);
        }
        else {
            console.log("Intern Card added!")
        }
    })
}

module.exports = Intern;