/*******************************************************************************

	BASE SCRIPTS - NAVBAR

*******************************************************************************/

$(document).ready(function() {
	$('#buttonConfirm').hide();
	$('#menubar').menubar();
});

/*******************************************************************************

	MAIN SCRIPTS - RATING

*******************************************************************************/


/*******************************************************************************

	MAIN SCRIPTS - ORDERED PIZZA LIST

*******************************************************************************/

//Shows the orders.
for (var i = 0; i < sessionStorage.orders; i++) {
	var values = managerGetMetaValues(i.toString()); // Gets the ordered pizzas
	if (values != null && values[0] != null && values[1] != null && (values[0] != '' || values[1] != '')) { // If the order wasn't deleted.
		createOrderItem(i); // Creates the HTML structure for the order.
		createOrderElements(values[0], values[1], i); // Fills the order item with the chosen pizza and drink.
	}
}

//Creates the HTML structure for the order.
function createOrderItem(index) {
	$('#orders').append($('<div>', { // Creates order content
		'class': 'orderStatusContainer',
		'id': 'order' + index,
		html: [ $('<div>', { 'class': 'col', 'id': 'pizza' + index })	]
	}));
}

//Fills the order item with the chosen pizza and drink.
function createOrderElements(pizza, drink, index) {
	var pizzaNumber = Number(pizza['pizzaNumber']);
	setTimeout(function() {
		if (pizza != '') { $('#pizza' + index).append(createPizzaItemWithSize(pizza)); } //Shows the ordered pizza.
	}, 100);
}

/*******************************************************************************

	MODAL MANAGEMENT

*******************************************************************************/

function execute() {
	window.location.href = 'html/table.html';
}

$('#buttonCancel').click(function() {
	confirmationOverlayShow("Do you really wish to skip the rating step?", {
		'Yes': ['buttonDanger', execute],
		'No' : ['buttonNeutral']
	});
});

$('#buttonConfirm').click(function() {
	execute([]);
});
