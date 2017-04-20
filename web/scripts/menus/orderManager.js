/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function managerStart() {
	var meta = {}; //Creates orders data structure.
	sessionStorage.meta = JSON.stringify(meta); //Sets it as a sessionStorage item for global avalability.
	sessionStorage.orders = 0; //Sets the current order number to 0.
	sessionStorage.orderNumber = 0; //Sets the number of total placed orders to 0.
}

/* Core functions */
function managerAddToMeta(orderNumber, pizza) {
	var parsed = JSON.parse(sessionStorage.meta); //Parses it (its current state is a string).
	parsed[orderNumber] = pizza; //Adds the order.
	sessionStorage.meta = JSON.stringify(parsed); //Sets the sessionStorage again.
	sessionStorage.ordered = true; //Sets the ordered "global flag" to true.
}
function managerGetMetaValues(orderNumber) {
	var parsed = JSON.parse(sessionStorage.meta); //Parses it (it's current state is a string).
	return parsed[orderNumber]; //Returns the array of the ordered elements.
}

/* Wrapper functions */
function managerAddNewPizza(pizzaName, pizzaSize) {
	var pizza = getPremadePizza(pizzaName); //Gets the pizza's structure.
	pizza['pizzaSize'] = pizzaSize; //Adds the pizza's size to the the structure.
	var key = "order" + sessionStorage.orderNumber; //Gets the dictionary key.
	var value = [pizza, ""]; //Sets the value for the key.
	managerAddToMeta(key, value); //Adds the order to the global data structure.
}
function managerEditPizza(pizzaName, pizzaSize) {
	var pizza = getPremadePizza(pizzaName); //Gets the pizza's structure.

	pizza['pizzaSize'] = pizzaSize; //Adds the pizza's size to the the structure.
	var key = "order" + sessionStorage.orderNumber; //Gets the dictionary key.
	var drink = (managerGetMetaValues(key))[1]; //Gets the ordered drink.
	var valueNew = [pizza, drink]; //Sets the value for the key.

	managerAddToMeta(key, valueNew); //Adds the order to the global data structure.
}
function managerAddNewCustomizedPizza(pizzaMaker) {
	var key = "order" + sessionStorage.orderNumber; //Gets the dictionary key.
	var value = [pizzaMaker, ""]; //Sets the value for the key.

	managerAddToMeta(key, value); //Adds the order to the global data structure.
}
function managerEditCustomizedPizza(pizzaMaker) {
	var key = "order" + sessionStorage.orderNumber; //Gets the dictionary key.
	var drink = (managerGetMetaValues(key))[1]; //Gets the ordered drink.
	var valueNew = [pizzaMaker, drink]; //Sets the value for the key.

	managerAddToMeta(key, valueNew); //Adds the order to the global data structure.
}

function managerAddNewDrink(drinkName) {
	var drink = getPremadeDrink(drinkName); //Gets the drink's structure.

	var key = "order" + sessionStorage.orderNumber; //Gets the dictionary key.
	var pizza = (managerGetMetaValues(key))[0]; //Gets the ordered pizza.
	var valueNew = [pizza, drink]; //Sets the value for the key.

	managerAddToMeta(key, valueNew); //Adds the order to the global data structure.
}

function managerDeleteOrder(orderNumber) {
	var key = "order" + orderNumber; //Gets the dictionary key.
	var v = ["", ""]; //Sets the value for the key (empty fields).
	managerAddToMeta(key, v); //Adds the empty order to the global data structure.
}

function managerCheckIf(orderNumber) {
	var values = managerGetMetaValues(orderNumber);
	if (values == null) {
		return false;
	}

	if (values[0] != "" || values[1]) {
		return true;
	}
	else {
		return false;
	}
}
