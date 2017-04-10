/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$("#menubar").menubar();
$("#navbar").navbar();

var orderNumber = parseInt(sessionStorage.getItem("orders"));
for (var i = 0; i < orderNumber; i++) {
	console.log(i, "iteration");
/*
	var str = "order" + i.toString();
	var orderedPizza = sessionStorage.getItem(str + "Pizza") //Gets the ordered pizza.
	var orderedDrink = sessionStorage.getItem(str + "Drink") //Gets the ordered drink.
	$("#pizza").append(getPizzaItem(orderedPizza)); //Shows the user's ordered pizza.
	$("#drink").append(getDrinkItem(orderedDrink)); //Shows the user's ordered drink.
*/
	console.log("cheguei ao fim");
}

$("#timer").countdown360({
	radius: 65,                        // radius of arc
	strokeStyle: "#ecf0f1",            // the color of the stroke
	strokeWidth: 5,					   // border radius
	fillStyle: "#bdc3a7",              // the fill color
	fontColor: "#ecf0f1",              // the font color
	fontWeight: 700,                   // the font weight
	autostart: true,                   // start the countdown automatically
	seconds: 480,                      // the number of seconds to count down
	label: ["second", "minute"],       // the label to use or false if none
	smooth: true,                      // should the timer be smooth or stepping
	onComplete: function () {}
}); //Adds the timer.


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function orderEdit(index) {
	var i = parseInt(index); //Gets the order to edit.
	//Presents the client with a popup asking wich item he wants to edit.
	//For testing purposes it is assumed the client wants to edit it's pizza.
	sessionStorage.setItem("orderNumber", i.toString()); //Sets the number of the current order.
	window.location.href = "html/menus/menuPizzaList.html";
}
function orderCancel(index) {
	$("#order" + index.toString()).remove();
	var str = "order" + index.toString();
	sessionStorage.removeItem("str" + "Pizza");
	sessionStorage.removeItem("str" + "Drink");
}


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
$("#buttonEdit").click(function() { orderEdit(($(this).parent().parent().attr("id"))[5]); }); //Edits the selected order.
$("#buttonCancel").click(function() { orderCancel(0) }); //Cancells the selected order.
$("#buttonNewOrder").click(function() {
	var i = sessionStorage.getItem("orders"); //Gets the number of total orders.
	sessionStorage.setItem("orderNumber", i); //Sets the number of the current order.
	window.location.href = "html/menus/menuPizzaList.html"; }); //Changes the page to the pizza menu.
