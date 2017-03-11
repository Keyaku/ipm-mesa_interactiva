/*
** aFeeder jQuery RSS Feed Plugin
** Uses rss2json, https://rss2json.com/
**
********************************************************************************
**
** The MIT License
**
** Copyright (c) 2017 Keyaku - https://github.com/Keyaku
**
** Permission is hereby granted, free of charge, to any person obtaining a copy
** of this software and associated documentation files (the "Software"), to deal
** in the Software without restriction, including without limitation the rights
**  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
**  copies of the Software, and to permit persons to whom the Software is
**  furnished to do so, subject to the following conditions:
**
**  The above copyright notice and this permission notice shall be included in
**  all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
**  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
**  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
**  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
**  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
**  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
**  THE SOFTWARE.
**
********************************************************************************
*/

(function($) {
    $.fn.aFeeder = function(opt) {
        var def = $.extend({
			feedURL       : null,
			offline       : false,
			key           : '0000000000000000000000000000000000000000',
			maxCount      : 5,
			showDesc      : true,
			descCharLimit : 0,
			onComplete    : function() {},
        }, opt);

		var container = $(this);

		/* Stop everything if feedURL is undefined */
		if (def.feedURL == undefined) {
			/* If it's not supposed to be offline, attach a message */
			if (!def.offline) {
				container.empty();
				container.append('<p>No feed URL defined.</p>');
			}
			return;
		} else if (def.offline) {
			return;
		}

        $.ajax({
            url: 'https://api.rss2json.com/v1/api.json',
			method: 'GET',
            dataType: "json",
			data: {
				rss_url: def.feedURL,
	            api_key: def.key,
	            count: def.maxCount,
			}
		}).done(function(response) {
			/* Throw error message */
			if (response.status != 'ok') { throw response.message; }

			/* Parsing HTML */
			var s = '';
			$.each(response.items, function(i, item) {
				/* Opening list item */
				s += '<li'

				/* Fetching thumbnail */
				if (item.thumbnail.length > 0) {
					s += ' style="background-image: url(\'' + item.thumbnail + '\');"';
				}

				/* Closing link */
				s += '><a href="' + item.link + '"><p class="newsTitle">' + item.title + '</p></a>';

				/* Showing description */
				if (def.showDesc) {
					s += '<div class="newsDescription">';
					if (def.descCharLimit > 0 && item.description.length > def.descCharLimit) {
						s += item.description.substring(0, def.descCharLimit) + '...';
					} else {
						s += item.description;
					}
					s += '</div>';
				}

				/* Closing list item */
				s += '</li>'
			});

			/* Appending final HTML string */
			container.empty();
			container.append('<ul class="overview">' + s + '</ul>');
			/* Adding source's logo */
			var logo = response.feed.image;
			container.append('<img class="logoIcon" src=\'' + logo + '\' />');

			/* Activating attached callback */
			def.onComplete();
		});
    };
})(jQuery);
