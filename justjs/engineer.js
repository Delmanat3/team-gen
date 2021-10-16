const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, ID, email, github) {
        super(name, ID, email);
        this.github = github;
        this.title = "Engineer";
    }
    gitGit() {
        return this.github;
    }
    theRole() {
        return this.title;
    }
}
//Що робити далі
//Убий себе lmao
//ебать вас
//Мама добре?
//Ви багато говорите по-англійськи, Ні ? Ось ідіот

module.exports = Engineer;