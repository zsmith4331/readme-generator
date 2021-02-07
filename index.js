const fs = require("fs");
const inquirer = require("inquirer");
// Need promt for title of project, then seciton for the following description, table of contents, installation, usage, license, contributing, tests, and questions.
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a brief description of the project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instrucitons?",
        name: "installation"
    },
    {

        type: "input",
        message: "What is this project used for?",
        name: "usage"
    },
    {
        type: "list",
        message: "Select the type of license for the project.",
        name: "license",
        choices: [
            "Apache License v2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "Mozilla Public License 2.0"]
    },
    {
        type: "input",
        message: "Name any contributors with this project.",
        name: "contributors"
    },
    {
        type: "input",
        message: "How should a user test this project?",
        name: "test"
    },
    {
        type: "input",
        message: "What is your Github Profile?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
    
]).then(response => {
    const content = `
# ${response.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions & Contact Information](#questions)

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.license}

## Contributors
${response.contributors}

## Testing
${response.test}

## Questions
Please see Github Profile and Email Address below to ask questions  
Github Profile: ${response.github} | Email: ${response.email}
    `;   
    
    fs.writeFile('README.md', content, err => {
        if (err) console.log(err);
        else console.log('success!');
      });
});

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
