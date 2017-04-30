const MODAL_HTML2 = `
					<div id='modal2'>
						<div id='modalContainer'>
							<p id='varMsg2'>Acknowledge.</p>
							<div id='modalButtonContainer'>
								<button class='modalButton buttonNeutral' id='return2'>OK</button>
							</div>
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
function acknowledgementOverlayShow(text) {
	$('#varMsg2').html(text);
	$('#modal2').show();
}


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
$('#return2').click(function() { modalClose2(); });
