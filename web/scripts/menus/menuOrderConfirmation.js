/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$('#menubar').menubar(); //Adding menu bar
$('#navbar').navbar(); //Adding top navigation bar

if (sessionStorage.orderNumber != undefined) {
	var key = 'order' + sessionStorage.orderNumber;
	var values = managerGetMetaValues(key);
	var orderedPizza = values[0],
	 	orderedDrink = values[1];
	$('#order').append([createPizzaInfoWithSize(orderedPizza), createDrinkItem(orderedDrink)]); //Draws the order based on what was ordered previously.
}
/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
$('button#add').click(function() { /*TODO - FranciscoKloganB: Create a popup to ask what the user wants to edit*/ });
$('button#confirm').click(function() {
	sessionStorage.orders = parseInt(sessionStorage.orders) + 1;
	window.location.href = 'html/table.html';
}); //Changes the page to the main page.
