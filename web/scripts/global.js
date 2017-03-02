/****** Code execution *******/
$(":header").css({cursor: "default"});

/* Functions to attach to elements */
$.fn.followAlong = function() {
	var $window = $(window)
    var container = $(this);
    var minTop = container.parent().top;
    var maxTop = container.parent().height() - container.outerHeight(true);

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
