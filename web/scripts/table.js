/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$("#menubar").menubar({ minimized : false, }); //Adds the navigation bar
if (sessionStorage.getItem("ordered") != "true") {
	managerStart();
}

// Timer related code
// TODO: Add countdown element in page
