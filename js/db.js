var app = app || {};

(function() {
    app.db = {
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
})();
