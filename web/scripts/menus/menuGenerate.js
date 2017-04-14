/*------------------------------------------------------------------------------

				PIZZA-REALTED CODE

------------------------------------------------------------------------------*/
	/*------------------------------------------------------------------------------

					DATA STRUCTURES

	------------------------------------------------------------------------------*/
	//Array of premade suggested pizzas (for the JS generated menu).
	var suggestionsList = { 'Pepperoni Lovers' : {}, 'Four Seasons' : {}, 'Camponesa' : {} };
	//Array of premade pizzas (for the JS generated menu).
	var pizzaList = {
		'Pepperoni Lovers' : {
			'Ingredients' : ['Extra Mozzarella', 'Extra pepperoni'],
			'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
			'Rating' : '77%',
			'Img' : 'img/menus/pizzaMenu/menuPizza1.png',
		},
		'Four Seasons' : {
			'Ingredients' : ['Ham', 'Veggies', 'Corn', 'Pineapple'],
			'NutInfo' : {'Calories':'190kcal', 'Protein':'8g', 'Carbohydrates':'56g', 'Fat':'999g'},
			'Rating' : '88%',
			'Img' : 'img/menus/pizzaMenu/menuPizza2.png',
		},
		'Camponesa' : {
			'Ingredients' : ['Ham', 'Onion', 'Jalapeños'],
			'NutInfo' : {'Calories':'2660kcal', 'Protein':'4g', 'Carbohydrates':'26g', 'Fat':'881g'},
			'Rating' : '12%',
			'Img' : 'img/menus/pizzaMenu/menuPizza3.png',
		},
		'Camponesa2' : {
			'Ingredients' : ['Ham', 'Onion', 'Jalapeños'],
			'NutInfo' : {'Calories':'887kcal', 'Protein':'1g', 'Carbohydrates':'12g', 'Fat':'125g'},
			'Rating' : '23%',
			'Img' : 'img/menus/pizzaMenu/menuPizza4.png',
		},
		'Camponesa3' : {
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
			suggestions.append(getSuggestedItem(pizza)); //Adds each suggested pizza to the passed object.
		}
	}
	function populatePremadeMenu(obj) {
		var titlePremade = $('<label></label>').addClass('menuPremadeMenuTitle').append(document.createTextNode('Predesigned pizzas')); //Creates the title for the premade pizzas' menu.
		obj.append(titlePremade);
		var pizzaId = 1;
		for (var pizza in pizzaList) {
			obj.append(getPizzaItemWithButtons(pizza)); //Adds each premade pizzas to the passed object.
		}
	}


/*
	function addCustomizedPizza(pizza) {
		console.log("addCustomizedPizza");
		pizzaParsed = {};
		var pizzaName = pizza["pizzaName"];
		var pizzaIngredients = pizza["pizzaIngredients"];
		var pizzaNutInfo = {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'};
		var pizzaRating = "77%";
		var pizzaImg = 'img/menus/pizzaMenu/menuPizza1.png';
		pizzaParsed["Ingredients"] = pizzaIngredients;
		pizzaParsed["NutInfo"] = pizzaNutInfo;
		pizzaParsed["Rating"] = pizzaRating;
		pizzaParsed["Img"] = pizzaImg;

		pizzaList[pizzaName] = pizzaParsed;
		console.log("pizzaName - addCustomizedPizza:", "pizzaName, pizza - addCustomizedPizza:", pizzaList[pizzaName]);
		console.log(pizzaList);
	}
*/

	function getPizzaInfo(name) {
		var label = $('<label></label>').addClass('mPIITitle').append(document.createTextNode(name)); //Creates the label that represents the pizza's name.
		var list = getPizzaIngredientsList(name); //Gets the pizza's ingredients.
		return  $('<div></div>').addClass('menuPizzaItemInfo').append(label).append(list); //Adds the pizza's name and the ingredients list to the correct div.
	}
	function getPizzaImg(name) {
		var img = $('<img>').addClass('col-md-6').addClass('pizzaThumbnail'); //Creates the image.
		console.log("pizzaName - getPizzaImg:", name, "pizza - getPizzaImg:", pizzaList[name]);
		img.attr('src', pizzaList[name]['Img']); //Sets the correct source.
		return img;
	}

	function getPizzaItem(name) {
		var img = getPizzaImg(name); //Gets the pizza's image.
		var info = getPizzaInfo(name); //Gets the pizza's information.
		return $('<div></div>').addClass('menuPizzaItem').append(img).append(info)
			.addClass('row');
	}
	function getPizzaItemWithButtons(name) {
		var img = getPizzaImg(name); //Gets the pizza's image.
		var info = getPizzaInfo(name).append(getSizeButtons()); //Gets the pizza's information and appends the size buttons.
		return $('<div></div>').addClass('menuPizzaItem').append(img).append(info)
			.addClass('row');
	}
	function getSuggestedItem(name) {
		var info = getPizzaInfo(name);
		info.append(getSizeButtons());
		return $('<div></div>').addClass('menuPizzaSugestion').append(info);
	}

	function getPizzaIngredientsList(name) {
		var ingredientsList = pizzaList[name]['Ingredients']; //Gets the ingredient list.
		var list = $('<ul></ul>').addClass('mPIIIngredientList'); //Creates the list of ingredients.
		for (i in ingredientsList) {
			list.append($('<li></li>').addClass('mPIIIngredient').append(document.createTextNode(ingredientsList[i]))); //Creates a list element for each ingredient.
		}
		return list;
	}
	function getPizzaNutritonFactsList(name) {
		var nutInfo = pizzaList[name]['NutInfo']; //Gets the list of nutritional facts.
		var table = $('<table></table'); //Creates the table of nutritional facts.
		for (var key in nutInfo) {
			table.append($('<tr></tr>').append($('<td></td>').append(document.createTextNode(key))).append($('<td></td').append(document.createTextNode(nutInfo[key])))); //Creates each table row.
		}
		return table;
	}
	function getPizzaRating(name) {
		var d = $('<div></div>').addClass('pizzaRating');
		for (var i = 0; i < 5; i++) {
			d.append($('<span></span>').addClass('star'));
		}
		d.append($('<p></p>').addClass('pizzaRatingValue').append(document.createTextNode(pizzaList[name]['Rating'])));
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
				'Sizes' : ['Bottle (25cl)', 'Bottle (50cl)', 'Bottle (1L)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza1.png',
			},
			'Sparkling Water' : {
				'Sizes' : ['Bottle (25cl)', 'Bottle (50cl)', 'Bottle (1L)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza2.png',
			},
			'Fresj Juice' : {
				'Sizes' : ['Orange Juice (25cl)', 'Blueberry Juice (50cl)', 'Lemonade (1L)', 'Tutti Frutti (50cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza3.png',
			},

			'Coca-Cola Original' : {
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza4.png',
			},
			'Coca-Cola Zero' : {
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},

			'Sumol (Orange)' : {
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},
			'Sumol (Pineapple)' : {
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},
			'Sumol (Passion Fruit)' : {
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},
			'Sumol (Mango)' : {
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},

			'Lipton Ice Tea (Orange)' : {
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},
			'Lipton Ice Tea (Pineapple)' : {
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},
			'Lipton Ice Tea (Passion Fruit)' : {
				'Sizes' : ['Glass (25cl)', 'Can (33cl)', 'Glass (40cl)'],
				'NutInfo' : {'Calories':'120kcal', 'Protein':'8g', 'Carbohydrates':'20g', 'Fat':'80g'},
				'Img' : 'img/menus/pizzaMenu/menuPizza5.png',
			},
			'Lipton Ice Tea (Mango)' : {
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
				obj.append(getDrinkItem(drink)); //Adds each drink to the passed object.
			}
		}

		function getDrinkImg(name) {
			var img = $('<img>').addClass('menuDrinkItemImg'); //Creates the image.
			img.attr('src', drinksList[name]['Img']); //Sets the correct source.
			return img;
		}
		function getDrinkItem(name) {
			var label = $('<label></label>').addClass('mPDITitle').append(document.createTextNode(name)); //Creates the label for each drink;
			//var img = getDrinkImg(name); //Gets the drink's image.
			//return $('<div></div>').addClass('menuDrinkItem').append(img).append(label);
			return $('<div></div>').addClass('menuDrinkItem').append(label);
		}
		function getDrinkNutritionalInfo (name) {
			var nutInfo = drinksList[name]['NutInfo']; //Gets the list of nutritional facts.
			var table = $('<table></table>'); //Creates the table of nutritional facts.
			for (var key in nutInfo) {
				var n = $('<td></td>').append(document.createTextNode(key)); //Creates a table item for each nutritional information key.
				var v = $('<td></td').append(document.createTextNode(nutInfo[key])); //Creates a table item for the value of each key.
				var tr = $('<tr></tr>').append(n).append(v); //Creates the table row.
				table.append(tr); //Creates each table row.
			}
			return table;
		}
		function getDrinkTypes(name) {
			var d = $('<div></div>');
			for (size in drinksList[name]['Sizes']) {
				var label = $('<label></label>').addClass('drinksInformationTypeLabel').append(document.createTextNode(drinksList[name]['Sizes'][size])); //Gets the label for each of the drink's sizes.
				d.append(label);
			}
			return d;
		}
