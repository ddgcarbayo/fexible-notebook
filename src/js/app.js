var flexNote = new FlexNote();

function FlexNote() {

	var $canvas = document.querySelector("#canvas"),
			$colums = $(".colum"),
			$inputs = $(".colum input"),
			$textarea = $colums.find('textarea');

	function getDataStorage(num_colums) {
		for(var i=0; i <= num_colums; i++) {
			if(localStorage.getItem('c' + i)) {
				_this = $('.colum').data('column', 'c' + i)[i];
				$(_this).find('input').val(JSON.parse(localStorage.getItem('c' + i)).name);
				$(_this).find('textarea').val(JSON.parse(localStorage.getItem('c' + i)).description);
			}
		};
	}

	function setDataStorage() {
		$colums.on('focusout', function() {
			var data = {},
					pos_column = $(this).data("column"),
					name = $(this).find('input').val(),
					description = $(this).find('textarea').val();

			data.name = name;
			data.description = description;

			localStorage.setItem(pos_column, JSON.stringify(data));
		});
	}

	function animationColumns() {
		$colums.on('click', function() {
			$this = $(this);

			$this.prevAll().css('width', '15%');
			$this.css('width', '40%');
			$this.nextAll().css('width', '15%');

			$this.prevAll().find('textarea').css('width', '0').hide();
			$this.find('textarea').css('width', '100%').fadeTo(250, 1).show();
			$this.nextAll().find('textarea').css('width', '0').hide();
			//$this.find('textarea').focus();

			$this.prevAll().find('.inner').css('height', 'auto');
			$this.find('.inner').css('height', '100%');
			$this.nextAll().find('.inner').css('height', 'auto');
		});
	}

	this.init = function() {
		$('#year').text(flexNote.getDate);

		$inputs.fadeTo(1500, 1);

		getDataStorage(5);
		setDataStorage();

		animationColumns();
	};

}

FlexNote.prototype = {

	constructor: FlexNote,

	getDate: function() {
		var today = new Date(),
				day = today.getDate(),
				month = today.getMonth() + 1,
				year = today.getFullYear();

		if(day < 10) { day='0'+day }
		if(month < 10) { month='0'+month }

		return year;
	}

};

document.addEventListener('DOMContentLoaded', function() {

	flexNote.init();

});