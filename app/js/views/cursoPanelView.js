var Backbone = require('backbone'),
	template = require('../templates/panelTemplate')
	$ = require('jquery');
module.exports = Backbone.View.extend({
	className: 'col-md-3',
	el: $('.main'),
	initialize: function () {
		console.log('cursoPanelView');
	},
	render: function () {
		var html = template();
		this.$el.html(html)
	}
});