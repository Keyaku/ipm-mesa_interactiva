//Array of premade suggested pizzas (for the JS generated menu).
var suggestionsList = { "Pepperoni Lovers" : {}, "Four Seasons" : {}, "Camponesa" : {} };

//Array of premade pizzas (for the JS generated menu).
var pizzaList = {
	"Pepperoni Lovers" : {
		"Ingredients" : ["Extra Mozzarella", "Extra pepperoni"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Rating" : "77%"
	},
	"Four Seasons" : {
		"Ingredients" : ["Ham", "Veggies", "Corn", "Pineapple"],
		"NutInfo" : {"Calories":"190kcal", "Protein":"8g", "Carbohydrates":"56g", "Fat":"999g"},
		"Rating" : "88%"
	},
	"Camponesa" : {
		"Ingredients" : ["Ham", "Onion", "Jalapeños"],
		"NutInfo" : {"Calories":"2660kcal", "Protein":"4g", "Carbohydrates":"26g", "Fat":"881g"},
		"Rating" : "12%"
	},
	"Camponesa2" : {
		"Ingredients" : ["Ham", "Onion", "Jalapeños"],
		"NutInfo" : {"Calories":"887kcal", "Protein":"1g", "Carbohydrates":"12g", "Fat":"125g"},
		"Rating" : "23%"
	},
	"Camponesa3" : {
		"Ingredients" : ["Ham", "Onion", "Jalapeños"],
		"NutInfo" : {"Calories":"556kcal", "Protein":"23g", "Carbohydrates":"44g", "Fat":"99g"},
		"Rating" : "59%"
	}
};

//Creates all the elements in the sugestion division.
$("#menuPremadePizzas").append($("<label></label>").addClass("menuPremadePizzasSugestionsTitle").append(document.createTextNode("Suggestion tailored for you"))).append($("<div></div>").attr("id", "menuPremadePizzasSugestions"));; //Creates the main sugestions division with lateral scroll and it's title.
var pizzaId = 1;
for (var pizza in suggestionsList) {
	var label = $("<label></label>").addClass("mPIITitle").append(document.createTextNode(pizza)); //Creates the label that represents the pizza's name.
	var list = getPizzaIngredientsList(pizza); //Gets the pizza's ingredients.
	var pizzaItemInfoDiv = $("<div></div>").addClass("menuPizzaItemInfo").attr("id", pizza).append(label).append(list); //Adds the pizza's name and the ingredients list to the correct div.
	var division = $("<div></div>").addClass("menuPizzaSugestion").append(pizzaItemInfoDiv); //Appends the img division to the main pizza item div.
	$("#menuPremadePizzasSugestions").append(division);
}

//Creates all the elements in the premade pizzas menu.
$("#menuPremadePizzas").append($("<label></label>").addClass("menuPremadePizzasSugestionsTitle").append(document.createTextNode("Predesigned pizzas")));
pizzaId = 1;
for (var pizza in pizzaList) {
	var label = $("<label></label>").addClass("mPIITitle").append(document.createTextNode(pizza)); //Creates the label that represents the pizza's name.
	var list = getPizzaIngredientsList(pizza); //Gets the pizza's ingredients.
	var pizzaItemInfoDiv = $("<div></div>").addClass("menuPizzaItemInfo").attr("id", pizza).append(label).append(list); //Adds the pizza's name and the ingredients list to the correct div.
	var division = $("<div></div>").addClass("menuPizzaItem").append($("<div></div>").addClass("menuPizzaItemImg").attr("id", "mPII" + (pizzaId++).toString())).append(pizzaItemInfoDiv); //Appends the img division to the main pizza item div.
	$("#menuPremadePizzas").append(division);
}

//Generates and shows the extensive information menu of the chosen pizza.
$(".menuPizzaItem").click(function() { showPizzaExtensiveInformation($(this).children(".menuPizzaItemInfo").children(".mPIITitle").text()); });
$(".menuPizzaSugestion").click(function() { showPizzaExtensiveInformation($(this).children(".menuPizzaItemInfo").children(".mPIITitle").text()); });

//Auxiliar functions
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
function  getPizzaRating(name) { return $("<div></div").append($("<div></div>").addClass("positiveRatingImg")).append($("<label></label>").append(document.createTextNode(pizzaList[name]["Rating"]))); }
function showPizzaExtensiveInformation(name) {
	var labelName = $("<label></label>").addClass("mPIITitle").append(document.createTextNode(name)); //Creates the label that represents the pizza's name.
	var list = getPizzaIngredientsList(name); //Creates the list of the pizza's ingredients.
	var table = getPizzaNutritonFactsList(name); //Generates all the nutritional information for the pizza.
	var ratingDiv = getPizzaRating(name); //Creates the rating table.
	$("#pizzaInformation").empty().append(labelName).append(list).append(table).append(ratingDiv);
}
