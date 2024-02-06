(() => {
	///====================update ====================



	const handleHeaderSliderLogoCar = function () {
		if ($('#section-car .swiper').length) {
			new Swiper('#section-car .swiper', {
				spaceBetween: 25,
				slidesPerView: 1.4,
				speed: 1000,
				autoplay: {
					delay: 6500,
					disableOnInteraction: true,
				},
				navigation: {
					nextEl: "#swiper-introduce .button-next",
					prevEl: "#swiper-introduce .button-prev",
				},
				breakpoints: {
					375: {
						slidesPerView: 1.5
					},
					425: {
						slidesPerView: 2
					},
					768: {
						slidesPerView: 3.2
					},
					992: {
						slidesPerView: 4
					},
					1024: {
						slidesPerView: 5,
					},
					1440: {
						slidesPerView: 6,
					},

				}
			});
		}
	}

	const handleHeightSection = function(){
		if ($('.section-cooperate').length) {
			const heightNavigation = $('.section-cooperate').outerHeight();
			if (heightNavigation > 0) {
				$('.cooperate-flex__right').css('height', heightNavigation);
			}
		}
	}



	$(function () {
		handleHeaderSliderLogoCar();
		handleHeightSection();
	});

})();
