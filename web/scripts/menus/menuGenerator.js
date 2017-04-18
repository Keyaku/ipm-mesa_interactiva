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
		suggestions.append(createPizzaSuggestion(pizza)); //Adds each suggested pizza to the passed object.
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
		obj.append(createPizzaItemWithButtons(pizza)); //Adds each premade pizzas to the passed object.
	}
}

/* Element creation */
function createPizzaName(pizza) {
	return $('<label>', { //Creates the label that represents the pizza's name.
		html: pizza['name'],
		'class': 'mPIITitle'
	});
}

function createPizzaImg(pizza) {
	return $('<img>', {
		'src': pizza['image'],
		'class': 'col-md-6 pizzaThumbnail'
	});
}

function createPizzaIngredientsList(pizza) {
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

function createPizzaNutritonFactsList(pizza) {
	var nutInfo = pizza['nutritions']; //Gets the list of nutritional facts.
	var table = $('<table>'); //Creates the table of nutritional facts.
	for (var key in nutInfo) {
		table.append($('<tr>') //Creates each table row.
		.append($('<td>', { html: key }))
		.append($('<td>', { html: nutInfo[key] }))
		);
	}
	return table;
}

function createPizzaRating(pizza) {
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

/* Whole Pizza creation */
function createPizzaInfo(pizza) {
	return  $('<div>', { //Adds the pizza's name and the ingredients list to the correct div.
		html: [createPizzaName(pizza), createPizzaIngredientsList(pizza)],
		'class': 'menuPizzaItemInfo'
	});
}

function createPizzaInfoWithSize(pizza) {
	var label = createPizzaName(pizza).append(' (' + pizza['pizzaSize'] + ')');
	var list = createPizzaIngredientsList(pizza); //Gets the pizza's ingredients.
	return  $('<div>', { //Adds the pizza's name and the ingredients list to the correct div.
		html: [label, list],
		'class': 'menuPizzaItemInfo'
	});
}

function createPizzaItem(pizza) {
	return $('<div>', {
		html: [createPizzaImg(pizza), createPizzaInfo(pizza)],
		'class': 'menuPizzaItem row'
	});
}

function createPizzaItemWithSize(pizza) {
	return $('<div>', {
		html: [createPizzaImg(pizza), createPizzaInfoWithSize(pizza)],
		'class': 'menuPizzaItem row'
	});
}

function createPizzaItemWithButtons(pizza) {
	return $('<div>', {
		html: [createPizzaImg(pizza), createPizzaInfo(pizza).append(createSizeButtons())],
		'class': 'menuPizzaItem row'
	});
}

function createPizzaSuggestion(pizza) {
	return $('<div>', {
		html: createPizzaInfo(pizza).append(createSizeButtons()),
		'class': 'menuPizzaSugestion'
	});
}

/*------------------------------------------------------------------------------
			DRINKS-RELATED CODE
------------------------------------------------------------------------------*/
function populateDrinksMenu(obj) {
	for (drink in drinksList) {
		drink = getPremadeDrink(drink);
		obj.append(createDrinkItem(drink)); //Adds each drink to the passed object.
	}
}

function createDrinkName(drink) {
	return $('<label>', { //Creates the label that represents the pizza's name.
		html: drink['name'],
		'class': 'mPDITitle'
	});
}

function createDrinkImg(drink) {
	return $('<img>', {
		'src': drink['image'],
		'class': 'menuDrinkItemImg'
	});
}

function createDrinkItem(drink) {
	return $('<div>', {
		html: [createDrinkName(drink), createDrinkImg(drink)],
		'class': 'menuDrinkItem'
	});
}

function createDrinkNutritionalInfo(drink) {
	var nutInfo = drink['nutritions']; //Gets the list of nutritional facts.
	var table = $('<table>'); //Creates the table of nutritional facts.
	for (var key in nutInfo) {
		var n = $('<td>', { html: key }); //Creates a table item for each nutritional information key.
		var v = $('<td>', { html: nutInfo[key] }); //Creates a table item for the value of each key.
		table.append($('<tr>', { html: [n, v]})); //Creates each table row.
	}
	return table;
}

function createDrinkTypes(drink) {
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
