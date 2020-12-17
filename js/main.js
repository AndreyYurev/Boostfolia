
// ================================Cкрипт для слайдера==========================================
/*инициализация на jQuery */
$(document).ready(function () {
	//включение слайдера
	$('.clients-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
})
//==============================================================================================
// ================================Cкрипт для слайдера who we are==========================================
/*инициализация на jQuery */
$(document).ready(function () {
	//включение слайдера
	$('.team__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true
	});
})
//==============================================================================================


let hamburger = document.querySelector('.nav-button');
let menu = document.querySelector('.header__nav');
let link = document.querySelector('.header__nav-item');

const toggleMenu = () => {
	menu.classList.toggle('header__nav--open');
	hamburger.classList.toggle('nav-button--close');
}
hamburger.addEventListener('mouseup', e => {
	e.stopPropagation();
	toggleMenu();
});

// Не доделал скрипт закрытия меню при нажатии на ссылку
const closeMenu = () => {
	menu.classList.remove('header__nav--open');
	hamburger.classList.remove('nav-button--close');
}
link.addEventListener('click', e => {
	closeMenu();
});


document.addEventListener('mouseup', e => {
	let target = e.target;
	let its_menu = target == menu || menu.contains(target);
	let its_hamburger = target == hamburger;
	let menu_is_active = menu.classList.contains('header__nav--open');

	if (!its_menu && !its_hamburger && menu_is_active) {
		toggleMenu();
	}
})




/*==========================================*/
$(document).on('mouseup', '.videoblock__button', function () {
	let $video = $('#video'),
		src = $video.attr('src');
	$video.attr('src', src + '&autoplay=1');
});
