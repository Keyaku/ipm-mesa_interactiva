/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$("#menubar").menubar({ minimized : false, }); //Adding navigation bar
if (sessionStorage.getItem("ordered") != "true") {
	managerStart();
}

// Timer related code
// TODO: Add countdown element in page
