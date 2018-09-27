// Using ES5 strict mode
'use strict';

// Node/NPM requires and imports
import chalk from 'chalk';
import { login } from './login';

// TODO: The main thing that needs to be done is to keep track of time for payments
// and when accounts are due for payment
// TODO: This needs to go from a run-once script to a client/server script

// Main function, where the user is presented with the initial login screen
function main() {
    // This is assuming an 80 x 25 terminal
    process.stdout.write("\u001b[2J\u001b[0;0H");
    console.log(chalk.cyanBright('\n░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓ WELCOME TO TS-BANK ▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n'));

    // Log the user in
    login().then((result) => {
        console.log(result)
        // Set up the enviornment depending on the user role type
        if (result.role === 'teller') {
            process.stdout.write("\u001b[2J\u001b[0;0H");
            console.log(chalk.greenBright(`Welcome ${result.role.toUpperCase()} ${result.user.toUpperCase()}`));
        }
    })
    return;
}

// Call the main function
main();