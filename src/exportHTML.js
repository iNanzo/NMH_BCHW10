//Require JS files
const fs = require('fs');
const Manager = require("../lib/ManagerObj.js");
const Engineer = require("../lib/EngineerObj.js");
const Intern = require("../lib/InternObj.js");

//Beginning of HTML
var htmlBegin = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>

<nav class="navbar navbar-dark bg-dark justify-content-center">
    <span class="navbar-brand mb-0 h1">My Team</span>
</nav>

<body>
    <div class="card-deck pt-5 adding-top justify-content-center">
`;

//End of HTML
var htmlEnd = `
</div>
</body>
</html>

<style type="text/css">
    body { background: #D0D8E1 !important; }
</style>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
`;

//Body of HTML/Team Member Cards
var teamCards = "";

//For combining aforementioned variables
var completeHTML = "";

function exportHTML(team){
    team.forEach(object => {
        if(object instanceof Manager) {
            teamCards += `
            <!-- ${object.getRole()} Card -->
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">${object.getRole()}</div>
                <div class="card-body">
                    <h5 class="card-title">${object.name}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="bg-dark list-group-item">ID: ${object.id}</li>
                        <li class="bg-dark list-group-item">E-Mail: <a href="mailto:${object.email}">${object.email}<a></li>
                        <li class="bg-dark list-group-item">Office: ${object.office}</li>
                    </ul>
                </div>
            </div>
            `
        }
        else if(object instanceof Engineer) {
            teamCards += `
            <!-- ${object.getRole()} Card -->
            <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                <div class="card-header">${object.getRole()}</div>
                <div class="card-body">
                    <h5 class="card-title">${object.name}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="bg-dark list-group-item">ID: ${object.id}</li>
                        <li class="bg-dark list-group-item">E-Mail: <a href="mailto:${object.email}">${object.email}<a></li>
                        <li class="bg-dark list-group-item">GitHub: <a href="https://github.com/${object.github}" target="_blank">${object.github}</a></li>
                    </ul>
                </div>
            </div>
            `
        }
        else if(object instanceof Intern) {
            teamCards += `
            <!-- ${object.getRole()} Card -->
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">${object.getRole()}</div>
                <div class="card-body">
                    <h5 class="card-title">${object.name}</h5>
                    <ul class="text-light list-group list-group-flush">
                        <li class="bg-dark list-group-item">ID: ${object.id}</li>
                        <li class="bg-dark list-group-item">E-Mail: <a href="mailto:${object.email}">${object.email}<a></li>
                        <li class="bg-dark list-group-item">School: ${object.school}</li>
                    </ul>
                </div>
            </div>
            `
        }
    })

    completeHTML = htmlBegin + teamCards + htmlEnd;

    fs.writeFile(
        `./dist/YourHTML.html`,
        `${completeHTML}`,
        (err) => err ? console.error(err) : console.log("HTML Exported to ./dist")
    );
}

module.exports = exportHTML;