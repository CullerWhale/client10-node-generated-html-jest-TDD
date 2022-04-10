// const { TestWatcher } = require('jest');
// const { hasUncaughtExceptionCaptureCallback } = require('process');
// const { expect, jest } = require('@jest/globals');

//mock engineer data
const Engineer = require('../lib/Engineer.js');
jest.mock('../lib/Engineer.js');
console.log(new Engineer());




const Employee = require('../lib/Employee.js');
test ('creates an employee object', () => {
    const employee = new Employee('Cullen');

    expect(employee.name).toBe("Cullen");
})