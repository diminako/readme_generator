// function to generate markdown for README
function generateMarkdown(questions) {
  return `# ${questions.title}  
## Description  
${questions.description}  
## Table of Contents  
* [Installation](#installation)  
* [Usage](#usage)  
* [Credits](#credits)  
* [License](#license)  
* [Created By](#created by)  
* [Contact](#contact)  
* [Tests](#tests)  
## Installation  
${questions.instructions}  
## Usage  
${questions.usage}  
## Contributions  
${questions.collabs}  
## License  
${questions.license}  
## Created By  
${questions.gitName}  
## Contact  
${questions.email}  
https://github.com/${question.gitName}/  
`;

}

module.exports = generateMarkdown;
