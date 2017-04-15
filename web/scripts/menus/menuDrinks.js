/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$('#navbar').navbar(); //Adding top navigation bar.
$('#menubar').menubar(); //Adding menu bar.
$('#drinksInformation').hide(); //Hides the lateral pizza information bar.
populateDrinksMenu($('#menuDrinks')); //Populates the drink's menu dynamically.


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function createDrinkOrderButton() {
	var price = $('<label>', { //Creates a label with a price for the drink's type.
		html: '5€',
		'class': 'drinksInformationTypeLabel'
	});
	var button = $('<button>', {
		html: 'Order',
		'click': function() { setGlobalDrink(); },
		'id': 'drinkOrderButton'
	}); //Creates a button for ordering.
	return $('<div>').append([price, button]);
}

function showDrinkExtensiveInformation(drinkName) {
	var drink = getPremadeDrink(drinkName);
	var closeX = $('<div>', {
		html: 'X',
		'click': function() { hidePizzaExtensiveInformation(); },
		'id': 'drinksInformationClose'
	});
	var label = $('<label>', { //Creates the label for the drink's name.
		html: drinkName,
		'class': 'mPDITitle'
	});
	var nutInfo = createDrinkNutritionalInfo(drink); //Gets the nutritional information for the drink.
	var drinkTypes = createDrinkTypes(drink); //Gets the drink's types.
	var drinkOrder = createDrinkOrderButton(); //Gets the drink's order price and button.

	$('#drinksInformation').empty().append([closeX, label, nutInfo, drinkTypes, drinkOrder])
		.show();//Shows the lateral pizza information bar.
}
function hidePizzaExtensiveInformation() {
	$('#drinksInformation').hide();
}
function confirmCancel() { /*TODO - FranciscoKloganB: Popup that asks for confirmation for cancelling the order.*/ }

function setGlobalDrink() {
	var b = $('#drinksInformation').children('.mPDITitle').text(); //Gets the name of the ordered pizza.
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
$('.menuDrinkItem').click(function() { showDrinkExtensiveInformation($(this).children('.mPDITitle').text()); });

//The click event of #drinksInformationClose is defined in the spawning (in showDrinkExtensiveInformation()).
//The click event of #drinkOrderButton is defined in the spawning (in createDrinkOrderButton()).
$('#cancelButton').click(function() { window.location.href = 'html/table.html'; }); //Changes the page to the main page.
