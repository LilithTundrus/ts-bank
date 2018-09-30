// Using ES5 strict mode
'use strict';

import { login } from './StorageController';

export function route(app) {

    // Testing function (make sure the server is running okay)
    app.route('/test')
    .get((req, res) => {
        res.send('200 OK')
    })
    

    app.route('/login')
        // GET for login, will send a message about login information
        .post(login);


    // app.route('/tasks/:taskId')
    //     .get(todoList.read_a_task)
    //     .put(todoList.update_a_task)
    //     .delete(todoList.delete_a_task);
};
