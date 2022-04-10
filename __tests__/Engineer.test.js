const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');
test('creates an engineer object', () => {
    const engineer = new Engineer('Cullers');

    expect(engineer.name).toBe("Cullers");
})