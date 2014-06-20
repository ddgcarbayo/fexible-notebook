(function() {

	var actual_textarea;

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

})();