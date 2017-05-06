/*------------------------------------------------------------------------------

			CODE EXECUTION

------------------------------------------------------------------------------*/
$('#menubar').menubar(); //Adds the menu bar.
$('#mapsCloseShare').hide();
$('#shareButtonContainer').hide();
$('#interestsButtonContainer').hide();
$('#directionsButtonContainer').hide();
$('#directionInput').hide();
$('#taxiTime').hide();
mapInit();

//Default map variables
var googleMapsKey = '?key=AIzaSyB1UiEgTrMu4oUPFCxorbwhTBMbX19RVGo';
var googleMapsOrigin = '&origin=taguspark';
var googleMapsMode = 'driving';
var googleMapsUnits = '&units=metric';

var preliminarTaxiNumber = 0;
var taxiETA = 0;


/*------------------------------------------------------------------------------

			AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function mapInit() {
	var url ='https://www.google.com/maps/embed/v1/place?key=AIzaSyB1UiEgTrMu4oUPFCxorbwhTBMbX19RVGo&q=taguspark';
	mapSaveMapState(url);
	mapQuery(url);
}
function mapQuery(url) {
	$('#iframeMap').attr('src', url);
}

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

//Saves the state of the map.
function mapSaveMapState(url) { sessionStorage.mapSavedQuery = JSON.stringify(url); }
//Reverts to the previously saved state (before the received shared map).
function mapRevertState() {
	$('#mapsCloseShare').hide();
	var url = JSON.parse(sessionStorage.mapSavedQuery);
	mapQuery(url)
}

//Confirms if the user allows another user to share the map.
function mapShareWithMeAllow() { confirmationOverlayShow('Do you allow user 1 to share the map with you?', mapSharedWithMe, []); }
//Simulates the other user's map.
function mapSharedWithMe() {
	$('#mapsCloseShare').show();
	destination = 'alameda lisboa';
	travelMode = 'driving';
	var url = 'https://www.google.com/maps/embed/v1/directions'+googleMapsKey+googleMapsOrigin+'&destination='+destination+'&mode='+travelMode;
	mapQuery(url)
}
//Adds a user to the share-to-poll.
function mapShareAddUser(button) { button.toggleClass('buttonWhite').toggleClass('buttonReward'); }
//Simulates sharing the map with another user.
function mapShare() { confirmationOverlayShow('Do you really wish to share your map?', shared, []); }
//Feedback for the user.
function shared(arg) { acknowledgementOverlayShow('Your map was shared.'); }

function mapGetPointsOfInterest(button) {
	$('.interestsButton').removeClass('buttonReward').addClass('buttonWhite');
	button.toggleClass('buttonWhite').toggleClass('buttonReward');
	var pointType = button.attr('id');
	var keyWords = '';
	switch(pointType) {
		case 'bars': keyWords = 'bars+oeiras';
			break;
		case 'landscapes': keyWords = 'parks+oeiras';
			break;
		case 'mall': keyWords = 'malls+oeiras';
			break;
		case 'monuments': keyWords = 'monuments+oeiras';
			break;
		case 'museums':	keyWords = 'museums+oeiras';
			break;
	}
	var url = 'https://www.google.com/maps/embed/v1/search'+googleMapsKey+'&q='+keyWords;
	mapSaveMapState(url);
	mapQuery(url)
}

function mapDirectionsChooseMode(button) {
	const MODES_GO = ['on foot', 'car', 'public transport'];
	const MODES_ORDER = ['taxi', 'uber'];
	var transport = button.text().toLowerCase();
	$('.directionsButton').removeClass('buttonReward').addClass('buttonWhite');
	button.toggleClass('buttonWhite').toggleClass('buttonReward');
	$('#directionInput').show();
	googleMapsMode = (button.attr('id')).toLowerCase();
	if (MODES_GO.includes(transport)) {
		$('#go').text('Go!');
		$('#taxiTime').hide();
		$('#mic').removeClass('taxi');
	}
	else if (MODES_ORDER.includes(transport)) {
		$('#go').text('Verify');
	}
}

function mapGetDirections(destination, travelMode) {
	if (travelMode == '') { travelMode = 'driving'; }
	var url = 'https://www.google.com/maps/embed/v1/directions'+googleMapsKey+googleMapsOrigin+'&destination='+destination+'&mode='+travelMode;
	mapSaveMapState(url);
	mapQuery(url);
}
function go() {
	var input = $('#mapsDestinationInput');
	var destination = input.val();
	if (destination.empty()) { //If the destination input bar is empty.
		input.effect('shake', {times:4}, 300)
			.css({'background-color':'rgb(0, 0, 0)'})
			.animate({'background-color':'rgb(255, 255, 255)'}, 500); //Shakes the input bar.
	}
	else { //If the destination input bar is NOT empty.
		// FIXME: Too specific and fragile
		if ($('#go').text() == 'Verify') {  taxiShowInformation(destination); }
		//If the user has verified the cab information and clicked the order button.
		else if ($('#go').text() == 'Order!') { confirmationOverlayShow('Are you sure you want to call a cab?', taxiCall, []); }
		//If the user selected any other method (not Uber or Taxi) shows the route.
		else { mapGetDirections(destination, googleMapsMode); }
	}
}

//Shows the taxi information and prepares the screen for ordering a taxi.
function taxiShowInformation(destination) {
	mapGetDirections(destination, googleMapsMode); //Shows the taxi route.
	$('#taxiTime').show(); //Shows the taxi information (ETAs).
	$('#mic').addClass('taxi'); //Changes the styling of the mic borders.
	$('#go').text('Order!'); //Changes the button text to 'Order!' so the user can order the taxi.
	preliminarTaxiNumber = 1;
	taxiETA = parseInt(Math.random() * 10 + 7); //Gets a random number between 7 and 17.
	$('#taxiETA').text('ETA: ' + taxiETA + 'MIN');
}
//Increments/Decrements the number of taxis to order.
function taxiIncrementNumber(incValue) {
	var i = preliminarTaxiNumber + incValue;
	//Do nothing.
	if (i == 0) { /*If the new number of taxis would be 0.*/ }
	else if (i > 0) { //If the number of taxis would still be more than 0.
		preliminarTaxiNumber += incValue;
		$('#taxiNumberLabel').text(preliminarTaxiNumber);
	}
}
//Orders the taxi(s)
function taxiCall(args) {
	var details = {
		'type': $('.directionsButton.active').text(),
		'number': preliminarTaxiNumber,
		'ETA': taxiETA,
		'destinationETA': 23,
	};
	sessionStorage.myTransportation = JSON.stringify(details);
	acknowledgementOverlayShow('Your taxi has been called.', null, []); //Feedback for the user.
	$('#menubar').menubar(); //Reloads the menu bar.
}
//Cancels the ordered taxi.
function taxiCancel() {
	// FIXME - @keyaku - incomplete.
	$('#menubar').menubar(); //Reloads the menu bar.
}


/*------------------------------------------------------------------------------

			MENU FLOW

------------------------------------------------------------------------------*/
$('#mapsShare').click(function() { shareStart($(this)); });
$('#mapsInterests').click(function() { interestsStart($(this)); });
$('#mapsDirections').click(function() { directionsStart($(this)); });

$('.shareButton').click(function() { mapShareAddUser($(this)); });
$('#shareConfirm').click(function() { mapShare(); });
$('#mapsCloseShare').click(function() { mapRevertState()});

$('.interestsButton').click(function() { mapGetPointsOfInterest($(this)); });

$('.directionsButton').click(function() { mapDirectionsChooseMode($(this)); });
$('#taxiDec').click(function() { taxiIncrementNumber(-1); });
$('#taxiInc').click(function() { taxiIncrementNumber(1); });
$('#mic').click(function() { mapInputDirection(); });
$('#go').click(function() { go(); });
$('#mapsDestinationInput').keypress(function(e) {
	switch (e.which) {
		case 13: // Enter/Return: Runs 'Go' button
			$('#go').click();
			break;
		default: //Stops the key press from propagating presses like 'S' while typing the destination.
			e.stopPropagation();
	}
});
$(document).keypress(function(e){
	if (e.which == 115) { mapShareWithMeAllow(); } //'S' key pressed.
	else if (e.which == 114) { mapRevertState(); } //'R' key pressed.
});
