/***** Constants *****/
const ANIM_SPEED_MENU = 500;
const HTML_MENUBAR = `
	<div id="options">
		<div id="logo"></div>
		<div class="button" onclick="orderButton()">
			<svg class="icon"><use xlink:href="img/icons/pizza.svg#pizza" /></svg>
			<label class="title">Order</label>
		</div>
		<div class="button" onclick="entertainmentButton()">
			<svg class="icon"><use xlink:href="img/icons/music.svg#music" /></svg>
			<label class="title">Entertainment</label>
		</div>
		<div class="button" onclick="newsButton()">
			<svg class="icon"><use xlink:href="img/icons/world.svg#world" /></svg>
			<label class="title">News</label>
		</div>
		<div class="button" onclick="informationButton()">
			<svg class="icon"><use xlink:href="img/icons/navigation.svg#navigation" /></svg>
			<label class="title">Information</label>
		</div>
		<div id="taxiNavBarDiv" class="col-md-12" style='margin-top:50px'>
			<div id="taxiNavBarIcon" class="fa fa-taxi"></div>
			<label id='MBtaxiNumberLabel'>1</label>
			<label class='taxiETALabel' id='MBtaxiETALabel'>ETA: 14min</label>
			<button class='buttonDanger' id='taxiCancelButton' onclick='taxiCancel()'>Cancel Taxi</button>
		</div>
	</div>
	<div id="minimizer">
		<svg><use xlink:href="img/icons/arrowLeft.svg#arrowLeft" /></svg>
	</div>
`;
const HTML_NAVBAR = `
	<ul class="multi-steps">
		<li><a href="html/menus/menuPizzaList.html">Pizza</a></li>
		<li><a href="html/menus/menuDrinks.html">Drinks</a></li>
		<li><a href="html/menus/menuOrderConfirmation.html">Confirm</a></li>
	</ul>
`;

//Show the correct overlay
function orderButton() {
	if (sessionStorage.ordered == 'true') {
		$(location).attr('href', 'html/newOrder.html');
	} else {
		$(location).attr('href', 'html/menus/menuPizzaList.html');
	}
}
function entertainmentButton() { /*$(location).attr('href', 'html/entertainment.html');*/ }
function newsButton() { /*$(location).attr('href', 'html/news.html');*/ }
function informationButton() { $(location).attr('href', 'html/informationMaps.html'); }

(function($) {
    $.fn.menubar = function(opt) {
        var def = $.extend({
			minimized : true,
        }, opt);

		var container = $(this);
		container.html(HTML_MENUBAR);

		var minimizer = container.children('#minimizer');
		var options   = container.children('#options');
		var buttons   = container.find('.button');
		var transport = container.find('#taxiNavBarDiv');

		/*** Adding click functions ***/
		// Activating arrow toggle
		minimizer.click(function() {
			options.toggle(ANIM_SPEED_MENU);
			$(this).toggleClass('closed');
		});
		transport.click(function() {
			informationButton(); // FIXME: incomplete action
		});

		/*** Applying arguments ***/
		if (def.minimized) {
			minimizer.click();
		}

		/*** Cooperating with sessionStorage ***/
		if (typeof(sessionStorage.myTransportation) !== "undefined") {
			var details = JSON.parse(sessionStorage.myTransportation);
			transport.attr('title', details.type);
			var taxiETA = details['ETA'];
			$('#MBtaxiETALabel').text('ETA: ' + taxiETA + 'MIN');
			var taxiNumber = details['number'];
			$('#MBtaxiNumberLabel').text(taxiNumber);
			transport.show();
		}
		else {
			transport.hide();
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
			steps.first().addClass('current');
		} else {
			var current = steps.children(':contains(' + def.selected + ')').parent();
			var others = current.siblings();
			var index = current.index();
			for (var i = 0; i < index; i++) {
				others.eq(i).addClass('visited');
			}
			current.addClass('current');
		}
    };
})(jQuery);
