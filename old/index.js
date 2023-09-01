// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// add a badge for the selected license to the readme

// github username is added to readme section 'questions' with a link to the profile
// email address added to wuestions section


askQuestions();

async function askQuestions() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'checkbox',
                message: 'What sections do you want to include?', // optional sections
                name: 'sections',
                choices: ['Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributors', 'Tests', 'FAQ'],
            },
            {
                type: 'input',
                name: 'githubUser',
                message: 'What is you GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            }
        ])
        .then((data) => {
            // console.log(data);
            // if (data.sections.includes('License')){
            //     pickLicense(data.githubUser);
            // }

            // catch if sections contains toc or questions
            // let sectionTxt = await fillSections(data.sections)
            console.log('outside function');
            console.log(sectionTxt);
            //{
            //   title: 'title',
            //   sections: [ 'Description', 'Usage', 'License' ],
            //   githubUser: 'max',
            //   email: '@roger'
            // }


            //   const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

            // writeToFile(filename, data);git 
        });

}

// ask inital questons
// ask section text questions
// format markdown
// format TOC
// write to file



// TODO: Create a function that returns the license section of README
// need to add badges to the licenses still
// If there is no license, return an empty string
function pickLicense(name) {
    // prompt to pick license
    // details is an array: the fullname of the author @ 0 and the current year @ 1

    if (license == 0) {
        return '';
    }
    if (license == 1) {

        // MIT license
        return `##License\n\nMIT License\n\nCopyright (c) [${name}] [2023]\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    }

    if (license == 2) {
        // The Unlicense
        return '##License\n\nThis is free and unencumbered software released into the public domain.\n\nAnyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.\n\nIn jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nFor more information, please refer to <https://unlicense.org>';
    } else {
        return '';
    }
    //  append a license link
    /*
    
      if (license == 2){
        return '<https://unlicense.org>';
      } else {
        return '';
      }
    */
}

// prompts user to fill all sections except TOC and license
// takes an array of strings
async function fillSections(sections) {

    // empty array to push section text into specific spots
    let sectionTxt = []; 
    // now prompt based on data to fill out selected sections
    // loop of statements for each element of sections
    for (let section of sections) {
        await inquirer
            .prompt([
                {
                    type: 'input',
                    message: `What do you want your ${section} section to say?`,
                    name: 'response',
                }
            ])
            .then((r) => {
                sectionTxt.push(r.response);
            });

    }    
    // console.log(sectionTxt);
    return sectionTxt;
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    // appendFile() takes in 3 arguments: path, data, and callback function
    fs.appendFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README created!')
    );
}

// takes in the input makes the text for the markdown file
function formatData(data) {
    // data structure
    //{
    //   title: 'titel',
    //   sections: [ 'Description', 'Usage', 'License' ],
    //   license: 'none',
    //   githubUser: 'max',
    //   email: '@roger'
    // }
    const { title, sections, license, githubUser, email } = data;
    /* req variables:
        descTxt
        installTxt
        usageTxt
        contribTxt

    */
    let markdownTxt = // need to add links for toc?
        `# ${title}

## Description

${descTxt}

## Table of Contents (Optional)

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

## Installation

${installTxt}

## Usage

${usageTxt}

## Contributing

${contribTxt}

## License

`
    // add badges to the license
    markdownTxt.concat(pickLicense(license, githubUser, '2023'));

    `
## Tests

${testsTxt}

## Questions

${questionsTxt}`

}