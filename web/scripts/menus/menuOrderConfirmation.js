/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$("#menubar").menubar(); //Adding menu bar
$("#navbar").navbar(); //Adding top navigation bar

var index = sessionStorage.getItem("orderNumber"); //Gets the order number (in case the user is editing an order).
var key = "order" + index.toString();
var values = managerGetMetaValues(key);
var orderedPizza = values[0];
var orderedDrink = values[1];
$("#order").append(getPizzaItem(orderedPizza)).append(getDrinkItem(orderedDrink)); //Draws the order based on what was ordered previously.


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
$("#buttonAdd").click(function() { /*TODO - FranciscoKloganB: Create a popup to ask what the user wants to edit*/ }); //.
$("#buttonConfirm").click(function() {
	var i = sessionStorage.getItem("orders");
	var index = parseInt(i) + 1;
	sessionStorage.setItem("orders", index.toString());
	window.location.href = "html/table.html"; }); //Changes the page to the main page.
