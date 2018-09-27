// Using ES5 strict mode
'use strict';

// Node/NPM requires and imports
import * as inquirer from 'inquirer';

// This file contains the menu logic for a `Teller`-type user

/* 
Things a teller can do:

Accept money for a given account
Create a new client account
Withdraw money for a given account
Loan money to clients
Accept a loan payment

All of these options will result in a submenu and allow things to occur on the backend
*/


/* 
The menu will look like this:


Select a task:
---------------
Withdraw from account
Desposit to account
Accept a payment

*/