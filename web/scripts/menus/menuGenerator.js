/*------------------------------------------------------------------------------
				PIZZA-RELATED CODE
------------------------------------------------------------------------------*/
function populateSuggestions(obj) {
	var titleSuggested = $('<label>', { //Creates the title for the suggestion's menu.
		html: 'Suggestions tailored for you',
		'class': 'menuPremadePizzasSugestionsTitle'
	});
	obj.append(titleSuggested);
	var suggestions = $('<div>', { 'id': 'menuPremadePizzasSugestions' }); //Creates the main sugestions division with lateral scroll.
	obj.append(suggestions);
	for (var pizzaName in suggestionsList) {
		var pizza = getPremadePizzaStruct(pizzaName);
		suggestions.append(getSuggestedItem(pizza)); //Adds each suggested pizza to the passed object.
	}
}

function populatePremadeMenu(obj) {
	var titlePremade = $('<label>', { //Creates the title for the premade pizzas' menu.
		html: 'Predesigned pizzas',
		'class': 'menuPremadeMenuTitle'
	});
	obj.append(titlePremade);
	var pizzaId = 1;
	for (var pizzaName in pizzaList) {
		var pizza = getPremadePizzaStruct(pizzaName);
		obj.append(getPizzaItemWithButtons(pizza)); //Adds each premade pizzas to the passed object.
	}
}

function getPizzaName(pizzaStruct) {
	return $('<label>', { //Creates the label that represents the pizza's name.
		html: pizzaStruct['name'],
		'class': 'mPIITitle'
	});
}

function getPizzaInfo(pizzaStruct) {
	return  $('<div>', { //Adds the pizza's name and the ingredients list to the correct div.
		html: [getPizzaName(pizzaStruct), getPizzaIngredientsList(pizzaStruct)],
		'class': 'menuPizzaItemInfo'
	});
}

function getPizzaInfoWithSize(pizzaStruct) {
	var label = getPizzaName(pizzaStruct).append(' (' + pizzaStruct['pizzaSize'] + ')');
	var list = getPizzaIngredientsList(pizzaStruct); //Gets the pizza's ingredients.
	return  $('<div>', { //Adds the pizza's name and the ingredients list to the correct div.
		html: [label, list],
		'class': 'menuPizzaItemInfo'
	});
}

function getPizzaImg(pizzaStruct) {
	return $('<img>', {
		'src': pizzaStruct['image'],
		'class': 'col-md-6 pizzaThumbnail'
	});
}

function getPizzaItem(pizzaStruct) {
	return $('<div>', {
		html: [getPizzaImg(pizzaStruct), getPizzaInfo(pizzaStruct)],
		'class': 'menuPizzaItem row'
	});
}

function getPizzaItemWithSize(pizzaStruct) {
	return $('<div>', {
		html: [getPizzaImg(pizzaStruct), getPizzaInfoWithSize(pizzaStruct)],
		'class': 'menuPizzaItem row'
	});
}

function getPizzaItemWithButtons(pizzaStruct) {
	return $('<div>', {
		html: [getPizzaImg(pizzaStruct), getPizzaInfo(pizzaStruct).append(getSizeButtons())],
		'class': 'menuPizzaItem row'
	});
}

function getSuggestedItem(name) {
	return $('<div>', {
		html: getPizzaInfo(name).append(getSizeButtons()),
		'class': 'menuPizzaSugestion'
	});
}

function getPizzaIngredientsList(pizzaStruct) {
	var ingredientsList = pizzaStruct['ingredients']; //Gets the ingredient list.
	var ul = $('<ul>', { 'class': 'mPIIIngredientList' });
	for (i in ingredientsList) {
		ul.append($('<li>', {
			html: ingredientsList[i],
			'class': 'mPIIIngredient'
		})); //Creates a list element for each ingredient.
	}
	return ul;
}

function getPizzaNutritonFactsList(pizzaStruct) {
	var nutInfo = pizzaStruct['nutritions']; //Gets the list of nutritional facts.
	var table = $('<table>'); //Creates the table of nutritional facts.
	for (var key in nutInfo) {
		table.append($('<tr></tr>')
		.append($('<td>', { html: key }))
		.append($('<td>', { html: nutInfo[key] }))
		); //Creates each table row.
	}
	return table;
}

function getPizzaRating(pizzaStruct) {
	var d = $('<div>', { 'class': 'pizzaRating' });
	for (var i = 0; i < 5; i++) {
		d.append($('<span>', { 'class': 'star' }));
	}
	d.append($('<p>', {
		html: pizzaStruct['rating'],
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
		drinkStruct = getDrinkStruct(drink);
		obj.append(getDrinkItem(drinkStruct)); //Adds each drink to the passed object.
	}
}

function getDrinkName(drinkStruct) {
	return $('<label>', { //Creates the label that represents the pizza's name.
		html: drinkStruct['name'],
		'class': 'mPDITitle'
	});
}

function getDrinkImg(drinkStruct) {
	return $('<img>', {
		'src': drinkStruct['image'],
		'class': 'menuDrinkItemImg'
	});
}

function getDrinkItem(drinkStruct) {
	return $('<div>', {
		html: [getDrinkName(drinkStruct), getDrinkImg(drinkStruct)],
		'class': 'menuDrinkItem'
	});
}

function getDrinkNutritionalInfo(drinkStruct) {
	var nutInfo = drinkStruct['nutritions']; //Gets the list of nutritional facts.
	var table = $('<table>'); //Creates the table of nutritional facts.
	for (var key in nutInfo) {
		var n = $('<td>', { html: key }); //Creates a table item for each nutritional information key.
		var v = $('<td>', { html: nutInfo[key] }); //Creates a table item for the value of each key.
		table.append($('<tr>', { html: [n, v]})); //Creates each table row.
	}
	return table;
}

function getDrinkTypes(drinkStruct) {
	var d = $('<div>');
	for (size in drinkStruct['sizes']) {
		var label = $('<label>', { //Gets the label for each of the drink's sizes.
			html: drinkStruct['sizes'][size],
			'class': 'drinksInformationTypeLabel'
		});
		d.append(label);
	}
	return d;
}
