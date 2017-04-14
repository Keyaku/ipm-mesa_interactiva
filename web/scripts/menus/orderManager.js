var meta = {
	"order0" : ["Pepperoni Lovers", "Water"],
	"order1" : ["Camponesa", "Coca-Cola Original"],
}


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function managerStart() {
	var meta = {};
	sessionStorage.setItem("meta", JSON.stringify(meta));
	sessionStorage.setItem("orders", "0");
	sessionStorage.setItem("orderNumber", "0");
}

function managerAddToMeta(orderNumber, pizzaStruct) {
	var meta = sessionStorage.getItem("meta"); //Gets the dictionary that stores the orders.
	var parsed = JSON.parse(meta); //Parses it (it's current state is a string).
	parsed[orderNumber] = pizzaStruct; //Adds the order.
	sessionStorage.setItem("meta", JSON.stringify(parsed)); //Sets the sessionStorage again.
	sessionStorage.setItem("ordered", "true"); //Sets the ordered "global flag" to true.
}
function managerGetMetaValues(orderNumber) {
	var meta = sessionStorage.getItem("meta"); //Gets the dictionary that stores the orders.
	var parsed = JSON.parse(meta); //Parses it (it's current state is a string).
	return parsed[orderNumber]; //Returns the array of the ordered elements.
}

function managerAddNewPizza(pizzaName) {
	var pizzaStruct = getPremadePizzaStruct(pizzaName);
	var index = sessionStorage.getItem('orderNumber'); //Gets the order number (in case the user is editing an order).
	var key = "order" + index.toString();
	var value = [pizzaStruct, ""];
	managerAddToMeta(key, value);
}
/*
function managerAddNewCustomizedPizza(pizzaMaker) {
	var index = sessionStorage.getItem('orderNumber'); //Gets the order number (in case the user is editing an order).
	var key = "order" + index.toString();
	sessionStorage.setItem(key + "custom", "true");
	var value = [pizzaMaker, ""];
	managerAddToMeta(key, value);
}
*/
function managerAddNewDrink(drinkName) {
	var index = sessionStorage.getItem('orderNumber'); //Gets the order number (in case the user is editing an order).
	var key = "order" + index.toString();
	var value = managerGetMetaValues(key);
	var pizza = value[0];
	var drinkStruct = getDrinkStruct(drinkName);
	var valueNew = [pizza, drinkStruct];
	managerAddToMeta(key, valueNew);
}

function managerEditPizza(pizzaName) {
	var pizzaStruct = getPremadePizzaStruct(pizzaName);
	var index = sessionStorage.getItem('orderNumber'); //Gets the order number (in case the user is editing an order).
	var key = "order" + index.toString();
	var value = managerGetMetaValues(key);
	var drink = value[1];
	var valueNew = [pizzaStruct, drink];
	managerAddToMeta(key, valueNew);
}
/*
function managerEditCustomizedPizza(pizza) {}
*/

function managerDeleteOrder(orderNumber) {
	var str = "order" + orderNumber.toString();
	var v = ["", ""];
	managerAddToMeta(str, v);
}
