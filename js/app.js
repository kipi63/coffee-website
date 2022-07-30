let navbar = document.querySelector('.header__nav');
let cartItem = document.querySelector('.cart');
let searchForm = document.querySelector('.header__search');

document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.toggle('active');
	removeCartItem ();
	removeSearchForm ();

	
}

document.querySelector('#cart-btn').onclick = () => {
	cartItem.classList.toggle('active');
	removeNavbar ();
	removeSearchForm ();
}

document.querySelector('#search-btn').onclick = () => {
	searchForm.classList.toggle('active');
	removeNavbar ();
	removeCartItem ();
}

window.onscroll = () => {
	navbar.classList.remove('active');
	cartItem.classList.remove('active');
	searchForm.classList.remove('active');
}











function removeNavbar () {
	navbar.classList.remove('active');
}
function removeCartItem () {
	cartItem.classList.remove('active');
}
 
function removeSearchForm () {
	searchForm.classList.remove('active');
}
