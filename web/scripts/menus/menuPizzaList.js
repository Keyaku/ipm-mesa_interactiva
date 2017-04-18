/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$('#menubar').menubar(); //Adding menu bar
$('#navbar').navbar(); //Adding top navigation bar
populateSuggestions($('#suggestions')); //Populates the suggested pizza's menu dynamically.
populatePremadeMenu($('#premade')); //Populates the premade pizza's menu dynamically.


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function createPizzaPrice(pizzaSize) {
	var prices = {
		'Small'  : 8,
		'Medium' : 10,
		'Large'  : 12,
	}
	var pizzaPrice = (pizzaSize in prices) ? prices[pizzaSize] : 0;
	var d = $('<div>')
	.append($('<label>', { html: pizzaSize + ' : ' + pizzaPrice + '€' }))
	.append($('<button>', {
		html: 'Order!',
		'click': function() { setGlobalPizza(pizzaSize); },
		'id': 'pizzaOrderButton',
	}));
	return d;
}
function createSizeButtons() {
	var d = $('<div>', { 'class': 'buttonContainer' });
	['Small', 'Medium', 'Large'].forEach(function(size) {
		d.append($('<button>', {
			html: size[0], // Get first character from size
			'class': 'mPIISizeButton',
			'id': size
		}));
	});
	return d;
}

function confirmCancel() { /*TODO - FranciscoKloganB: Popup that asks for confirmation for cancelling the order.*/ }
function confirmSkip() { /*TODO - FranciscoKloganB: Popup that asks for confirmation for skipping the pizza order.*/}

function setGlobalPizza(pizzaSize) {
	var pizzaName = $('#pizzaInformation').children('.mPITitle').text(); //Gets the name of the ordered pizza.
	if (sessionStorage.getItem("editing") == "true") {
		sessionStorage.setItem("editing", "false"); //Sets the editing flag to false.
		managerEditPizza(pizzaName, pizzaSize); //Adds the pizza to the system.
		$(location).attr('href', 'html/table.html'); //Confirms.
	}
	else {
		managerAddNewPizza(pizzaName, pizzaSize); //Adds the pizza to the system.
		$(location).attr('href', 'html/menus/menuDrinks.html'); //Changes the screen (menu flow).
	}
}


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
$('.mPIISizeButton').click(function(){ //Generates and shows the lateral pizza information bar of the chosen pizza.
	var pizzaName = ($(this).parent().parent()).children('.mPITitle').text(); //Gets the chosen pizza's name.
	var pizzaSize = $(this).attr("id"); //Gets the chosen pizza's size.
	showExtensiveInformation(pizzaName, pizzaSize); //Shows the lateral pizza information bar.
});
//The click event of #pizzaInformationClose is defined in the spawning (in showExtensiveInformation()).
//The click event of #pizzaOrderButton is defined in the spawning (in createPizzaPrice()).
$('#skipButton').click(function() { //Changes the page to the drinks menu.
	$(location).attr('href', 'html/menus/menuDrinks.html');
});
$('#cancelButton').click(function() { //Changes the page to the main page.
	$(location).attr('href', 'html/table.html');
});
$('#customizationShortcut').click(function() { //Changes the page to the pizza customization menu.
	$(location).attr('href', 'html/menus/menuCustomizePizza.html');
});
