jQuery.fn.liteTabs = function(options) {

    var lt = this,
	tab = lt.children('ul').find('a'),
	div = lt.children('div'),
	opts = jQuery.extend({
	    height : 'auto',
	    width : 500,
	    hideHash : true,
	    fadeIn : false,
	    selectedTab : 1
	}, options);

    // prog. enhancement: set position w/ js -> tabs visible when js disabled
    // option: set height
    div.addClass('pos').height(opts.height).width(opts.width - 20);

    // option: set width
    lt.width(opts.width);

	// on tab click...
    tab.click(function(e) {

		// default: add selected class to tab
		tab.removeClass('selected').filter(this).addClass('selected');

		// option: fade in divs
		if (opts.fadeIn) {
			div.removeClass('selected').filter('[name=' + this.hash + ']').hide().addClass('selected').fadeIn();
		} else {
			// default: add selected class to div
			div.removeClass('selected').filter('[name=' + this.hash + ']').addClass('selected');
		}

		// option: hide hash change
		if (opts.hideHash) {
			e.preventDefault();
		}

    });

    // option: set selected tab
    if (typeof opts.selectedTab === 'number' && opts.selectedTab > 0) {
		tab.eq(--opts.selectedTab).click();
    }

    return lt;

};