/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$('#navbar').navbar({selected: 'Drinks'}); //Adding top navigation bar.
$('#menubar').menubar(); //Adding menu bar.
populateDrinksMenu($('.menuItems')); //Populates the drink's menu dynamically.


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function createDrinkOrderButton() {
	var price = $('<label>', { //Creates a label with a price for the drink's type.
		html: '5€',
		'class': 'drinksInformationTypeLabel'
	});
	price.addClass('priceContainer');
	var button = $('<button>', {
		html: 'Order',
		'click': function() { setGlobalDrink(); },
		'id': 'drinkOrderButton'
	}); //Creates a button for ordering.
	return $('<div>').append([price, button]);
}

function drinksOrderCancel(index) {
	confirmationOverlayShow(drinksConfirmCancel, []);
}
function drinksConfirmCancel(args) {
	var index = sessionStorage.orderNumber;
	managerDeleteOrder(index);
	window.location.href = 'html/table.html';
}

function setGlobalDrink() {
	var b = $('#extensiveInfoBar').children('.mPITitle').text(); //Gets the name of the ordered pizza.
	managerAddNewDrink(b);
	if (sessionStorage.getItem('editing') == 'true') {
		sessionStorage.setItem('editing', 'false');
		$(location).attr('href', 'html/table.html'); //Confirms.
	} else {
		window.location.href = 'html/menus/menuOrderConfirmation.html'; //Changes the screen (menu flow).
	}
}


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
//Generates and shows the lateral drink information.
$('.menuDrinkItem').click(function() { showExtensiveInformation($(this).children('.mPITitle').text()); });

//The click event of #drinksInformationClose is defined in the spawning (in showExtensiveInformation()).
//The click event of #drinkOrderButton is defined in the spawning (in createDrinkOrderButton()).
$('#cancelButton').click(function() { drinksOrderCancel(); }); //Changes the page to the main page.
$('#backButton').click(function() { window.location.href = 'html/menus/menuPizzaList.html'; }); //Changes the page to the main page.

$('#skipButton').click(function() {
	var orderNumber = "order" + sessionStorage.orderNumber;
	if (managerCheckIf(orderNumber)) {
		window.location.href = 'html/menus/menuOrderConfirmation.html'
	}
	else {
		window.location.href = 'html/table.html'
	}
});
