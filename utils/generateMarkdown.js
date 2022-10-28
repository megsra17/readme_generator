// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "unlicense") {
    return `![license](https://img.shields.io/badge/license-${license}-brightgreen.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "unlicense") {
    return `![license](https://opensource.org/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.desc}

## Table of Contest
-[Project Description](#desc)
-[Usage](#usage)
-[Contributing](#contributing)
-[Installation](#installation)
-[Questioning](#questions)
-[License](#license)

## Installation
${data.description}

## Usage
${data.usage}

## License 
This app cover this license: ${renderLicenseLink(data.license)}


## Contributing
${data.contributing}

## Tests Instructions
${data.test}

## Questions
Git username ${data.username}
Email to contact ${data.email}`;
}

//module.exports = generateMarkdown;
export default generateMarkdown;
