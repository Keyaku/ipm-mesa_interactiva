function execute(args) {
	window.location.href = 'html/table.html';
}

$('#buttonCancel').click(function() {
	confirmationOverlayShow("Do you really wish to skip the rating step?", execute, []);
});

$('#buttonConfirm').click(function() {
	execute([]);
});
