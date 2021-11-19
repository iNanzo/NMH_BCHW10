// Options for asking user what next task is

const taskPrompt = [
    {
        type: "list",
        message: "Add a team member, or finish and create the HTML: ",
        name: 'promptAnswer',
        choices: ["Engineer", "Intern", "Create HTML"]
    }
]

//Team Members

const manager = [
    {
        type: "input",
        message: "Manager Name: ",
        name: "name"
    },

    {
        type: "input",
        message: "Manager ID: ",
        name: "id"
    },

    {
        type: "input",
        message: "Manager E-mail: ",
        name: "email"
    },

    {
        type: "input",
        message: "Manager Office Number: ",
        name: "office"
    },
]

const engineer = [
    {
        type: "input",
        message: "Engineer Name: ",
        name: "name"
    },

    {
        type: "input",
        message: "Engineer ID: ",
        name: "id"
    },

    {
        type: "input",
        message: "Engineer E-mail: ",
        name: "email"
    },

    {
        type: "input",
        message: "Engineer Github: ",
        name: "github"
    },
]

const intern = [
    {
        type: "input",
        message: "Intern Name: ",
        name: "name"
    },

    {
        type: "input",
        message: "Intern ID: ",
        name: "id"
    },

    {
        type: "input",
        message: "Intern E-mail: ",
        name: "email"
    },

    {
        type: "input",
        message: "Intern School: ",
        name: "school"
    },
]

module.exports = { 
    taskPrompt, manager, engineer, intern 
}