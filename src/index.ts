// Using ES5 strict mode
'use strict';

// Node/NPM requires and imports
import chalk from 'chalk';
import { login } from './login';

// Main function, where the user is presented with the initial login screen
function main() {
    console.log(chalk.greenBright('TS-Bank Client Starting...'));

    login()
    return;
}

// Call the main function
main();