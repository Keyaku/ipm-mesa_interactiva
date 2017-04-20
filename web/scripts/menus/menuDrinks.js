/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$('#menubar').menubar(); //Adds menu bar.
$('#navbar').navbar({selected: 'Drinks'}); //Adds top navigation bar.
populateDrinksMenu($('.menuItems')); //Populates the drink's menu dynamically.


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
//TODO - @RafaelRibeiro - Move this to menuGenerate.js
function createDrinkOrderButton() {
	var price = $('<label>', { //Creates a label with a price for the drink's type.
		html: '5€',
		'class': 'drinksInformationTypeLabel',
		'class': 'priceContainer'
	});
	var button = $('<button>', {
		'id': 'drinkOrderButton',
		html: 'Order',
		'click': function() { setGlobalDrink(); }
	}); //Creates a button for ordering.
	return $('<div>').append([price, button]);
}

//When the client clicks in the order button.
function setGlobalDrink() {
	var pizzaName = $('#extensiveInfoBar').children('.mPITitle').text(); //Gets the name of the ordered pizza.
	managerAddNewDrink(pizzaName); //Adds the drink to the system.
	if (sessionStorage.getItem('editing') == 'true') { //If the client is editing a previous order.
		sessionStorage.setItem('editing', 'false'); //Sets the editing flag to false.
		window.location.href = 'html/table.html';
	}
	else { //If the client is NOT editing a previous order.
		window.location.href = 'html/menus/menuOrderConfirmation.html'; } //Continues with the order.
}

//When the client clicks the cancel button.
function drinksOrderCancel(index) { confirmationOverlayShow(drinksConfirmCancel, []); }
//When the client clicks the "Yes" button in the confirmation overlay (callback from confirmationOverlayShow).
function drinksConfirmCancel(args) {
	managerDeleteOrder(sessionStorage.orderNumber); //Deletes the ongoing order.
	window.location.href = 'html/table.html';
}

$('.menuDrinkItem').click(function() {
	$(this).children('.mPITitle').toggleClass('active');
	$(this).children('.menuDrinkItemImg').toggleClass('active');
	var ing = $(this).attr('id');
	if (pizzaCheckIngredient(ing)) {
		pizzaRemoveIngredient(ing);
	} else {
		pizzaAddIngredient(ing);
	}
});

/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
//The click event of #drinksInformationClose is defined in the spawning (in showExtensiveInformation()).
//The click event of #drinkOrderButton is defined in the spawning (in createDrinkOrderButton()).
//The click event for the drink items opens the extensive information bar.
$('.menuDrinkItem').click(function() { showExtensiveInformation($(this).children('.mPITitle').text()); });
//The click event for the cancel button changes the page to the main page.
$('#cancelButton').click(function() { drinksOrderCancel(); }); //Changes the page to the main page.
//The click event for the back button changes the page to the pizza menu.
$('#backButton').click(function() { window.location.href = 'html/menus/menuPizzaList.html'; });
//The click event for the skip button changes the page to the confirmation page or the main page.
$('#skipButton').click(function() {
	if (managerCheckIf(sessionStorage.orderNumber)) { //If the client ordered a pizza.
		window.location.href = 'html/menus/menuOrderConfirmation.html'
	}
	else { //If the client also skipped the pizza.
		window.location.href = 'html/table.html';
	}
});
