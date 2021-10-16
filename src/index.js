const inquirer = require("inquirer");




// const questions = ([{
//     type: "input",
//     name: 'title',
//     message:"enter me title here:"

// }, {
//     type: 'input',
//     name: 'description',
//     message: "enter a description now hoecakes:"
// }, {
//     type: 'input',
//     name: 'install',
//     message: "tell a mf how to get it:"
// }, {
//     type: 'input',
//     name: 'contributers',
//     message: " contributer: wouldnt you like to know weather boy"
// }, {
//     type: 'input',
//     name: 'usage',
//     message: "usage guide for those too funky to use the interwebs:"
// }, {
//     type: 'list',
//     name: 'license',
//     message: "gimme the license and run:",
//     choices: ['MIT', 'ISP', 'HIV', 'SUCKY']


// },{
//     type: 'input',
//     name: 'tests',
//     message: "test me baby: "
// },{
//     type: 'input',
//     name: 'profile',
//     message: "the git hubs for when u do the dew: ",
//     default:'Delmanat3'
// },{
//     type: 'input',
//     name: 'contact',
//     message: 'the email(@hotmails will redirected to satan): ',
//     default:'delman.nathan832@gmail.com'
// },
// ]);

// function writeToFile(fileName, data) {
// //fs.write(fileName,data); {
// fs.writeFileSync(fileName, generateMarkdown(data))
// // }
// }



// function init() {
// inquirer.prompt(questions)
//     .then((response) => {
//         writeToFile("GENNYMEREADME.md", response)
//     })
// }

// init();