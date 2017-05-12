/*******************************************************************************

	BASE SCRIPTS - NAVBAR

*******************************************************************************/
const MAX_RATING = 5;

$(document).ready(function() {
	$('#buttonConfirm').hide();
	$('#menubar').menubar();
});

/*******************************************************************************

	MAIN SCRIPTS - ORDERED PIZZA LIST & RATING

*******************************************************************************/

//Shows the orders.
for (var i = 0; i < sessionStorage.orders; i++) {
	var values = managerGetMetaValues(i.toString()); // Gets the ordered pizzas
	if (values != null && values[0] != null && values[1] != null && (values[0] != '' || values[1] != '')) { // If the order wasn't deleted.
		createOrderItem(i); // Creates the HTML structure for the order.
		createOrderElements(values[0], values[1], i); // Fills the order item with the chosen pizza and drink.
		createRating(i);
	}
}

//Creates the HTML structure for the order.
function createOrderItem(index) {
	$('#orders').append($('<div>', { // Creates order content
		'class': 'orderStatusContainer',
		'id': 'order' + index,
		html: [ $('<div>', { 'class': 'col', 'id': 'pizza' + index })	]
	}));
	$('#order' + index).append($('<div>', {
		'class': 'starContainer',
		'id': 'order' + index + 'rating',
	}));
}

//Fills the order item with the chosen pizza and drink.
function createOrderElements(pizza, drink, index) {
	var pizzaId = $('#pizza' + index);
	var pizzaNumber = Number(pizza['pizzaNumber']);
	setTimeout(function() {
		if (pizza != '') { pizzaId.append(createPizzaItemWithSize(pizza)); } //Shows the ordered pizza.
	}, 100);
}

function createRating(index) {
	var starIndex;
	var orderIndex = $('#order' + index + 'rating');
	for (var i = 1; i <= MAX_RATING; i++) {
		starIndex = 'order' + index + 'ratingStar' + i;
		orderIndex.append($('<i>').addClass('fa fa-star').attr('id', starIndex));
	}
}

/**
* Se o locator funcionar ele vai retornar posicoes de 0 ate N-1 pizzas encomendadas
* Como os nossos ciclos vao da estrela 1 ate 5 inclusive, entao temos de somar 1.
* O a multiplicacao por 5 permite identificar sobre que conjunto de estrelas vamos atuar.
* Se o locator retornar 0 entao 0 * 5 = 0, pelo que vamos actuar na primeira pizza da lista.
* Se for 1, entao vamos atuar na segunda pizza, etc.
* O resto funciona como em rating.js
* Problema obter o valor de locator...
*/
$('.orderStatusContainer').on("click", ".fa.fa-star", function() {
	var locator = $('.orderStatusContainer').index(this);
	var startPoint = 1 + (locator * 5);
	var endPoint = startPoint + MAX_RATING;
	var currentStar;
	alert(locator);
	var clickedIndex = $('.fa').index(this);
	alert(clickedIndex);
	$('#buttonConfirm').show();
	for (var i = startPoint; i <= endPoint; i++) {
		currentStar = $('#order' + locator + 'ratingStar' + i);
		if (i <= clickedIndex) {
			currentStar.css({"color" : "green"});
		} else {
			currentStar.css({"color" : "white"});
		}
	}
});

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
