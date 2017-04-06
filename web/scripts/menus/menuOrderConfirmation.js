/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$("#menubar").menubar(); //Adding menu bar
$("#navbar").navbar(); //Adding top navigation bar

var orderedPizza = localStorage.getItem("orderedPizza"); //Fetches the ordered pizza chosen in the menu screen.
var orderedDrink = localStorage.getItem("orderedDrink"); //Fetches the ordered drink chosen in the menu screen.
$("#order").append(getPizzaItem(orderedPizza)).append(getDrinkItem(orderedDrink)); //Draws the order based on what was ordered previously.

console.log(orderedPizza, orderedDrink);

/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
$("#buttonConfirm").click(function() { window.location.href = "html/table.html"; });
