// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { setServers } = require("dns");
const { default: Choices } = require("inquirer/lib/objects/choices.js");




// TODO: Create an array of questions for user input
const questions = [ 
    {
   type: 'input',
   name: "title",
   message: 'What is the title of your project?',

},


{
    type: "input",
    name: "what",
    message: "How this project works and what is it for?",
},

{
   type:"input",
   name:"installation",
   message: "What are the steps required to install?",
},

{
    type: "input",
    name: "contribute",
    message: "'Would you like to allow other developers to contribute?",
},

{
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
},


{
    type: "list",
    name: "license",
    message: "Which license will you use for your project?",
    choices: ['mit', 'apache 2.0', 'gpl 3.0', 'no license'],
}




];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    fs.writeFile(fileName, data, (error) =>{
        if (error) throw new Error("uh oh", error)
    } )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
    .then((response) => {
        // console.log(response)

       const stuff = generateMarkdown(response);
    //    console.log(stuff)
       writeToFile("sample.md", stuff )
          }
    )
    
}

// Function call to initialize app
init();
