var name_columns = ['peliculas', 'ideas', 'compras', 'musica', 'trabajo'];
		name_columns_size = name_columns.length;

(function() {

	for(var i=0; i < name_columns_size; i++) {
		if(localStorage.getItem('' + name_columns[i])) {
			$('#' + name_columns[i] + ' textarea').val(localStorage.getItem('' + name_columns[i]));
		}
	};

	$canvas = $("#canvas");
	$colums = $(".colum");
	$textarea = $colums.find('textarea');

	$colums.on('click', function() {
		$this = $(this);

		$this.prevAll().css('flex-grow', '1');
		$this.css('flex-grow', '5');
		$this.nextAll().css('flex-grow', '1');

		$this.prevAll().find('.label').fadeTo(200,1);
		$this.find('.label').fadeTo(200,0).hide();
		$this.nextAll().find('.label').fadeTo(200,1);

		$this.prevAll().find('textarea').css('width', '0').hide();
		$this.find('textarea').css('width', '100%').show();
		$this.nextAll().find('textarea').css('width', '0').hide();
		$this.find('textarea').focus();
	});

	$colums.on('focusout', function() {
		var mini_data = {};

		var _name = $(this).attr('id');
		var _description = $("#" + _name).find('textarea').val();

		localStorage.setItem(_name, _description);

		mini_data.id = _name;
		mini_data.description = _description;
	});

})();