/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$("#menubar").menubar();
$("#navbar").navbar();

var orderNumber = parseInt(sessionStorage.getItem("orders"));
for (var i = 0; i < orderNumber; i++) {
	console.log(sessionStorage.getItem("order" + i));
	if (sessionStorage.getItem("order" + i) == "true") {
		console.log(i, "iteration");
		createOrderItem(i);
		shell(i);
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
		var b2 = $("<button></button>").addClass("editcancel").addClass("buttonCancel").attr("id", "cancel" + ind).append(document.createTextNode("Cancel"));
	d.append(b1).append(b2);
	div.append(a).append(b).append(c).append(d);
	$("#orders").append(div);
}
function shell(index) {
	var str = "order" + index.toString();
	var orderedPizza = sessionStorage.getItem(str + "Pizza"); //Gets the ordered pizza.
	var orderedDrink = sessionStorage.getItem(str + "Drink"); //Gets the ordered drink.
	setTimeout(function() {
		$("#pizza" + index.toString()).append(getPizzaItem(orderedPizza)); //Shows the user's ordered pizza.
		$("#drink" + index.toString()).append(getDrinkItem(orderedDrink)); //Shows the user's ordered drink.
	}, 100);
}

function orderEdit(index) {
	var i = parseInt(index); //Gets the order to edit.
	sessionStorage.setItem("orderNumber", i.toString()); //Sets the number of the current order.
	window.location.href = "html/menus/menuPizzaList.html";
}
function orderCancel(index) { confirmationOverlayShow(confirmCancel, index); }
function confirmCancel(index) {
	$("#order" + index.toString()).remove();
	var str = "order" + index.toString();
	sessionStorage.removeItem(str + "Pizza");
	sessionStorage.removeItem(str + "Drink");
	sessionStorage.setItem("order" + index.toString(), "false");
}


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
$(".buttonEdit").click(function() {
	var i = ($(this).attr("id"))[4];
	orderEdit(parseInt(i));
}); //Edits the selected order.
$(".buttonCancel").click(function() {
	var i = ($(this).attr("id"))[6];
	orderCancel(parseInt(i));
}); //Cancells the selected order.
$("#buttonNewOrder").click(function() {
	var i = sessionStorage.getItem("orders"); //Gets the number of total orders.
	sessionStorage.setItem("orderNumber", i); //Sets the number of the current order.
	window.location.href = "html/menus/menuPizzaList.html"; }); //Changes the page to the pizza menu.
