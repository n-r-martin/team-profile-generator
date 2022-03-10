///// VARIABLES /////

// required packages stored in shorthand variables
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const htmlGenny = require('./src/htmlgenerator.js')

// Global Variables
let team = {
    manager: "",
    engineers: [],
    interns: []
};

///// FUNCTIONS /////

// Inquirer Functions
const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter team manager name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter team manager ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter team manager email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter team manager office phone number:',
            name: 'phone',
        }
    ])
};

const addMemberPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: "Would you like to add another member?",
            choices: ['Yes', 'No']
        },
    ])
}


const memberInfoPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select member role:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            message: 'Enter member name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter member ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter member email address:',
            name: 'email',
        },
        {
            when: (list) => list.role === "Engineer",
            type: 'input',
            message: 'Enter member GitHub URL:',
            name: 'githubUrl',
        },
        {
            when: (list) => list.role === "Intern",
            type: 'input',
            message: 'Enter member school:',
            name: 'school',
        }
    ])
}


// Application Functions
// Call prompts individually - instantiate objects and push objects to globally accessible array
// Smaller the better - for testing
const init = () => {
    managerPrompt()
    .then((answers) => {
        const managerObj = new Manager (answers.name, answers.id, answers.email, answers.phone);

        team.manager = managerObj;  
    })
    .then(() => addMember());
};

const addMember = () => {
    addMemberPrompt()
    .then((answer) => {
        if (answer.addMember === "Yes") {
            memberInfoPrompt()
            .then((answers) => {
                if (answers.role === 'Engineer') {
                    let newEngineer = new Engineer (answers.name,  answers.id, answers.email, answers.githubUrl);

                    team.engineers.push(newEngineer);

                } else if (answers.role === 'Intern') {
                    let newIntern = new Intern (answers.name,  answers.id, answers.email, answers.school);

                    team.interns.push(newIntern); 
                } 
            addMember();
           })
        } else {
            console.log('-----------------')
            console.log('creating team... ')
            console.log('-----------------')
            console.log('Your Team is:')
            console.log(team)
            generateTeam(team);
        } 
    }) 
};

const generateTeam = (team) => {
    fs.writeFileSync('./dist/index.html', htmlGenny.generateHTML(team))
    console.log('Successfully generated team!!!')
}


///// APPLICATION GO BRRRRRRRR -----> 
init()
    

///// EXPORTS /////
module.exports = {
    team
}




