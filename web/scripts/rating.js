/*------------------------------------------------------------------------------

				STAR RATING

------------------------------------------------------------------------------*/

//Appends 5 stars to starContainer div.
function createRating() {
	var maxRating = 5;
	var sC = $('#starContainer');
	for (var i = 1; i <= maxRating; i++) {
		sC.append($('<i>').addClass('fa fa-star'));
	}
}

$('window').load(createRating());

/*------------------------------------------------------------------------------

				MODAL MANAGEMENT

------------------------------------------------------------------------------*/

function execute(args) {
	window.location.href = 'html/table.html';
}

$('#buttonCancel').click(function() {
	confirmationOverlayShow("Do you really wish to skip the rating step?", execute, []);
});
