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
