function createSticky(sticky) {

	if (typeof sticky !== "undefined") {

		var	pos = sticky.offset().top,
			win = $(window),
			stickyheight = sticky.height(),
			scrollpos = pos + stickyheight;

		win.on("scroll", function() {
			win.scrollTop() >= scrollpos ? sticky.addClass("c-header--sticky") : sticky.removeClass("c-header--sticky");
		});
	}
}
