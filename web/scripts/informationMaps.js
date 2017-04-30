/*------------------------------------------------------------------------------

			CODE EXECUTION

------------------------------------------------------------------------------*/
$('#menubar').menubar(); //Adds the menu bar..
$('#shareButtonContainer').hide();
$('#interestsButtonContainer').hide();
$('#directionsButtonContainer').hide();
$('#mapsDestinationInput').hide();
$('#go').hide();


//Default map variables
var googleMapsKey = "?key=AIzaSyB1UiEgTrMu4oUPFCxorbwhTBMbX19RVGo";
var googleMapsOrigin = "&origin=taguspark";
var googleMapsMode = "driving";
var googleMapsUnits = "&units=metric";


/*------------------------------------------------------------------------------

			AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function shareStart(button) {
	$('#shareButtonContainer').toggle();
	$('#interestsButtonContainer').hide();
	$('#directionsButtonContainer').hide();
}
function interestsStart(button) {
	$('#shareButtonContainer').hide();
	$('#interestsButtonContainer').toggle();
	$('#directionsButtonContainer').hide();
}
function directionsStart(button) {
	$('#shareButtonContainer').hide();
	$('#interestsButtonContainer').hide();
	$('#directionsButtonContainer').toggle();
}

function share() { confirmationOverlayShow('Do you really wish to share your map?', shared, []); }
function shared(arg) { acknowledgementOverlayShow('Your map was shared.'); }

function mapGetPointsOfInterest(button) {
	$('.interestsButton').removeClass('active');
	button.addClass('active');
	var pointType = button.attr('id');
	var keyWords = '';
	switch(pointType) {
		case 'bars':
			keyWords = 'bars+oeiras';
			break;
		case 'landscapes':
			keyWords = 'parks+oeiras';
			break;
		case 'mall':
			keyWords = 'malls+oeiras';
			break;
		case 'monuments':
			keyWords = 'monuments+oeiras';
			break;
		case 'museums':
			keyWords = 'museums+oeiras';
			break;
	}
	var url = "https://www.google.com/maps/embed/v1/search"+googleMapsKey+"&q="+keyWords;
	$("#iframeMap").attr("src", url);
}

function mapDirectionsChooseMode(button) {
	$('.directionsButton').removeClass('active');
	button.addClass('active');
	$('#mapsDestinationInput').show();
	$('#go').show();
	googleMapsMode = (button.attr("id")).toLowerCase();
}
function directionsMap(destination, travelMode) {
	if (travelMode == '') { travelMode = 'driving'; }
	if (destination == '') {
		var inputBar = $("#mapsDestinationInput");
		inputBar.css("background-color", "red");
		setTimeout(function() { inputBar.css("background-color", "white"); }, 1250);
		for (var i = 1; i <= 15; i++) inputBar.fadeOut(30).fadeIn(30);
		return;
	}
	var url = "https://www.google.com/maps/embed/v1/directions"+googleMapsKey+googleMapsOrigin+"&destination="+destination+"&mode="+travelMode;
	$("#iframeMap").attr("src", url);
}
function go() {
	var destination = $('#mapsDestinationInput').val();
	directionsMap(destination, googleMapsMode);
}



/*------------------------------------------------------------------------------

			MENU FLOW

------------------------------------------------------------------------------*/
$('#mapsShare').click(function() { shareStart($(this)); });
$('#mapsInterests').click(function() { interestsStart($(this)); });
$('#mapsDirections').click(function() { directionsStart($(this)); });
$('.shareButton').click(function() { share(); });
$('.interestsButton').click(function() { mapGetPointsOfInterest($(this)); });
$('.directionsButton').click(function() { mapDirectionsChooseMode($(this)); });
$('#go').click(function() { go(); });
