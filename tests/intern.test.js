//const { describe } = require("@jest/globals");
const Intern = require("../justjs/intern");
const intern = new Intern('bigmike', 40, 'bigmike@hotmail.com', 'UCSD');


describe('see if theRole() works',()=>{
it( "se if theRole() returns \"Intern\" ", () => {
    const Role = "Intern";
    const intern = new Intern( 'big mike', 69, 'bigmike@hotmail.com', 'UCSD' );
 
    expect( intern.theRole()).toEqual( Role );
 })
})
describe('tests theSchool',()=>{
 it( "Set school using theSchool().", () => {
    const School = "UCSD";
    const intern = new Intern( 'big mike', 69, 'bigmike@hotmail.com', School );
 
    expect( intern.theSchool()).toEqual( School );
 })
 })
 describe('set school',()=>{
 it( "get school", () => {
    const School = "UCSD";
    const intern = new Intern( 'big mike', 69, 'bigmike@hotmail.com', School );
 
    expect( intern.school ).toEqual( School );
 })
 })