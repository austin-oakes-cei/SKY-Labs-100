const { add } = require('../calculator.js');

describe('add', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('adds 5 + 6 to equal 11', () => {
        expect(add(5, 6)).toBe(11);
    });

    test('adds -1 + -1 to equal -2', () => {
        expect(add(-1, -1)).toBe(-2);
    });
});