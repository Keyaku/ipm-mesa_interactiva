/******* (Re)defining Prototypes *******/
// Array
Array.prototype.first = function() { return this[0]; };
Array.prototype.last  = function() { return this[this.length - 1]; };
// String
String.prototype.empty = function() { return !this.trim(); };

/****** Code execution *******/
$(document).ready(function(){
	// Starting svg4everybody
	svg4everybody({polyfill:true});
});

/****** Stuff *******/
$(":header").css({cursor: "default"});

function randomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Functions to attach to elements */
$.fn.followAlong = function() {
    var container = $(this);
    var minTop = container.parent().top;
    var maxTop = container.parent().height() - container.outerHeight(true);

    $(document).scroll(function() {
        if ($(window).scrollTop() > maxTop) {
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
