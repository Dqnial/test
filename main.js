const swiper = new Swiper('.swiper', {
    slidesPerView: 2.4,
	spaceBetween: 5,
	freeMode: true,
	grabCursor: true,
	mousewheel: {
		forceToAxis: true,
	},
	forceToAxis: false,
	breakpoints: {
        320: {
			slidesPerView: 1.5,
			spaceBetween: 5,
		},
		640: {
			slidesPerView: 3.5,
			spaceBetween: 5,
		},
		1024: {
			slidesPerView: 4.5,
			spaceBetween: 5,
		},
		1400: {
			slidesPerView: 5.5,
			spaceBetween: 5,
		},
	},
  });