/*------------------------------------------------------------------------------

CODE EXECUTION

------------------------------------------------------------------------------*/
$('#menubar').menubar();
$('#navbar').navbar({selected: 'Confirm'});

var orderNumber = parseInt(sessionStorage.getItem("orders"));
var str = "order" + orderNumber.toString();
var values = managerGetMetaValues(str);
createOrderItem();
shell(values[0], values[1]);


/*------------------------------------------------------------------------------

AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function createOrderItem() {
	var div = $("<div></div>").addClass("orderStatusContainer");
	var a = $("<div></div>").addClass("col").attr("id", "pizza");
	var b = $("<div></div>").addClass("col").attr("id", "drink");
	var d = $("<div></div>").addClass("col buttons");
	var b1 = $("<button></button>").addClass("editcancel").addClass("buttonCancel").attr("id", "cancel").append(document.createTextNode("Cancel"));
	var b2 = $("<button></button>").addClass("editcancel").addClass("buttonConfirm").attr("id", "confirm").append(document.createTextNode("Confirm"));
	d.append(b1, b2);
	div.append(a, b, d);
	$("#order").append(div);
}
function shell(pizza, drink) {
	var orderedPizza = pizza; //Gets the ordered pizza.
	var orderedDrink = drink; //Gets the ordered drink.
	setTimeout(function() {
		$("#pizza").append(createPizzaItemWithSize(orderedPizza)); //Shows the user's ordered pizza.
		$("#drink").append(createDrinkItem(orderedDrink)); //Shows the user's ordered drink.
	}, 100);
}

function orderCancel() {
	window.location.href = "html/table.html";
}
function orderConfirm() {
	var i = sessionStorage.getItem("orders");
	var index = parseInt(i) + 1;
	sessionStorage.setItem("orders", index.toString());
	window.location.href = "html/table.html";
}

/*------------------------------------------------------------------------------

			MENU FLOW

------------------------------------------------------------------------------*/
$(".buttonCancel").click(function() { orderCancel(); }); //Cancells the selected order.
$(".buttonConfirm").click(function() { orderConfirm(); }); //Cancells the selected order.
