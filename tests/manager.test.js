const Manager = require(".manager");

const manager = new Manager('bigger mike', 69, 'biggermike@hotmail.com', 90);

test( "bigger mikes office number", () => {
   const Number = 90;
   const manager = new Manager( "bigger mike", 69, "biggermike@hotmail.com", Number );

   expect( manager.officeNumber ).toBe( Number );
});

test( "see if theRole() returns \"Manager\" ", () => {
   const Role = "Manager";
   const manager = new Manager( "bigger mike", 69, "biggermike@hotmail.com", 90 );

   expect( manager.theRole()).toBe( Role );
});