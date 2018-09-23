// Using ES5 strict mode
'use strict';

// This is the most basic level on encryption, just so it's not physical text

// Node/NPM requires and imports
import fs from 'fs';

/** Read the config file for the project
 * @returns {string}
 */
export function readConfigFile(): string {
    if (fs.existsSync('../config.json')) {
        let rawConfigOptions = fs.readFileSync('../config.json');
        return rawConfigOptions.toString();
    } else {
        console.log('Error: Could not find config file (../config.json');
        // Exit on this error, since the file is needed
        return process.exit(1);
    }
}

/** Write the encrypted config file to disk
 * @param {string} encryptedJSONString
 * @returns
 */
export function writeConfigFile(encryptedJSONString: string) {
    if (fs.existsSync('../config.json')) {
        fs.writeFileSync('../config.json', encryptedJSONString);
    } else {
        console.log('Error: Could not find config file (../config.json');
        // Exit on this error, since the file is needed
        return process.exit(1);
    }
}

/** Parse the config JSON from a decrypted string
 * @param {string} fileString
 * @returns {object}
 */
export function parseCondigJSONFromString(fileString: string): any {
    // Try to parse the contents
    try {
        return JSON.parse(fileString);
    } catch (e) {
        console.log('Could not parse JSON from given file string');
        return process.exit(1);
    }
}