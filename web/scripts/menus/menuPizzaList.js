/*------------------------------------------------------------------------------

				DATA STRUCTURES

------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$("#menubar").menubar(); //Adding menu bar
$("#navbar").navbar(); //Adding top navigation bar
$("#pizzaInformation").hide(); //Hides the lateral pizza information bar.

var titleSuggested = $("<label></label>").addClass("menuPremadePizzasSugestionsTitle").append(document.createTextNode("Suggestion tailored for you")); //Creates the title for the suggestion's menu.
var suggestions = $("<div></div>").attr("id", "menuPremadePizzasSugestions") //Creates the main sugestions division with lateral scroll.
$("#menuPremadePizzas").append(titleSuggested).append(suggestions);

for (var pizza in suggestionsList)
	$("#menuPremadePizzasSugestions").append(getSuggestedItem(pizza)); //Adds each suggested pizza to the suggestions.

var titlePremade = $("<label></label>").addClass("menuPremadeMenuTitle").append(document.createTextNode("Predesigned pizzas")); //Creates the title for the premade pizzas' menu.
$("#menuPremadePizzas").append(titlePremade);

var pizzaId = 1;
for (var pizza in pizzaList)
	$("#menuPremadePizzas").append(getPizzaItemWithButtons(pizza)); //Adds each premade pizzas to the menu.


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function showPizzaExtensiveInformation(name) {
	$("#pizzaInformation").show(); //Unhides the lateral pizza information bar.
	var closeX = $("<div></div>").attr("id", "pizzaInformationClose").append(document.createTextNode("X")).click(function(){ hidePizzaExtensiveInformation(); });
	var labelName = $("<label></label>").addClass("mPIITitle").append(document.createTextNode(name)); //Creates the label that represents the pizza"s name.
	var list = getPizzaIngredientsList(name); //Creates the list of the pizza"s ingredients.
	var table = getPizzaNutritonFactsList(name); //Generates all the nutritional information for the pizza.
	var ratingDiv = getPizzaRating(name); //Creates the rating table.
	var priceOrder = getPizzaPrice();
	$("#pizzaInformation").empty().append(closeX).append(labelName).append(list).append(table).append(ratingDiv).append(priceOrder);
}
function hidePizzaExtensiveInformation() {
	$("#pizzaInformation").hide();
}
function confirmCancel() { /*TODO - FranciscoKloganB: Popup that asks for confirmation for cancelling the order.*/ }

function setGlobalPizza() {
	var b = $("#pizzaInformation").children(".mPIITitle").text(); //Gets the name of the ordered pizza.
	localStorage.setItem("orderedPizza", b); //Saves the ordered pizza for later information.
	window.location.href = "html/menus/menuOrderConfirmation.html"; //Changes the screen (menu flow).
}


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
//Generates and shows the lateral pizza information bar of the chosen pizza.
$(".menuPizzaItem").click(function() { showPizzaExtensiveInformation($(this).children(".menuPizzaItemInfo").children(".mPIITitle").text()); });
$(".menuPizzaSugestion").click(function() { showPizzaExtensiveInformation($(this).children(".menuPizzaItemInfo").children(".mPIITitle").text()); });

//Code for the menu buttons.
//The click event of #pizzaInformationClose is defined in the spawning (in showPizzaExtensiveInformation()).
//The click event of #pizzaOrderButton is defined in the spawning (in getPizzaPrice()).
$("#skipButton").click(function() { window.location.href = "html/menus/menuDrinks.html"; }); //Changes the page to the drinks menu.
$("#cancelButton").click(function() { window.location.href = "html/table.html"; }); //Changes the page to the main page.
$("#createPizzaShorcut").click(function() { window.location.href = "html/menus/menuCustomizePizza.html"; }); //Changes the page to the pizza customization menu.
