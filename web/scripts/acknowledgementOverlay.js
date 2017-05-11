const MODAL_HTML2 = `
					<div id='modal2'>
						<div id='modalContainer'>
							<p id='varMsg2'>Acknowledge.</p>
							<div id='modalButtonContainer'></div>
						</div>
					</div>
					`;


/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$('main').append(MODAL_HTML2);


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function modalClose2() { $('#modal2').hide(); }
function acknowledgementOverlayShow(text, buttons={'OK':['buttonNeutral']}) {
	$('#varMsg2').html(text);
	$('#modal2').show();

	// Adding buttons
	var container = $('#modal2 #modalButtonContainer');
	container.empty();
	for (var label in buttons) {
		var b_class = buttons[label][0];
		var b_click = buttons[label].length > 1 ? buttons[label][1] : modalClose2;
		container.append($('<button>', {
			html: label,
			'class': 'modalButton ' + b_class,
			'click': b_click
		}));
	}
}
