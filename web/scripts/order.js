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
	var str = pizzasArray[i][0]; //Gets the pizza's name.

	//Creates a div for each pizza.
	var division = $("<div></div>").addClass("menuPizzaItem");
	$("#menuPremadePizzas").append(division);

	//var pizzaItemImgDiv = $("<div></div>").addClass("menuPizzaItemImg");


	//Creates a div for the pizza's image.
	var pizzaItemImgDiv = document.createElement("div");
	pizzaItemImgDiv.className += "menuPizzaItemImg";
	pizzaItemImgDiv.id = "mPII" + (i + 1).toString();
	division.append(pizzaItemImgDiv); //Appends the img division to the main pizza item div.

	//Creates a div for the pizza's name and ingredients list.
	var pizzaItemInfoDiv = document.createElement("div");
	pizzaItemInfoDiv.className += "menuPizzaItemInfo";
	pizzaItemInfoDiv.id = str;
	division.append(pizzaItemInfoDiv);

	//Creates the label that represents the pizza's name.
	var label = document.createElement("label");
	label.className += "mPIITitle";
	label.appendChild(document.createTextNode(str));
	//Creates the list of ingredients.
	var list = document.createElement("ul");
	//For every ingredient, adds a list element;
	for (var j = 1; j < pizzasArray[i].length; j++) {
		var item = document.createElement("li");
		item.className += ("mPIIIngredient");
		item.appendChild(document.createTextNode(pizzasArray[i][j]));
		list.appendChild(item);
	}
	pizzaItemInfoDiv.appendChild(label).appendChild(list); //Adds the pizza's name and the ingredients list to the correct div.
}
