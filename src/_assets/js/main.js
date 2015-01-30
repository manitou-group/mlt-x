$(function() {

	//lang dropdown
	$(window).scroll(function(){
		$('.navbar-lang [data-toggle="dropdown"]').parent().removeClass('open');
	});

	// Navbar Aside
	var navbarBtn = $('#navbar-btn');
	var navbarAside = $('.nav-aside');
	var navbarAsideBackdrop = $('.nav-aside-backdrop');
	var navbarStep = $('.nav-step');
	var windowWidth = $(window).width();
	navbarBtn.click(function(event) {
		event.preventDefault();
		if(navbarBtn.hasClass('in')) {
			navbarAsideBackdrop.hide();
			navbarAside.removeClass('nav-aside-open');
			navbarBtn.removeClass('in');
			navbarStep.removeClass('nav-step-close');
			if(windowWidth < 850) {
				navbarStep.css("left", "-250px");
			}
		}
		else {
			navbarAsideBackdrop.show();
			navbarAside.addClass('nav-aside-open');
			navbarBtn.addClass('in');
			navbarStep.addClass('nav-step-close');
			if(windowWidth < 850) {
				navbarStep.css("left", "0");
			}
		}
	});
	$('.nav-aside-backdrop, .nav-aside ul li a, .nav-step ul li a').click(function(){
			navbarAsideBackdrop.hide();
			navbarAside.removeClass('nav-aside-open');
			navbarBtn.removeClass('in');
			navbarStep.removeClass('nav-step-close');
			if(windowWidth < 850) {
				navbarStep.css("left", "-250px");
			}
	});

	// Smooth Scroll
	$('.nav a[href*=#]:not([href=#])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		  $('html,body').animate({
			scrollTop: target.offset().top-27
		  }, 1000);
		  return false;
		}
	  }
	});

	//Nav active class
	var navBtn = $(".nav-step li, .nav-aside li");
	$(".btn-presentation a").click(function(){
		navBtn.removeClass("active");
		$(".btn-presentation").addClass("active");
	});
	$(".btn-concept a").click(function(){
		navBtn.removeClass("active");
		$(".btn-concept").addClass("active");
	});
	$(".btn-immersion a").click(function(){
		navBtn.removeClass("active");
		$(".btn-immersion").addClass("active");
	});
	$(".btn-assortment a").click(function(){
		navBtn.removeClass("active");
		$(".btn-assortment").addClass("active");
	});
	$(".btn-options a").click(function(){
		navBtn.removeClass("active");
		$(".btn-options").addClass("active");
	});
	$(".btn-accessory a").click(function(){
		navBtn.removeClass("active");
		$(".btn-accessory").addClass("active");
	});
	$(".btn-uses a").click(function(){
		navBtn.removeClass("active");
		$(".btn-uses").addClass("active");
	});
	$(".btn-why a").click(function(){
		navBtn.removeClass("active");
		$(".btn-why").addClass("active");
	});


	// Scrollspy (navigation)
    var $window = $(window);
    var $body   = $(document.body);
    $window.on("load", function () {
		$body.scrollspy("refresh");
    });
	$body.scrollspy({
		target: ".nav-step",
		offset: 400 //adjust the navbar here
	});
	var scollSpy2ActiveLI = "";
	$body.on("activate.bs.scrollspy", function () {
		if (scollSpy2ActiveLI !== "") {
			scollSpy2ActiveLI.removeClass("active");
		}
		var activeTab = $(".nav-step li.active a").attr("href");
		scollSpy2ActiveLI = $('.nav-aside li a[href="' + activeTab + '"]').parent();
		$('.nav-aside li').removeClass('active');
		scollSpy2ActiveLI.addClass('active');
		if( $(".btn-assortment").hasClass("active") ) {
			$(".slick-dots").addClass("slick-dots-open");
			$(".concept-navbar").removeClass("concept-navbar-open");
			$(".options-navbar").removeClass("options-navbar-open");
			$(".accessory-navbar").removeClass("accessory-navbar-open");
			$(".uses-navbar").removeClass("uses-navbar-open");
		}
		else if( $(".btn-concept").hasClass("active") ) {
			$(".concept-navbar").addClass("concept-navbar-open");
			$(".options-navbar").removeClass("options-navbar-open");
			$(".accessory-navbar").removeClass("accessory-navbar-open");
			$(".slick-dots").removeClass("slick-dots-open");
			$(".uses-navbar").removeClass("uses-navbar-open");
		}
		else if( $(".btn-options").hasClass("active") ) {
			$(".options-navbar").addClass("options-navbar-open");
			$(".accessory-navbar").removeClass("accessory-navbar-open");
			$(".concept-navbar").removeClass("concept-navbar-open");
			$(".slick-dots").removeClass("slick-dots-open");
			$(".uses-navbar").removeClass("uses-navbar-open");
		}
		else if( $(".btn-accessory").hasClass("active") ) {
			$(".accessory-navbar").addClass("accessory-navbar-open");
			$(".concept-navbar").removeClass("concept-navbar-open");
			$(".options-navbar").removeClass("options-navbar-open");
			$(".slick-dots").removeClass("slick-dots-open");
			$(".uses-navbar").removeClass("uses-navbar-open");
		}
		else if( $(".btn-uses").hasClass("active") ) {
			$(".uses-navbar").addClass("uses-navbar-open");
			$(".concept-navbar").removeClass("concept-navbar-open");
			$(".accessory-navbar").removeClass("accessory-navbar-open");
			$(".options-navbar").removeClass("options-navbar-open");
			$(".slick-dots").removeClass("slick-dots-open");
		}
		else {
			$(".slick-dots").removeClass("slick-dots-open");
			$(".concept-navbar").removeClass("concept-navbar-open");
			$(".options-navbar").removeClass("options-navbar-open");
			$(".accessory-navbar").removeClass("accessory-navbar-open");
			$(".uses-navbar").removeClass("uses-navbar-open");
		}
	});
	$body.trigger("activate.bs.scrollspy");


	//Img & Video cover
	$(window).load(function() {
		var $window = $(window),
			$bkgCover = $(".background-cover"),
			aspectRatio = 16 / 9;

		function resizeBg() {
			if ( ($window.width() / $window.height()) < aspectRatio ) {
				$bkgCover
				  .removeClass('bkgwidth')
				  .addClass('bkgheight')
				  .css({
				  		"margin-left" : $window.width() / 2,
						"left" : - $bkgCover.width() / 2,
				  });
			} else {
				$bkgCover
				  .removeClass('bkgheight')
				  .addClass('bkgwidth')
				  .css({
				  		"margin-left" : "0",
						"left" : "0",
				  });
			}
		}

		$window.resize(resizeBg).trigger("resize");
	});

	//Fallback video on mobile view
	$( window ).load(function() {
		var windowWidth = $(window).width();
		if (windowWidth < 768) {
			$('video').hide();
		}
		else {
			$('video').show();
		}
	});
	$( window ).resize(function() {
		var windowWidth = $(window).width();
		if (windowWidth < 768) {
			$('video').hide();
		}
		else {
			$('video').show();
		}
	});

	//Transitions between views in concept-view (slideshow, 2 parts, grid)
	var $conceptBlockRight = $(".concept .block-img-right");
	var $conceptBlockLeft = $(".concept .block-img-left");
	var $conceptBtnRight = $(".concept .btn-img-right");
	var $conceptBtnLeft = $(".concept .btn-img-left");
	var openConceptBlockRight = function(){
		$conceptBlockLeft.fadeOut("slow", function() {
			$conceptBlockRight.fadeIn("slow");
		});
	};
	var openConceptBlockLeft = function(){
		$conceptBlockRight.fadeOut("slow", function() {
			$conceptBlockLeft.fadeIn("slow");
		});
	};
	var conceptBtnEventReset = function(){
		$conceptBtnRight.off('click', openConceptBlockRight);
		$conceptBtnLeft.off('click', openConceptBlockLeft);
	};

	$( window ).load(function() {
		var windowWidth = $(window).width();
		if(windowWidth > 850 && windowWidth < 1201) {
			conceptBtnEventReset();
			$conceptBtnRight.click(openConceptBlockRight);
			$conceptBtnLeft.click(openConceptBlockLeft);
		}
		else if (windowWidth < 851) {
			$("#concept .content").css("width", windowWidth);
		}
	});

	$( window ).resize(function() {
		var windowWidth = $(window).width();
		if(windowWidth > 850 && windowWidth < 1201) {
			$conceptBlockLeft.show();
			$conceptBlockRight.hide();
			conceptBtnEventReset();
			$conceptBtnRight.click(openConceptBlockRight);
			$conceptBtnLeft.click(openConceptBlockLeft);
		}
		else if (windowWidth < 851) {
			$("#concept .item").removeAttr("style");
			$("#concept .item").removeClass("active");
			$("#concept .item").eq(0).addClass("active");
			$("#concept .content").css("width", windowWidth);
		}
		else {
			$("#concept .item").show();
			conceptBtnEventReset();
		}
	});

	//Medium view in concept-view (2 parts)
	$('#concept article .item').each(function(i){
		$('#concept article .item').eq(i).click(function(){
			$(".concept-navbar li").removeClass("active");
			$(".concept-navbar").find("[data-order='" + i + "']").addClass("active");
			$("#concept article .item").removeClass("active");
			$("#concept article .item").eq(i).addClass("active");
		});
	});
	$('.concept-navbar li').each(function(i){
		$('.concept-navbar').find("[data-order='" + i + "']").click(function(){
			$("#concept article .item").removeClass("active");
			$("#concept article .item").eq(i).addClass("active");
			$(".concept-navbar li").removeClass("active");
			$(".concept-navbar").find("[data-order='" + i + "']").addClass("active");
		});
	});

	// mobile slideshow in concept-view
	$( window ).load(function() {
		var windowWidth = $(window).width();
		if(windowWidth < 851) {
			$('#carousel-concept').addClass("carousel");
			$('#carousel-concept article').addClass("carousel-inner");
		}
	});
	$(window).resize(function() {
		var windowWidth = $(window).width();
		if(windowWidth < 851) {
			$('#carousel-concept').addClass("carousel");
			$('#carousel-concept article').addClass("carousel-inner");
		}
		else {
			$('#carousel-concept').removeClass("carousel");
			$('#carousel-concept article').removeClass("carousel-inner");
		}
	});
	$('.concept .carousel-indicators-mobile li').on("click",function(){ 
   		$('.concept .carousel-indicators-mobile li.active').removeClass("active");
    	$(this).addClass("active");
	});


	//Immersion tooltip
	$(function () {
		$('.immersion [data-toggle="tooltip"]').tooltip();
	});


	//Product spec slideshow (assortment view)
	$('.slideshow').slick({
		accessibility: true,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<a class="left carousel-control" data-slide="prev"><i class="fa fa-angle-left"></i></a>',
		nextArrow: '<a class="right carousel-control" data-slide="prev"><i class="fa fa-angle-right"></i></a>',
		initialSlide: 1,
		dots: true,
		customPaging: function(slick,index) {
			var eqIndex = index + 1;
			var itemName = $('#assortment .item').eq(eqIndex).find('h3').html();
			if (typeof itemName !== "undefined") {
				return '<a>' + itemName + '</a>';
			}
			else {
				//@TODO: find better solution to avoid "undefined" (= final empty slide) element on dots bar. 
				return '<a class="hide">' + itemName + '</a>';
			}
		},
		onSetPosition: function(){
			var windowWidth = $(window).width();
			$('.carousel-control, .slick-dots li').click(function(){
				if (windowWidth < 990) {
					$('.slick-slide').removeClass('active');
					$('.slick-active').next().addClass('active');
				}
				else {
					$('.slick-slide').removeClass('active');
					$('.slick-slide').removeClass('active-left');
					$('.slick-slide').removeClass('active-right');
					$('.slick-active').eq(0).addClass('active-left');
					$('.slick-active').eq(1).addClass('active');
					$('.slick-active').eq(2).addClass('active-right');
				}
			});
		},
		responsive: [
		  {
			breakpoint: 1150,
			settings: {
				slidesToShow: 2,
			}
		  },
		  {
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				initialSlide: 1,
				dots: false,
			}
		  }
		]
	});

	$(".carousel-control").click(function(){
		if ($(window).width() < 768) {
			$(".options-labels ul li")
				.queue(
					function(next){ 
						$(this).css('color','transparent'); 
						next();
					})
				.delay( 400 )
				.queue( 
					function(next){ 
						$(this).css('color','#444'); 
						next();
					});
		}
	});


	//Transitions between views in options-view (slideshow, 2 parts, grid)
	var $optionsBlockRight = $(".options .block-img-right");
	var $optionsBlockLeft = $(".options .block-img-left");
	var $optionsBtnRight = $(".options .btn-img-right");
	var $optionsBtnLeft = $(".options .btn-img-left");
	var openOptionsBlockRight = function(){
		$optionsBlockLeft.fadeOut("slow", function() {
			$optionsBlockRight.fadeIn("slow");
		});
	};
	var openOptionsBlockLeft = function(){
		$optionsBlockRight.fadeOut("slow", function() {
			$optionsBlockLeft.fadeIn("slow");
		});
	};
	var optionsBtnEventReset = function(){
		$optionsBtnRight.off('click', openOptionsBlockRight);
		$optionsBtnLeft.off('click', openOptionsBlockLeft);
	};

	$( window ).load(function() {
		var windowWidth = $(window).width();
		if(windowWidth > 850 && windowWidth < 1201) {
			optionsBtnEventReset();
			$optionsBtnRight.click(openOptionsBlockRight);
			$optionsBtnLeft.click(openOptionsBlockLeft);
		}
		else if (windowWidth < 851) {
			$("#options .content").css("width", windowWidth);
		}
	});

	$( window ).resize(function() {
		var windowWidth = $(window).width();
		if(windowWidth > 850 && windowWidth < 1201) {
			$optionsBlockLeft.show();
			$optionsBlockRight.hide();
			optionsBtnEventReset();
			$optionsBtnRight.click(openOptionsBlockRight);
			$optionsBtnLeft.click(openOptionsBlockLeft);
		}
		else if (windowWidth < 851) {
			$("#options .item").removeAttr("style");
			$("#options .item").removeClass("active");
			$("#options .item").eq(0).addClass("active");
			$("#options .content").css("width", windowWidth);
		}
		else {
			$("#options .item").show();
			optionsBtnEventReset();
		}
	});

	//Medium view in options-view (2 parts)
	$('#options article .item').each(function(i){
		$('#options article .item').eq(i).click(function(){
			$(".options-navbar li").removeClass("active");
			$(".options-navbar").find("[data-order='" + i + "']").addClass("active");
			$("#options article .item").removeClass("active");
			$("#options article .item").eq(i).addClass("active");
		});
	});
	$('.options-navbar li').each(function(i){
		$('.options-navbar').find("[data-order='" + i + "']").click(function(){
			$("#options article .item").removeClass("active");
			$("#options article .item").eq(i).addClass("active");
			$(".options-navbar li").removeClass("active");
			$(".options-navbar").find("[data-order='" + i + "']").addClass("active");
		});
	});

	// mobile slideshow in options-view
	$( window ).load(function() {
		var windowWidth = $(window).width();
		if(windowWidth < 851) {
			$('#carousel-options').addClass("carousel");
			$('#carousel-options article').addClass("carousel-inner");
		}
	});
	$(window).resize(function() {
		var windowWidth = $(window).width();
		if(windowWidth < 851) {
			$('#carousel-options').addClass("carousel");
			$('#carousel-options article').addClass("carousel-inner");
		}
		else {
			$('#carousel-options').removeClass("carousel");
			$('#carousel-options article').removeClass("carousel-inner");
		}
	});
	$('.options .carousel-indicators-mobile li').on("click",function(){ 
   		$('.options .carousel-indicators-mobile li.active').removeClass("active");
    	$(this).addClass("active");
	});



	//Transitions between views in accessory-view (slideshow, 2 parts, grid)
	var $accessoryBlockRight = $(".accessory .block-img-right");
	var $accessoryBlockLeft = $(".accessory .block-img-left");
	var $accessoryBtnRight = $(".accessory .btn-img-right");
	var $accessoryBtnLeft = $(".accessory .btn-img-left");
	var openAccessoryBlockRight = function(){
		$accessoryBlockLeft.fadeOut("slow", function() {
			$accessoryBlockRight.fadeIn("slow");
		});
	};
	var openAccessoryBlockLeft = function(){
		$accessoryBlockRight.fadeOut("slow", function() {
			$accessoryBlockLeft.fadeIn("slow");
		});
	};
	var accessoryBtnEventReset = function(){
		$accessoryBtnRight.off('click', openAccessoryBlockRight);
		$accessoryBtnLeft.off('click', openAccessoryBlockLeft);
	};

	$( window ).load(function() {
		var windowWidth = $(window).width();
		if(windowWidth > 850 && windowWidth < 1201) {
			accessoryBtnEventReset();
			$accessoryBtnRight.click(openAccessoryBlockRight);
			$accessoryBtnLeft.click(openAccessoryBlockLeft);
		}
		else if (windowWidth < 851) {
			$("#accessory .content").css("width", windowWidth);
		}
	});


	$( window ).resize(function() {
		var windowWidth = $(window).width();
		if(windowWidth > 850 && windowWidth < 1201) {
			$accessoryBlockLeft.show();
			$accessoryBlockRight.hide();
			accessoryBtnEventReset();
			$accessoryBtnRight.click(openAccessoryBlockRight);
			$accessoryBtnLeft.click(openAccessoryBlockLeft);
		}
		else if (windowWidth < 851) {
			$("#accessory .item").removeAttr("style");
			$("#accessory .item").removeClass("active");
			$("#accessory .item").eq(0).addClass("active");
			$("#accessory .content").css("width", windowWidth);
		}
		else {
			$("#accessory .item").show();
			accessoryBtnEventReset();
		}
	});


	//Medium view in accessory-view (2 parts)
	$('#accessory article .item').each(function(i){
		$('#accessory article .item').eq(i).click(function(){
			$(".accessory-navbar li").removeClass("active");
			$(".accessory-navbar").find("[data-order='" + i + "']").addClass("active");
			$("#accessory article .item").removeClass("active");
			$("#accessory article .item").eq(i).addClass("active");
		});
	});
	$('.accessory-navbar li').each(function(i){
		$('.accessory-navbar').find("[data-order='" + i + "']").click(function(){
			$("#accessory article .item").removeClass("active");
			$("#accessory article .item").eq(i).addClass("active");
			$(".accessory-navbar li").removeClass("active");
			$(".accessory-navbar").find("[data-order='" + i + "']").addClass("active");
		});
	});


	// mobile slideshow in accessory-view
	$( window ).load(function() {
		var windowWidth = $(window).width();
		if(windowWidth < 851) {
			$('#carousel-accessory').addClass("carousel");
			$('#carousel-accessory article').addClass("carousel-inner");
		}
	});
	$(window).resize(function() {
		var windowWidth = $(window).width();
		if(windowWidth < 851) {
			$('#carousel-accessory').addClass("carousel");
			$('#carousel-accessory article').addClass("carousel-inner");
		}
		else {
			$('#carousel-accessory').removeClass("carousel");
			$('#carousel-accessory article').removeClass("carousel-inner");
		}
	});
	$('.accessory .carousel-indicators-mobile li').on("click",function(){ 
   		$('.accessory .carousel-indicators-mobile li.active').removeClass("active");
    	$(this).addClass("active");
	});
	
	//slideshow in uses-view
	$('.uses-navbar li').on("click",function(){ 
   		$('.uses-navbar li.active').removeClass("active");
    	$(this).addClass("active");
	});
	
	//video reduce view

	/*function onPlayerStateChange(event) {        
		if(event.data === YT.PlayerState.ENDED) { 
			console.log("video ended");
			$(".reduce-overlay").addClass("reduce-overlay-open");
		}
	}*/
	
	//map reduce view
	$('#map-reduce').click(function(){
		$('.map-overlay').hide();
	});
	
});

