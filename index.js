// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
import path from "path";

// TODO: Create an array of questions for user input
inquirer;
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the Project Title?",
  },
  {
    type: "input",
    name: "desc",
    message: "Projects Description",
  },
  {
    type: "input",
    name: "title",
    message: "Project Title?",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation Instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage",
  },
  {
    type: "input",
    name: "contributing",
    message: "Contributes information",
  },
  {
    type: "input",
    name: "Test Link",
    message: "Test",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like?",
    default: "unlicense",
    choices: [
      "MIT",
      "Apache",
      "lgpl_2_1",
      "unlicense",
      "GPL",
      "MIT License",
      "Apache 2",
      "BSD",
    ],
  },
  {
    type: "input",
    name: "test",
    message: "Instructions for app",
  },
  {
    type: "input",
    name: "username",
    message: "Git Username",
  },
  {
    type: "input",
    name: "email",
    message: "Email to contact",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//TODO: Create a function to initialize app
function init() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("README.md", generateMarkdown(answers));
    })
    .catch((error) => console.log(error));
}

// Function call to initialize app
init();
