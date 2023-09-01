// TODO: Create a function that returns a license badge based on which license is passed in
// Puts a badge beside the title
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license == 'None') {
    return '';
  }
  if (license == 'MIT') {
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
}

if (license == 'Unlicense') {
  return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
} 

if (license == 'GPL 3.0') {
  return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
}

}

// TODO: Create a function that returns the license link
// Put the link into renderLicense instead
function renderLicenseLink(license) {
  if (license == 2){
    return '<https://unlicense.org>';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// 'MIT', 'APACHE 2.0', 'GPL 3.0', 'None'
function renderLicense(license, details) {
  
  if (license == 'None') {
    return '';
  }
  if (license == 'MIT') {
  // badge: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  return `## License (MIT)\n\nMIT License\n\nCopyright (c) [${details}] [2023]\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n[License Link](https://opensource.org/licenses/MIT)`;
}

if (license == 'Unlicense') {
  // badge: [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
  return '## License (Unlicense)\n\nThis is free and unencumbered software released into the public domain.\n\nAnyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.\n\nIn jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nFor more information, please refer to [License Link](https://unlicense.org)';
} 


if (license == 'GPL 3.0') {
  // badge: [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
  return '## License (GPL 3.0)\n\nCopyright © 2007 Free Software Foundation, Inc. [<https://fsf.org/>](https://fsf.org/)\n Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.\n[License Link](https://www.gnu.org/licenses/gpl-3.0)';
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // insert all the components selected below
  return `# ${data.title}  ${renderLicenseBadge(data.license)}

## Table of Contents


${makeTOC(data.description, data.installation, data.test, data.usage, data.contributing, data.questions)}
${renderData(data.description, 'Description')}
${renderData(data.installation, 'Installation')}
${renderData(data.test, 'Test')}
${renderData(data.usage, 'Usage')}
${renderData(data.contributing, 'Contributing')}
${makeQuestions(data.questions, data.githubUser, data.email)}
${renderLicense(data.license, data.githubUser)}`;
}

// makes the content and headers for each section
function renderData(data, title) {
  if (!data) {
    return '';
  } else if (title == 'Questions') {
    let array = data.split('~');
    if (array[0] == '123') {
      array[0] = '';
    }
    // console.log (data);
    return `
   
  ## ${title}
  
  GitHub Username: ${array[1]}
  GitHub Link:
  Email: ${array[2]}
  ${data}`;

  }
  return `
 
## ${title}

${data}`;
}

// same as above but takes extra arguments for username and email
function makeQuestions(data, user, email){
  return `
 
## Questions

GitHub Username: ${user}

[GitHub Link](https://github.com/${user})

Email: ${email}

${data}`;

}

// makes the table of contents
function makeTOC(description ,installation, test, usage, contributing, questions) {
  let toc = '';
  if (description){
    toc = toc.concat('- [Description](#description)\n');
  }
  if (installation){
    toc = toc.concat('- [Installation](#installation)\n');
  }
  if (test){
    toc = toc.concat('- [Test](#test)\n');
  }
  if (usage){
    toc = toc.concat('- [Usage](#usage)\n');
  }
  if (contributing){
    toc = toc.concat('- [Contributing](#contributing)\n');
  }
  // will always have this section
  if (true){
    toc = toc.concat('- [Questions](#questions)\n');
  }
  return toc;
}

module.exports = generateMarkdown;
