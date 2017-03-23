//Array of premade pizzas (for the JS generated menu).
var pizzaList = {
	"Pepperoni Lovers" : {
		"Ingredients" : ["Extra Mozarella", "Extra pepperoni"],
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

//Creates all the elements in the premade pizzas menu.
var pizzaId = 1;
for (var pizza in pizzaList) {
	var label = $("<label></label>").addClass("mPIITitle").append(document.createTextNode(pizza)); //Creates the label that represents the pizza's name.
	var list = $("<ul></ul>"); // Creates the list of ingredients.
	var ingredientsList = pizzaList[pizza]["Ingredients"];
	for (i in ingredientsList) {
		var ingredient = ingredientsList[i];
		list.append($("<li></li>").addClass("mPIIIngredient").append(document.createTextNode(ingredient)));
	}
	var pizzaItemInfoDiv = $("<div></div>").addClass("menuPizzaItemInfo").attr("id", pizza).append(label).append(list); //Adds the pizza's name and the ingredients list to the correct div.
	var division = $("<div></div>").addClass("menuPizzaItem").append($("<div></div>").addClass("menuPizzaItemImg").attr("id", "mPII" + (pizzaId++).toString())).append(pizzaItemInfoDiv); //Appends the img division to the main pizza item div.
	$("#menuPremadePizzas").append(division);
}

//Generates and shows the extensive information menu of the chosen pizza.
$(".menuPizzaItem").click(function() {
	var pizzaName = $(this).children(".menuPizzaItemInfo").children(".mPIITitle").text(); //Gets the pizza's name.
	var labelName = $("<label></label>").addClass("mPIITitle").append(document.createTextNode(pizzaName)); //Creates the label that represents the pizza's name.
	//Creates the list of the pizza's ingredients.
	var list = $("<ul></ul>"); // Creates the list of ingredients.
	var ingredientsList = pizzaList[pizzaName]["Ingredients"];
	for (i in ingredientsList) list.append($("<li></li>").addClass("mPIIIngredient").append(document.createTextNode(ingredientsList[i]))); //Adds each ingredient to the list.
	//Generates all the nutritional information for the pizza.
	var nutInfo = pizzaList[pizzaName]["NutInfo"];
	var table = $("<table></table");
	for (var key in nutInfo) table.append($("<tr></tr>").append($("<td></td>").append(document.createTextNode(key))).append($("<td></td").append(document.createTextNode(nutInfo[key])))); //Creates each table row.
	//Creates the rating table.
	var ratingDiv = $("<div></div").append($("<div></div>").addClass("positiveRatingImg")).append($("<label></label>").append(document.createTextNode(pizzaList[pizzaName]["Rating"])));
	$("#pizzaInformation").empty().append(labelName).append(list).append(table).append(ratingDiv);
});
