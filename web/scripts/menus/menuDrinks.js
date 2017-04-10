/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$("#navbar").navbar(); //Adding top navigation bar.
$("#menubar").menubar(); //Adding menu bar.
$("#drinksInformation").hide(); //Hides the lateral pizza information bar.
populateDrinksMenu($("#menuDrinks")); //Populates the drink's menu dynamically.


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function getDrinkOrderButton() {
	var price = $("<label></label>").addClass("drinksInformationTypeLabel").append(document.createTextNode("5€")); //Creates a label with a price for the drink's type.
	var button = $("<button></button>").attr("id", "drinkOrderButton").click(function() { setGlobalDrink(); }).append(document.createTextNode("Order")); //Creates a button for ordering.
	return $("<div></div>").append(price).append(button);
}

function showDrinkExtensiveInformation(name) {
	$("#drinksInformation").empty().show(); //Shows the lateral pizza information bar.
	var closeX = $("<div></div>").attr("id", "drinksInformationClose").append(document.createTextNode("X")).click(function(){ hidePizzaExtensiveInformation(); });
	var label = $("<label></label>").addClass("mPDITitle").append(document.createTextNode(name)); //Creates the label for the drink's name.
	var nutInfo = getDrinkNutritionalInfo(name); //Gets the nutritional information for the drink.
	var drinkTypes = getDrinkTypes(name); //Gets the drink's types.
	var drinkOrder = getDrinkOrderButton(); //Gets the drink's order price and button.
	$("#drinksInformation").append(closeX).append(label).append(nutInfo).append(drinkTypes).append(drinkOrder);
}
function hidePizzaExtensiveInformation() {
	$("#drinksInformation").hide();
}
function confirmCancel() { /*TODO - FranciscoKloganB: Popup that asks for confirmation for cancelling the order.*/ }

function setGlobalDrink() {
	var index = sessionStorage.getItem("orderNumber"); //Gets the order number (in case the user is editing an order).
	var b = $("#drinksInformation").children(".mPDITitle").text(); //Gets the name of the ordered pizza.
	sessionStorage.setItem("order" + index + "Drink", b); //Saves the ordered pizza for later information.
	sessionStorage.setItem('order' + index, "true"); //Indicates thar an order as been placed.
	window.location.href = "html/menus/menuOrderConfirmation.html"; //Changes the screen (menu flow).
}


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
//Generates and shows the lateral drink information.
$(".menuDrinkItem").click(function() { showDrinkExtensiveInformation($(this).children(".mPDITitle").text()); });

//The click event of #drinksInformationClose is defined in the spawning (in showDrinkExtensiveInformation()).
//The click event of #drinkOrderButton is defined in the spawning (in getDrinkOrderButton()).
$("#cancelButton").click(function() { window.location.href = "html/table.html"; }); //Changes the page to the main page.
