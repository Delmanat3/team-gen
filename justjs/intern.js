const Employee = require( "./Employee" );

class Intern extends Employee {
   constructor( name, id, email, school ) {
      super( name, id, email );
      this.school = school;
      this.role = 'Interntally bleeding';
   };

   theSchool() {
      return this.school;
   };

   theRole() {
      return this.role;
   };
};

module.exports = Intern;