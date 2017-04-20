/*------------------------------------------------------------------------------

				DATA STRUCTURES

------------------------------------------------------------------------------*/
const PATH_INGREDIENTS = 'img/menus/customizeMenu/pizzaIngredients/'; // Don't forget to consider our <base> rule.
const LIST_INGREDIENTS = {
	'Cheese'	 : [ 'Mozzarella', 'Parmesan', 'Elemental Cheese', 'French Cheese', 'Goat Cheese', 'Parmesan', 'SourCream' ],
	'Meat'		 : [ 'Ham', 'Pepperoni', 'Bacon', 'Prosciutto', 'Chicken', 'Beef', 'Sausage' ],
	'Fish'       : [ 'Tuna', 'Sardin'],
	'Vegetables' : [ 'Mushroom', 'Jalapeños', 'Tomato', 'Peppers', 'Arugula', 'Basil', 'Garlic', 'Green Olive', 'Olives', 'Onion', 'Pineapple', 'Spinach', 'Sweet Corn' ],
};


/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$('#menubar').menubar();		// Adding menu bar
$('#navbar').navbar({selected: 'Pizza'}); 			// Adding top navigation bar

var pizzaMaker = {'name' : '', 'pizzaSize' : '', 'Dough' : '', 'ingredients' : [] };

for (var ingredientType in LIST_INGREDIENTS) {
	var typeLabel = $('<label>', { // Creates the ingredient type label.
		html: ingredientType,
		'class': 'pizzaIngredientTypeLabel'
	});
	var typeDiv = $('<div>', { 'class': 'pizzaIngredientType' }); // Creates the div that contains the all the type's ingredients and their images.
	typeDiv.attr('id', ingredientType.toLowerCase()); // Gives each of the created division an attribute id.
	for (i in LIST_INGREDIENTS[ingredientType]) {
		var ingredientName = LIST_INGREDIENTS[ingredientType][i];
		var ingredientDiv = $('<div>', { // Creates a div for each ingredient.
			'class': 'pizzaIngredient',
			'id': ingredientName
		});
		var ingredientLabel = $('<label>', { // Creates the ingredient's label.
			html: ingredientName,
			'class': 'pizzaIngredientName'
		});

		ingredientName = ingredientName.toLowerCase().replace(/\s/g,'')
		ingredientDiv.append($('<div>', { // Attaches the ingredient's image div and label to the ingredient's div.
			'css': {'background-image' : 'url("' + PATH_INGREDIENTS + ingredientName + '.png")'},
			'class': 'pizzaIngredientImg'
		})).append(ingredientLabel);
		typeDiv.append(ingredientDiv); // Appends the individual ingredients div to the types's div.
	}
	$('#pizzaIngredients').append([typeLabel, typeDiv]); // Appends the type's div to the main page.
}


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function makePizza(field, value) {
	pizzaMaker[field] = value;
}

function pizzaSetSize(size) {
	makePizza('pizzaSize', size);
}
function pizzaSetDough(dough) {
	makePizza('Dough', dough);
}
function pizzaCheckIngredient(ing) {
	for (var ingr in pizzaMaker['ingredients']) {
		if (pizzaMaker['ingredients'][ingr] == ing) {
			console.log("sim");
			return true;
		}
	}
	console.log("nao");
	return false;
}
function pizzaAddIngredient(ing) {
	(pizzaMaker['ingredients']).push(ing);
}
function pizzaRemoveIngredient(ing) {
	var arr = pizzaMaker['ingredients'];
	arr.splice($.inArray(ing, arr),1);
}

function setGlobalPizza() {
	var index = sessionStorage.orderNumber; //Gets the order number (in case the user is editing an order).
	pizzaMaker['name'] = 'Custom #' + index;
	pizzaMaker['nutritions'] = {'Calories':'556kcal', 'Protein':'23g', 'Carbohydrates':'44g', 'Fat':'99g'};
	pizzaMaker['rating'] = '88%';
	pizzaMaker['image'] = 'img/menus/pizzaMenu/menuPizza5.png';
	if (sessionStorage.editing == 'true') {
		sessionStorageediting = false;
		managerEditCustomizedPizza(pizzaMaker);
		$(location).attr('href', 'html/table.html'); //Confirms.
	}
	else {
		managerAddNewCustomizedPizza(pizzaMaker);
		$(location).attr('href', 'html/menus/menuDrinks.html'); //Changes the screen (menu flow).
	}
}


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
//The click event of .pizzaIngredient is defined in the spawning.
$('.pizzaSizes').click(function() {
	$('.pizzaSizes').removeClass('active');
	$(this).toggleClass('active');
	pizzaSetSize($(this).attr('id'));
});
$('.pizzaDough label').click(function() {
	$('.pizzaDough label').removeClass('active');
	$(this).toggleClass('active');
	pizzaSetDough($(this).attr('id'));
});
$('#confirm').click(function() {
	setGlobalPizza();
});
$('.pizzaIngredient').click(function() {
	$(this).children('.pizzaIngredientImg').toggleClass('active');
	$(this).children('.pizzaIngredientName').toggleClass('active');
	var ing = $(this).attr('id');
	if (pizzaCheckIngredient(ing)) {
		pizzaRemoveIngredient(ing);
	}
	else {
		pizzaAddIngredient(ing);
	}
});
