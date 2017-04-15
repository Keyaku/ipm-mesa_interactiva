/*------------------------------------------------------------------------------

				PIZZA-RELATED CODE

------------------------------------------------------------------------------*/
	/*------------------------------------------------------------------------------

					DATA STRUCTURES

	------------------------------------------------------------------------------*/
	//Array of premade suggested pizzas (for the JS generated menu).
	var suggestionsList = { 'Pepperoni Lovers' : {}, 'Four Seasons' : {}, 'Camponesa' : {} };
	//Array of premade pizzas (for the JS generated menu).
	var pizzaList = {
		'Pepperoni Lovers' : {
			'pizzaName' : 'Pepperoni Lovers',
			'Ingredients' : ['Extra Mozzarella', 'Extra pepperoni'],
			'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
			'Rating' : '77%',
			'Img' : 'img/menus/pizzaMenu/menuPizza1.png',
		},
		'Four Seasons' : {
			'pizzaName' : 'Four Seasons',
			'Ingredients' : ['Ham', 'Veggies', 'Corn', 'Pineapple'],
			'NutInfo' : {'Calories':'190kcal', 'Protein':'8g', 'Carbohydrates':'56g', 'Fat':'999g'},
			'Rating' : '88%',
			'Img' : 'img/menus/pizzaMenu/menuPizza2.png',
		},
		'Camponesa' : {
			'pizzaName' : 'Camponesa',
			'Ingredients' : ['Ham', 'Onion', 'Jalapeños'],
			'NutInfo' : {'Calories':'2660kcal', 'Protein':'4g', 'Carbohydrates':'26g', 'Fat':'881g'},
			'Rating' : '12%',
			'Img' : 'img/menus/pizzaMenu/menuPizza3.png',
		},
		'Camponesa2' : {
			'pizzaName' : 'Camponesa2',
			'Ingredients' : ['Ham', 'Onion', 'Jalapeños'],
			'NutInfo' : {'Calories':'887kcal', 'Protein':'1g', 'Carbohydrates':'12g', 'Fat':'125g'},
			'Rating' : '23%',
			'Img' : 'img/menus/pizzaMenu/menuPizza4.png',
		},
		'Camponesa3' : {
			'pizzaName' : 'Camponesa3',
			'Ingredients' : ['Ham', 'Onion', 'Jalapeños'],
			'NutInfo' : {'Calories':'556kcal', 'Protein':'23g', 'Carbohydrates':'44g', 'Fat':'99g'},
			'Rating' : '59%',
			'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
		}
	};


	/*------------------------------------------------------------------------------

					AUXILIAR FUNCTIONS

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
	function getPremadePizzaStruct(pizzaName) {
		return pizzaList[pizzaName];
	}


	function getPizzaInfo(pizzaStruct) {
		var pizzaName = pizzaStruct["pizzaName"];
		var label = $('<label></label>').addClass('mPIITitle').append(document.createTextNode(pizzaName)); //Creates the label that represents the pizza's name.
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
		/*------------------------------------------------------------------------------

						DATA STRUCTURES

		------------------------------------------------------------------------------*/
		//Array of premade drinks (for the JS generated menu).
		var drinksList = {
			'Water' : {
				'drinkName' : 'Water',
				'Sizes' : ['Bottle (25cl)', 'Bottle (50cl)', 'Bottle (1L)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza1.png',
			},
			'Sparkling Water' : {
				'drinkName' : 'Sparkling Water',
				'Sizes' : ['Bottle (25cl)', 'Bottle (50cl)', 'Bottle (1L)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza2.png',
			},
			'Fresj Juice' : {
				'drinkName' : 'Fresh Juice',
				'Sizes' : ['Orange Juice (25cl)', 'Blueberry Juice (50cl)', 'Lemonade (1L)', 'Tutti Frutti (50cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza3.png',
			},

			'Coca-Cola Original' : {
				'drinkName' : 'Coca-Cola Original',
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza4.png',
			},
			'Coca-Cola Zero' : {
				'drinkName' : 'Coca-Cola Zero',
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},

			'Sumol (Orange)' : {
				'drinkName' : 'Sumol (Orange)',
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},
			'Sumol (Pineapple)' : {
				'drinkName' : 'Sumol (Pineapple)',
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},
			'Sumol (Passion Fruit)' : {
				'drinkName' : 'Sumol (Passion Fruit)',
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},
			'Sumol (Mango)' : {
				'drinkName' : 'Sumol (Mango)',
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},

			'Lipton Ice Tea (Orange)' : {
				'drinkName' : 'Lipton Ice Tea (Orange)',
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},
			'Lipton Ice Tea (Pineapple)' : {
				'drinkName' : 'Lipton Ice Tea (Pineapple)',
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},
			'Lipton Ice Tea (Passion Fruit)' : {
				'drinkName' : 'Lipton Ice Tea (Passion Fruit)',
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},
			'Lipton Ice Tea (Mango)' : {
				'drinkName' : 'Lipton Ice Tea (Mango)',
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},
		};


		/*------------------------------------------------------------------------------

						AUXILIAR FUNCTIONS

		------------------------------------------------------------------------------*/
		function populateDrinksMenu(obj) {
			var drinkId = 1;
			for (drink in drinksList) {
				drinkStruct = getDrinkStruct(drink);
				obj.append(getDrinkItem(drinkStruct)); //Adds each drink to the passed object.
			}
		}

		function getDrinkStruct(drinkName) {
			return drinksList[drinkName];
		}

		function getDrinkImg(drinkStruct) {
			var img = $('<img>').addClass('menuDrinkItemImg'); //Creates the image.
			img.attr('src', drinkStruct['Img']); //Sets the correct source.
			return img;
		}
		function getDrinkItem(drinkStruct) {
			var drinkName = drinkStruct['drinkName'];
			console.log(drinkStruct);
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
