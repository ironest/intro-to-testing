const subtract = require('./substract');

test("Properly subtracting two numbers", () => {
    expect(
        subtract(1, 2)
    ).toBe(-1);
})