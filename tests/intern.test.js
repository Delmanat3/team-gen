const Intern = require("./intern");
const intern = new Intern('bigmike', 40, 'bigmike@hotmail.com', 'UCSD');



test( "se if theRole() returns \"Intern\" ", () => {
    const Role = "Intern";
    const intern = new Intern( 'big mike', 69, 'bigmike@hotmail.com', 'UCSD' );
 
    expect( intern.theRole()).toBe( Role );
 });

 test( "Set school using theSchool().", () => {
    const School = "UCSD";
    const intern = new Intern( 'big mike', 69, 'bigmike@hotmail.com', School );
 
    expect( intern.theSchool()).toBe( School );
 });
 
 test( "get school", () => {
    const School = "UCSD";
    const intern = new Intern( 'big mike', 69, 'bigmike@hotmail.com', School );
 
    expect( intern.school ).toBe( School );
 });
 