# NMH_BCHW10# BCHW10-OOPTeamProfileGen

## Description

A Team Profile Generator, the terminal prompts the user for a manager, and from there they can add as many engineers or interns as they want. On the actual generated HTML/Page Emails are hyperlinked to open the user's email program, and engineer githubs will open in a new tab.

## Video & Screenshots  

https://www.youtube.com/watch?v=T1pj60O4lJw


Terminal Input

![image](https://cdn.discordapp.com/attachments/695157509761269790/911775659729231922/unknown.png)

HTML Output
![image](https://cdn.discordapp.com/attachments/695157509761269790/911775796350300230/unknown.png)

## Other

I was unable to get my npm test & test.js files to run correctly, but jest and other packages seem to be properly installed.

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
``` 