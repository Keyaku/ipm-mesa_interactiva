/*------------------------------------------------------------------------------
				SHARED CODE
------------------------------------------------------------------------------*/
$('#extensiveInfoBar').hide(); //Hides the lateral pizza information bar.
function showExtensiveInformation(objName, objSize = 0) {
	var closeX = $('<i>', {
		'class': 'fa fa-times',
		'click': function(){ hideExtensiveInformation(); },
	});
	var objTitle = createItemName(objName);

	// Pizza elements
	var pizza = getPremadePizza(objName); //Gets the pizza's structure.
	var ingredients;

	// Drink elements
	var drink = getPremadeDrink(objName);
	var drinkTypes;

	// Global
	var nutInfo;
	var ratingDiv;
	var priceOrder;

	$('#extensiveInfoBar').empty().append([closeX, objTitle]);
	if (objSize != 0) { // If objSize is given, then it's a pizza
		ingredients = createPizzaIngredientsList(pizza); //Gets the list of the pizza's ingredients.
		nutInfo = createNutritonalInfo(pizza); //Gets all the nutritional information for the pizza.
		priceOrder = createPizzaPrice(objSize); //Gets the price and order button.

		ratingDiv = createRating(pizza); //Gets the rating.

		$('#extensiveInfoBar').append([ingredients, nutInfo, ratingDiv]);
	} else {
		nutInfo = createNutritonalInfo(drink); //Gets the nutritional information for the drink.
		drinkTypes = createDrinkTypes(drink); //Gets the drink's types.
		priceOrder = createDrinkOrderButton(); //Gets the drink's order price and button.

		$('#extensiveInfoBar').append([nutInfo, drinkTypes]);
	}
	$('#extensiveInfoBar').append([priceOrder, priceOrder]).show();
}
function hideExtensiveInformation() {
	$('#extensiveInfoBar').hide();
}

/* Element creation */
function createItemName(obj) {
	if ($.type(obj) !== "string") { obj = obj['name'] }
	return $('<label>', { //Creates the label that represents the item's name.
		html: obj,
		'class': 'mPITitle'
	});
}

function createNutritonalInfo(obj) {
	var nutInfo = obj['nutritions']; //Gets the list of nutritional facts.
	var table = $('<table>'); //Creates the table of nutritional facts.
	table.addClass('nutritionalTable');
	for (var key in nutInfo) {
		table.append($('<tr>') //Creates each table row.
			.append($('<td>', { html: key }))
			.append($('<td>', { html: nutInfo[key] }))
		);
	}
	return table;
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
	var itemInfo = (obj.children('.menuPizzaItem')).children('.menuPizzaItemInfo');
	itemInfo.addClass('col-md-6');
}

/* Element creation */
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

/* Whole Pizza creation */
function createPizzaInfo(pizza) {
	return  $('<div>', { //Adds the pizza's name and the ingredients list to the correct div.
		html: [createItemName(pizza), createPizzaIngredientsList(pizza)],
		'class': 'menuPizzaItemInfo'
	});
}

function createPizzaInfoWithSize(pizza) {
	var label = createItemName(pizza).append(' (' + pizza['pizzaSize'] + ')');
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

/* Element creation */
function createDrinkImg(drink) {
	return $('<img>', {
		'src': drink['image'],
		'class': 'menuDrinkItemImg'
	});
}

function createDrinkTypes(drink) {
	var d = $('<div>');
	d.addClass('drinksInformationContainer');
	for (size in drink['sizes']) {
		var label = $('<label>', { //Gets the label for each of the drink's sizes.
			html: drink['sizes'][size],
			'class': 'drinksInformationTypeLabel'
		});
		d.append(label).append($("<br>"));
	}
	return d;
}

/* Whole Drink creation */
function createDrinkItem(drink) {
	return $('<div>', {
		html: [createItemName(drink), createDrinkImg(drink)],
		'class': 'menuDrinkItem'
	});
}
