// Using ES5 strict mode
'use strict';

// Node/NPM requires and imports
import chalk from 'chalk';
import { login } from './login';

// Main function, where the user is presented with the initial login screen
function main() {
    // This is assuming an 80 x 25 terminal
    process.stdout.write("\u001b[2J\u001b[0;0H");
    console.log(chalk.cyanBright('\n░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓ Welcome to TS-Bank ▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n'));

    // Log the user in
    login().then((result) => {
        console.log(result)
    })
    return;
}

// Call the main function
main();