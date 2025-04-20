# React + Vitesting 

## Package needed
https://www.npmjs.com/package/@testing-library/react#basic-example
https://www.npmjs.com/package/@testing-library/jest-dom
https://www.npmjs.com/package/jsdom

## Terminal
npm install -D vitest

## package.json 
Inside our "package.json" we need to add within "scripts"
"test": "vitest",
"test:ui": "vitest --ui"

so with "vitest" it will run the tests on the terminal but if insted we used "vitest--ui" it will open a browser window up with a better design to keep testing in order  

## Vitest config file
We need a new file called "vitest.config.ts" it should be out in the root folder 
Add this within the file 

import {defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom'
  }
})


## Imporve test setup
So normally in our project with test implement vitest libary
so we need to add global to the "vitest.config.ts" 

test: {
  environment: 'jsdom'
  globals: true,
}

then we also need to implement types into the "tsconfig.app.json" compilerOptions

 "compilerOptions": {
    "types": ["vitest/globals"], 
  }

This help us reduce the amount we need to write so we dont need to write someting like this
import { it, expect, describe } from "vitest";