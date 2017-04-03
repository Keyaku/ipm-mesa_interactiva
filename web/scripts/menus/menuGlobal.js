function getTopStatusBar() {
	var d = $("<div></div>").addClass("topStatusbar");
	d.append($("<div></div>").addClass("topStatusBarArrows").append(document.createTextNode("------------------------------------------------------------------>")));
	d.append($("<div></div>").addClass("topStatusBarNames").append(document.createTextNode("Pizza")));
	d.append($("<div></div>").addClass("topStatusBarArrows").append(document.createTextNode("------------------------------------------------------------------>")));
	d.append($("<div></div>").addClass("topStatusBarNames").append(document.createTextNode("Drinks")));
	d.append($("<div></div>").addClass("topStatusBarArrows").append(document.createTextNode("------------------------------------------------------------------>")));
	d.append($("<div></div>").addClass("topStatusBarNames").append(document.createTextNode("Confirm")));
	return d;
}

$("#topStatusbar").append(getTopStatusBar());
