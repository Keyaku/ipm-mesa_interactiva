$("#countdown").countdown360({
	// Pie configuration
    radius      : 60.5,                  // radius of arc
    strokeStyle : "darkorange",          // the color of the stroke
    strokeWidth : 3,                     // the stroke width, dynamically calulated if omitted in options
    fillStyle   : "#333",                // the fill color
	smooth      : true,                  // update the ticks every 16ms when true

	// Font configuration
    fontColor   : "white",               // the font color
    fontFamily  : "sans-serif",          // the font family
    fontSize    : undefined,             // the font size, dynamically calulated if omitted in options
    fontWeight  : 700,                   // the font weight

	// Timer configuration
    autostart   : true,                  // start the countdown automatically
    seconds     : 70,                    // the number of seconds to count down
    label       : ["second", "seconds"], // the label to use or false if none, first is singular form, second is plural
    startOverAfterAdding: true,          // Start the timer over after time is added with addSeconds
    onComplete  : function() {}
}).start()
