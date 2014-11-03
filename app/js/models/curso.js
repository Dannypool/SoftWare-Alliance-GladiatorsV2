var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	idAttribute: 'id',
	defaults: {
		id: null,
		fechaInicio: null,
		fechaTermina: null,
		nombre: null,
		descripcion: null,
		status: null
	}
});