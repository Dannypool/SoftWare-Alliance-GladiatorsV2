var Backbone = require('backbone'),
	template = require('../templates/cursoList'),
	$ = require('jquery');
module.exports = Backbone.View.extend({
	className: 'li-lista',
	tagName: 'li',
	initialize: function () {
	    this.listenTo(this.model, "change", this.render, this);
	},
	render: function () {
		var curso = this.model.toJSON()
		var html = template(curso);
		this.$el.html(html);
		return this;
	}
});