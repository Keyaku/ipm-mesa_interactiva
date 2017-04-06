/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$("#menubar").menubar(); //Adding menu bar
$("#navbar").navbar(); //Adding top navigation bar

var orderedPizza = sessionStorage.getItem("orderedPizza"); //Fetches the ordered pizza chosen in the menu screen.
var orderedDrink = sessionStorage.getItem("orderedDrink"); //Fetches the ordered drink chosen in the menu screen.
$("#order").append(getPizzaItem(orderedPizza)).append(getDrinkItem(orderedDrink)); //Draws the order based on what was ordered previously.


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
$("#buttonAdd").click(function() { /*TODO - FranciscoKloganB: Create a popup to ask what the user wants to edit*/ }); //.
$("#buttonConfirm").click(function() { window.location.href = "html/table.html"; }); //Changes the page to the main page.
