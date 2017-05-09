/*------------------------------------------------------------------------------

				MODAL MANAGEMENT

------------------------------------------------------------------------------*/

function execute(args) { window.location.href = 'html/table.html'; }
$('#buttonCancel').click(function() { confirmationOverlayShow("Do you really wish to skip the rating step?", execute, []); });

/*------------------------------------------------------------------------------

				STAR RATING

------------------------------------------------------------------------------*/

//Creates a div for the rating stars and the rating label.
function createStarContainer() {
	var d = $('<div>').addClass('starContainer');
	for (var i = 1; i <= starNum; i++) { d.append($('<i>').addClass('fa fa-star').addClass('coloredStar')); }
	for (var i = starNum + 1; i <= 5; i++) { d.append($('<i>').addClass('fa fa-star')); }
	return d;
}
