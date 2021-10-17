const Manager = require("../justjs/manager");
//const { describe } = require("@jest/globals");

const manager = new Manager('bigger mike', 69, 'biggermike@hotmail.com', 90);
describe('biggest mikes office number',()=>{
it( "big mikes office number", () => {
   //const Number = 90;
   const manager = new Manager( "bigger mike", 69, "biggermike@hotmail.com", 90 );

   expect( manager.officeNumber ).toEqual( 90 );
})
})
describe('test theRole()',()=>{
it( "see if theRole() returns \"Manager\" ", () => {
   //const Role = "Manager";
   const manager = new Manager( "bigger mike", 69, "biggermike@hotmail.com", 90 );

   expect( manager.theRole()).toEqual( "Manager" );
})
})