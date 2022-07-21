function generateMarkdown(data) {

  const { title, description, installation, usage, credits, license, features, contribute, tests, github, email } = data;

  return `
  # ${title}
  ![badge](https://img.shields.io/badge/license-${license}-brightgreen.svg)

  ## Description
  ${description}

  ## Table of Contents
  [Description](#description)</br>
  [Installation](#installation)</br>
  [Usage](#usage)</br>
  [Credits](#credits)</br>
  [License](#license)</br>
  [Features](#features)</br>
  [Contributions](#how-to-contribute)</br>
  [Tests](#tests)</br>
  [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Credits
  ${credits}

  ## License
  Licensed under ${license}.

  ## Features
  ${features}

  ## How to Contribute
  ${contribute}

  ## Tests
  ${tests}

  ## Questions
  If you have any questions, please contact me through my GitHub profile or through email:

  [GitHub](https://github.com/${github}/)

  [Email](mailto:${email})

`;
}

module.exports = generateMarkdown;
