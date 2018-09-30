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

    if (req.body && req.body.length < 0) {
        // res.send('200 OK');

        console.log(req.body)

        let body;

        // Make sure the body is JSON
        try {
            body = JSON.parse(req.body);
        } catch (e) {
            res.status(400).end();
            res.send();
            return;
        }

        // Make sure the body matches the format
        if (!body.user || !body.password) {
            res.status(400).end();
            res.send();
            return;
        }

    } else {
        res.status(400).end();
        res.send();
        return;
    }
}