/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function managerStart() {
	var meta = {}; //Creates orders data structure.
	sessionStorage.setItem("meta", JSON.stringify(meta)); //Sets it as a sessionStorage item for global avalability.
	sessionStorage.setItem("orders", "0"); //Sets the current order number to 0.
	sessionStorage.setItem("orderNumber", "0"); //Sets the number of total placed orders to 0.
}

function managerAddToMeta(orderNumber, pizza) {
	var meta = sessionStorage.getItem("meta"); //Gets the dictionary that stores the orders.
	var parsed = JSON.parse(meta); //Parses it (it's current state is a string).
	parsed[orderNumber] = pizza; //Adds the order.
	sessionStorage.setItem("meta", JSON.stringify(parsed)); //Sets the sessionStorage again.
	sessionStorage.setItem("ordered", "true"); //Sets the ordered "global flag" to true.
}
function managerGetMetaValues(orderNumber) {
	var meta = sessionStorage.getItem("meta"); //Gets the dictionary that stores the orders.
	var parsed = JSON.parse(meta); //Parses it (it's current state is a string).
	return parsed[orderNumber]; //Returns the array of the ordered elements.
}

function managerAddNewPizza(pizzaName, pizzaSize) {
	var pizza = getPremadePizza(pizzaName); //Gets the pizza's structure.
	
	pizza['pizzaSize'] = pizzaSize; //Adds the pizza's size to the the structure.
	var index = sessionStorage.getItem('orderNumber'); //Gets the order number (in case the user is editing an order).
	var key = "order" + index.toString(); //Gets the dictionary key.
	var value = [pizza, ""]; //Sets the value for the key.
	managerAddToMeta(key, value); //Adds the order to the global data structure.
}
function managerEditPizza(pizzaName, pizzaSize) {
	var pizza = getPremadePizza(pizzaName); //Gets the pizza's structure.
	pizza['pizzaSize'] = pizzaSize; //Adds the pizza's size to the the structure.
	var index = sessionStorage.getItem('orderNumber'); //Gets the order number (in case the user is editing an order).
	var key = "order" + index.toString(); //Gets the dictionary key.
	var drink = (managerGetMetaValues(key))[1]; //Gets the ordered drink.
	var valueNew = [pizza, drink]; //Sets the value for the key.
	managerAddToMeta(key, valueNew); //Adds the order to the global data structure.
}
function managerAddNewCustomizedPizza(pizzaMaker) {
	var index = sessionStorage.getItem('orderNumber'); //Gets the order number (in case the user is editing an order).
	var key = "order" + index.toString(); //Gets the dictionary key.
	var value = [pizzaMaker, ""]; //Sets the value for the key.
	managerAddToMeta(key, value); //Adds the order to the global data structure.
}
function managerEditCustomizedPizza(pizzaMaker) {
	var index = sessionStorage.getItem('orderNumber'); //Gets the order number (in case the user is editing an order).
	var key = "order" + index.toString(); //Gets the dictionary key.
	var drink = (managerGetMetaValues(key))[1]; //Gets the ordered drink.
	var valueNew = [pizzaMaker, drink]; //Sets the value for the key.
	managerAddToMeta(key, valueNew); //Adds the order to the global data structure.
}

function managerAddNewDrink(drinkName) {
	var drink = getPremadeDrink(drinkName); //Gets the drink's structure.
	var index = sessionStorage.getItem('orderNumber'); //Gets the order number (in case the user is editing an order).
	var key = "order" + index.toString(); //Gets the dictionary key.
	var pizza = (managerGetMetaValues(key))[0]; //Gets the ordered pizza.
	var valueNew = [pizza, drink]; //Sets the value for the key.
	managerAddToMeta(key, valueNew); //Adds the order to the global data structure.
}

function managerDeleteOrder(orderNumber) {
	var key = "order" + orderNumber.toString(); //Gets the dictionary key.
	var v = ["", ""]; //Sets the value for the key (empty fields).
	managerAddToMeta(key, v); //Adds the empty order to the global data structure.
}
