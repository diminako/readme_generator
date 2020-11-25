const inquirer = require('inquirer');
const fs = require('fs');


// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the application title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description or your application?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps to install your project?',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'What are examples of use for your application?',
        name: 'usage'
    },
    {
        type: 'confirm',
        message: 'Were there any collaborators/contributions to your application?',
        name: 'collabs'
    },
    {
        type: 'input',
        message: 'Please describe how to test your application.',
        name: 'tests',
    },
    {
        type: 'checkbox',
        message: 'Which license(s) would you like to include for your application readme?',
        name: 'license',
        choices: ["HTML", "CSS", "JavaScript", "JQuery", "Node.js", "GIT"]
    },
];

// function to write README file
function writeToFile(fileName, data) {
















}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile
    });
}

// function call to initialize program
init();

//  create a command line application that accepts input


//  create a prompt for the Title
// generate a title from the input


//  create a prompt for installation instructions
// generate a title from the installation instructions

//  create a prompt for usage instructions
// generate a title from the usage instructions

//  create a prompt for contribution guidelines
// generate a title from the contribution guidelines

//  create a prompt for test instructions
// generate a title from the test instructions

//  when I enter my github username it is added to the section of the readme entitled Questions
//  a link is added to my github profile

//  create a prompt for my email address
//  add my email address to the section of the reame entitled Questions
// instructions are added with how to reach me with additional questions



//  Give a list of options to choose a license.
//  when the license is selected it is added to the top of the readme
//  a notice is added to the section of the readme entitaled license
//  explain which license the application is covered under



//  When the user clicks on links in the Table of contents they are taken to corresponding part.  