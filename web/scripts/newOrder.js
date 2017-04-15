/*------------------------------------------------------------------------------

CODE EXECUTION

------------------------------------------------------------------------------*/
$("#menubar").menubar();
$("#navbar").navbar();

var orderNumber = parseInt(sessionStorage.getItem("orders"));
for (var i = 0; i < orderNumber; i++) {
	var str = "order" + i.toString();
	var values = managerGetMetaValues(str);
	console.log(values);
	if (values != null && values[0] != null && values[1] != null && (values[0] != ""  || values[1] != "")) {
		createOrderItem(i);
		shell(values[0], values[1], i);
	}
}

$("#timer").countdown360({
	radius: 65,                        // radius of arc
	strokeStyle: "#ecf0f1",            // the color of the stroke
	strokeWidth: 5,					   // border radius
	fillStyle: "#bdc3a7",              // the fill color
	fontColor: "#ecf0f1",              // the font color
	fontWeight: 700,                   // the font weight
	autostart: true,                   // start the countdown automatically
	seconds: 480,                      // the number of seconds to count down
	label: ["second", "minute"],       // the label to use or false if none
	smooth: true,                      // should the timer be smooth or stepping
	onComplete: function () {}
}); //Adds the timer.


/*------------------------------------------------------------------------------

AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function createOrderItem(index) {
	var ind = index.toString();
	var str = "order" + index.toString();
	var div = $("<div></div>").addClass("orderStatusContainer").attr("id", str);
	var a = $("<div></div>").addClass("col").attr("id", "pizza" + ind);
	var b = $("<div></div>").addClass("col").attr("id", "drink" + ind);
	var c = $("<div></div>").addClass("col").attr("id", "timer" + ind);
	var d = $("<div></div>").addClass("col");
	var b1 = $("<button></button>").addClass("editcancel").addClass("buttonEdit").attr("id", "edit" + ind).append(document.createTextNode("Edit"));
		var b11 = $("<button></button>").addClass("buttonEditPizza").attr("id", "editPizza" + ind).append(document.createTextNode("Pizza"));
		var b12 = $("<button></button>").addClass("buttonEditDrink").attr("id", "editDrink" + ind).append(document.createTextNode("Drink"));
	var b2 = $("<button></button>").addClass("editcancel").addClass("buttonCancel").attr("id", "cancel" + ind).append(document.createTextNode("Cancel"));
	d.append(b1).append(b11).append(b12).append(b2);
	div.append(a).append(b).append(c).append(d);
	$("#orders").append(div);
}
function shell(pizza, drink, index) {
	var orderedPizza = pizza; //Gets the ordered pizza.
	var orderedDrink = drink; //Gets the ordered drink.
	setTimeout(function() {
		$("#pizza" + index.toString()).append(getPizzaItemWithSize(orderedPizza)); //Shows the user's ordered pizza.
		$("#drink" + index.toString()).append(createDrinkItem(orderedDrink)); //Shows the user's ordered drink.
	}, 100);
}

function orderEdit(index) {
	editGetCategory(index); //Checks if the user wants to edit the pizza or the drink.
}
function editGetCategory(index) {
	$("#editPizza" + index.toString()).show();
	$("#editDrink" + index.toString()).show();
}
function editPizza(index) {
	sessionStorage.setItem("orderNumber", index.toString()); //Sets the number of the current order.
	sessionStorage.setItem("editing", "true");
	window.location.href = "html/menus/menuPizzaList.html";
}
function editDrink(index) {
	sessionStorage.setItem("orderNumber", index.toString()); //Sets the number of the current order.
	sessionStorage.setItem("editing", "true");
	window.location.href = "html/menus/menuDrinks.html";
}
function orderCancel(index) { confirmationOverlayShow(confirmCancel, index); }
function confirmCancel(index) {
	$("#order" + index.toString()).remove();
	managerDeleteOrder(index);
}


/*------------------------------------------------------------------------------

MENU FLOW

------------------------------------------------------------------------------*/
$(".buttonEdit").click(function() {	editGetCategory(parseInt(($(this).attr("id"))[4])); }); //Edits the selected order.
$(".buttonEditPizza").click(function() { editPizza(parseInt(($(this).attr("id"))[9])); }); //Edits the selected pizza.
$(".buttonEditDrink").click(function() { editDrink(parseInt(($(this).attr("id"))[9])); }); //Edits the selected drink.

$(".buttonCancel").click(function() { orderCancel(parseInt(($(this).attr("id"))[6])); }); //Cancells the selected order.
$("#buttonNewOrder").click(function() {
	var i = sessionStorage.getItem("orders"); //Gets the number of total orders.
	sessionStorage.setItem("orderNumber", i); //Sets the number of the current order.
	window.location.href = "html/menus/menuPizzaList.html";
}); //Changes the page to the pizza menu.
