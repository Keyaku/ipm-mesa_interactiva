/*------------------------------------------------------------------------------
				SHARED CODE
------------------------------------------------------------------------------*/
$('#extensiveInfoBar').hide(); //Hides the lateral pizza information bar.
function showExtensiveInformation(objName, objSize = 0) {
	var closeX = $('<i>', {
		'class': 'fa fa-times',
		'click': function(){ hideExtensiveInformation(); },
	});
	var objTitle = $('<label>', { //Creates the label that represents the object's name.
		html: objName,
		'class': 'mPIITitle'
	});

	// Pizza elements
	var pizza;
	var ingredients;

	// Drink elements
	var drink;
	var drinkTypes;

	// Global
	var nutInfo;
	var ratingDiv;
	var priceOrder;

	$('#extensiveInfoBar').empty().append([closeX, objTitle]);
	if (objSize != 0) { // If objSize is given, then it's a pizza
		pizza = getPremadePizza(objName); //Gets the pizza's structure.
		ingredients = createPizzaIngredientsList(pizza); //Gets the list of the pizza's ingredients.
		nutInfo = createPizzaNutritonFactsList(pizza); //Gets all the nutritional information for the pizza.
		priceOrder = createPizzaPrice(objSize); //Gets the price and order button.

		ratingDiv = createRating(pizza); //Gets the rating.

		$('#extensiveInfoBar').append([ingredients, nutInfo, ratingDiv]);
	} else {
		drink = getPremadeDrink(objName);
		nutInfo = createDrinkNutritionalInfo(drink); //Gets the nutritional information for the drink.
		drinkTypes = createDrinkTypes(drink); //Gets the drink's types.
		priceOrder = createDrinkOrderButton(); //Gets the drink's order price and button.

		$('#drinksInformation').append([nutInfo, drinkTypes])
	}
	$('#extensiveInfoBar').append([priceOrder, priceOrder]).show();
}
function hideExtensiveInformation() {
	$('#extensiveInfoBar').hide();
}

function createRating(obj) {
	var d = $('<div>', { 'class': 'rating' });
	for (var i = 0; i < 5; i++) {
		d.append($('<i>', { 'class': 'fa fa-star' }));
	}
	d.append($('<p>', {
		html: obj['rating'],
		'class': 'ratingValue'
	}));
	return d;
}

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
