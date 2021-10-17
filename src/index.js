const inquirer = require("inquirer");


const Manager = require( "./justjs/Manager" );
const Engineer = require( "./justjs/Engineer" );
const Intern = require( "./justjs/Intern" );


let teamProfileArr = [];

 const questions = ([
    {
        type: "input",
        name: "managerName",
        message: "Input your manager's name:",
        validate: managerNameInput => {
           if ( managerNameInput && managerNameInput.length > 0 ) {
              return true;
           }
           else {
              console.log( "Input your manager's name:" );
              return false;
           };
        }
     },
     {
        type: "input",
        name: "managerId",
        message: "Input your manager's employee ID:",
        validate: managerIdInput => {
           if ( managerIdInput && managerIdInput.length > 0 ) {
              return true;
           }
           else {
              console.log( "Input your manager's employee ID:" );
              return false;
           };
        }
     },
     {
        type: "input",
        name: "managerEmail",
        message: "Input your manager's email address:",
        validate: managerEmailInput => {
           if ( managerEmailInput && managerEmailInput.length > 0 ) {
              // Check for valid email address format
              
                 return true;
              
           }
           else {
              console.log( "Input your manager's email address:" );
              return false;
           };
        }
     },
     {
        type: "input",
        name: "managerOfficeNum",
        message: "Input your manager's office number:",
        validate: managerOfficeNumInput => {
           if ( managerOfficeNumInput && managerOfficeNumInput.length > 0 ) {
              return true;
           }
           else {
              console.log( "Input your manager's office number:" );
              return false;
           };
        }
     },
    {
       type: "list",
       name: "menuChoices",
       message: "Please choose an option below:",
       choices: [ "Add an Engineer Profile", "Add an Intern Profile", "Done Generating Profiles" ],
       validate: menuChoicesInput => {
          if ( menuChoicesInput === "Add an Engineer Profile" || menuChoicesInput === "Add an Intern Profile" ) {
             return true;
          }
          else if( menuChoicesInput === "Done Generating Profiles" ) {
             return true;
          }
          else {
             console.log( "Please choose an option below:" );
             return false;
          };
       }
    },{
        type: "input",
        name: "engineerName",
        message: "Input your engineer's name:",
   validate: engineerNameInput => {
      if ( engineerNameInput && engineerNameInput.length > 0 ) {
         return true;
      }
      else {
         console.log( "Input your engineer's name:" );
         return false;
      };
   }
},
{
   type: "input",
   name: "engineerId",
   message: "Input your engineer's employee ID:",
   validate: engineerIdInput => {
      if ( engineerIdInput && engineerIdInput.length > 0 ) {
         return true;
      }
      else {
         console.log( "Input your engineer's employee ID:" );
         return false;
      };
   }
},
{
   type: "input",
   name: "engineerEmail",
   message: "Input your engineer's email address:",
   validate: engineerEmailInput => {
      if ( engineerEmailInput && engineerEmailInput.length > 0 ) {
           return true;
         
      }
      else {
         console.log( "Input your engineer's email address:" );
         return false;
      };
   }
},
{
   type: "input",
   name: "engineerGithubUsername",
   message: "Input your engineer's Github username:",
   validate: engineerGithubUsername => {
      if ( engineerGithubUsername && engineerGithubUsername.length > 0 ) {
         return true;
      }
      else {
         console.log( "Input your engineer's Github username:" );
         return false;
      };
   }
    },{
        type: "input",
        name: "internName",
        message: "Input your intern's name:",
        validate: internNameInput => {
           if ( internNameInput && internNameInput.length > 0 ) {
              return true;
           }
           else {
              console.log( "Input your intern's name:" );
              return false;
           };
        }
     },
     {
        type: "input",
        name: "internId",
        message: "Input your intern's employee ID:",
        validate: internIdInput => {
           if ( internIdInput && internIdInput.length > 0 ) {
              return true;
           }
           else {
              console.log( "Input your intern's employee ID:" );
              return false;
           };
        }
     },
     {
        type: "input",
        name: "internEmail",
        message: "Input your intern's email address:",
        validate: internEmailInput => {
           if ( internEmailInput && internEmailInput.length > 0 ) {
         
                 return true;
              
           }
           else {
              console.log( "Input your intern's email address:" );
              return false;
           };
        }
     },
     {
        type: "input",
        name: "internSchool",
        message: "Input your intern's school name:",
        validate: internSchoolInput => {
           if ( internSchoolInput && internSchoolInput.length > 0 ) {
              return true;
           }
           else {
              console.log( "Input your intern's school name:" );
              return false;
           };
        }
     }


]
 );
 function generateHtmlFile() {
    const holdHtmlArr = holdHtml.generateHtml( teamProfileArr );
    writeToFile( holdHtmlArr );
 };
 
 // Add the intern profile to the teamProfileArr array.
 function addInternProfile() {
    inquirer.prompt( internQuestions )
    .then ( function( data ) {
       const internName = data.internName;
       const internId = data.internId;
       const internEmail = data.internEmail;
       const internSchool = data.internSchool;
       const teamMember = new Intern( internName, internId, internEmail, internSchool );
 
       teamProfileArr.push( teamMember );

       addTeam();
    });
 };

 // Add the engineer profile to the teamProfileArr array.
 function addEngineerProfile() {
    inquirer.prompt( engineerQuestions )
    .then ( function( data ) {
       const engineerName = data.engineerName;
       const engineerId = data.engineerId;
       const engineerEmail = data.engineerEmail;
       const engineerGithubUsername = data.engineerGithubUsername;
       const teamMember = new Engineer( engineerName, engineerId, engineerEmail, engineerGithubUsername );
       
       teamProfileArr.push( teamMember );
 
       
       addTeam();
    });
 };

 function addTeam() {
    inquirer.prompt( addEmployeeQuestion )
    .then( function( data ) {
       switch ( data.menuChoices ) {
          case "Add an Engineer Profile":
             addEngineerProfile();
             break;
          case "Add an Intern Profile":
             addInternProfile();
             break;
          case "Done Generating Profiles":
             generateHtmlFile();
          break;
       };
    });
 };

 // Add the engineer profile to the teamProfileArr array
 function addManagerProfile() {
    inquirer.prompt( Questions )
    .then( function( data ) {
       const managerName = data.managerName;
       const managerId = data.managerId;
       const managerEmail = data.managerEmail;
       const managerOfficeNum = data.managerOfficeNum;
       const teamMember = new Manager( managerName, managerId, managerEmail, managerOfficeNum );
       
       teamProfileArr.push( teamMember );
 
       
       addTeam();
    });
 };
 // Start the application by displaying a welcome message.
 // Then populate prompts to get the user input for the manager profile.
 function init() {
    inquirer.prompt([
       {
          message: "Welcome to the Team Profile Generator.  Input your team name:",
          name: "teamName",
          validate: teamNameInput => {
             if ( teamNameInput && teamNameInput.length > 0 ) {
                return true;
             }
             else {
                console.log( "Input your team name:" );
                return false;
             };
          }
       }
    ])
    .then( function( data ) {
       const teamName = data.teamName;
       teamProfileArr.push( teamName );
       addManagerProfile();
    });
 };
 
 
 // Function call to initialize application.
 init();
    
    const Questions=inquirer.prompt(questions)
    
    module.exports(Questions)

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