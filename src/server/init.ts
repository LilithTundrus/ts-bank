// Using ES5 strict mode
'use strict';

// Node/NPM requires and imports
import chalk from 'chalk';
import * as express from 'express';
import { serverListenPort } from '../config';

// Init the express server
const server = express.default();
// Listen on the configured port for any requests
server.listen(serverListenPort);

// This file will be the 'server' for actually handling banking tasks

// The server for the banking program provides a REST API for performing tasks
// (loggin in, performing actions as a teller, etc.)

console.log(chalk.greenBright(`TS-BANK Server Started at ${new Date().toISOString()}`));
console.log(chalk.bold(`\nListening on port ${serverListenPort}`));
