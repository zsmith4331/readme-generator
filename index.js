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
        type: "checkbox",
        message: "Select the sections that shall be included in the table of contents.",
        name: "table",
        choices: [
            "Installation",
            "Usage",
            "License",
            "Contributions",
            "Tests"]
    },
    {
        type: "input",
        message: "What are the installation instrucitons?",
        name: "instructions"
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
    
]).then(respone => {
    const content = `
# ${respone.title}

## Description
${respone.description}

## Table of Contents
${respone.table}

## Instructions
${respone.instructions}

## Useage Information
${respone.usage}

## License
${respone.license}

## Contributors
${respone.contributors}

## Testing
${respone.test}

## Questions
Please see Github Profile and Email Address below to ask questions  
Github Profile: ${respone.github} | Email: ${respone.email}
    `;   
    
    fs.writeFile('README.md', content, err => {
        if (err) console.log(err);
        else console.log('success!');
      });
});