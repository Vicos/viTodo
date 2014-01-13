/*global viTodo */
'use strict';

viTodo.module('Database', function (Database) {
    Database.TodoDB = {
        id: "todoDB",
        description: "Database of the todo list",
        nolog: true,
        migrations : [
            {
                version: "1.0",
                migrate: function(transaction, next) {
                    transaction.db.createObjectStore("todos");
                    next();
                }
            }
        ]
    }
});
