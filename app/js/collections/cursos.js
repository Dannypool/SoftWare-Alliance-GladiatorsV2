var Backbone = require('backbone'),
    curso     = require('../models/curso');

module.exports = Backbone.Collection.extend({
  model: curso
});