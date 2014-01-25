/*global Backbone */
'use strict';

var viTodo = new Backbone.Marionette.Application();

viTodo.addRegions({
	premain: '#pre-main',
	main: '#main',
	footer: '#footer'
});

viTodo.on('initialize:after', function () {
	Backbone.history.start();
});
