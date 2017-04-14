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

function managerAddToMeta(key, value) {
	var meta = sessionStorage.getItem("meta"); //Gets the dictionary that stores the orders.
	var parsed = JSON.parse(meta); //Parses it (it's current state is a string).
	parsed[key] = value; //Adds the order.
	sessionStorage.setItem("meta", JSON.stringify(parsed)); //Sets the sessionStorage again.
	sessionStorage.setItem("ordered", "true"); //Sets the ordered "global flag" to true.
}
function managerGetMetaValues(key) {
	var meta = sessionStorage.getItem("meta"); //Gets the dictionary that stores the orders.
	var parsed = JSON.parse(meta); //Parses it (it's current state is a string).
	var value = parsed[key]; //Gets the array of the ordered pair "pizza - drink".
	return value; //Returns the array.
}

function managerAddNewPizza(pizza) {
	var index = sessionStorage.getItem('orderNumber'); //Gets the order number (in case the user is editing an order).
	var key = "order" + index.toString();
	var value = [pizza, ""];
	managerAddToMeta(key, value);
}
function managerAddNewCustomizedPizza(pizzaMaker) {
	var index = sessionStorage.getItem('orderNumber'); //Gets the order number (in case the user is editing an order).
	var key = "order" + index.toString();
	sessionStorage.setItem(key + "custom", "true");
	var value = [pizzaMaker, ""];
	managerAddToMeta(key, value);
}
function managerAddNewDrink(drink) {
	var index = sessionStorage.getItem('orderNumber'); //Gets the order number (in case the user is editing an order).
	var key = "order" + index.toString();
	var value = managerGetMetaValues(key);
	var pizza = value[0];
	var valueNew = [pizza, drink];
	managerAddToMeta(key, valueNew);
}

function managerEditPizza(pizza) {
	var index = sessionStorage.getItem('orderNumber'); //Gets the order number (in case the user is editing an order).
	var key = "order" + index.toString();
	var value = managerGetMetaValues(key);
	var drink = value[1];
	var value = [pizza, drink];
	managerAddToMeta(key, value);
}
function managerEditCustomizedPizza(pizza) {}

function managerDeleteOrder(orderNumber) {
	var str = "order" + orderNumber.toString();
	var v = ["", ""];
	managerAddToMeta(str, v);
}
