var pizzasArray = [];
var pizza1 = ["Pepperoni Lovers", "Extra Mozarella", "Extra pepperoni"];
var pizza2 = ["Four Seasons", "Ham", "Veggies", "Corn", "Pineapple"];
var pizza3 = ["Camponesa", "Ham", "Onion", "Jalapenõs"];
var pizza4 = ["Camponesa2", "Ham", "Onion", "Jalapenõs"];
var pizza5 = ["Camponesa3", "Ham", "Onion", "Jalapenõs"];

pizzasArray.push(pizza1);
pizzasArray.push(pizza2);
pizzasArray.push(pizza3);
pizzasArray.push(pizza4);
pizzasArray.push(pizza5);

//Cycles all the pizzas on the menu.
for (var i = 0; i < pizzasArray.length; i++) {
	var label = $("<label></label>").addClass("mPIITitle").append(document.createTextNode(pizzasArray[i][0])); //Creates the label that represents the pizza's name.
	var list = $("<ul></ul>"); //Creates the list of ingredients.
	for (var j = 1; j < pizzasArray[i].length; j++) list.append($("<li></li>").addClass("mPIIIngredient").append(document.createTextNode(pizzasArray[i][j])));
	var pizzaItemInfoDiv = $("<div></div>").addClass("menuPizzaItemInfo").attr("id", pizzasArray[i][0]).append(label).append(list); //Adds the pizza's name and the ingredients list to the correct div.
	var division = $("<div></div>").addClass("menuPizzaItem").append($("<div></div>").addClass("menuPizzaItemImg").attr("id", "mPII" + (i + 1).toString())).append(pizzaItemInfoDiv); //Appends the img division to the main pizza item div.
	$("#menuPremadePizzas").append(division);
}
