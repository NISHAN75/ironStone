(function ($) {
	$(document).ready(function () {
		// nice select
		$('select').niceSelect();
		// slide toogle
		$(".sub-menu-trigger").click(function(event) {
			event.preventDefault(); 
			$(".sub-menu").not($(this).next(".sub-menu")).slideUp();
			$(".sub-menu-trigger").not($(this)).removeClass("rotate");
			$(this).toggleClass("rotate");
			$(this).next(".sub-menu").slideToggle();
		});
		// magnific Popup active

		$(".video-popup").magnificPopup({
			type: "iframe",
			iframe: {
				markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe>' + "</div>",
				patterns: {
					youtube: {
						index: "youtube.com/",
						id: "v=",
						src: "https://www.youtube.com/embed/%id%?autoplay=1",
					},
				},
			},
		});
		// swiper  active
		// testimonial
		var testimonialSlider = new Swiper(".testimonial-slider", {
			autoHeight: true, 
			loop:true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			  },
		});
		// tp-brand-top-active
		let brandLogo1 = new Swiper(".tp-brand-top-active", {
			slidesPerView: "auto",
			freemode:true,
			loop:true,
			spaceBetween: 85,
			centeredSlider:true,
			allowTouchMove:false,
			speed:4000,
			autoplay:{
			  delay:1,
			  disableOnInteraction:true,
			}
		  });
		//  tp-brand-top-active-2
		let brandLogo2 = new Swiper(".tp-brand-top-active-2", {
			slidesPerView: "auto",
			freemode:true,
			loop:true,
			spaceBetween: 85,
			centeredSlider:true,
			allowTouchMove:false,
			speed:4000,
			autoplay:{
			  delay:1,
			  disableOnInteraction:true,
			}
		  });
		//  tp-brand-top-active-3
		let brandLogo3 = new Swiper(".tp-brand-top-active-3", {
			slidesPerView: "auto",
			freemode:true,
			loop:true,
			spaceBetween: 85,
			centeredSlider:true,
			allowTouchMove:false,
			speed:4000,
			autoplay:{
			  delay:1,
			  disableOnInteraction:true,
			}
		  });
		let brandLogo4 = new Swiper(".tp-brand-top-active-4", {
			slidesPerView: "auto",
			freemode:true,
			loop:true,
			spaceBetween: 85,
			centeredSlider:true,
			allowTouchMove:false,
			speed:4000,
			autoplay:{
			  delay:1,
			  disableOnInteraction:true,
			}
		});
		
		//  mastery slider
		let swiper = new Swiper(".mastery-slider", {
			autoHeight: true, 
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			mousewheel: true,
			keyboard: true,

		  });
		   

		// header class add
		const $header = $('.header-area');

		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 0) {
				$header.addClass('header-scrolled');
			} else {
				$header.removeClass('header-scrolled');
			}
		});



	});
})(jQuery);