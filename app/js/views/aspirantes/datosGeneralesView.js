var Backbone = require('backbone'),
	template = require('../../templates/formAspirante.hbs'),
	// CursoView = require('../views/cursoView'),
	$ = require('jquery');
module.exports = Backbone.View.extend({
	el: $('.main'),
	initialize: function () {
		// this.listenTo(this.collection, "add", this.addOne, this);
	    // this.listenTo(this.collection, "reset", this.render, this);
	},
	// template: Handlebars.compile(template)
	render: function () {
		console.log("render")
		this.$el.html(template())
		// var html = template();
		// this.$el.html(html)
		// this.$lista = this.$('.ul-lista');
		// this.addAll();
	}
	// addOne: function (curso) {
	//     var cursoView = new CursoView({ model: curso });
	//     this.$lista.append(cursoView.render().el);
	// },
	// addAll: function () {
	// 	this.$lista.empty();
	// 	this.collection.forEach(this.addOne, this);
	// }
});