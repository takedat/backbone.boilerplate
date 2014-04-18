define([
	'jquery',
	'underscore',
	'handlebars',
	'marionette',
	'backbone'
],(
	$,
	_,
	Handlebars,
	Marionette,
	Backbone
) ->
	class AppModel extends Backbone.Model
		url : 'assets/dist/json/mock.json'
		initialize : ->

		@
)
