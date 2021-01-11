/// variable declaration
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require("axios");
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questions = [
    {
    type: "input",
    message: "Please enter a title",
    name: 'title'
    },

    {
        type: "input",
        message: "Please enter a description",
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
fileName = "aREADME.md";
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
    if (err) {
        throw err;
      }
      writeToFile();}
    )}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(data) {
        const readmd = generateMarkdown(data);
        return writeFileAsync("readme.md", readmd);
    })
    .then(function(){
        console.log("wrote readme file");
    })
    .catch(function(err){
        console.log("err");
    });
}

// function call to initialize program
init();
