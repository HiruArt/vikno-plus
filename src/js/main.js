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
		$('.nav__side-menu-list').removeClass('hide-side-menu');

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
		$('.nav__side-menu-list').removeClass('hide-side-menu');
	});

	$('.nav__side-menu-2-bar-link').click(function(e){
		$(this).closest('.nav__side-menu-2').removeClass('active');
	});

	$(document).on('click', '.nav__search-btn-i', function () {
		if($('#page').hasClass('open') === false){
			$('#menu-btn').click();
		}
		$('.nav__side-menu-list').removeClass('hide-side-menu');
		$('.nav__side-menu-1, .nav__side-menu-2').removeClass('active');
		$('input.search-form__input').focus();
	});

	$('.nav__menu-link.parent').click(function(e){
		e.preventDefault();
		var sideMenuId = $(this).attr('data-side-menu-id');

		if($('#page').hasClass('open') === false){

			$('#menu-btn').click();
		}
		if(sideMenuId == 0)
			$('.nav__side-menu-list').removeClass('hide-side-menu');
		else
			$('.nav__side-menu-list').addClass('hide-side-menu');

		$('.nav__side-menu-1').removeClass('active');
		$('.nav__side-menu-item[data-side-menu='+ sideMenuId +']').find('.nav__side-menu-1').addClass('active');
	});
	/*menu function end*/

	/*sliders star*/
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
		asNavFor: '#our-products-slider-menu',
		swipe: false
	});
	$('#our-products-slider-menu').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '#our-products-slider',
		dots: false,
		arrows: false,
		vertical: true,
		focusOnSelect: true,
		infinite: true,
		responsive: [

			{
				breakpoint: 1120,
				settings: {
					slidesToShow: 5,
					infinite: true,
					focusOnSelect: true,
					vertical: false,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					vertical: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					vertical: false,
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 2,
					vertical: false,
				}
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 1,
					vertical: false,
				}
			},
		]
	});

	$('#our-work-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		focusOnSelect: true,
		infinite: true
	});

	// $('#more-news-slider').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	dots: false,
	// 	arrows: false,
	// 	fade: true,
	// 	asNavFor: '#last-news-slider',
	// 	swipe: false
	// });
	$('#last-news-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// asNavFor: '#more-news-slider',
		dots: true,
		customPaging: function(slider, i) {
			var thumb = $(slider.$slides[i]).data();
			return '<a class="dot">'+ (i+1) +'/'+ slider.$slides.length + '</a>';
		},
		arrows: true,
		focusOnSelect: true,
	});



	function changeImgNews(){
		$('.more-news__img-i').fadeOut();
		setTimeout(function () {
			var lastNewImg = $('#last-news-slider .slick-current .last-news__img').attr('data-news-img');
			$('.more-news__img-i').css('background-image', 'url(' + lastNewImg + ')');
			$('.more-news__img-i').fadeIn("slow");
		}, 400);
	}

	changeImgNews();

	$('#last-news-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		setTimeout(function(){
			changeImgNews();
		},100);
	});


	// $('#type-slider').slick({
	// 	slidesToShow: 6,
	// 	slidesToScroll: 6,
	// 	dots: false,
	// 	arrows: true,
	// 	focusOnSelect: true,
	// 	infinite: false,
	// 	accessibility: false,
	// 	centerPadding: '0'
	// });

	var mySwiper = new Swiper ('#type-slider', {
		slidesPerView: 6,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});


	$('.type-block__item:eq(0)').addClass('active');
	var firstTypeImg = $('#type-slider .type-block__item.active').attr('data-type-img');
	$('.type-block-big-slider__img').css('background-image', 'url(' + firstTypeImg + ')');

	$(document).on('click', '#type-slider .type-block__item', function(e){
		$('.type-block__item').removeClass('active');
		$(this).addClass('active');
		var bigTypeImg = $(this).attr('data-type-img');
		$('.type-block-big-slider__img').css('background-image', 'url(' + bigTypeImg + ')');
	});

	/*sliders end*/

	/*popups start*/
		$(document).on('click', 'a[data-modal-class]', function (e) {
			var dataModalId = $(this).attr('data-modal-class');
			console.log(dataModalId);
			$('.popup.' + dataModalId + '').addClass('open');
		});

	$(document).on('click', '.popup__close', function (e) {
			$('.popup ').removeClass('open');
		});

		$(document).on('click', '.popup', function (e) {
			console.log(e.target.classList[0]);
			if(e.target.classList[0] == "popup__body") {
				$('.popup ').removeClass('open');
			}
		});
	/*popups end*/

	$(document).on('click', 'a[data-wtb-tab]', function(e){
		var dataWtbTab = $(this).attr('data-wtb-tab');
		$('a[data-wtb-tab]').removeClass('active');
		$(this).addClass('active');
		$('[data-wtb-content]').removeClass('active');
		$('[data-wtb-content="'+ dataWtbTab +'"]').addClass('active');
	});


	$('.site-input input').change(function(e){
		if($(this).val().length !== 0){
			$(this).siblings('label').addClass('show');
		} else {
			$(this).siblings('label').removeClass('show');
		}
	});

	$('#our-work-slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		gallery: {
			enabled: true
		},
		disableOn: 0,
	});

	$('.seo-content__more-btn').click(function (e) {
		$(this).closest('.seo-content').addClass('show');
	});

	/*address and map*/

	$( "#sity" ).selectmenu();
	
	function choiceAddress() {
		var sity = $("#sity option:selected").val();
		$('.address-block__office-item').removeClass('active');
		$('.address-block__office-item[data-address="' + sity + '"]').addClass('active');
	}

	choiceAddress();

	$('#sity').on('selectmenuchange', function(){
		choiceAddress();
	});

	/*address and map end*/

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

