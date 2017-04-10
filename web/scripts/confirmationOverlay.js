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
$('main').append(MODAL_HTML);

var modal = $('#cancelModal');
var modalButtons = $('.modalButtons');
var modalOpener = $('#buttonCancel');
var modelCloser = $("#return");
var modalFinish = $("#proceed");
var destinationURL = "html/table.html";

modalOpener.click(function() {
	modal.show();
	modalButtons.show();
});

modelCloser.click(function() {
	modal.hide();
});

modalFinish.click(function() {
	$(location).attr('href', destinationURL)
});