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
function getPizzaPrice(pizzaSize) {
	var pizzaPrice = '0€';
	switch(pizzaSize) {
		case 'Small':
			pizzaPrice = '8€';
			break;
		case 'Medium':
			pizzaPrice = '10€';
			break;
		case 'Large':
			pizzaPrice = '12€';
			break;
	}
	var d = $('<div></div>');
	d.append($('<label></label>').append(document.createTextNode(pizzaSize + ' : ' + pizzaPrice)));
	d.append($('<button></button>').attr('id', 'pizzaOrderButton').click(function() {
		setGlobalPizza(pizzaSize);
	}).append(document.createTextNode('Order!')));
	return d;
}
function getSizeButtons() {
	return $('<div></div>').addClass('buttonContainer')
		.append($('<button></button>').addClass('mPIISizeButton').attr("id", "Small").append(document.createTextNode('S')))
		.append($('<button></button>').addClass('mPIISizeButton').attr("id", "Medium").append(document.createTextNode('M')))
		.append($('<button></button>').addClass('mPIISizeButton').attr("id", "Large").append(document.createTextNode('L')));
}

function showPizzaExtensiveInformation(pizzaName, pizzaSize) {
	$('#pizzaInformation').show(); //Unhides the lateral pizza information bar.
	var closeX = $('<div></div>').attr('id', 'pizzaInformationClose').append(document.createTextNode('X')).click(function(){ hidePizzaExtensiveInformation(); });
	var labelName = $('<label></label>').addClass('mPIITitle').append(document.createTextNode(pizzaName)); //Creates the label that represents the pizza's name.
	var pizzaStruct = getPremadePizzaStruct(pizzaName);
	var list = getPizzaIngredientsList(pizzaStruct); //Creates the list of the pizza's ingredients.
	var table = getPizzaNutritonFactsList(pizzaStruct); //Generates all the nutritional information for the pizza.
	var ratingDiv = getPizzaRating(pizzaStruct); //Creates the rating table.
	var priceOrder = getPizzaPrice(pizzaSize);
	$('#pizzaInformation').empty().append(closeX).append(labelName).append(list).append(table).append(ratingDiv).append(priceOrder);
}
function hidePizzaExtensiveInformation() {
	$('#pizzaInformation').hide();
}

function confirmCancel() { /*TODO - FranciscoKloganB: Popup that asks for confirmation for cancelling the order.*/ }
function confirmSkip() { /*TODO - FranciscoKloganB: Popup that asks for confirmation for skipping the pizza order.*/}

function setGlobalPizza(pizzaSize) {
	var pizzaName = $('#pizzaInformation').children('.mPIITitle').text(); //Gets the name of the ordered pizza.
	if (sessionStorage.getItem("editing") == "true") {
		sessionStorage.setItem("editing", "false");
		managerEditPizza(pizzaName, pizzaSize);
		$(location).attr('href', 'html/table.html'); //Confirms.
	}
	else {
		managerAddNewPizza(pizzaName, pizzaSize);
		$(location).attr('href', 'html/menus/menuDrinks.html'); //Changes the screen (menu flow).
	}
}


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
$('.mPIISizeButton').click(function(){ //Generates and shows the lateral pizza information bar of the chosen pizza.
	var pizzaName = ($(this).parent().parent()).children('.mPIITitle').text();
	var pizzaSize = $(this).attr("id");
	showPizzaExtensiveInformation(pizzaName, pizzaSize);
});
//The click event of #pizzaInformationClose is defined in the spawning (in showPizzaExtensiveInformation()).
//The click event of #pizzaOrderButton is defined in the spawning (in getPizzaPrice()).
$('#skipButton').click(function() { //Changes the page to the drinks menu.
	$(location).attr('href', 'html/menus/menuDrinks.html');
});
$('#cancelButton').click(function() { //Changes the page to the main page.
	$(location).attr('href', 'html/table.html');
});
$('#customizationShortcut').click(function() { //Changes the page to the pizza customization menu.
	$(location).attr('href', 'html/menus/menuCustomizePizza.html');
});
