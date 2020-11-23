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

	//Checkbox Powermail
	$('.powermail_checkbox').change(function() {
		$(this).parent("label").toggleClass("active");
	});

});
