// TODO: Include packages needed for this application
const renderLicenseLink = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

const fs = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([

    { 
       type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: input => {
            if (input) {
                return true;
            }else{
                console.log("Enter a title please");
                return false;
            }
        }
    },
    {
        type: 'input',
         name: 'description',
         message: 'What is the description of your project?',
         validate: input => {
             if (input) {
                 return true;
             }else{
                 console.log("Enter a description please");
                 return false;
             }
         }
     },
     {
        type: 'confirm',
         name: 'confirmTable',
         message: 'Table of contents needed? Optional',
        default: true
     },
     {
        type: 'input',
         name: 'installation',
         message: 'Installation instructions?',
         validate: input => {
             if (input) {
                 return true;
             }else{
                 console.log("Enter any info on how to install please");
                 return false;
             }
         }
     },
     {
        type: 'input',
         name: 'usage',
         message: 'What is the usage of this project?',
         validate: input => {
             if (input) {
                 return true;
             }else{
                 console.log("Enter information on usage please");
                 return false;
             }
         }
     },
     {
        type: 'list',
         name: 'license',
         message: 'What license applies to your project?',
         choices: [
            'None',
            'Apache License 2.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'Mozilla Public License 2.0',
            'The Unlicense'
         ]
     },
     {
        type: 'input',
         name: 'contribute',
         message: 'What are the contribution guidelines?',
         validate: input => {
             if (input) {
                 return true;
             }else{
                 console.log("Enter contribution guidelines");
                 return false;
             }
         }
     },
     {
        type: 'input',
         name: 'tests',
         message: 'What are the test instructions?',
         validate: input => {
             if (input) {
                 return true;
             }else{
                 console.log("Enter how to test information");
                 return false;
             }
         }
     },
     {
        type: 'input',
         name: 'username',
         message: 'What is your GitHub username?',
         validate: input => {
             if (input) {
                 return true;
             }else{
                 console.log("Enter a username please");
                 return false;
             }
         }
     },
     {
        type: 'input',
         name: 'email',
         message: 'What is your email address?',
         validate: input => {
             if (input) {
                 return true;
             }else{
                 console.log("Enter a email please");
                 return false;
             }
         }
     },
    ]);
};
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const generateMarkdown = ({title, description, confirmTable, installation, usage, license, contributes, tests, username, email }) =>
`# ${title}

## ${description}


## Table of Contents (Optional)
${confirmTable}

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}



## Usage
${usage}


## Credits
${contributes}


${username}

${email}


## License
${renderLicenseLink(license)}


## Tests
${tests}
`
// // TODO: Create a function to initialize app
// function init() {}
const init =() => {
    questions()
    .then((answers) => fs.writeFile('./generatedREADME/README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully created README file'))
    .catch((err) => console.error(err));
};
// // Function call to initialize app
init();
