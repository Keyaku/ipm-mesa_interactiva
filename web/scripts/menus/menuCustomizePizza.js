};


		typeDiv.append(ingredientDiv); //Appends the individual ingredients div to the types's div.
	}
}

$('#menubar').menubar();		// Adding menu bar
$('#navbar').navbar(); 			// Adding top navigation bar

$('pizzaSizes').click(function() {
	$(this).toggleClass('active');
	console.log("hello");
});

smallPizza.click(function() {
	smallPizza.toggleClass('active');
	mediumPizza.removeClass('active');
	largePizza.removeClass('active');
});
/*
mediumPizza.click(function() {
	smallPizza.css({ "fill" : "#ffffff", "stroke" : "#ffffff" });
	mediumPizza.css({ "fill" : "#6b9b37", "stroke" : "#6b9b37"  });
	largePizza.css({ "fill" : "#ffffff", "stroke" : "#ffffff" });
});

largePizza.click(function() {
	smallPizza.css({ "fill" : "#ffffff", "stroke" : "#ffffff" });
	mediumPizza.css({ "fill" : "#ffffff", "stroke" : "#ffffff" });
	largePizza.css({ "fill" : "#6b9b37", "stroke" : "#6b9b37"  });
});*/
