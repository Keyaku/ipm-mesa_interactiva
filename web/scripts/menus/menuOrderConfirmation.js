/*------------------------------------------------------------------------------

CODE EXECUTION

------------------------------------------------------------------------------*/
$('#menubar').menubar();
$('#navbar').navbar({selected: 'Confirm'});

var str = "order" + Number(sessionStorage.orders);
var values = managerGetMetaValues(str);
createOrderItem();
shell(values[0], values[1]);


/*------------------------------------------------------------------------------

AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function createOrderItem() {
	var div = $("<div>").addClass("orderStatusContainer");
	var a = $("<div>").addClass("col").attr("id", "pizza");
	var b = $("<div>").addClass("col").attr("id", "drink");
	var d = $("<div>").addClass("col buttons");
	var b1 = $("<button>", { html: "Cancel" }).addClass("editcancel buttonCancel").attr("id", "cancel");
	var b2 = $("<button>", { html: "Confirm" }).addClass("editcancel buttonConfirm").attr("id", "confirm");
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

function confirmationOrderCancel() {
	confirmationOverlayShow(confirmationConfirmCancel, []);
}
function confirmationConfirmCancel() {
	var index = sessionStorage.orderNumber;
	managerDeleteOrder(index);
	window.location.href = 'html/table.html';
}

/*------------------------------------------------------------------------------

			MENU FLOW

------------------------------------------------------------------------------*/
$(".buttonCancel").click(function() { confirmationOrderCancel(); }); //Cancells the selected order.
$(".buttonConfirm").click(function() { orderConfirm(); }); //Cancells the selected order.
