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

