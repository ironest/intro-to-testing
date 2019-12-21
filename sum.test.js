const sum = require('./sum');

describe("Properly adding two numbers", () => {

    test("Sum 1 and 2", () => {
        const actual = sum(1, 2);
        const expectation = 3;
        expect(actual).toBe(expectation);
    })
    
    test("Sum 2 and 3", () => {
        const actual = sum(2, 3);
        const expectation = 5;
        expect(actual).toBe(expectation);
    })

})
