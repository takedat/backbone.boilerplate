require([
	'../models/AppModel'
	'../views/AppView'
],(
	AppModel
	AppView
) ->
	appModel = new AppModel()
	appView = new AppView(model:appModel)
)
