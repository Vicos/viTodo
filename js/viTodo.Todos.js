/*global viTodo */
'use strict';

viTodo.module('Todos', function (Todos, App, Backbone) {
    // Todo Model
    // ----------
    Todos.Todo = Backbone.Model.extend({
        defaults: {
            title: '',
            completed: false,
            created: 0
        },

        database: App.Database.TodoDB,
        storeName: "todos",

        initialize: function () {
            if (this.isNew()) {
                this.set('created', Date.now());
            }
        },

        toggle: function () {
            return this.set('completed', !this.isCompleted());
        },

        isCompleted: function () {
            return this.get('completed');
        }
    });

    // Todo Collection
    // ---------------
    Todos.TodoList = Backbone.Collection.extend({
        model: Todos.Todo,

        database: App.Database.TodoDB,
        storeName: "todos",

        getCompleted: function () {
            return this.filter(this._isCompleted);
        },

        getActive: function () {
            return this.reject(this._isCompleted);
        },

        comparator: function (todo) {
            return todo.get('created');
        },

        _isCompleted: function (todo) {
            return todo.isCompleted();
        }
    });
});
