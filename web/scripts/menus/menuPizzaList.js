/*------------------------------------------------------------------------------

				DATA STRUCTURES

------------------------------------------------------------------------------*/

//Array of premade suggested pizzas (for the JS generated menu).
var suggestionsList = { "Pepperoni Lovers" : {}, "Four Seasons" : {}, "Camponesa" : {} };

//Array of premade pizzas (for the JS generated menu).
var pizzaList = {
	"Pepperoni Lovers" : {
		"Ingredients" : ["Extra Mozzarella", "Extra pepperoni"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Rating" : "77%",
		"Img" : "img/menus/pizzaMenu/menuPizza1.png",
	},
	"Four Seasons" : {
		"Ingredients" : ["Ham", "Veggies", "Corn", "Pineapple"],
		"NutInfo" : {"Calories":"190kcal", "Protein":"8g", "Carbohydrates":"56g", "Fat":"999g"},
		"Rating" : "88%",
		"Img" : "img/menus/pizzaMenu/menuPizza2.png",
	},
	"Camponesa" : {
		"Ingredients" : ["Ham", "Onion", "Jalapeños"],
		"NutInfo" : {"Calories":"2660kcal", "Protein":"4g", "Carbohydrates":"26g", "Fat":"881g"},
		"Rating" : "12%",
		"Img" : "img/menus/pizzaMenu/menuPizza3.png",
	},
	"Camponesa2" : {
		"Ingredients" : ["Ham", "Onion", "Jalapeños"],
		"NutInfo" : {"Calories":"887kcal", "Protein":"1g", "Carbohydrates":"12g", "Fat":"125g"},
		"Rating" : "23%",
		"Img" : "img/menus/pizzaMenu/menuPizza4.png",
	},
	"Camponesa3" : {
		"Ingredients" : ["Ham", "Onion", "Jalapeños"],
		"NutInfo" : {"Calories":"556kcal", "Protein":"23g", "Carbohydrates":"44g", "Fat":"99g"},
		"Rating" : "59%",
		"Img" : "img/menus/pizzaMenu/menuPizza5.png",
	}
};


/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$('#menubar').menubar(); // Adding menu bar
$('#navbar').navbar(); // Adding top navigation bar
$("#pizzaInformation").hide(); //Hides the lateral pizza information bar.

//Creates all the elements in the sugestion division.
$("#menuPremadePizzas").append($("<label></label>").addClass("menuPremadePizzasSugestionsTitle").append(document.createTextNode("Suggestion tailored for you"))).append($("<div></div>").attr("id", "menuPremadePizzasSugestions"));; //Creates the main sugestions division with lateral scroll and it's title.
for (var pizza in suggestionsList)
	$("#menuPremadePizzasSugestions").append(getSuggestedItem(pizza));


//Creates all the elements in the premade pizzas menu.
$("#menuPremadePizzas").append($("<label></label>").addClass("menuPremadeMenuTitle").append(document.createTextNode("Predesigned pizzas")));
var pizzaId = 1;
for (var pizza in pizzaList)
	$("#menuPremadePizzas").append(getPizzaItemWithButtons(pizza));

localStorage.setItem("lastname", "Smith");


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function getPizzaInfo(name) {
	var label = $("<label></label>").addClass("mPIITitle").append(document.createTextNode(name)); //Creates the label that represents the pizza's name.
	var list = getPizzaIngredientsList(name); //Gets the pizza's ingredients.
	return  $("<div></div>").addClass("menuPizzaItemInfo").append(label).append(list); //Adds the pizza's name and the ingredients list to the correct div.
}
function getPizzaImg(name) {
	var img = $("<img>").addClass("menuPizzaItemImg"); //Creates the image.
	img.attr("src", pizzaList[name]["Img"]); //Sets the correct source.
	return img;
}

function getPizzaItem(name) {
	var img = getPizzaImg(name); //Gets the pizza's image.
	var info = getPizzaInfo(name); //Gets the pizza's information.
	return $("<div></div>").addClass("menuPizzaItem").append(img).append(info);
}
function getPizzaItemWithButtons(name) {
	var img = getPizzaImg(name); //Gets the pizza's image.
	var info = getPizzaInfo(name).append(getSizeButtons()); //Gets the pizza's information and appends the size buttons.
	return $("<div></div>").addClass("menuPizzaItem").append(img).append(info)
}
function getSuggestedItem(name) {
	var info = getPizzaInfo(pizza);
	info.append(getSizeButtons());
	return $("<div></div>").addClass("menuPizzaSugestion").append(info);
}

function getPizzaIngredientsList(name) {
	var ingredientsList = pizzaList[name]["Ingredients"]; //Gets the ingredient list.
	var list = $("<ul></ul>"); //Creates the list of ingredients.
	for (i in ingredientsList) list.append($("<li></li>").addClass("mPIIIngredient").append(document.createTextNode(ingredientsList[i]))); //Creates a list element for each ingredient.
	return list;
}
function getPizzaNutritonFactsList(name) {
	var nutInfo = pizzaList[name]["NutInfo"]; //Gets the list of nutritional facts.
	var table = $("<table></table"); //Creates the table of nutritional facts.
	for (var key in nutInfo) table.append($("<tr></tr>").append($("<td></td>").append(document.createTextNode(key))).append($("<td></td").append(document.createTextNode(nutInfo[key])))); //Creates each table row.
	return table;
}
function getPizzaRating(name) {
	var d = $("<div></div>").addClass("pizzaRatingStarts");
	for (var i = 0; i < 5; i++) d.append($("<div></div>").addClass("pizzaRatingStar"));
	d.append($("<label></label>").append(document.createTextNode(pizzaList[name]["Rating"])));
	return d;
}
function getPizzaPrice() {
	var d = $("<div></div>");
	d.append($("<label></label>").append(document.createTextNode("Medium: 12€")));
	d.append($("<button></button>").addClass("pizzaOrderButton").append(document.createTextNode("Order!")));
	return d;
}
function getSizeButtons() {
	return $("<div></div>").append($("<button></button>").addClass("mPIISizeButton").append(document.createTextNode("S"))).append($("<button></button>").addClass("mPIISizeButton").append(document.createTextNode("M"))).append($("<button></button>").addClass("mPIISizeButton").append(document.createTextNode("L")));
}

function showPizzaExtensiveInformation(name) {
	$("#pizzaInformation").show(); //Unhides the lateral pizza information bar.
	var closeX = $("<div></div>").attr("id", "pizzaInformationClose").append(document.createTextNode("X")).click(function(){ hidePizzaExtensiveInformation(); });
	var labelName = $("<label></label>").addClass("mPIITitle").append(document.createTextNode(name)); //Creates the label that represents the pizza's name.
	var list = getPizzaIngredientsList(name); //Creates the list of the pizza's ingredients.
	var table = getPizzaNutritonFactsList(name); //Generates all the nutritional information for the pizza.
	var ratingDiv = getPizzaRating(name); //Creates the rating table.
	var priceOrder = getPizzaPrice();
	$("#pizzaInformation").empty().append(closeX).append(labelName).append(list).append(table).append(ratingDiv).append(priceOrder);
}
function hidePizzaExtensiveInformation() {
	$("#pizzaInformation").hide();
}
function confirmCancel() { /*TODO - FranciscoKloganB: Popup that asks for confirmation for cancelling the order.*/ }


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
//Generates and shows the lateral pizza information bar of the chosen pizza.
$(".menuPizzaItem").click(function() { showPizzaExtensiveInformation($(this).children(".menuPizzaItemInfo").children(".mPIITitle").text()); });
$(".menuPizzaSugestion").click(function() { showPizzaExtensiveInformation($(this).children(".menuPizzaItemInfo").children(".mPIITitle").text()); });

//Code for the menu buttons.
$(".pizzaOrderButton").click(function() { ; }); //Changes the page to the drinks menu.
$("#skipButton").click(function() { console.log("skip"); window.location.href = "html/menus/menuOrderConfirmation.html"; }); //Changes the page to the drinks menu.
$("#cancelButton").click(function() { console.log("cancel"); window.location.href = "html/table.html"; }); //Changes the page to the main page.
$("#createPizzaShorcut").click(function() { console.log("create"); window.location.href = "html/menus/menuCustomizePizza.html"; }); //Changes the page to the pizza customization menu.
