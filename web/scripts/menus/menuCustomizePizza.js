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
function pizzaUpdateLabel() {
	var size = pizzaMaker['size'] != undefined ? ' <b>' + pizzaMaker['size'] + '</b>' : '';
	var dough = pizzaMaker['dough'] != undefined ? ' <i>' + pizzaMaker['dough'] + '</i>' : '';
	var str = 'Your' + size + dough + ' pizza contains:'
	$('label#customPizza').html(str);
}

function pizzaSetSize(size) {
	makePizza('size', size);
	pizzaUpdateLabel();
}
function pizzaSetDough(dough) {
	makePizza('dough', dough);
	pizzaUpdateLabel();
}
function pizzaCheckIngredient(ing) {
	return pizzaMaker['ingredients'].find(function(val) { return val == ing; }) != undefined;
}
function pizzaAddIngredient(ing) {
	pizzaMaker['ingredients'].push(ing);
	// Adding it to the HTML
	$('#ingredientsPicked').append($('<li>', { html: ing }));
}
function pizzaRemoveIngredient(ing) {
	var index = pizzaMaker['ingredients'].indexOf(ing);
	pizzaMaker['ingredients'].splice(index, 1);
	// Removing it from the HTML
	$('#ingredientsPicked').children(':contains(' + ing + ')').remove();
}

function setGlobalPizza() {
	var index = sessionStorage.orderNumber; //Gets the order number (in case the user is editing an order).
	pizzaMaker['name'] = 'Custom #' + index;
	pizzaMaker['nutritions'] = {'Calories':'556kcal', 'Protein':'23g', 'Carbohydrates':'44g', 'Fat':'99g'};
	pizzaMaker['rating'] = '88%';
	pizzaMaker['image'] = 'img/menus/pizzaMenu/menuPizza5.png';
	if (sessionStorage.editing == 'true') {
		sessionStorage.editing = false;
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
//The click event for the pizza size buttons sets the pizza's size.
$('.pizzaSizes').click(function() {
	$('.pizzaSizes').removeClass('active'); //Clears the previously chosen size.
	$(this).toggleClass('active'); //Shows the size that is selected.
	pizzaSetSize($(this).attr('id')); //Sets the pizza's size.
});
//The click event for the pizza dough buttons sets the pizza's dough.
$('.pizzaDough label').click(function() {
	$('.pizzaDough label').removeClass('active'); //Clears the previously chosen dough.
	$(this).toggleClass('active'); //Shows the dough that is selected.
	pizzaSetDough($(this).attr('id')); //Sets the pizza's dough.
});
//The click event for the confirm button confirms the customized pizza.
$('#confirm').click(function() { setGlobalPizza(); });
//The click event for the ingredient buttons adds/removes it from the ingredients list.
$('.pizzaIngredient').click(function() {
	$(this).children('.pizzaIngredientImg').toggleClass('active'); //Show the ingredient is selected.
	$(this).children('.pizzaIngredientName').toggleClass('active'); //Show the ingredient is selected.
	var ing = $(this).attr('id'); //Gets the ingredients name.
	if (pizzaCheckIngredient(ing)) { //If the ingredient is in the list.
		pizzaRemoveIngredient(ing); //Removes the ingredient from the list.
	}
	else { //If the ingredient is NOT in the list.
		pizzaAddIngredient(ing); //Adds the ingredient to the list.
	}
});
