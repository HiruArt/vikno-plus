$(document).ready(function(){

  // checking browser for WEBP
  // hasWebP().then(function () {
  //   $('.webp-img').each(function () {
  //     var webp = $(this).data('webp');
  //     $(this).attr('data-blazy', webp);
  //   });
  // }, function () {
  //   $('.webp-img').each(function () {
  //     var img = $(this).data('img');
  //     $(this).attr('data-blazy',  img );
  //   });
  // });

	// var bLazy = new Blazy({
	// 	src: 'data-blazy'
	// });



	/*menu function*/
	$('#menu-btn').click(function(){
		$('.nav__menu-btn--hide, .nav__menu-btn--show').toggleClass('active');
		$('#page').toggleClass('open');

		if($('#page').hasClass('open')){
			$('.nav__side-menu-1, .nav__side-menu-2').removeClass('active');
		}
	});

	$('.nav__side-menu-link').click(function (e){
		if($(this).hasClass('parent')){
			e.preventDefault();
		}
		$(this).siblings('.nav__side-menu-1').addClass('active');
	});

	$('.nav__side-menu-1-link').click(function (e){
		if($(this).hasClass('parent')){
			e.preventDefault();
		}
		$(this).siblings('.nav__side-menu-2').addClass('active');
	});

	$('.nav__side-menu-1-bar-link').click(function(e){
		$(this).closest('.nav__side-menu-1').removeClass('active');
	});

	$('.nav__side-menu-2-bar-link').click(function(e){
		$(this).closest('.nav__side-menu-2').removeClass('active');
	});
	/*menu function end*/


	$('#big-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true
	});

	$('#our-products-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		fade: true,
		asNavFor: '#our-products-slider-menu'
	});
	$('#our-products-slider-menu').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '#our-products-slider',
		dots: false,
		focusOnSelect: true,
		arrows: false,
		vertical: true
	});

});


//script fro webp img and background
// var hasWebP = (function () {
//   // some small (2x1 px) test images for each feature
//   var images = {
//     basic: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
//     lossless: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="
//   };
//
//   return function (feature) {
//     var deferred = $.Deferred();
//
//     $("<img>").on("load", function () {
//       // the images should have these dimensions
//       if (this.width === 2 && this.height === 1) {
//         deferred.resolve();
//       } else {
//         deferred.reject();
//       }
//     }).on("error", function () {
//       deferred.reject();
//     }).attr("src", images[feature || "basic"]);
//
//     return deferred.promise();
//   }
// })();

