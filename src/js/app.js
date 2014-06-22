$(function() {

	$canvas = $("#canvas");
	$colums = $(".colum");
	$textarea = $colums.find('textarea');

	$('#year').text(getDate());

	var COLUMNS = 5;

	for(var i=0; i <= COLUMNS; i++) {

		if(localStorage.getItem('c' + i)) {

			JSON.parse(localStorage.getItem('c' + i));
			//console.log(JSON.parse(localStorage.getItem('c' + i)));

			var that = $('.colum').data('colum', 'c' + i)[i];

			//console.log(that);

			//console.log('name_input: ', $(that).find('input').val());



			//console.log('name_storage: ', JSON.parse(localStorage.getItem('c' + i)));

			//var aux_name = JSON.parse(localStorage.getItem('c' + i));

			//console.log(aux_name.name);

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
		//$this.find('textarea').focus();

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

		//console.log(localStorage.getItem('c0').name);

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