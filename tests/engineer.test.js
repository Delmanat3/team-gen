//const { describe } = require("@jest/globals");
const Engineer = require("../justjs/engineer");

// const engineer = new Engineer('bigger mike', 69, 'bigmike@hot.com', 'big mike-Github');
describe('what is the username',()=>{
it( "what is engineer's username", () => {
   const Username = "biggermike";
   const engineer = new Engineer( "big mike", 69, "bigmike@hotmail.com", "biggermike");

   expect( engineer.gitUsername ).toEqual( 'biggermike' );
})
})
describe('see if gitGit() works',()=> {
it( "set hub account using gitGit()", () => {
   const Username = "bigmike69";
   const engineer = new Engineer( "big mike", 69, "bigmike@hotmail.com", "bigmike69" );

   expect( engineer.gitGit()).toEqual( 'bigmike69' );
})
})
describe('tests theRole()',()=>{
it( "see if theRole() returns \"Engineer\" ", () => {
   const Role = "Engineer";
   const engineer = new Engineer( "big mike", 69, "bigmike@hotmail.com", "Engineer");

   expect( engineer.theRole()).toEqual( "Engineer" );
})
})