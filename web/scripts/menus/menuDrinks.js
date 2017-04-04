/*------------------------------------------------------------------------------

				DATA STRUCTURES

------------------------------------------------------------------------------*/
//Array of premade drinks (for the JS generated menu).
var drinksList = {
	"Water" : {
		"Sizes" : ["Bottle (25cl)", "Bottle (50cl)", "Bottle (1L)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "img/menus/pizzaMenu/menuPizza1.png",
	},
	"Sparkling Water" : {
		"Sizes" : ["Bottle (25cl)", "Bottle (50cl)", "Bottle (1L)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "img/menus/pizzaMenu/menuPizza2.png",
	},
	"Fresj Juice" : {
		"Sizes" : ["Orange Juice (25cl)", "Blueberry Juice (50cl)", "Lemonade (1L)", "Tutti Frutti (50cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "img/menus/pizzaMenu/menuPizza3.png",
	},

	"Coca-Cola Original" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "img/menus/pizzaMenu/menuPizza4.png",
	},
	"Coca-Cola Zero" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "img/menus/pizzaMenu/menuPizza5.png",
	},

	"Sumol (Orange)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "img/menus/pizzaMenu/menuPizza5.png",
	},
	"Sumol (Pineapple)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "img/menus/pizzaMenu/menuPizza5.png",
	},
	"Sumol (Passion Fruit)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "img/menus/pizzaMenu/menuPizza5.png",
	},
	"Sumol (Mango)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "img/menus/pizzaMenu/menuPizza5.png",
	},

	"Lipton Ice Tea (Orange)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "img/menus/pizzaMenu/menuPizza5.png",
	},
	"Lipton Ice Tea (Pineapple)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "img/menus/pizzaMenu/menuPizza5.png",
	},
	"Lipton Ice Tea (Passion Fruit)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "img/menus/pizzaMenu/menuPizza5.png",
	},
	"Lipton Ice Tea (Mango)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "img/menus/pizzaMenu/menuPizza5.png",
	},
};


/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$('#navbar').navbar(); // Adding top navigation bar.
$('#menubar').menubar(); // Adding menu bar.
$("#drinksInformation").hide(); //Hides the lateral pizza information bar.

//Creates all the elements in the premade pizzas menu.
var drinkId = 1;
for (drink in drinksList)
	$("#menuDrinks").append(getDrinkItem(drink));


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function getDrinkImg(name) {
	var img = $("<img>").addClass("menuDrinkItemImg"); //Creates the image.
	img.attr("src", drinksList[name]["Img"]); //Sets the correct source.
	return img;
}
function getDrinkItem(name) {
	var label = $("<label></label>").addClass("mPDITitle").append(document.createTextNode(name)); //Creates the label for each drink;
	var img = getDrinkImg(name); //Gets the drink's image.
	return $("<div></div>").addClass("menuDrinkItem").append(img).append(label);
}
function getDrinkNutritionalInfo (name) {
	var nutInfo = drinksList[name]["NutInfo"]; //Gets the list of nutritional facts.
	var table = $("<table></table"); //Creates the table of nutritional facts.
	for (var key in nutInfo) {
		var n = $("<td></td>").append(document.createTextNode(key)); //Creates a table item for each nutritional information key.
		var v = $("<td></td").append(document.createTextNode(nutInfo[key])); //Creates a table item for the value of each key.
		var tr = $("<tr></tr>").append(n).append(v); //Creates the table row.
		table.append(tr); //Creates each table row.
	}
	return table;
}
function getDrinkTypes(name) {
	var d = $("<div></div>");
	for (size in drinksList[name]["Sizes"]) {
		var label = $("<label></label>").addClass("drinksInformationTypeLabel").append(document.createTextNode(drinksList[name]["Sizes"][size])); //Gets the label for each of the drink's sizes.
		d.append(label);
	}
	return d;
}
function getDrinkOrderButton() {
	var price = $("<label></label>").addClass("drinksInformationTypeLabel").append(document.createTextNode("5€")); //Creates a label with a price for the drink's type.
	var button = $("<button></button>").addClass("drinksInformationTypeLabel").append(document.createTextNode("Order")); //Creates a button for ordering.
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
function hidePizzaExtensiveInformation() { $("#drinksInformation").hide(); }
function confirmCancel() { /*TODO - FranciscoKloganB: Popup that asks for confirmation for cancelling the order.*/ }

/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
//Generates and shows the lateral pizza information bar of the chosen pizza.
$(".menuDrinkItem").click(function() { showDrinkExtensiveInformation($(this).children(".mPDITitle").text()); });
