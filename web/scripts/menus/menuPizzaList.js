//Array of premade pizzas (for the JS generated menu).
var pizzaList = {
	"Pepperoni Lovers" : ["Extra Mozarella", "Extra pepperoni"],
	"Four Seasons"     : ["Ham", "Veggies", "Corn", "Pineapple"],
	"Camponesa"        : ["Ham", "Onion", "Jalapenõs"],
	"Camponesa2"       : ["Ham", "Onion", "Jalapenõs"],
	"Camponesa3"       : ["Ham", "Onion", "Jalapenõs"],
};

var pizzaNutritionalInfo = {
	"Pepperoni Lovers" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
	"Four Seasons" : {"Calories":"190kcal", "Protein":"8g", "Carbohydrates":"56g", "Fat":"999g"},
	"Camponesa" : {"Calories":"2660kcal", "Protein":"4g", "Carbohydrates":"26g", "Fat":"881g"},
	"Camponesa2" : {"Calories":"887kcal", "Protein":"1g", "Carbohydrates":"12g", "Fat":"125g"},
	"Camponesa3" : {"Calories":"556kcal", "Protein":"23g", "Carbohydrates":"44g", "Fat":"99g"},
}

var pizzaRating = {
	"Pepperoni Lovers" : "77%",
	"Four Seasons" : "99%",
	"Camponesa" : "12%",
	"Camponesa2" : "9%",
	"Camponesa3" : "37%",
}


//Creates all the elements in the premade pizzas menu.
var pizzaId = 1;
for (var pizza in pizzaList) {
	var label = $("<label></label>").addClass("mPIITitle").append(document.createTextNode(pizza)); //Creates the label that represents the pizza's name.
	var list = $("<ul></ul>"); // Creates the list of ingredients.
	for (i in pizzaList[pizza]) {
		var ingredient = pizzaList[pizza][i];
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
	var ingredients = pizzaList[pizzaName];
	for (i in ingredients) list.append($("<li></li>").addClass("mPIIIngredient").append(document.createTextNode(ingredients[i]))); //Adds each ingredient to the list.
	//Generates all the nutritional information for the pizza.
	var nutInfo = pizzaNutritionalInfo[pizzaName];
	var table = $("<table></table");
	for (var key in nutInfo) table.append($("<tr></tr>").append($("<td></td>").append(document.createTextNode(key))).append($("<td></td").append(document.createTextNode(nutInfo[key])))); //Creates each table row.
	//Creates the rating table.
	var ratingInfo = pizzaRating[pizzaName]; //Gets the pizza's rating.
	var ratingDiv = $("<div></div").append($("<div></div>").addClass("positiveRatingImg")).append($("<label></label>").append(document.createTextNode(ratingInfo)));
	$("#pizzaInformation").empty().append(labelName).append(list).append(table).append(ratingDiv);
});
