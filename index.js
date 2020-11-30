const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your github user name?',
        name: 'gitName'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
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
        type: 'list',
        message: 'Which license(s) would you like to include for your application readme?',
        name: 'license',
        choices: ["Apache", "MIT", "GNU",]
    },
];

// function to write README file
// function writeToFile(fileName, data) {
function writeToFile(markdown) {

    fs.writeFile('README.md', markdown, (err) =>
        err ? console.error(err) : console.log("success!")
    );

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
        const markdown = generateMarkdown(data)
        writeToFile(markdown)
    });

}

// function call to initialize program
init();