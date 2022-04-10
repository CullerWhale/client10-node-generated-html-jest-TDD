const Engineer = require('../lib/Engineer.js')

function Employee(name = '') {
    this.name = name;
    this.engineer = [new Engineer()]

    // this.getName = function() {
    //     return this.name
    // }
}

Employee.prototype.getName = function() {
    return{
        name: this.name
    };
}

module.exports = Employee;
