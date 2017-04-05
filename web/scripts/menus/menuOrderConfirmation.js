/*------------------------------------------------------------------------------

				DATA STRUCTURES

------------------------------------------------------------------------------*/
//Array of premade pizzas (for the JS generated menu).
var pizzaList = {
	"Pepperoni Lovers" : {
		"Ingredients" : ["Extra Mozzarella", "Extra pepperoni"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Rating" : "77%",
		"Img" : "../../img/menus/pizzaMenu/menuPizza1.png",
	},
	"Four Seasons" : {
		"Ingredients" : ["Ham", "Veggies", "Corn", "Pineapple"],
		"NutInfo" : {"Calories":"190kcal", "Protein":"8g", "Carbohydrates":"56g", "Fat":"999g"},
		"Rating" : "88%",
		"Img" : "../../img/menus/pizzaMenu/menuPizza2.png",
	},
	"Camponesa" : {
		"Ingredients" : ["Ham", "Onion", "Jalapeños"],
		"NutInfo" : {"Calories":"2660kcal", "Protein":"4g", "Carbohydrates":"26g", "Fat":"881g"},
		"Rating" : "12%",
		"Img" : "../../img/menus/pizzaMenu/menuPizza3.png",
	},
	"Camponesa2" : {
		"Ingredients" : ["Ham", "Onion", "Jalapeños"],
		"NutInfo" : {"Calories":"887kcal", "Protein":"1g", "Carbohydrates":"12g", "Fat":"125g"},
		"Rating" : "23%",
		"Img" : "../../img/menus/pizzaMenu/menuPizza4.png",
	},
	"Camponesa3" : {
		"Ingredients" : ["Ham", "Onion", "Jalapeños"],
		"NutInfo" : {"Calories":"556kcal", "Protein":"23g", "Carbohydrates":"44g", "Fat":"99g"},
		"Rating" : "59%",
		"Img" : "../../img/menus/pizzaMenu/menuPizza5.png",
	}
};
var drinksList = {
	"Water" : {
		"Sizes" : ["Bottle (25cl)", "Bottle (50cl)", "Bottle (1L)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "../../img/menus/pizzaMenu/menuPizza1.png",
	},
	"Sparkling Water" : {
		"Sizes" : ["Bottle (25cl)", "Bottle (50cl)", "Bottle (1L)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "../../img/menus/pizzaMenu/menuPizza2.png",
	},
	"Fresj Juice" : {
		"Sizes" : ["Orange Juice (25cl)", "Blueberry Juice (50cl)", "Lemonade (1L)", "Tutti Frutti (50cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "../../img/menus/pizzaMenu/menuPizza3.png",
	},

	"Coca-Cola Original" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "../../img/menus/pizzaMenu/menuPizza4.png",
	},
	"Coca-Cola Zero" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "../../img/menus/pizzaMenu/menuPizza5.png",
	},

	"Sumol (Orange)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "../../img/menus/pizzaMenu/menuPizza5.png",
	},
	"Sumol (Pineapple)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "../../img/menus/pizzaMenu/menuPizza5.png",
	},
	"Sumol (Passion Fruit)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "../../img/menus/pizzaMenu/menuPizza5.png",
	},
	"Sumol (Mango)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "../../img/menus/pizzaMenu/menuPizza5.png",
	},

	"Lipton Ice Tea (Orange)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "../../img/menus/pizzaMenu/menuPizza5.png",
	},
	"Lipton Ice Tea (Pineapple)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "../../img/menus/pizzaMenu/menuPizza5.png",
	},
	"Lipton Ice Tea (Passion Fruit)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "../../img/menus/pizzaMenu/menuPizza5.png",
	},
	"Lipton Ice Tea (Mango)" : {
		"Sizes" : ["Glass (25cl)", "Can (33cl)", "Glass (40cl)"],
		"NutInfo" : {"Calories":"120kcal", "Protein":"8g", "Carbohydrates":"20g", "Fat":"80g"},
		"Img" : "../../img/menus/pizzaMenu/menuPizza5.png",
	},
};


/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$("#menubar").menubar(); // Adding menu bar
$("#navbar").navbar(); // Adding top navigation bar
$("#order").append(getPizzaItem("Camponesa")).append(getDrinkItem("Water"));


console.log("cookie", Cookies.get("cookieteste1"));


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
