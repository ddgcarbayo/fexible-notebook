$(function() {

	// TODO: remove jQuery by JS Vanilla

	$canvas = $("#canvas");
	$colums = $(".colum");
	$inputs = $(".colum input");
	$textarea = $colums.find('textarea');

	$('#year').text(getDate());

	$inputs.fadeTo(1500, 1);

	var COLUMNS = 5;

	for(var i=0; i <= COLUMNS; i++) {
		if(localStorage.getItem('c' + i)) {
			JSON.parse(localStorage.getItem('c' + i));
			var that = $('.colum').data('colum', 'c' + i)[i];
			$(that).find('input').val(JSON.parse(localStorage.getItem('c' + i)).name);
			$(that).find('textarea').val(JSON.parse(localStorage.getItem('c' + i)).description);
		}
	};

	$colums.on('click', function() {

		$this = $(this);

		$this.prevAll().css('width', '15%');
		$this.css('width', '40%');
		$this.nextAll().css('width', '15%');

		$this.prevAll().find('textarea').css('width', '0').hide();
		$this.find('textarea').css('width', '100%').fadeTo(250, 1).show();
		$this.nextAll().find('textarea').css('width', '0').hide();

		$this.prevAll().find('.inner').css('height', '0');
		$this.find('.inner').css('height', '100%');
		$this.nextAll().find('.inner').css('height', '0');

	});

	$colums.on('focusout', function() {

		var data = {};

		var pos_column = $(this).data("column");
		var name = $(this).find('input').val();
		var description = $(this).find('textarea').val();

		data.name = name;
		data.description = description;

		localStorage.setItem(pos_column, JSON.stringify(data));

	});

});

function getDate() {

	var today = new Date();
			day = today.getDate();
			month = today.getMonth() + 1;
			year = today.getFullYear();

	if(day < 10) { day='0'+day }
	if(month < 10) { month='0'+month }

	return year;

}