//const { number } = require('yargs');
//const { describe } = require('yargs');
const Employee= require('../justjs/employee')

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
describe('init() should create employee ',()=>{
it( "Create an employee thingymajiger", () => {
const employee = new Employee ( "big mike", 69, 'bigmike@hotmail.com');
 expect(employee).toBeInstanceOf( Employee );
  expect( employee.name ).toEqual( 'big mike' );
   expect( employee.id ).toEqual( 69 );
    expect( employee.email ).toEqual( 'bigmike@hotmail.com' );
 }
 )
}
 )
 describe('see if theName() works', ()=>{
 it( "sets name", () => {
    const Name = "big mike";
    const employee = new Employee(Name);
 
    expect( employee.theName()).toEqual(Name );
 })
 }    
 )
 describe('see if theId() works',()=>{
 it( "fuck", () => {
    const Id = 69;
    const employee = new Employee( "big mike", Id);
 
    expect( employee.theId()).toEqual(Id);
 })
 })
describe('see if theEmail works',()=>{
 it( "my brain", () => {
    const Email = "bigmike@hotmail.com";
    const employee = new Employee( "big mike", 69, Email );
 
    expect(employee.theEmail()).toEqual(Email);
 })
})
describe('see if theRole works',()=>{
 it( " returns \"Employee\" ", () => {
    const Role = "Employee";
    const employee = new Employee( "big mike", 69, "bigmike@hotmail.com" );
 
    
    expect( employee.theRole()).toEqual( Role );
 })
 
})