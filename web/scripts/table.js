/****** Code execution *******/
$(document).ready(function(){
	// Showing default overlay
	$('.overlay').hide();
	$('.overlay#order').show();

	$('.informationSubMenu').children('label').addClass('informationSubMenuTitle');
	$('.informationSubMenu div.subMenuIcon').css('filter', 'invert(100%)');
});

// Adding navigation bar
$('#menubar').menubar({
	minimized : false,
});

/***** Overlay content *****/
//Google Maps search
$('#barButton').click(function() { searchMap('bar+taguspark'); });
$('#mallButton').click(function() { searchMap('centro+comercial+oeiras'); });
$('#carButton').click(function() { directionsMap($('#mapsDestinationInput').val(), 'driving'); });
$('#publicTransportButton').click(function() { directionsMap($('#mapsDestinationInput').val(), 'transit'); });

/***** Timer-related code *****/
// TODO: Add countdown element in page
