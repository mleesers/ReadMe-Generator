// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let str = "";
    switch (license) {
      case "Apache 2.0 License":
        str = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
        break;
      case "BSD 3-Clause License":
        str = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
        break;
      case "MIT License":
        str = "https://img.shields.io/badge/License-MIT-yellow.svg";
        break;
      case "IBM Public License Version 1.0":
        str = "https://img.shields.io/badge/License-IPL%201.0-blue.svg";
        break;
      default:
        str = "";
        break;
    }
  
    return str;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    var str = "";
    switch (license) {
      case "Apache 2.0 License":
        str = "https://opensource.org/licenses/Apache-2.0";
        break;
      case "BSD 3-Clause License":
        str = "https://opensource.org/licenses/BSD-3-Clause";
        break;
      case "MIT License":
        str = "https://opensource.org/licenses/MIT";
        break;
      case "IBM Public License Version 1.0":
        str = "https://opensource.org/licenses/IPL-1.0";
        break;
      default:
        str = "";
        break;
    }
  
    return str;
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    if (data.install_code) {
      data.install_code = `\`\`\`${data.install_code}\`\`\``
    } else {
      data.install_code = ``
    }
  
    if (data.usage_code) {
      data.usage_code = `\`\`\`${data.usage_code}\`\`\``
    } else {
      data.usage_code = ``
    }
  
    return `# ${data.title}
    
    ${renderLicenseSection(data.license)}
    
    deployment:${data.deployedUrl}  
    ## Description
    
    ${data.description}
    
    ## Table of Content
    
    [Installation Instructions](#installation-instructions)  
    [Usage Information](#usage-information)  
    [Contribution Guidelines](#contribution-guidelines)  
    [Test Instructions](#test-instructions)  
    [Questions](#questions)  
    
    ## Installation-Instructions
    
    ${data.install}  
    ${data.install_code}
    
    ## Usage-Information
    
    ${data.usage}  
    ${data.usage_code}
    
    ## License
    
    ${data.license}
    
    ## Contribution-Guidelines
    
    ${data.contribution}
    
    ## Test-Instructions
    
    ${data.test}
    
    ## Questions
    
    GitHub Username: [@${data.github}](https://github.com/${data.github})  
    
    Reach out to me at [${data.email}](mailto:${data.email}) for questions  
    `;
  }
  
  module.exports = generateMarkdown;