/*------------------------------------------------------------------------------

				STAR RATING

------------------------------------------------------------------------------*/
const MAX_RATING = 5;

function createRating() {
	var sC = $('#starContainer');
	for (var i = 1; i <= MAX_RATING; i++) {
		sC.append($('<i>').addClass('fa fa-star').attr('id', 'star' + i));
	}
}

$(document).ready(function() {
	createRating();
});

// TODO Click not working
$('.fa.fa-star').click(function() {
	alert("fa star clicked");
	var currentStar;
	var clickedIndex = $('.fa.fa-star').index(this) + 1;
	for (var i = 1; i <= MAX_RATING; i++) {
		currentStar = $('#star' + i);
		if (i <= clickedIndex) {
			currentStar.css({"color" : "green"});
		} else {
			currentStar.css({"color" : "white"});
		}
	}
});

/*------------------------------------------------------------------------------

				MODAL MANAGEMENT

------------------------------------------------------------------------------*/

function execute(args) {
	window.location.href = 'html/table.html';
}

$('#buttonCancel').click(function() {
	confirmationOverlayShow("Do you really wish to skip the rating step?", execute, []);
});
