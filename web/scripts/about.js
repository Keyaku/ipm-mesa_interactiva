// Sliding logo along the header
$('#logoIST').followAlong("header");

// Arranging subsections, considering what's hidden
$("section").each(
	function() {
		var len = $("div", $(this)).length - $("div.hidden", $(this)).length;
		var num = Math.floor(12 / len);
		console.log(num);
		$("div", $(this)).addClass("col-md-" + num)
	}
);
