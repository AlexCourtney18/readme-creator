// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const { title, description, contents, installation, usage, credits, license, features, contribute, tests, github } = data;

  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.contents}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Badges

  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please contact me through my GitHub profile or through email:
  [GitHub Profile](https://github.com/${data.github}/)
  [Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
