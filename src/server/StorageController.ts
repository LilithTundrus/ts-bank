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

// This function handles authenticating clients
export function login(req, res) {

    if (req.body) {
        res.send('200 OK');

        console.log(req.body)

    } else {
        res.writeHead(400, 'Request requires a user and password JSON object body')
    }
}