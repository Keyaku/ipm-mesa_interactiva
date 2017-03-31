// Activating arrow toggle
$('nav #minimizer').click(function() {
	$('nav #options').toggle(ANIM_SPEED_MENU);
	$(this).toggleClass('closed');
});

//Show the correct overlay
$('nav .button').click(function() {
	var backgroundImgs = { // Our background "database"
		'default' : '../img/tableBack2.jpg',
		'order'   : '../img/menuBannerDrinks.jpg',
	};

	var name = $(this).children('nav .title').text().toLowerCase();
	if (name in backgroundImgs) {
		$('main').css('background-image', 'url(' + backgroundImgs[name] + ')');
	} else {
		$('main').css('background-image', 'url(' + backgroundImgs['default'] + ')');
	}

	$('.overlay').hide(); // Hide ALL submenus, just in case
	$('.overlay#' + name).show(); // Show the appropriate submenu
});
