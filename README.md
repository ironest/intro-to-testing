# intro-to-testing

The following instructions **ARE NOT** to install/use this repo; they are to recreate for scratch this project.

### My personal script to set up any repo

```sh
npm init -y
git init
touch .gitignore
echo -e "# dependencies\nnode_modules/\n" >> .gitignore
echo -e "# coverage\ncoverage/\n" >> .gitignore
```

### Installing dependencies

From the terminal, install the `jest` package
```sh
npm install --save-dev jest
```

Once installed, let's configure the `package.json` to use that when calling `npm test`
```json
  "scripts": {
    "test": "jest"
  }
```

### Test preparation

For each JS file that needs to be tested
* Make sure to export each functions from the file with `module.exports`
* Create a brand new file called `file.test.js`
* In the new file, import (with the `require` keyword) each function to be tested

### Writing Tests

1. Invoke the `test()` function
2. Pass two arguments:
   * A string that describes the test
   * A callback functions that runs the test (see point 3 below)
3. Inside the callback function, invoke `expect()`
4. Inside `expect()` run the function to test with its parameters. Example `sum(1, 2)`
5. On top of `expect()` chain up any **matcher methods** such as **toBe** or **toThrow**. For more examples, refer to [Common Matchers](####Common-Matchers)

**Real examples**

```js
test("Properly adding two numbers", () => {
    expect(
        sum(1, 2)
    ).toBe(3);
})
```
