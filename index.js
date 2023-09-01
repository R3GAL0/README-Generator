// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
            // {
            //     type: 'checkbox',
            //     message: 'What sections do you want to include?', // optional sections
            //     name: 'sections',
            //     choices: ['Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributors', 'Tests', 'FAQ'],
            // },
            {
                type: 'input',
                name: 'githubUser',
                message: 'What is you GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please write a short description of your project',
              },
            //   {
            //     type: 'list',
            //     name: 'license',
            //     message: 'What kind of license should your project have?',
            //     choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'None'],
            //   },
              {
                type: 'input',
                name: 'installation',
                message: 'What command should be run to install dependencies?',
              },
              {
                type: 'input',
                name: 'test',
                message: 'What command should be run to run tests?',
              },
              {
                type: 'input',
                name: 'usage',
                message: 'What does the user need to know about using the repo?',
              },
              {
                type: 'input',
                name: 'contributing',
                message: 'What does the user need to know about contributing to the repo?',
              },
              {
                type: 'input',
                name: 'questions',
                message: 'What are some common questions about the repo?',
              },
        ])
        .then((data) => {
            // add username and email to readme
            if (data.questions) {
              data.questions = '123'
            }
            data.questions.concat('~');
            data.questions.concat(data.githubUser);
            data.questions.concat('~');
            data.questions.concat(data.email);
            console.log(data.questions);

            writeToFile('READMEcustom.md', generateMarkdown(data));
        });

}

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    // appendFile() takes in 3 arguments: path, data, and callback function
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README created!')
    );
}
