// Using ES5 strict mode
'use strict';

// This is the most basic level on encryption, just so it's not physical text

// Node/NPM requires and imports
import crypto from 'crypto';

// Nodejs encryption with CTR
let algorithm = 'aes-256-ctr';
// TODO: Find a good way to store the password
let password = 'd6F3Efeq';


/** Encrypt a piece of text and get the result
 * @export
 * @param {string} text The text to encrypt
 * @returns
 */
export function encrypt(text: string) {
    let cipher = crypto.createCipher(algorithm, password)
    let crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

/** Decrypt a piece of text and get the result
 * @export
 * @param {string} text The text to encrypt
 * @returns
 */
export function decrypt(text: string) {
    let decipher = crypto.createDecipher(algorithm, password)
    let dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}