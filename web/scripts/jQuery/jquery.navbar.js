/***** Constants *****/
const ANIM_SPEED_MENU = 500;
const HTML_MENUBAR = `
	<div id="options">
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
	</div>
`;
const HTML_NAVBAR = `
	<ul class="multi-steps">
		<li class="visited"><a href="#">Pizza</a></li>
		<li class="current"><a href="#">Drinks</a></li>
		<li class=""><a href="#">Confirm</a></li>
	</ul>
`;

(function($) {
    $.fn.menubar = function(opt) {
        var def = $.extend({
			minimized : true,
        }, opt);

		var container = $(this);
		container.html(HTML_MENUBAR);

		var minimizer = container.children('#minimizer');
		var buttons   = container.children('.button');
		var options   = container.children('#options');

		/*** Adding click functions ***/
		// Activating arrow toggle
		minimizer.click(function() {
			options.toggle(ANIM_SPEED_MENU);
			$(this).toggleClass('closed');
		});

		//Show the correct overlay
		buttons.click(function() {
			// TODO: implement webpage swapping
		});

		/*** Applying arguments ***/
		if (def.minimized) {
			minimizer.click();
		}
    };
	$.fn.navbar = function(opt) {
        var def = $.extend({
			selected : undefined, // If defined, selects that element and colors all previous ones
        }, opt);

		var container = $(this);
		container.html(HTML_NAVBAR);

		var steps = container.children('.multi-steps').children('li');

		/*** Organizing ***/
		var col_size = Math.floor(12 / steps.length);
		steps.addClass('col-md-' + col_size);

		/*** Applying arguments ***/
		if (def.selected == undefined) {
			//steps.first().addClass('current');
		} // TODO: highlight selected
    };
})(jQuery);
