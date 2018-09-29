// Using ES5 strict mode
'use strict';

// Node/NPM requires and imports
import chalk from 'chalk';
import * as express from 'express';
import { serverListenPort } from '../config';
import * as bodyParser from 'body-parser';
import { route } from './routes';


// Init the express server
const server = express.default();

// Tell the server to use the JSON body parser
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Listen on the configured port for any requests
server.listen(serverListenPort);

route(server);

// This file will be the 'server' for actually handling banking tasks

// The server for the banking program provides a REST API for performing tasks
// (loggin in, performing actions as a teller, etc.)

console.log(chalk.greenBright(`TS-BANK Server Started at ${new Date().toISOString()}`));
console.log(chalk.bold(`\nListening on port ${serverListenPort}`));
