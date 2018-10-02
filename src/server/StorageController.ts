// Using ES5 strict mode
'use strict';

// Node/NPM requires and imports
import fs from 'fs';


// This script will handle all storage/DB/CRUD needs

// Each time data is changed, make sure that EVERYTHING knows about it

// User data is encrypted!

export function addClient(clientData) {

}

export function updateClientInfo(newClientData) {

}

export function getClientDataByID(clientID) {

}

export function addClientAccount(accountObj) {

}

export function removeClientAccount(accountID) {

}

// This function handles authenticating clients (NOT SECURE)
export function login(req, res) {
    let validLogin = validateLoginRequest(req, res);

    // Match the username/password to the DB
}


// Validates that a request is in the right format
function validateLoginRequest(req, res): boolean {
    if (req.body) {
        // Make sure the body matches the format
        if (!req.body.user || !req.body.password) {
            res.status(400).end();
            res.send();
            return false;
        } else {
            // res.send('200 OK');
            return true;
        }

    } else {
        console.log('Got a login request with no body')
        res.status(400).end();
        res.send();
        return false;
    }
}