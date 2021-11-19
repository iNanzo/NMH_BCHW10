//Required JS Files
const inquirer = require('inquirer');
const questions = require("./lib/questions.js")

var team = [];

// Manager Info, starts index.js
function addManager(){
    inquirer.prompt(questions.manager).then(
        (input) => {
            console.log(input);
            nextTask();
        }
    )
}

// Prompts next task
function nextTask(){
    inquirer.prompt(questions.taskPrompt).then(
        (input) => {
            if(input.taskPrompt === "Engineer"){
                addEngineer();
                console.log("Engineer was chosen")
            }
            else if(input.taskPrompt === "Intern"){
                addIntern();
                console.log("Intern was chosen")
            }
            else if(input.taskPrompt === "Create HTML"){
                createHTML();
                console.log("Creating HTML")
            }
        }
    ).catch(
        (error) => {
            console.log("Error: " + error + ". Please try again.")
        }
    )
}

// Add team member (excluding Manager) functions, finishes with nextTask() to loop

function addEngineer(){
    inquirer.prompt(questions.engineer).then(
        (input) => {
            console.log(input);
            nextTask();
        }
    )
}

function addIntern(){
    inquirer.prompt(questions.intern).then(
        (input) => {
            console.log(input);
            nextTask();
        }
    )
}

// Create HTML file function
function createHTML(){
    console.log("Making File")
}

addManager();