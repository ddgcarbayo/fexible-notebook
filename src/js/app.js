(function(){

	function FlexNote() {

		var $canvas = document.querySelector("#canvas"),
				$columns = $(".colum"),
				$inputs = $(".colum input"),
				$textarea = $columns.find('textarea');

		function getDataStorage(num_colums) {
			for(var i=0; i <= num_colums; i++) {
				if(localStorage.getItem('c' + i)) {
					el = $('.colum').data('column', 'c' + i)[i];
					$(el).find('input').val(JSON.parse(localStorage.getItem('c' + i)).name);
					$(el).find('textarea').val(JSON.parse(localStorage.getItem('c' + i)).description);
				}
			};
		}

		function setDataStorage() {
			$columns.on('focusout', function() {
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
			$columns.on('click', function() {
				el = $(this);

				el.prevAll().css('width', '15%');
				el.css('width', '40%');
				el.nextAll().css('width', '15%');

				el.prevAll().find('textarea').css('width', '0').hide();
				el.find('textarea').css('width', '100%').fadeTo(250, 1).show();
				el.nextAll().find('textarea').css('width', '0').hide();
				//el.find('textarea').focus();

				el.prevAll().find('.inner').css('height', 'auto');
				el.find('.inner').css('height', '100%');
				el.nextAll().find('.inner').css('height', 'auto');
			});
		}

		this.init = function() {
			$('#year').text(flexNote.getDate());

			$inputs.fadeTo(1500, 1);

			getDataStorage(5);
			setDataStorage();

			animationColumns();
		};

	}

	FlexNote.prototype = {

		constructor: FlexNote,

		getDate: function() {
			var today = new Date();
			return today.getFullYear();
		}

	};


	var flexNote = new FlexNote();

	flexNote.init();


})();