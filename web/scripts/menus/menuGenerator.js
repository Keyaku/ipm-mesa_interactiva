/*------------------------------------------------------------------------------
				PIZZA-RELATED CODE
------------------------------------------------------------------------------*/
function populateSuggestions(obj) {
	var titleSuggested = $('<label></label>').addClass('menuPremadePizzasSugestionsTitle').append(document.createTextNode('Suggestions tailored for you')); //Creates the title for the suggestion's menu.
	obj.append(titleSuggested);
	var suggestions = $('<div></div>').attr('id', 'menuPremadePizzasSugestions') //Creates the main sugestions division with lateral scroll.
	obj.append(suggestions);
	for (var pizza in suggestionsList) {
		var pizzaStruct = getPremadePizzaStruct(pizza);
		suggestions.append(getSuggestedItem(pizzaStruct)); //Adds each suggested pizza to the passed object.
	}
}
function populatePremadeMenu(obj) {
	var titlePremade = $('<label></label>').addClass('menuPremadeMenuTitle').append(document.createTextNode('Predesigned pizzas')); //Creates the title for the premade pizzas' menu.
	obj.append(titlePremade);
	var pizzaId = 1;
	for (var pizza in pizzaList) {
		var pizzaStruct = getPremadePizzaStruct(pizza);
		obj.append(getPizzaItemWithButtons(pizzaStruct)); //Adds each premade pizzas to the passed object.
	}
}

function getPizzaInfo(pizzaStruct) {
	var pizzaName = pizzaStruct['pizzaName'];
	var label = $('<label></label>').addClass('mPIITitle').append(document.createTextNode(pizzaName)); //Creates the label that represents the pizza's name.
	var list = getPizzaIngredientsList(pizzaStruct); //Gets the pizza's ingredients.
	return  $('<div></div>').addClass('menuPizzaItemInfo').append(label).append(list); //Adds the pizza's name and the ingredients list to the correct div.
}
function getPizzaInfoWithSize(pizzaStruct) {
	var pizzaName = pizzaStruct['pizzaName'];
	var pizzaSize = pizzaStruct['pizzaSize'];
	var labelText = pizzaName + ' (' + pizzaSize + ')';
	var label = $('<label></label>').addClass('mPIITitle').append(document.createTextNode(labelText)); //Creates the label that represents the pizza's name.
	var list = getPizzaIngredientsList(pizzaStruct); //Gets the pizza's ingredients.
	return  $('<div></div>').addClass('menuPizzaItemInfo').append(label).append(list); //Adds the pizza's name and the ingredients list to the correct div.
}
function getPizzaImg(pizzaStruct) {
	var imgPath = pizzaStruct["Img"];
	var img = $('<img>').addClass('col-md-6').addClass('pizzaThumbnail'); //Creates the image.
	img.attr('src', imgPath); //Sets the correct source.
	return img;
}

function getPizzaItem(pizzaStruct) {
	var img = getPizzaImg(pizzaStruct); //Gets the pizza's image.
	var info = getPizzaInfo(pizzaStruct); //Gets the pizza's information.
	return $('<div></div>').addClass('menuPizzaItem').append(img).append(info).addClass('row');
}
function getPizzaItemWithSize(pizzaStruct) {
	var img = getPizzaImg(pizzaStruct); //Gets the pizza's image.
	var info = getPizzaInfoWithSize(pizzaStruct); //Gets the pizza's information.
	return $('<div></div>').addClass('menuPizzaItem').append(img).append(info).addClass('row');
}

function getPizzaItemWithButtons(pizzaStruct) {
	var img = getPizzaImg(pizzaStruct); //Gets the pizza's image.
	var info = getPizzaInfo(pizzaStruct).append(getSizeButtons()); //Gets the pizza's information and appends the size buttons.
	return $('<div></div>').addClass('menuPizzaItem').append(img).append(info).addClass('row');
}

function getSuggestedItem(name) {
	var info = getPizzaInfo(name);
	info.append(getSizeButtons());
	return $('<div></div>').addClass('menuPizzaSugestion').append(info);
}

function getPizzaIngredientsList(pizzaStruct) {
	var ingredientsList = pizzaStruct['Ingredients']; //Gets the ingredient list.
	var list = $('<ul></ul>').addClass('mPIIIngredientList'); //Creates the list of ingredients.
	for (i in ingredientsList) {
		list.append($('<li></li>').addClass('mPIIIngredient').append(document.createTextNode(ingredientsList[i]))); //Creates a list element for each ingredient.
	}
	return list;
}

function getPizzaNutritonFactsList(pizzaStruct) {
	var nutInfo = pizzaStruct['NutInfo']; //Gets the list of nutritional facts.
	var table = $('<table></table'); //Creates the table of nutritional facts.
	for (var key in nutInfo) {
		table.append($('<tr></tr>').append($('<td></td>').append(document.createTextNode(key))).append($('<td></td').append(document.createTextNode(nutInfo[key])))); //Creates each table row.
	}
	return table;
}

function getPizzaRating(pizzaStruct) {
	var d = $('<div></div>').addClass('pizzaRating');
	for (var i = 0; i < 5; i++) {
		d.append($('<span></span>').addClass('star'));
	}
	d.append($('<p></p>').addClass('pizzaRatingValue').append(document.createTextNode(pizzaStruct['Rating'])));
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
/*
function getDrinkImg(drinkStruct) {
	var img = $('<img>').addClass('menuDrinkItemImg'); //Creates the image.
	img.attr('src', drinkStruct['Img']); //Sets the correct source.
	return img;
}
*/
function getDrinkItem(drinkStruct) {
	var drinkName = drinkStruct['drinkName'];
	var label = $('<label></label>').addClass('mPDITitle').append(document.createTextNode(drinkName)); //Creates the label for each drink;
	//var img = getDrinkImg(name); //Gets the drink's image.
	//return $('<div></div>').addClass('menuDrinkItem').append(img).append(label);
	return $('<div></div>').addClass('menuDrinkItem').append(label);
}
function getDrinkNutritionalInfo(drinkStruct) {
	var nutInfo = drinkStruct['NutInfo']; //Gets the list of nutritional facts.
	var table = $('<table></table>'); //Creates the table of nutritional facts.
	for (var key in nutInfo) {
		var n = $('<td></td>').append(document.createTextNode(key)); //Creates a table item for each nutritional information key.
		var v = $('<td></td').append(document.createTextNode(nutInfo[key])); //Creates a table item for the value of each key.
		var tr = $('<tr></tr>').append(n).append(v); //Creates the table row.
		table.append(tr); //Creates each table row.
	}
	return table;
}
function getDrinkTypes(drinkStruct) {
	var d = $('<div></div>');
	for (size in drinkStruct['Sizes']) {
		var label = $('<label></label>').addClass('drinksInformationTypeLabel').append(document.createTextNode(drinkStruct['Sizes'][size])); //Gets the label for each of the drink's sizes.
		d.append(label);
	}
	return d;
}
