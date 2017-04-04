/*------------------------------------------------------------------------------

				DATA STRUCTURES

------------------------------------------------------------------------------*/
//Array of premade pizzas (for the JS generated menu).
var drinksList = {
	"Water" : ["Bottle (25cl)", "Bottle (50cl)", "Bottle (1L)"],
	"Sparkling Water" : ["Bottle (25cl)", "Bottle (50cl)", "Bottle (1L)"],
	"Fresh Juice" : ["Orange Juice (25cl)", "Blueberry Juice (50cl)", "Lemonade (1L)", "Tutti Frutti (50cl)"],

	"Coca-Cola Original" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
	"Coca-Cola Zero" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
	"Coca-Cola" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],

	"Sumol (Orange)" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
	"Sumol (Pineapple)" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
	"Sumol (Passion Fruit)" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
	"Sumol (Mango)" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],

	"Lipton Ice Tea (Orange)" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
	"Lipton Ice Tea (Pineapple)" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
	"Lipton Ice Tea (Passion Fruit)" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
	"Lipton Ice Tea (Mango)" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
};


/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$('#navbar').navbar();
$("#drinksInformation").hide(); //Hides the lateral pizza information bar.

//Creates all the elements in the premade pizzas menu.
var drinkId = 1;
for (drink in drinksList) { $("#menuDrinks").append(getDrinkItem(drink)); }


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function getDrinkImg(name) { return $("<div></div>").addClass("menuDrinkItemImg").attr("id", "mDII" + (drinkId++).toString()); }
function getDrinkTypeImg(name, index) { return $("<div></div>").addClass("drinksInformationTypeImg").attr("id", "mDII" + (drinkId++).toString() + (index).toString()); }
function getDrinkItem(name) { return $("<div></div>").addClass("menuDrinkItem").append(getDrinkImg(name)).append($("<label></label>").addClass("mPDITitle").append(document.createTextNode(name))); }
function getDrinkTypes(name) {
	var d = $("<div></div");
	for (i in drinksList[name]) d.append($("<div></div>").addClass().append(getDrinkTypeImg(name, i)).append($("<label></label>").addClass("drinksInformationTypeLabel").append(document.createTextNode(drinksList[name][i]))));
	return d;
}
function showDrinkExtensiveInformation(name){
	var closeX = $("<div></div>").attr("id", "drinksInformationClose").append(document.createTextNode("X")).click(function(){ hideDrinkExtensiveInformation(); });
	$("#drinksInformation").show().empty().append(closeX).append(getDrinkTypes(name)); //Unhides, clears and appends the new information to the lateral pizza information bar.
}
function hideDrinkExtensiveInformation() { $("#drinksInformation").hide(); }
function confirmCancel() { /*TODO - FranciscoKloganB: Popup that asks for confirmation for cancelling the order.*/ }

/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
//Generates and shows the lateral pizza information bar of the chosen pizza.
$(".menuDrinkItem").click(function() { showDrinkExtensiveInformation($(this).children(".mPDITitle").text()); });
