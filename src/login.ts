// Using ES5 strict mode
'use strict';

// Node/NPM requires and imports
import fs from 'fs';
import { userManifestLocation } from './config';
import { encrypt, decrypt } from './excryption';
import * as inquirer from 'inquirer';

// The config file has the directory for the user manifest
const userManifest = fs.readFileSync(userManifestLocation).toString();

// Decrypt the manifest
let decryptedManifest = decrypt(userManifest);

let parsedManifest = JSON.parse(decryptedManifest);

// TODO: add typings for user data
// TODO: this could probably be a class?

// This file contains all of the login/authorization methods for ts-bank

// The manifest for logins is loosely encrypted because this is simulating a 70's experience

export function login() {
    // Start the login process
    console.log('\nPlease log in.\n');
    return getUserName().then((userData) => {
        return getPassword().then((result) => {
            // Validate the password
            let passwordIsValid = validatePassword(userData, result);

            if (passwordIsValid) {
                // Complete the login process
                return userData;
            } else {
                // Log an invalid password and exit
                console.log('\nInvalid Password, please try again.');
                return process.exit(0);
            }
        })
    })
        .catch((err) => {
            console.log(`Error: ${err}\n\nPlease contact a system administrator.`);
        })
}

function getUserName() {
    // Inquirer prompt
    return inquirer.prompt({ type: 'input', message: 'User:', name: 'user', prefix: '>' })
        .then((result: any) => {
            // Handle every scenario
            if (result.user === '') {
                // Re-prompt the user
                return getUserName();
            } else {
                // Verify their username exists
                let userExists = checkIfUserExists(result.user);
                if (userExists == false) {
                    console.log(`\nUser ${result.user} does not exist or has been disabled. Please try again`);
                    // Re-prompt the user
                    return getUserName();
                } else {
                    // Show the password prompt
                    return getUserInfoByName(result.user);
                }
            }
        })
}

function getPassword() {
    // Inquirer prompt
    return inquirer.prompt({ type: 'password', message: 'Password:', name: 'password', prefix: '>' })
        .then((result: any) => {
            return result.password;
        })
}

/** Validate a user's password is correct
 * @param {*} userData
 * @param {string} password
 * @returns
 */
function validatePassword(userData: any, password: string) {
    if (userData.password === password) {
        return true;
    } else {
        return false;
    }
}

/** Check if a user exists in the global manifest
 * @param {string} userName
 * @returns
 */
function checkIfUserExists(userName: string) {
    let user = parsedManifest.find((entry) => {
        return entry.user === userName;
    });

    if (user !== undefined) {
        return true;
    } else {
        return false;
    }
}

/** Get a user's data by their userName
 * @param {string} userName
 * @returns
 */
function getUserInfoByName(userName: string) {
    return parsedManifest.find((entry) => {
        return entry.user === userName;
    });
}