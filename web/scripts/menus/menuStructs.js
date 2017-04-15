/*------------------------------------------------------------------------------
				PIZZAS
------------------------------------------------------------------------------*/
//Array of premade suggested pizzas (for the JS generated menu).
var suggestionsList = { 'Pepperoni Lovers' : {}, 'Four Seasons' : {}, 'Camponesa' : {} };
//Array of premade pizzas (for the JS generated menu).
var pizzaList = {
	'Pepperoni Lovers' : {
		'name' : 'Pepperoni Lovers',
		'ingredients' : ['Extra Mozzarella', 'Extra pepperoni'],
		'nutritions' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
		'rating' : '77%',
		'image' : 'img/menus/pizzaMenu/menuPizza1.png',
	},
	'Four Seasons' : {
		'name' : 'Four Seasons',
		'ingredients' : ['Ham', 'Veggies', 'Corn', 'Pineapple'],
		'nutritions' : {'Calories':'190kcal', 'Protein':'8g', 'Carbohydrates':'56g', 'Fat':'999g'},
		'rating' : '88%',
		'image' : 'img/menus/pizzaMenu/menuPizza2.png',
	},
	'Camponesa' : {
		'name' : 'Camponesa',
		'ingredients' : ['Ham', 'Onion', 'Jalapeños'],
		'nutritions' : {'Calories':'2660kcal', 'Protein':'4g', 'Carbohydrates':'26g', 'Fat':'881g'},
		'rating' : '12%',
		'image' : 'img/menus/pizzaMenu/menuPizza3.png',
	},
	'Camponesa2' : {
		'name' : 'Camponesa2',
		'ingredients' : ['Ham', 'Onion', 'Jalapeños'],
		'nutritions' : {'Calories':'887kcal', 'Protein':'1g', 'Carbohydrates':'12g', 'Fat':'125g'},
		'rating' : '23%',
		'image' : 'img/menus/pizzaMenu/menuPizza4.png',
	},
	'Camponesa3' : {
		'name' : 'Camponesa3',
		'ingredients' : ['Ham', 'Onion', 'Jalapeños'],
		'nutritions' : {'Calories':'556kcal', 'Protein':'23g', 'Carbohydrates':'44g', 'Fat':'99g'},
		'rating' : '59%',
		'image' : 'img/menus/pizzaMenu/menuPizza5.png',
	}
};

function getPremadePizza(pizzaName) {
	return pizzaList[pizzaName];
}

/*------------------------------------------------------------------------------
				DRINKS
------------------------------------------------------------------------------*/
//Array of premade drinks (for the JS generated menu).
var drinksList = {
	'Water' : {
		'name' : 'Water',
		'sizes' : ['Bottle (25cl)', 'Bottle (50cl)', 'Bottle (1L)'],
		'nutritions' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
		'image' : 'img/menus/pizzaMenu/menuPizza1.png',
	},
	'Sparkling Water' : {
		'name' : 'Sparkling Water',
		'sizes' : ['Bottle (25cl)', 'Bottle (50cl)', 'Bottle (1L)'],
		'nutritions' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
		'image' : 'img/menus/pizzaMenu/menuPizza2.png',
	},
	'Fresh Juice' : {
		'name' : 'Fresh Juice',
		'sizes' : ['Orange Juice (25cl)', 'Blueberry Juice (50cl)', 'Lemonade (1L)', 'Tutti Frutti (50cl)'],
		'nutritions' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
		'image' : 'img/menus/pizzaMenu/menuPizza3.png',
	},

	'Coca-Cola Original' : {
		'name' : 'Coca-Cola Original',
		'sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
		'nutritions' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
		'image' : 'img/menus/pizzaMenu/menuPizza4.png',
	},
	'Coca-Cola Zero' : {
		'name' : 'Coca-Cola Zero',
		'sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
		'nutritions' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
		'image' : 'img/menus/pizzaMenu/menuPizza5.png',
	},

	'Sumol (Orange)' : {
		'name' : 'Sumol (Orange)',
		'sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
		'nutritions' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
		'image' : 'img/menus/pizzaMenu/menuPizza5.png',
	},
	'Sumol (Pineapple)' : {
		'name' : 'Sumol (Pineapple)',
		'sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
		'nutritions' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
		'image' : 'img/menus/pizzaMenu/menuPizza5.png',
	},
	'Sumol (Passion Fruit)' : {
		'name' : 'Sumol (Passion Fruit)',
		'sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
		'nutritions' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
		'image' : 'img/menus/pizzaMenu/menuPizza5.png',
	},
	'Sumol (Mango)' : {
		'name' : 'Sumol (Mango)',
		'sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
		'nutritions' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
		'image' : 'img/menus/pizzaMenu/menuPizza5.png',
	},

	'Lipton Ice Tea (Orange)' : {
		'name' : 'Lipton Ice Tea (Orange)',
		'sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
		'nutritions' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
		'image' : 'img/menus/pizzaMenu/menuPizza5.png',
	},
	'Lipton Ice Tea (Pineapple)' : {
		'name' : 'Lipton Ice Tea (Pineapple)',
		'sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
		'nutritions' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
		'image' : 'img/menus/pizzaMenu/menuPizza5.png',
	},
	'Lipton Ice Tea (Passion Fruit)' : {
		'name' : 'Lipton Ice Tea (Passion Fruit)',
		'sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
		'nutritions' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
		'image' : 'img/menus/pizzaMenu/menuPizza5.png',
	},
	'Lipton Ice Tea (Mango)' : {
		'name' : 'Lipton Ice Tea (Mango)',
		'sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
		'nutritions' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
		'image' : 'img/menus/pizzaMenu/menuPizza5.png',
	},
};

function getDrink(drinkName) {
	return drinksList[drinkName];
}
