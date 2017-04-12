const PATH_INGREDIENTS = 'img/menus/customizeMenu/pizzaIngredients/'; // Don't forget to consider our <base> rule.
const LIST_INGREDIENTS = {
	'Cheese'     : [
		'Mozzarella', 'Parmesan', 'Elemental Cheese', 'French Cheese',
		'Goat Cheese', 'Parmesan', 'SourCream'
	],
	'Meat'       : [
		'Ham', 'Pepperoni', 'Bacon', 'Prosciutto', 'Chicken', 'Beef', 'Sausage'
	],
	'Fish'       : ['Tuna', 'Sardin'],
	'Vegetables' : [
		'Mushroom', 'Jalapeños', 'Tomato', 'Peppers', 'Arugula', 'Basil',
		'Garlic', 'Green Olive', 'Olives', 'Onion', 'Pineapple', 'Spinach',
		'Sweet Corn'
	],
};

for (var ingredientType in LIST_INGREDIENTS) {
	var typeLabel = $('<label></label>').addClass('pizzaIngredientTypeLabel').append(document.createTextNode(ingredientType)); // Creates the ingredient type label.
	var typeDiv = $('<div></div>').addClass('pizzaIngredientType'); // Creates the div that contains the all the type's ingredients and their images.
	for (i in LIST_INGREDIENTS[ingredientType]) {
		var ingredientName = LIST_INGREDIENTS[ingredientType][i];
		var ingredientDiv = $('<div></div>').addClass('pizzaIngredient'); // Creates a div for each ingredient.
		var ingredientLabel = $('<label></label>').addClass('pizzaIngredientName').append(document.createTextNode(ingredientName)); // Creates the ingredient's label.

		ingredientName = ingredientName.toLowerCase().replace(/\s/g,'')
		ingredientDiv.append($('<div></div>').addClass('pizzaIngredientImg').css({'background-image' : 'url("' + PATH_INGREDIENTS + ingredientName + '.png")'})).append(ingredientLabel); // Attaches the ingredient's image div and label to the ingredient's div.
		typeDiv.append(ingredientDiv); // Appends the individual ingredients div to the types's div.
	}
	$('#pizzaIngredients').append(typeLabel).append(typeDiv); // Appends the type's div to the main page.
}

$('#menubar').menubar();		// Adding menu bar
$('#navbar').navbar(); 			// Adding top navigation bar

$('.pizzaSizes').click(function() {
	$('.pizzaSizes').removeClass('active');
	$(this).toggleClass('active');
});
