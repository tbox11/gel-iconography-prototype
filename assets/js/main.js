// Logic for Tom's prototype.
// ==========================
$(document).ready(function() {

	var numSelectedIcons = 0;

	$('.icon').click(function() {

		var iconIsSelected = $(this).hasClass('selected-icon');

		// If Icon has already been clicked, then:
		if (iconIsSelected) {

			// 1. Decrease the counter variable.
			numSelectedIcons = numSelectedIcons - 1;

			// 2. Remove the selected class.
			$(this).removeClass('selected-icon');

			// 3. Update the selection counter to our counter variable value.
			$('#selection-counter').html(numSelectedIcons);

			// 4. If our counter is less-than or equal to 0, ALSO
			//     hide the download bar.
			if (numSelectedIcons <= 0) {
				$('.dl-bar').css('opacity', '0');
			}

			// FOR DOWNLOAD
			// - set DL link back to #

		// If Icon has NOT been clicked, then:
		} else {

			// 1. Increase our counter variable.
			numSelectedIcons = numSelectedIcons + 1;

			// 2. Add selected class.
			$(this).addClass('selected-icon');

			// 3. Show the download bar.
			$('.dl-bar').css('opacity', '1');

			// 4. Update the selection counter with our counter variable value.
			$('#selection-counter').html(numSelectedIcons);


			// FOR DOWNLOAD
			// - Get the src of the icon
			// - and set the href of the DL link to it

		}

	});

});


(function () {

	var $searchField = $('#js-search-input');
	var $icons = $('[data-icon-name]');
	var $toc = $('#js-gel-guideline-table-of-contents');

	var App = {
	    init: function() {
	    	$searchField.on('input', App.filterIcons);

	    	// inView.offset({ top: $toc.outerHeight() });
	    	// inView.threshold(0);
	    	inView('#js-search-input')
	    		.on('exit', App.pinToc)
	    		.on('enter', App.unpinToc);
	    },

	    filterIcons: function(e) {
	    	var tagQuery = $(this).val();

	    	if (tagQuery === '') {
	    		$icons.each(function (i, icon) {
	    			$(icon).removeClass('gel-icon-demo--not-filtered');
	    			$(icon).removeClass('gel-icon-demo--filtered');
	    		});
	    	} else {
		    	$icons.each(function (i, icon) {
		    		var tagName = $(icon).data().iconTag;
		    		var iconName = $(icon).data().iconName;

	    			if (tagQuery === tagName || tagQuery === iconName) {
	    				$(icon).addClass('gel-icon-demo--filtered');
	    				$(icon).removeClass('gel-icon-demo--not-filtered');
	    			} else {
	    				$(icon).addClass('gel-icon-demo--not-filtered');
	    				$(icon).removeClass('gel-icon-demo--filtered');
	    			}
		    	});
	    	}
	    },

	    pinToc: function (elem) {
	    	$toc.addClass('gel-guideline-table-of-contents--pinned');
	    },

	    unpinToc: function (elem) {
	    	$toc.removeClass('gel-guideline-table-of-contents--pinned');
	    },
	};

	// Start.
	$(App.init);

})();
