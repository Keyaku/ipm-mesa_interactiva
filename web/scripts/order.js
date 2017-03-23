var pizzaList = {
	"Pepperoni Lovers" : ["Extra Mozarella", "Extra pepperoni"],
	"Four Seasons"     : ["Ham", "Veggies", "Corn", "Pineapple"],
	"Camponesa"        : ["Ham", "Onion", "Jalapenõs"],
	"Camponesa2"       : ["Ham", "Onion", "Jalapenõs"],
	"Camponesa3"       : ["Ham", "Onion", "Jalapenõs"],
};

//Cycles all the pizzas on the menu.
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

var ingredientsList = {
	"Cheese"	: ["Mozzarella", "Parmesan", "Provolone"],
	"Meat"		: ["Ham", "Pepperoni", "Bacon", "Prosciutto", "Chicken", "Beef"],
	"Fish & Seafood" : ["Tuna", "Sardin", "Shrimp"],
	"Vegetables" : ["Mushroom", "Jalapenõs", "Tomato", "Peppers"],
};

for (var ingredientType in ingredientsList) {
	var typeLabel = $("<label></label>").addClass("pizzaIngredientTypeLabel").append(document.createTextNode(ingredientType)); //Creates the ingredient type label.
	var typeDiv = $("<div></div>").addClass("pizzaIngredientType"); //Creates the div that contains the all the type's ingredients and their images.
	for (i in ingredientsList[ingredientType]) {
		var ingredientDiv = $("<div></div>").addClass("pizzaIngredient"); //Creates a div for each ingredient.
		var ingredientLabel = $("<label></label>").addClass("pizzaIngredientName").append(document.createTextNode(ingredientsList[ingredientType][i])); //Creates the ingredient's label.
		ingredientDiv.append($("<div></div>").addClass("pizzaIngredientImg")).append(ingredientLabel); //Appends the ingredient's image div and label to the ingredient's div.
		typeDiv.append(ingredientDiv); //Appends the individual ingredients div to the types's div.
	}
	$("#pizzaIngredients").append(typeLabel).append(typeDiv); //Appends the type's div to the main page.
}
