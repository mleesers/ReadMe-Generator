// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        //filename
        type: 'input',
        message: 'Enter the filename of the project',
        name: 'fileName',
    },
    {
        //title of project
        type: 'input',
        message: 'Enter the title of the project',
        name: 'title',
    },
    {
        //deployedUrl of project
        type: 'input',
        message: 'Enter the deployed link of the project (if deployed)',
        name: 'deployedUrl',
    },
    {
        //description
        type: 'input',
        message: 'Enter the description of the project',
        name: 'description',
    },
    {
        //install
        type: 'input',
        message: 'Enter the optimal install method',
        name: 'install',
    },
    {
        //install code
        type: 'input',
        message: 'Enter a installation code example (leave blank if not needed)',
        name: 'install_code',
    },
    {
        //usage
        type: 'input',
        message: 'Enter the usage information',
        name: 'usage',
    },
    {
        //usage code
        type: 'input',
        message: 'Enter a usage code example (leave blank if not needed)',
        name: 'usage_code',
    },
    {
        //license
        type: 'list',
        message: 'Enter the license of the project',
        name: 'license',
        choices: [
            "None",
            "Apache 2.0 License",
            "BSD 3-Clause License",
            "MIT License",
            "IBM Public License Version 1.0",
        ]
    },
    {
        //tests
        type: 'input',
        message: 'Enter the test conditions',
        name: 'test',
    },
    {
        //contributions
        type: 'input',
        message: 'Enter the Contribution Guidelines',
        name: 'contribution',
    },
    {
        //github username
        type: 'input',
        message: 'Enter your github username',
        name: 'github',
    },
    {
        //email address
        type: 'input',
        message: 'Enter your contact email address',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
    err ? console.error("error") : console.log("success"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) =>
        writeToFile(response.fileName, response)
    );
}

// Function call to initialize app
init();