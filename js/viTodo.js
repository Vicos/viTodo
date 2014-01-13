/*global Backbone */
'use strict';

var viTodo = new Backbone.Marionette.Application();

viTodo.addRegions({
	header: '#header',
	main: '#main',
	footer: '#footer'
});

viTodo.on('initialize:after', function () {
	Backbone.history.start();
});
