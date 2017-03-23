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
