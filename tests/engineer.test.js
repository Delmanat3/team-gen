const Engineer = require("./engineer");

// const engineer = new Engineer('', 12, 'mike@gmail.com', 'mike-Github');

test( "what is engineer's username", () => {
   const tUsername = "biggermike";
   const engineer = new Engineer( "big mike", 69, "bigmike@hotmail.com", tUsername );

   expect( engineer.gitUsername ).toBe( tUsername );
});

test( "set hub account using gitGit()", () => {
   const testGithubUsername = "bigmike69";
   const engineer = new Engineer( "big mike", 69, "bigmike@hotmail.com", tUsername );

   expect( engineer.getGithubUsername()).toBe( testGithubUsername );
});

test( "see if theRole() returns \"Engineer\" ", () => {
   const tRole = "Engineer";
   const engineer = new Engineer( "big mike", 69, "bigmike@hotmail.com" );

   expect( engineer.theRole()).toBe( tRole );
});