/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$("#menubar").menubar(); //Adding menu bar
$("#navbar").navbar(); //Adding top navigation bar

var index = sessionStorage.getItem("orderNumber"); //Gets the order number (in case the user is editing an order).
var orderedPizza = sessionStorage.getItem("order" + index + "Pizza"); //Fetches the ordered pizza chosen in the menu screen.
var orderedDrink = sessionStorage.getItem("order" + index + "Drink"); //Fetches the ordered drink chosen in the menu screen.
$("#order").append(getPizzaItem(orderedPizza)).append(getDrinkItem(orderedDrink)); //Draws the order based on what was ordered previously.


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
$("#buttonAdd").click(function() { /*TODO - FranciscoKloganB: Create a popup to ask what the user wants to edit*/ }); //.
$("#buttonConfirm").click(function() {
	var i = sessionStorage.getItem("orders");
	var index = parseInt(i) + 1;
	sessionStorage.setItem("orders", index.toString());
	console.log(sessionStorage.getItem("orders"), "new orders number");
	window.location.href = "html/table.html"; }); //Changes the page to the main page.
