// const Engineer = require('../lib/Engineer.js')

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    } 

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getId() {
        return this.id
    }

    getRole() {
        return 'employee'
    }
}

module.exports = Employee;
