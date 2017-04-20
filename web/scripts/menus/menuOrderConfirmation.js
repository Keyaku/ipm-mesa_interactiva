/*------------------------------------------------------------------------------

CODE EXECUTION

------------------------------------------------------------------------------*/
$('#menubar').menubar(); //Adds menu bar.
$('#navbar').navbar({selected: 'Confirm'}); //Adds top navigation bar.

var str = "order" + Number(sessionStorage.orders);
var values = managerGetMetaValues(str);
createOrderItem(); //Creates the HTML structure for the order.
createOrderElements(values[0], values[1]); //Fills the order item with the chosen pizza and drink.


/*------------------------------------------------------------------------------

AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
//Creates the HTML structure for the order.
function createOrderItem() {
	var div = $("<div>").addClass("orderStatusContainer"); //Creates the div for the order.
	var a = $("<div>").addClass("col").attr("id", "pizza"); //Creates the div for the ordered pizza.
	var b = $("<div>").addClass("col").attr("id", "drink"); //Creates the div for the ordered drink.
	//Creates the buttons.
	var c = $("<div>").addClass("col buttons")
			.append($("<button>", { html: "Cancel" }).addClass("editcancel buttonCancel").attr("id", "cancel"))
			.append($("<button>", { html: "Confirm" }).addClass("editcancel buttonConfirm").attr("id", "confirm"));
	div.append(a, b, c);
	$("#order").append(div);
}
//Fills the order item with the chosen pizza and drink.
function createOrderElements(pizza, drink) {
	var orderedPizza = pizza; //Gets the ordered pizza.
	var orderedDrink = drink; //Gets the ordered drink.
	setTimeout(function() {
		$("#pizza").append(createPizzaItemWithSize(orderedPizza)); //Shows the ordered pizza.
		$("#drink").append(createDrinkItem(orderedDrink)); //Shows the ordered drink.
	}, 100);
}

//When the client clicks the cancel button.
function confirmationOrderCancel() { confirmationOverlayShow(confirmationConfirmCancel, []); }
//When the client clicks the "Yes" button in the confirmation overlay (callback from confirmationOverlayShow).
function confirmationConfirmCancel() {
	managerDeleteOrder(sessionStorage.orderNumber); //Deletes the ongoing order.
	window.location.href = 'html/table.html';
}
//When the client clicks the confirm button.
function orderConfirm() {
	sessionStorage.orders = Number(sessionStorage.orders) + 1; //Increments the order number.
	window.location.href = "html/table.html";
}

/*------------------------------------------------------------------------------

			MENU FLOW

------------------------------------------------------------------------------*/
//The click event for the cancel button changes the page to the main page.
$(".buttonCancel").click(function() { confirmationOrderCancel(); });
//The click event for the confirm button changes the page to the main page.
$(".buttonConfirm").click(function() { orderConfirm(); });
