// Logic for Tom's prototype.
// ==========================

(function () {

	var $searchField = $('#js-search-input');
	var $icons = $('[data-icon-name]');

	var App = {
	    init: function() {
	    	$searchField.on('input', App.filterIcons);
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
	    }
	};

	// Start.
	$(App.init);


})();