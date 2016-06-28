WebFont.load({
	google: {
		families: ['Ubuntu:300,400,400italic,500,700:latin']
	}
});

jQuery(document).ready(function($) {
	if ($("html").hasClass("lt-ie9")) {
		$(".columns div:first-child").css( "margin-left", "0" );
	}

	
});
