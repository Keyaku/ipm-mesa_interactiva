/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
//Initializes the order manager.
function managerStart() {
	var meta = {}; //Creates orders data structure.
	sessionStorage.meta = JSON.stringify(meta); //Sets it as a sessionStorage item for global avalability.
	sessionStorage.orders = 0; //Sets the current order number to 0.
	sessionStorage.orderNumber = 0; //Sets the number of total placed orders to 0.
}

//Adds the order to the system.
function managerAddToMeta(orderNumber, pizza) {
	var parsed = JSON.parse(sessionStorage.meta); //Parses it (its current state is a string).
	parsed['order' + orderNumber] = pizza; //Adds the order.
	sessionStorage.meta = JSON.stringify(parsed); //Sets the sessionStorage again.
	sessionStorage.ordered = true; //Sets the ordered 'global flag' to true.
}
//Gets the order from the system.
function managerGetMetaValues(orderNumber) {
	var parsed = JSON.parse(sessionStorage.meta); //Parses it (it's current state is a string).
	return parsed['order' + orderNumber]; //Returns the array of the ordered elements.
}

//Checks if the current order is not empty.
function managerCheckOrderNotEmpty(orderNumber) {
	var values = managerGetMetaValues(orderNumber); //Gets the order from the system.
	if (values == null) { return false; }
	if (values[0] != '' || values[1] != '') { return true; }
	else { return false; }
}

//Adds a premade pizza to the order.
function managerAddNewPizza(pizzaName, pizzaSize) {
	var pizza = getPremadePizza(pizzaName); //Gets the pizza's structure.
	pizza['pizzaSize'] = pizzaSize; //Adds the pizza's size to the the structure.
	var value = [pizza, '']; //Sets the value for the key.
	managerAddToMeta(sessionStorage.orderNumber, value); //Adds the order to the global data structure.
}
//Adds a premade pizza to the order (in case of order editing).
function managerEditPizza(pizzaName, pizzaSize) {
	var pizza = getPremadePizza(pizzaName); //Gets the pizza's structure.
	pizza['pizzaSize'] = pizzaSize; //Adds the pizza's size to the the structure.
	var drink = (managerGetMetaValues(sessionStorage.orderNumber))[1]; //Gets the ordered drink.
	var valueNew = [pizza, drink]; //Sets the value for the key.
	managerAddToMeta(sessionStorage.orderNumber, valueNew); //Adds the order to the global data structure.
}
//Adds a custom pizza to the order.
function managerAddNewCustomizedPizza(pizzaMaker) {
	var value = [pizzaMaker, '']; //Sets the value for the key.
	managerAddToMeta(sessionStorage.orderNumber, value); //Adds the order to the global data structure.
}
//Adds a custom pizza to the order (in case of order editing).
function managerEditCustomizedPizza(pizzaMaker) {
	var drink = (managerGetMetaValues(sessionStorage.orderNumber))[1]; //Gets the ordered drink.
	var valueNew = [pizzaMaker, drink]; //Sets the value for the key.
	managerAddToMeta(sessionStorage.orderNumber, valueNew); //Adds the order to the global data structure.
}

//Adds a drink to the order.
function managerAddNewDrink(drinkName) {
	var drink = getPremadeDrink(drinkName); //Gets the drink's structure.
	var pizza = (managerGetMetaValues(sessionStorage.orderNumber))[0]; //Gets the ordered pizza.
	var valueNew = [pizza, drink]; //Sets the value for the key.
	managerAddToMeta(sessionStorage.orderNumber, valueNew); //Adds the order to the global data structure.
}

//Makes the order empty (for the system, if the order is empty, it doesn't show up).
function managerDeleteOrder(orderNumber) {
	var v = ['', '']; //Sets the value for the key (empty fields).
	managerAddToMeta(orderNumber, v); //Adds the empty order to the global data structure.
}

//Makes the order empty (for the system, if the order is empty, it doesn't show up).
function manageDeleteAllOrders() {
	var v = ['', '']; //Sets the value for the key (empty fields).
	for (var i = 0; i < sessionStorage.orders; i++) {
		managerAddToMeta(i, v);
	}
}
