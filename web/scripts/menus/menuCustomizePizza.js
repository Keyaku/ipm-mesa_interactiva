var ingredientsList = {
	"Cheese"	: ["Mozzarella", "Parmesan", "ElementalCheese", "FrenchCheese", "GoatCheese", "Parmesan", "SourCream" ],
	"Meat"		: ["Ham", "Pepperoni", "Bacon", "Prosciutto", "Chicken", "Beef", "Sausage"],
	"Fish & Seafood" : ["Tuna", "Sardin"],
	"Vegetables" : ["Mushroom", "Jalapenõs", "Tomato", "Peppers", "Arugula", "Basil", "Garlic", "GreenOlive", "Olives", "Onion", "Pineapple", "Spinach", "SweetCorn" ],
};

for (var ingredientType in ingredientsList) {
	var typeLabel = $("<label></label>").addClass("pizzaIngredientTypeLabel").append(document.createTextNode(ingredientType)); //Creates the ingredient type label.
	var typeDiv = $("<div></div>").addClass("pizzaIngredientType"); //Creates the div that contains the all the type's ingredients and their images.
	for (i in ingredientsList[ingredientType]) {
		var ingredientDiv = $("<div></div>").addClass("pizzaIngredient"); //Creates a div for each ingredient.
		var ingredientLabel = $("<label></label>").addClass("pizzaIngredientName").append(document.createTextNode(ingredientsList[ingredientType][i])); //Creates the ingredient's label.

		var str = "pizza" + ingredientsList[ingredientType][i];
		ingredientDiv.append($("<div></div>").addClass("pizzaIngredientImg").attr("id", str)).append(ingredientLabel); //Appends the ingredient's image div and label to the ingredient's div.
		typeDiv.append(ingredientDiv); //Appends the individual ingredients div to the types's div.
	}
	$("#pizzaIngredients").append(typeLabel).append(typeDiv); //Appends the type's div to the main page.
}

$('#menubar').menubar();  // Adding menu bar
$('#navbar').navbar(); // Adding top navigation bar
