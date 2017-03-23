/***** Constants *****/
const ANIM_SPEED_MENU = 500;

/***** Variables *****/

/****** Code execution *******/
$(document).ready(function(){
	// Starting svg4everybody
	svg4everybody();

	// Showing default overlay
	$('.overlay').hide();
	$('.overlay#order').show();

	$('.informationSubMenu').children('label').addClass('informationSubMenuTitle');
	$('.informationSubMenu div.subMenuIcon').css('filter', 'invert(100%)');
});

/***** Overlay content *****/
// Activating arrow toggle
$('#minimizer').click(function() {
	$('#menuOptions').toggle(ANIM_SPEED_MENU);
	$(this).toggleClass('closed');
});

//Show the correct overlay
$('.menuButton').click(function() {
	var backgroundImgs = { // Our background "database"
		'default' : '../img/tableBack2.jpg',
		'order'   : '../img/menuBannerDrinks.jpg',
	};

	var name = $(this).children('.menuTitle').text().toLowerCase();
	if (name in backgroundImgs) {
		$('main').css('background-image', 'url(' + backgroundImgs[name] + ')');
	} else {
		$('main').css('background-image', 'url(' + backgroundImgs['default'] + ')');
	}

	$('.overlay').hide(); // Hide ALL submenus, just in case
	$('.overlay#' + name).show(); // Show the appropriate submenu
});

//Google Maps search
$('#barButton').click(function() { searchMap('bar+taguspark'); });
$('#mallButton').click(function() { searchMap('centro+comercial+oeiras'); });
$('#carButton').click(function() { directionsMap($('#mapsDestinationInput').val(), 'driving'); });
$('#publicTransportButton').click(function() { directionsMap($('#mapsDestinationInput').val(), 'transit'); });

/***** Timer-related code *****/
// TODO: Add countdown element in page
