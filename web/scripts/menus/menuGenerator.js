/*------------------------------------------------------------------------------
				PIZZA-RELATED CODE
------------------------------------------------------------------------------*/
function populateSuggestions(obj) {
	obj.append($('<label>', { //Creates the title for the suggestion's menu.
		html: 'Suggestions tailored for you',
		'class': 'menuPremadePizzasSugestionsTitle'
	}));
	var suggestions = $('<div>', { 'id': 'menuPremadePizzasSugestions' }); //Creates the main sugestions division with lateral scroll.
	for (var pizzaName in suggestionsList) {
		var pizza = getPremadePizza(pizzaName);
		suggestions.append(getSuggestedItem(pizza)); //Adds each suggested pizza to the passed object.
	}
	obj.append(suggestions);
}

function populatePremadeMenu(obj) {
	obj.append($('<label>', { //Creates the title for the premade pizzas' menu.
		html: 'Predesigned pizzas',
		'class': 'menuPremadeMenuTitle'
	}));
	for (var pizzaName in pizzaList) {
		var pizza = getPremadePizza(pizzaName);
		obj.append(getPizzaItemWithButtons(pizza)); //Adds each premade pizzas to the passed object.
	}
}

function getPizzaName(pizza) {
	return $('<label>', { //Creates the label that represents the pizza's name.
		html: pizza['name'],
		'class': 'mPIITitle'
	});
}

function getPizzaInfo(pizza) {
	return  $('<div>', { //Adds the pizza's name and the ingredients list to the correct div.
		html: [getPizzaName(pizza), getPizzaIngredientsList(pizza)],
		'class': 'menuPizzaItemInfo'
	});
}

function getPizzaInfoWithSize(pizza) {
	var label = getPizzaName(pizza).append(' (' + pizza['pizzaSize'] + ')');
	var list = getPizzaIngredientsList(pizza); //Gets the pizza's ingredients.
	return  $('<div>', { //Adds the pizza's name and the ingredients list to the correct div.
		html: [label, list],
		'class': 'menuPizzaItemInfo'
	});
}

function getPizzaImg(pizza) {
	return $('<img>', {
		'src': pizza['image'],
		'class': 'col-md-6 pizzaThumbnail'
	});
}

function getPizzaItem(pizza) {
	return $('<div>', {
		html: [getPizzaImg(pizza), getPizzaInfo(pizza)],
		'class': 'menuPizzaItem row'
	});
}

function getPizzaItemWithSize(pizza) {
	return $('<div>', {
		html: [getPizzaImg(pizza), getPizzaInfoWithSize(pizza)],
		'class': 'menuPizzaItem row'
	});
}

function getPizzaItemWithButtons(pizza) {
	return $('<div>', {
		html: [getPizzaImg(pizza), getPizzaInfo(pizza).append(getSizeButtons())],
		'class': 'menuPizzaItem row'
	});
}

function getSuggestedItem(name) {
	return $('<div>', {
		html: getPizzaInfo(name).append(getSizeButtons()),
		'class': 'menuPizzaSugestion'
	});
}

function getPizzaIngredientsList(pizza) {
	var ingredientsList = pizza['ingredients']; //Gets the ingredient list.
	var ul = $('<ul>', { 'class': 'mPIIIngredientList' });
	for (i in ingredientsList) {
		ul.append($('<li>', {
			html: ingredientsList[i],
			'class': 'mPIIIngredient'
		})); //Creates a list element for each ingredient.
	}
	return ul;
}

function getPizzaNutritonFactsList(pizza) {
	var nutInfo = pizza['nutritions']; //Gets the list of nutritional facts.
	var table = $('<table>'); //Creates the table of nutritional facts.
	for (var key in nutInfo) {
		table.append($('<tr></tr>')
		.append($('<td>', { html: key }))
		.append($('<td>', { html: nutInfo[key] }))
		); //Creates each table row.
	}
	return table;
}

function getPizzaRating(pizza) {
	var d = $('<div>', { 'class': 'pizzaRating' });
	for (var i = 0; i < 5; i++) {
		d.append($('<span>', { 'class': 'star' }));
	}
	d.append($('<p>', {
		html: pizza['rating'],
		'class': 'pizzaRatingValue'
	}));
	return d;
}

/*------------------------------------------------------------------------------
			DRINKS-RELATED CODE
------------------------------------------------------------------------------*/
function populateDrinksMenu(obj) {
	var drinkId = 1;
	for (drink in drinksList) {
		drink = getDrinkStruct(drink);
		obj.append(getDrinkItem(drink)); //Adds each drink to the passed object.
	}
}

function getDrinkName(drink) {
	return $('<label>', { //Creates the label that represents the pizza's name.
		html: drink['name'],
		'class': 'mPDITitle'
	});
}

function getDrinkImg(drink) {
	return $('<img>', {
		'src': drink['image'],
		'class': 'menuDrinkItemImg'
	});
}

function getDrinkItem(drink) {
	return $('<div>', {
		html: [getDrinkName(drink), getDrinkImg(drink)],
		'class': 'menuDrinkItem'
	});
}

function getDrinkNutritionalInfo(drink) {
	var nutInfo = drink['nutritions']; //Gets the list of nutritional facts.
	var table = $('<table>'); //Creates the table of nutritional facts.
	for (var key in nutInfo) {
		var n = $('<td>', { html: key }); //Creates a table item for each nutritional information key.
		var v = $('<td>', { html: nutInfo[key] }); //Creates a table item for the value of each key.
		table.append($('<tr>', { html: [n, v]})); //Creates each table row.
	}
	return table;
}

function getDrinkTypes(drink) {
	var d = $('<div>');
	for (size in drink['sizes']) {
		var label = $('<label>', { //Gets the label for each of the drink's sizes.
			html: drink['sizes'][size],
			'class': 'drinksInformationTypeLabel'
		});
		d.append(label);
	}
	return d;
}
