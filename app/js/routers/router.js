var Backbone      = require('backbone'),
    // Albums        = require('../collections/albums'),
    // Songs         = require('../collections/songs'),
    // Album         = require('../models/album'),
    // Song          = require('../models/song'),
    // PlaylistView  = require('../views/list'),
    // PlayerView    = require('../views/player'),
    // AlbumsView    = require('../views/albums'),
    CursosPanelView    = require('../views/cursoPanelView'),
    $             = require('jquery');

module.exports = Backbone.Router.extend({
  routes: {
    "": "index",
    "cursos": "showCursos",
    "album/:name": "album"
  },

  initialize: function () {

    // this.current = {};
    // this.jsonData = {};
    // this.albums = new Albums();
    // this.songs = new Songs();
    // this.playlist = new PlaylistView({ collection: this.songs });
    // this.player = new PlayerView({ model: new Song() });
    // this.albumlist = new AlbumsView({ collection: this.albums });

    Backbone.history.start();
  },

  index: function () {
    // this.fetchData();
    console.log('index')
  },
  showCursos: function () {
  	var panelCursosView = new CursosPanelView();
  	panelCursosView.render();
  }

  
});