console.log(localStorage.getItem("orderedPizza"));


$("#pizzaIngredients").append(getPizzaItem("Camponesa"));
$("#timer").countdown360({
	radius: 65,                        // radius of arc
	strokeStyle: "#ecf0f1",            // the color of the stroke
	strokeWidth: 5,
	fillStyle: "#bdc3a7",              // the fill color
	fontColor: "#ecf0f1",              // the font color
	fontWeight: 700,                   // the font weight
	autostart: true,                   // start the countdown automatically
	seconds: 480,                      // the number of seconds to count down
	label: ["second", "minute"],       // the label to use or false if none
	smooth: true,                      // should the timer be smooth or stepping
	onComplete: function () {}
});
