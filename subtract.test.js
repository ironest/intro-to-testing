const subtract = require('./substract');

describe("Properly subtracting two numbers", () => {
    test("Subtracting 1 minus 2", () => {
        const actual = subtract(1, 2);
        const expectation = -1;
        expect(actual).toBe(expectation);
    })
    
    test("Subtracting 2 minus 1", () => {
        const actual = subtract(2, 1);
        const expectation = 1;
        expect(actual).toBe(expectation);
    })
})