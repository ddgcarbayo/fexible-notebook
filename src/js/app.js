(function() {

	$canvas = $("#canvas");
	$colums = $(".colum");

	$colums.on('click', function() {
		$this = $(this);

		color = $this.data("color");

		console.log(color);

		$this.prevAll().css('flex-grow', '1');
		$this.css('flex-grow', '5');
		$this.nextAll().css('flex-grow', '1');

	});

})();