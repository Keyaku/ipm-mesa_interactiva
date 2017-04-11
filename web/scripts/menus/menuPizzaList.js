/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$('#menubar').menubar(); //Adding menu bar
$('#navbar').navbar(); //Adding top navigation bar
$('#pizzaInformation').hide(); //Hides the lateral pizza information bar.
populateSuggestions($('#suggestions')); //Populates the suggested pizza's menu dynamically.
populatePremadeMenu($('#premade')); //Populates the premade pizza's menu dynamically.


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function getPizzaPrice() {
	var d = $('<div></div>');
	d.append($('<label></label>').append(document.createTextNode('Medium: 12€')));
	d.append($('<button></button>').attr('id', 'pizzaOrderButton').click(function() {
		setGlobalPizza();
	}).append(document.createTextNode('Order!')));
	return d;
}
function getSizeButtons() {
	return $('<div></div>').addClass('buttonContainer')
		.append($('<button></button>').addClass('mPIISizeButton')
		.append(document.createTextNode('S')))
		.append($('<button></button>').addClass('mPIISizeButton').append(document.createTextNode('M')))
		.append($('<button></button>').addClass('mPIISizeButton').append(document.createTextNode('L')));
}

function showPizzaExtensiveInformation(name) {
	$('#pizzaInformation').show(); //Unhides the lateral pizza information bar.
	var closeX = $('<div></div>').attr('id', 'pizzaInformationClose').append(document.createTextNode('X')).click(function(){ hidePizzaExtensiveInformation(); });
	var labelName = $('<label></label>').addClass('mPIITitle').append(document.createTextNode(name)); //Creates the label that represents the pizza's name.
	var list = getPizzaIngredientsList(name); //Creates the list of the pizza's ingredients.
	var table = getPizzaNutritonFactsList(name); //Generates all the nutritional information for the pizza.
	var ratingDiv = getPizzaRating(name); //Creates the rating table.
	var priceOrder = getPizzaPrice();
	$('#pizzaInformation').empty().append(closeX).append(labelName).append(list).append(table).append(ratingDiv).append(priceOrder);
}
function hidePizzaExtensiveInformation() {
	$('#pizzaInformation').hide();
}
function confirmCancel() { /*TODO - FranciscoKloganB: Popup that asks for confirmation for cancelling the order.*/ }
function confirmSkip() { /*TODO - FranciscoKloganB: Popup that asks for confirmation for skipping the pizza order.*/}

function setGlobalPizza() {
	var index = sessionStorage.getItem('orderNumber'); //Gets the order number (in case the user is editing an order).
	var b = $('#pizzaInformation').children('.mPIITitle').text(); //Gets the name of the ordered pizza.
	sessionStorage.setItem('order' + index + 'Pizza', b); //Saves the ordered pizza for later information.
	sessionStorage.setItem('order' + index, "true"); //Indicates thar an order as been placed.
	sessionStorage.setItem('ordered', "true"); //Indicates thar an order as been placed.

	if (sessionStorage.getItem("editing") == "true") {
		sessionStorage.setItem("editing", "false");
		$(location).attr('href', 'html/table.html'); //Confirms.
	} else {
		$(location).attr('href', 'html/menus/menuDrinks.html'); //Changes the screen (menu flow).
	}
}


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
//Generates and shows the lateral pizza information bar of the chosen pizza.
$('.menuPizzaItem').click(function() {
	showPizzaExtensiveInformation($(this).children('.menuPizzaItemInfo').children('.mPIITitle').text());
});
$('.menuPizzaSugestion').click(function() {
	showPizzaExtensiveInformation($(this).children('.menuPizzaItemInfo').children('.mPIITitle').text());
});

//The click event of #pizzaInformationClose is defined in the spawning (in showPizzaExtensiveInformation()).
//The click event of #pizzaOrderButton is defined in the spawning (in getPizzaPrice()).
$('#skipButton').click(function() { // Changes the page to the drinks menu.
	$(location).attr('href', 'html/menus/menuDrinks.html');
});
$('#cancelButton').click(function() { // Changes the page to the main page.
	$(location).attr('href', 'html/table.html');
});
$('#createPizzaShorcut').click(function() { //Changes the page to the pizza customization menu.
	$(location).attr('href', 'html/menus/menuCustomizePizza.html');
});
