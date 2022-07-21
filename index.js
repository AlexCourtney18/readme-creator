const { writeFile } = require('./utils/generate-readme.js');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide the description of your project!');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter the installation instructions.');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide usage instructions.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Would you like to list your collaborators, if any?',
            default: false
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list the names of your collaborators and a link to their GitHub profile.',
            when: ({ confirmCredits }) => {
                if (confirmCredits) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select the applicable license.',
            choices: ['Apache', 'GNU', 'ISC', 'MIT']
        },
        {
            type: 'input',
            name: 'features',
            message: 'Please list the features of your application. (Required)',
            validate: featuresInput => {
                if (featuresInput) {
                    return true;
                } else {
                    console.log('Please provide at least one feature.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContribute',
            message: 'Are users allowed to contribute to your project?',
            default: false
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please describe how other users can contribute to your project.',
            when: ({ confirmContribute }) => {
                if (confirmContribute) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to add instructions for tests the user can perform on your application?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please describe any tests the user can perform on the application.',
            when: ({ confirmTests }) => {
                if (confirmTests) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your Email address.');
                    return false;
                }
            }
        }
    ]);
};

questions()
    .then(userData => {
        return generatePage(userData);
    })
    .then(pageReadme => {
        return writeFile(pageReadme);
    })
