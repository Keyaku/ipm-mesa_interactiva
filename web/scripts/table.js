/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$("#menubar").menubar({ minimized : false, }); //Adding navigation bar
sessionStorage.setItem("orderNumber", "0");
if (sessionStorage.getItem("order0") != "true") {
	sessionStorage.setItem("orders", "0");
}

// Timer related code
// TODO: Add countdown element in page
