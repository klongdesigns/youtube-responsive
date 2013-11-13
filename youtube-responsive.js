(function($) {

	$(document).ready(function() {
		var pause = 100, // will only process code within delay(function() { ... }) every 100ms.
		breakpoint = 768; // this is the breakpoint for the width
		$(window).resize(function() {

			delay(function() {
			
				var width = $(window).width();
				setvideoSize();
				if( width >= breakpoint ) {

				} else {

				}
			
			}, pause );
		
		});
		
		$(window).resize();
	});

	$(window).load(function() {

	});

	var delay = (function(){
		var timer = 0;
		return function(callback, ms){
			clearTimeout (timer);
			timer = setTimeout(callback, ms);
		};
	})();
	function setvideoSize() {
		$('.video').each(function() {
			var vw = $(this).data('width'),
			vh = $(this).data('height'),
			tw = $(this).width();
			$(this).height((tw*vh)/vw);
		});
	}

})(jQuery);