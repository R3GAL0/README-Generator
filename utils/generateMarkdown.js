// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 2){
    return '<https://unlicense.org>';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, details) {
  // takes an int from 0-2. Returns a license string based on selection.
  // details is an array: the fullname of the author @ 0 and the current year @ 1
  
  if (license == 0) {
    return '';
  }
  if (license == 1) {
    
  // MIT license
  return `##License\n\nMIT License\n\nCopyright (c) [${details[0]}] [${details[1]}]\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
}

if (license == 2) {
  // The Unlicense
  return '##License\n\nThis is free and unencumbered software released into the public domain.\n\nAnyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.\n\nIn jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nFor more information, please refer to <https://unlicense.org>';
} else {
  return '';
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // insert all the components selected below
  return `# ${data.title}

## Table of Contents


${makeTOC(data.description, data.installation, data.test, data.usage, data.contributing, data.questions)}
${renderData(data.description, 'Description')}
${renderData(data.installation, 'Installation')}
${renderData(data.test, 'Test')}
${renderData(data.usage, 'Usage')}
${renderData(data.contributing, 'Contributing')}
${makeQuestions(data.questions, data.githubUser, data.email)}`;

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

function makeQuestions(data, user, email){
  return `
 
## Questions

GitHub Username: ${user}
GitHub Link:
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
