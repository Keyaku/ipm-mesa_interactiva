/*------------------------------------------------------------------------------

CODE EXECUTION

------------------------------------------------------------------------------*/
$('#menubar').menubar();
$('#navbar').navbar({{selected: 'Confirm'}});

var orderNumber = Number(sessionStorage.orders);
for (var i = 0; i < orderNumber; i++) {
	var values = managerGetMetaValues('order' + i);
	if (values != null && values[0] != null && values[1] != null && (values[0] != ''  || values[1] != '')) {
		createOrderItem(i);
		shell(values[0], values[1], i);
	}
}

/*------------------------------------------------------------------------------

AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function createOrderItem(index) {
	var div = $('<div>', {
		'class': 'orderStatusContainer',
		'id': 'order' + index,
	});
	var a = $('<div>', {
		'class': 'col',
		'id': 'pizza' + index,
	});
	var b = $('<div>', {
		'class': 'col',
		'id': 'drink' + index,
	});
	var c = $('<div>', {
		'class': 'col',
		'id': 'timer' + index,
	});
	var d = $('<div>', {
		'class': 'col buttons',
	});

	var b1 = $('<button>', {
		html: 'Edit',
		'class': 'editcancel buttonEdit',
		'id': 'edit' + index
	});
		var b11 = $('<button>', {
			html: 'Pizza',
			'class': 'buttonEditPizza',
			'id': 'editPizza' + index,
		});
		var b12 = $('<button>', {
			html: 'Drink',
			'class': 'buttonEditDrink',
			'id': 'editDrink' + index
		});
	var b2 = $('<button>', {
		html: 'Cancel',
		'class': 'editcancel buttonCancel',
		'id': 'cancel' + index
	});
	d.append([b1, b11, b12, b2]);
	div.append([a, b, c, d]);
	$('#orderList').append(div);
}
function shell(pizza, drink, index) {
	var orderedPizza = pizza; //Gets the ordered pizza.
	var orderedDrink = drink; //Gets the ordered drink.
	setTimeout(function() {
		$('#pizza' + index).append(createPizzaItemWithSize(orderedPizza)); //Shows the user's ordered pizza.
		$('#drink' + index).append(createDrinkItem(orderedDrink)); //Shows the user's ordered drink.
	}, 100);
}

function orderEdit(index) {
	editGetCategory(index); //Checks if the user wants to edit the pizza or the drink.
}
function editGetCategory(index) {
	$('#editPizza' + index).toggle();
	$('#editDrink' + index).toggle();
}
function editPizza(index) {
	sessionStorage.orderNumber = index; //Sets the number of the current order.
	sessionStorage.editing = true;
	window.location.href = 'html/menus/menuPizzaList.html';
}
function editDrink(index) {
	sessionStorage.orderNumber = index; //Sets the number of the current order.
	sessionStorage.editing = true;
	window.location.href = 'html/menus/menuDrinks.html';
}
function orderCancel(index) { confirmationOverlayShow(confirmCancel, index); }
function confirmCancel(index) {
	$('#order' + index).remove();
	managerDeleteOrder(index);
}


/*------------------------------------------------------------------------------

			MENU FLOW

------------------------------------------------------------------------------*/
$('.buttonEdit').click(function() {	editGetCategory(parseInt(($(this).attr('id'))[4])); }); //Edits the selected order.
$('.buttonEditPizza').click(function() { editPizza(parseInt(($(this).attr('id'))[9])); }); //Edits the selected pizza.
$('.buttonEditDrink').click(function() { editDrink(parseInt(($(this).attr('id'))[9])); }); //Edits the selected drink.

$('.buttonCancel').click(function() { orderCancel(parseInt(($(this).attr('id'))[6])); }); //Cancells the selected order.

$('button#add').click(function() { /*TODO - FranciscoKloganB: Create a popup to ask what the user wants to edit*/ });
$('button#confirm').click(function() {
	sessionStorage.orders = Number(sessionStorage.orders) + 1;
	window.location.href = 'html/table.html';
}); //Changes the page to the main page.
