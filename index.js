const fs = require("fs");
const inquirer = require("inquirer");

// Generates badges for each license //
const licensebadge = license => {
    switch (license) {

        case 'Apache License v2.0':
            return '![License: Apache License v2.0](https://img.shields.io/badge/License-Apache%20License%20v2.0-green?style=for-the-badge)';         

        case 'GNU General Public License v3.0':
            return '![License: GNU General Public License v3.0](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v3.0-blue?style=for-the-badge)';

        case 'MIT License':
            return '![License: MIT License](https://img.shields.io/badge/License-MIT%20License-red?style=for-the-badge)';

        case 'Mozilla Public License 2.0':
            return '![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-orange?style=for-the-badge)';

    }
};

// Questions //
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
// Creating the content of the README.md file //
const content = `
# ${response.title}

${licensebadge(response.license)}

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
This README was created with ${response.license}.

## Contributors
${response.contributors}

## Testing
${response.test}

## Questions
If you have any questions please contact me via Github or Email below  
Github Profile: https://www.${response.github} | Email: ${response.email}
    `;   
    // Writes the README.md file from content //
    fs.writeFile("README.md", content, err => {
        if (err) console.log(err);
        else console.log("Successfully wrote to README.md");
      });
});