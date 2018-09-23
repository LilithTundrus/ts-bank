// Using ES5 strict mode
'use strict';

// This is the most basic level on encryption, just so it's not physical text

// Node/NPM requires and imports
import fs from 'fs';

/** Read the config file for the project
 * @returns {string}
 */
function readConfigFile(): string {
    if (fs.existsSync('../config.json')) {
        let rawConfigOptions = fs.readFileSync('../config.json');
        return rawConfigOptions.toString();
    } else {
        console.log('Error: Could not find config file (../config.json');
        // Exit on this error, since the file is needed
        return process.exit(1);
    }
}

/** Parse the config JSON from the string from the `readConfigFile()` function
 * @param {string} fileString
 * @returns {object}
 */
function parseCondigJSONFromString(fileString: string): any {
    // Try to parse the contents
    try {
        return JSON.parse(fileString);
    } catch (e) {
        console.log('Could not parse JSON from given file string');
        return process.exit(1);
    }
}