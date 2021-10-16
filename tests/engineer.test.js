const Engineer = require("./engineer");

// const engineer = new Engineer('bigger mike', 69, 'bigmike@hot.com', 'big mike-Github');

test( "what is engineer's username", () => {
   const Username = "biggermike";
   const engineer = new Engineer( "big mike", 69, "bigmike@hotmail.com", Username );

   expect( engineer.gitUsername ).toBe( Username );
});

test( "set hub account using gitGit()", () => {
   const Username = "bigmike69";
   const engineer = new Engineer( "big mike", 69, "bigmike@hotmail.com", Username );

   expect( engineer.gitGit()).toBe( Username );
});

test( "see if theRole() returns \"Engineer\" ", () => {
   const Role = "Engineer";
   const engineer = new Engineer( "big mike", 69, "bigmike@hotmail.com" );

   expect( engineer.theRole()).toBe( Role );
});