WebFont.load({
	google: {
		families: ['Ubuntu:300,400,400italic,500,700:latin']
	}
});

jQuery(document).ready(function($) {

	initPhotoSwipeFromDOM('.my-gallery');

	//Fix jumping on sticky
	$("body").css("padding-top", $(".c-header").height());

	createSticky($(".c-header"));

	$("#js__c-header__navtoggle").click(function() {
		$(".c-navigation").fadeToggle();
		$(".c-navicon", this).toggleClass("c-navicon--active");
	});

});
