// array of questions for user
const questions = [
    {
        type: "input",
        message: "Description",
        name: 'description'
    },
    {
        type: "input",
        message: "Table of Contents",
        name: 'table'
    },
    {
        type: "input",
        message: "Installation",
        name: 'install'
    },
    {
        type: "input",
        message: "Usage",
        name: 'usage'
    },
    {
        type: "input",
        message: "contributions",
        name: 'contribution'
    },
    {
        type: "input",
        message: "Test instruction",
        name: 'Test'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    
}

// function to initialize program
function init() {
    var inquirer = require('inquirer');
    inquirer
      .prompt(questions)
        
      .then(answers => {
        
      })
      .catch(error => {
        if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else when wrong
        }
      });
}

// function call to initialize program
init();
