const toTopBtn = document.querySelector('#top-btn');
const hamburger = document.querySelector('#hamburger');
const mobileNavbar = document.querySelector('#mobile-navbar');
const exitNavbar = document.querySelector('#toggler-mobile-nav');

let menuActive = false;

toTopBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
});

hamburger.addEventListener('click', () => {
	if (menuActive) {
		mobileNavbar.style.right = '-95%';
		menuActive = false;
	} else {
		mobileNavbar.style.right = 0;
		menuActive = true;
	}
});

exitNavbar.addEventListener('click', () => {
	mobileNavbar.style.right = '-95%';
	menuActive = false;
});
