/****** Code execution *******/
$(document).ready(function() {
	// Animating title
	setTimeout(function() {
		$(".titleSubtitle").fadeIn(2500);
	}, 500);

	// Scrolling automatically to bottom
	// FIXME: Doesn't work for some reason
	$("header").scroll(function() {
		$('html, body').scrollTo("main", 1000);
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
