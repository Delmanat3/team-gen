module.exports = [{
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
 }];