var _ = require('underscore');
	
module.exports = _.template(' \
	<p class="li-p"><%= nombre %></p> \
	<small><%= descripcion %></small> \
	<div class="ocultar pos-abajo pos-derecha"> \
		<button class="btn btn-danger btn-xs btn-cancelar" id="btn_eliminar_usr"> \
		<span class="glyphicon glyphicon-trash"> </span> \
		</button> \
		<button class="ladda-button btn btn-xs btn-cancelar" id="btn_modificar_usr" data-style="zoom-in" data-size="xs"> \
		<span class="glyphicon glyphicon-edit"> </span> \
		</button> \
	</div> \
	');