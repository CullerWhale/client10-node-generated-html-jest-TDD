// TODO: Include packages needed for this application
// npm installed (package.json initiated) and inquirer installed
//npm install inquirer
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const generateMarkdown = require('./utils/generateMarkdown');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager');

// // TODO: Create an array of questions for user input
const answersArray = [];
const questions = [

  {
    type: "list",
    name: 'employeeType',
    message: "What is the role of the employee?",
    choices: ['Engineer', 'Manager', 'Intern']
  },

  {
    type: "input",
    name: 'email',
    message: "What is your email?"
  },

  {
    type: "input",
    name: 'id',
    message: "What is your employee ID?"
  },

  {
    type: "input",
    name: 'name',
    message: "What is the employee's name?"
  },



  {
    type: "input",
    name: 'userName',
    message: "What is your Github username?",
    when: function (answers) {
      return answers.employeeType == 'Engineer'
    }
  },

  {
    type: "input",
    name: 'officeNumber',
    message: "What is the employee's office number?",
    when: function (answers) {
      return answers.employeeType == 'Manager'
    }
  },

  {
    type: "input",
    name: 'school',
    message: "What is the intern's school?",
    when: function (answers) {
      return answers.employeeType == 'Intern'
    }
  },


  {
    type: "confirm",
    name: 'anotherEmployee',
    message: "Is there another employee?",
    default: true
  },

  // {
  //     type: "input",
  //     name: 'description', 
  //     message: "What is the description of the project?"
  // }, 
  // {
  //     type: "input",
  //     name: 'installation', 
  //     message: "What are the installation instrictions for the project?"
  // }, 
  // {
  //     type: "input",
  //     name: 'usage', 
  //     message: "How should this project be used?"
  // }, 
  // {
  //     type: "input",
  //     name: 'contribution', 
  //     message: "What are the contribution guidelines?"
  // }, 
  // {
  //     type: "input",
  //     name: 'test', 
  //     message: "What are the test instructions?"
  // }, 
  // {
  //     type: "list",
  //     name: 'license', 
  //     message: "Does your project require a license?",
  //     choices: ['Apache License 2.0', 'MIT License', 'Mozilla Publice License 2.0']
  // }
];

function startGame() {
  inquirer
    .prompt(
      /* Pass your questions in here */
      questions
    )
    .then((answers) => {
      console.log(answers);
      // answersArray.push(answers);
      processAnswers(answers)

      if (answers.anotherEmployee == true) {
        startGame();
      } else {
        generatePage(answersArray);
        console.log(answersArray);
      }
      

    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};


function processAnswers(answers) {
  if (answers.employeeType == 'Engineer') {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.userName);
    answersArray.push(engineer);

  } else if(answers.employeeType == 'Intern'){
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    answersArray.push(intern);
  } else {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    answersArray.push(manager);
  }

}; 






// TODO: Create a function to write README file
const generatePage = (answers) => {

  fs.writeFile('README.md', generateMarkdown(answers), (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('wrote to file successfully')
  })
};


startGame();
// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
