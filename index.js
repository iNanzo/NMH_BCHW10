//Required JS Files
const inquirer = require("inquirer");
const Manager = require("./lib/ManagerObj.js")
const Engineer = require("./lib/EngineerObj.js")
const Intern = require("./lib/InternObj.js")
const questions = require("./lib/questions.js")

var team = [];

// Manager Info, starts index.js
function addManager(){
    inquirer.prompt(questions.manager).then(
        (input) => {
            let teamManager = new Manager(input.name, input.id, input.email, input.office);
            team.push(teamManager);
            console.log(teamManager);

            nextTask();
        }
    )
}

// Prompts next task
function nextTask(){
    inquirer.prompt(questions.taskPrompt).then(
        (input) => {
            if(input.promptAnswer === "Engineer"){
                addEngineer();
                console.log("Engineer was chosen")
            }
            else if(input.promptAnswer === "Intern"){
                addIntern();
                console.log("Intern was chosen")
            }
            else{
                createHTML();
                console.log(input.promptAnswer)
            }
        }
    )
}

// Add team member (excluding Manager) functions, finishes with nextTask() to loop

function addEngineer(){
    inquirer.prompt(questions.engineer).then(
        (input) => {
            let teamEngineer = new Engineer(input.name, input.id, input.email, input.github);
            team.push(teamEngineer);
            console.log(teamEngineer);

            nextTask();
        }
    )
}

function addIntern(){
    inquirer.prompt(questions.intern).then(
        (input) => {
            let teamIntern = new Intern(input.name, input.id, input.email, input.school);
            team.push(teamIntern);

            nextTask();
        }
    )
}

// Create HTML file function
function createHTML(){
    console.log("Making File")
}

addManager();