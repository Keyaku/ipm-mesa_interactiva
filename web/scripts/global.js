$.fn.followTo = function(limitDiv) {
	var $window = $(window)
    var container = $(this);
    var minTop = $(limitDiv).top;
    var maxTop = $(limitDiv).height() - container.outerHeight(true);
	console.log(maxTop);

    $(document).scroll(function() {
        if ($window.scrollTop() > maxTop) {
			container.css({
                position: 'absolute',
                top: maxTop
            });
        } else {
			container.css({
                position: 'fixed',
                top: 0
            });
		}
    });
};
