const MODAL_HTML = `
					<div id="cancelModal">
						<div id="modalContainer">
							<p id="varMsg">Do you really wish to cancel your order?</p>
							<p id="conMsg">This action is irreversible.</p>
							<div id="buttonContainer">
								<button class="modalButtons" id="proceed">Yes</button>
								<button class="modalButtons" id="return">No</button>
							</div>
						</div>
					</div>
					`;


/*------------------------------------------------------------------------------

				CODE EXECUTION

------------------------------------------------------------------------------*/
$('main').append(MODAL_HTML);

var modal = $('#cancelModal');
var modalButtons = $('.modalButtons');
var functionCallBack = confirmationOverlayShow;
var functionCallBackArg1 = 0;


/*------------------------------------------------------------------------------

				AUXILIAR FUNCTIONS

------------------------------------------------------------------------------*/
function confirmationOverlayShow(callback, fCBA1) {
	modal.show();
	modalButtons.show();
	functionCallBack = callback;
	functionCallBackArg1 = fCBA1;
}
function modalClose() { modal.hide(); }


/*------------------------------------------------------------------------------

				MENU FLOW

------------------------------------------------------------------------------*/
$("#return").click(function() { modalClose(); });
$("#proceed").click(function() {
	functionCallBack(functionCallBackArg1);
	modalClose();
});
