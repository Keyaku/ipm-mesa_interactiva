/***** Constants *****/
const ANIM_SPEED_MENU = 500;
const HTML_NAVBAR = `<div id="options">
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

(function($) {
    $.fn.navbar = function(opt) {
        var def = $.extend({
			minimized : true,
        }, opt);

		var container = $(this);
		container.html(HTML_NAVBAR);

		var minimizer = container.children('#minimizer');
		var buttons   = container.children('.button');

		/*** Adding click functions ***/
		// Activating arrow toggle
		minimizer.click(function() {
			$('nav #options').toggle(ANIM_SPEED_MENU);
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
})(jQuery);
