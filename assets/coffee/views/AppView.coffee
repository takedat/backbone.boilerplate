define([
	'jquery',
	'underscore',
	'handlebars',
	'marionette',
	'backbone',
	"text!../templates/template.html"
	],(
	$,
	_,
	Handlebars,
	Marionette,
	Backbone,
	template
) ->
	class AppView extends Backbone.View
		el:''

		events :
			''

		initialize : ->
			@listenTo @model, 'change', @render

			@model.fetch()

			@

		render : =>
			tmpl = Handlebars.compile($(template).html())
			$('#renderTarget').html(tmpl(@model.attributes))

			@
)
