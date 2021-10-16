//const { number } = require('yargs');
const Employee= require('./employee')

//https://jestjs.io/docs/expect

// take user input
//GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated





const employee = new Employee('big mike', 69, 'bigmike@hotmail.com');//nice

test( "Create an employee", () => {
    const employee = new Employee( "big mike", 69, 'bigmike@hotmail.com');
 
    expect(( employee )).toBeInstanceOf( Employee );
    expect( employee.name ).toEqual( 'big mike' );
    expect( employee.id ).toEqual( 69 );
    expect( employee.email ).toEqual( 'bigmike@hotmail.com' );
 });
 test( "see if theName() works", () => {
    const tName = "big mike";
    const employee = new Employee( tName );
 
    expect( employee.theName()).toBe(tName );
 });

 test( "see if theId() works", () => {
    const IdT = 69;
    const employee = new Employee( "big mike", IdT );
 
    expect( employee.theId()).toBe( IdT );
 });
 

 test( "see if theEmail() works", () => {
    const tEmail = "bigmike@hotmail.com";
    const employee = new Employee( "big mike", 69, tEmail );
 
    expect( employee.theEmail()).toBe( tEmail );
 });

 test( "see if theRole() returns \"Employee\" ", () => {
    const tRole = "Employee";
    const employee = new Employee( "big mike", 69, "bigmike@hotmail.com" );
 
    
    expect( employee.theRole()).toBe( tRole );
 });
 
