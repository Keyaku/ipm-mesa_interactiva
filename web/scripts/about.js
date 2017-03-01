/****** Code execution *******/
$(document).ready(function() {
	/* Animating title */
	setTimeout(function() {
		$(".titleSubtitle").fadeIn(2500);
	}, 500);

	/* Scroll automatically to main upon detecting down-scroll */
	var scroll_time = 800;
	// Firefox
	$('header').bind('DOMMouseScroll', function(e){
		if (e.originalEvent.detail > 0) {
			$('body').scrollTo("main", scroll_time);
		}
	});

	// IE, Opera, Safari
	$('header').bind('mousewheel', function(e){
		if (e.originalEvent.wheelDelta < 0) {
			$('body').scrollTo("main", scroll_time);
		}
	});
});

// Sliding logo along its parent's height
$('#logoIST').followAlong();

// Arranging subsections, considering what's hidden
$("section").each(
	function() {
		var len = $("div", $(this)).length - $("div.hidden", $(this)).length;
		var num = Math.floor(12 / len);
		$("div", $(this)).addClass("col-md-" + num)
	}
);
