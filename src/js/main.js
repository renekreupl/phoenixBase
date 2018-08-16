window.addEventListener("load", function(){
	window.cookieconsent.initialise({
		"palette": {
			"popup": {
				"background": "#edeff5",
				"text": "#838391"
			},
			"button": {
				"background": "#4b81e8"
			}
		},
		"theme": "edgeless",
		"content": {
			"message": "Diese Seite verwendet Cookies. Wenn Sie fortfahren, stimmen Sie unserer Verwendung von Cookies zu. Erfahren Sie mehr in unseren ",
			"dismiss": "Annehmen",
			"link": "Rechtlichen Hinweisen.",
			"href": "/datenschutz"
		}
	})
});

WebFont.load({
	google: {
		families: ['Ubuntu:300,400,400italic,500,700:latin']
	}
});

jQuery(document).ready(function($) {

	//Fix jumping on sticky
	$("body").css("padding-top", $(".c-header").height());

	createSticky($(".c-header"));


	$('.c-gallery').lightGallery({
		selector: '.lightbox'
	});


	$("#js__c-header__navtoggle").click(function() {
		$(".c-navigation").fadeToggle();
		$(".c-navicon", this).toggleClass("c-navicon--active");
	});

});
