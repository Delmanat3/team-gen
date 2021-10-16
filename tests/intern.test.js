const Intern = require("./intern");
const intern = new Intern('bigmike', 40, 'bigmike@hotmail.com', 'UCSD');



test( "se if theRole() returns \"Intern\" ", () => {
    const tRole = "Intern";
    const intern = new Intern( 'big mike', 69, 'bigmike@hotmail.com', 'UCSD' );
 
    expect( intern.theRole()).toBe( tRole );
 });

 test( "Set school using theSchool().", () => {
    const tSchool = "UCSD";
    const intern = new Intern( 'big mike', 69, 'bigmike@hotmail.com', tSchool );
 
    expect( intern.theSchool()).toBe( tSchool );
 });
 
 test( "get school", () => {
    const tSchool = "UCSD";
    const intern = new Intern( 'big mike', 69, 'bigmike@hotmail.com', tSchool );
 
    expect( intern.school ).toBe( tSchool );
 });
 