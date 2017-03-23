//Array of premade pizzas (for the JS generated menu).
var pizzaList = {
	"Pepperoni Lovers" : ["Extra Mozarella", "Extra pepperoni"],
	"Four Seasons"     : ["Ham", "Veggies", "Corn", "Pineapple"],
	"Camponesa"        : ["Ham", "Onion", "Jalapenõs"],
	"Camponesa2"       : ["Ham", "Onion", "Jalapenõs"],
	"Camponesa3"       : ["Ham", "Onion", "Jalapenõs"],
};

var pizzaNutritionalInfo = {
	"Pepperoni Lovers" : {"Calories":"120", "Protein":"8", "Carbohydrates":"20", "Fat":"80"},
	"Four Seasons" : {"Calories":"120", "Protein":"8", "Carbohydrates":"20", "Fat":"80"},
	"Camponesa" : {"Calories":"120", "Protein":"8", "Carbohydrates":"20", "Fat":"80"},
	"Camponesa2" : {"Calories":"120", "Protein":"8", "Carbohydrates":"20", "Fat":"80"},
	"Camponesa3" : {"Calories":"120", "Protein":"8", "Carbohydrates":"20", "Fat":"80"},
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
	console.log("click");
});
