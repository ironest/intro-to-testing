const cloneArray = require("./cloneArray");

describe("Properly cloning an array", () => {
    test("Cloning an array of numbers", () => {
        const input = [1, 2, 3]
        const actual = cloneArray(input)
        const expectation = [1, 2, 3]
        expect(actual).toEqual(expectation)
    })
    
    test("Cloning an array of strings", () => {
        const input = ['a', 'ab', 'abc']
        const actual = cloneArray(input)
        const expectation = ['a', 'ab', 'abc']
        expect(actual).toEqual(expectation);
    })
})