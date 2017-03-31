let navbar = `<div id="options">
	<div id="logo"></div>
	<div class="button">
		<svg class="icon"><use xlink:href="img/icons/pizza.svg#pizza" /></svg>
		<label class="title">Order</label>
	</div>
	<div class="button">
		<svg class="icon"><use xlink:href="img/icons/music.svg#music" /></svg>
		<label class="title">Entertainment</label>
	</div>
	<div class="button">
		<svg class="icon"><use xlink:href="img/icons/world.svg#world" /></svg>
		<label class="title">News</label>
	</div>
	<div class="button">
		<svg class="icon"><use xlink:href="img/icons/navigation.svg#navigation" /></svg>
		<label class="title">Information</label>
	</div>
</div>
<div id="minimizer">
	<svg><use xlink:href="img/icons/arrowLeft.svg#arrowLeft" /></svg>
</div>`;
$('nav').html(navbar);

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
