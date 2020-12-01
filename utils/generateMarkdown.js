// function to generate markdown for README
function generateMarkdown(questions) {

  let licenseColor = "";
  let licenseChoice = questions.license;

  switch (licenseChoice) {
    case 'Apache':
      licenseChoice = "This App uses the Apache License";
      licenseColor = "blue";
      break;
    case 'MIT':
      licenseChoice = "This App uses the MIT License";
      licenseColor = "green";
      break;
    case 'GNU':
      licenseChoice = "This App uses the GNU License";
      licenseColor = "red";
      break;
  }

  let collabs = questions.collabs;
  switch (collabs) {
    case true:
      collabs = "There are multiple collaborators on this project."
    case false:
      collabs = "There is only one contributer to this project."
  }

  return `# ${questions.title}  
![badge](https://img.shields.io/static/v1?label=License&message=${questions.license}&color=${licenseColor})  
## Description  
${questions.description}  
## Table of Contents  
* [Installation](#installation)  
* [Usage](#usage)  
* [Contributions](#contributions)  
* [License](#license)  
* [Created By](#created)  
* [Questions](#questions)  
* [Contact](#contact)  
* [Tests](#tests)  
## Installation  
${questions.instructions}  
## Usage  
${questions.usage}  
## Contributions  
${questions.collabs}  
## License  
${licenseChoice}.  
## Created By  
${questions.gitName}  
## Questions  
If you have any questions or concerns please contact me by using my Contact info below.  
## Contact  
Email: ${questions.email}  
https://github.com/${questions.gitName}/  
`;
}

module.exports = generateMarkdown;