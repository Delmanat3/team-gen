const { describe } = require("@jest/globals");
const Engineer = require("./engineer");

// const engineer = new Engineer('bigger mike', 69, 'bigmike@hot.com', 'big mike-Github');
describe('what is the username',()=>{
it( "what is engineer's username", () => {
   const Username = "biggermike";
   const engineer = new Engineer( "big mike", 69, "bigmike@hotmail.com", Username );

   expect( engineer.gitUsername ).toBe( Username );
})
})
describe('see if gitGit() works',()=> {
it( "set hub account using gitGit()", () => {
   const Username = "bigmike69";
   const engineer = new Engineer( "big mike", 69, "bigmike@hotmail.com", Username );

   expect( engineer.gitGit()).toBe( Username );
})
})
describe('tests theRole()',()=>{
it( "see if theRole() returns \"Engineer\" ", () => {
   const Role = "Engineer";
   const engineer = new Engineer( "big mike", 69, "bigmike@hotmail.com" );

   expect( engineer.theRole()).toBe( Role );
})
})