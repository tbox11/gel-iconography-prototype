// Logic for Tom's prototype.
// ==========================

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