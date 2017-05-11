const MODAL_HTML = `
					<div id='modal'>
						<div id='modalContainer'>
							<h1 id='varMsg'>Title</h1>
							<p id='conMsg'></p>
							<div id='modalButtonContainer'></div>
						</div>
					</div>
					`;


/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$('main').append(MODAL_HTML);

/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function modalClose() { $('#modal').hide(); }
function confirmationOverlayShow(text, buttons={'OK':['buttonNeutral']}) {
	$('#varMsg').html(text);
	$('#modal').show();

	// Adding buttons
	var container = $('#modalButtonContainer');
	container.empty();
	for (var label in buttons) {
		var b_class = buttons[label][0];
		var b_click = buttons[label].length > 1 ? buttons[label][1] : function(){};
		container.append($('<button>', {
			html: label,
			'class': 'modalButton ' + b_class,
			'click': b_click
		}));
	}

	// Setting default behavior for ALL .modalButton
	$('.modalButton').click(modalClose);
}
