/*------------------------------------------------------------------------------

				DATA STRUCTURES

------------------------------------------------------------------------------*/
//Array of premade pizzas (for the JS generated menu).
var drinksList = {
	"Water" : {
		"Sizes" : ["Bottle (25cl)", "Bottle (50cl)", "Bottle (1L)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
	},
	"Sparkling Water" : {
		"Sizes" : ["Bottle (25cl)", "Bottle (50cl)", "Bottle (1L)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
	},
	"Fresj Juice" : {
		"Sizes" : ["Orange Juice (25cl)", "Blueberry Juice (50cl)", "Lemonade (1L)", "Tutti Frutti (50cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
	},

	"Coca-Cola Original" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
	},
	"Coca-Cola Zero" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
	},

	"Sumol (Orange)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
	},
	"Sumol (Pineapple)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
	},
	"Sumol (Passion Fruit)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
	},
	"Sumol (Mango)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
	},

	"Lipton Ice Tea (Orange)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
	},
	"Lipton Ice Tea (Pineapple)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
	},
	"Lipton Ice Tea (Passion Fruit)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
	},
	"Lipton Ice Tea (Mango)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
	},
};


/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$('#navbar').navbar();
$("#drinksInformation").hide(); //Hides the lateral pizza information bar.

//Creates all the elements in the premade pizzas menu.
var drinkId = 1;
for (drink in drinksList) { $("#menuDrinks").append(getDrinkItem(drink)); }


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
//Generates and shows the lateral pizza information bar of the chosen pizza.
$(".menuDrinkItem").click(function() { showDrinkExtensiveInformation($(this).children(".mPDITitle").text()); });
