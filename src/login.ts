// Using ES5 strict mode
'use strict';

// Node/NPM requires and imports
import fs from 'fs';
import { readConfigFile, parseCondigJSONFromString } from './lib/common';
import { encrypt, decrypt } from './excryption';
import * as inquirer from 'inquirer';

// First, get the config file
const rawConfig = readConfigFile();
const parsedConfig = parseCondigJSONFromString(rawConfig);

// The config file has the directory for the user manifest
const userManifest = fs.readFileSync(parsedConfig.userManifestLocation).toString();

// Decrypt the manifest
let decryptedManifest = decrypt(userManifest);


// This file contains all of the login/authorization methods for ts-bank


// Functions for reading the login file

// The manifest for logins is loosely encrypted because this is simulating a 70's experience

export function login() {
    // Start the login process
    console.log('\nPlease log in.\n');
    return getCredentials();
}

function getCredentials() {
    // Inquirer prompt
    inquirer.prompt({ type: 'input', message: 'User:', name: 'user', prefix: '>' })
        .then((result: any) => {
            // Handle every scenario
            if (result.user === '') {
                return getCredentials();
            }
        })
        .catch((err) => {
            console.log(`Error: ${err}\n\nPlease contact a system administrator.`);
        })
}