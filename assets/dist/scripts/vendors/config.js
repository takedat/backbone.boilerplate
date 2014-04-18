require.config({
	urlArgs: 'bust=' + (new Date()).getTime(),
	paths: {
		'jquery' : '../vendors/zepto/zepto',
		'underscore': '../vendors/lodash/dist/lodash',
		'backbone': '../vendors/backbone/backbone',
		'marionette': '../vendors/backbone.marionette/lib/backbone.marionette',
		'handlebars': '../vendors/handlebars/handlebars',
		'text': '../vendors/text'
	},
	shim: {
		'jquery': {
			exports : '$'
		},
		'underscore': {
			exports: '_'
		},
		'handlebars': {
			deps: ['jquery'],
			exports : 'Handlebars'
		},
		'backbone': {
			deps: ['jquery', 'underscore', 'handlebars'],
			exports: 'Backbone'
		},
		'marionette': {
			deps: ['backbone'],
			exports: 'Marionette'
		}
	},
	text: {
		useXhr: function (url, protocol, hostname, port) {
			//Override function for determining if XHR should be used.
			//url: the URL being requested
			//protocol: protocol of page text.js is running on
			//hostname: hostname of page text.js is running on
			//port: port of page text.js is running on
			//Use protocol, hostname, and port to compare against the url
			//being requested.
			//Return true or false. true means 'use xhr', false means
			//'fetch the .js version of this resource'.
		}
	}
});