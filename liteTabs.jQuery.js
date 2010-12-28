/*******************************************

	project:  liteTabs - Lightweight jQuery tabs plugin
	author:   Nicola Hibbert
	url:	  http://nicolahibbert.com/lightweight-jquery-tab-plugin/
	demo:	  http://www.nicolahibbert.com/demo/liteTabs/

	Copyright (c) 2010-2011 Nicola Hibbert
	License: Creative Commons 3.0 Attribution
		http://creativecommons.org/licenses/by/3.0/

/*******************************************/

(function($) {

	$.fn.liteTabs = function(options) {
		var lt = this,
		ul = lt.children('ul'),
		tab = ul.find('a'),
		div = lt.children('div'),
		opts = jQuery.extend({
			borders : false,
			boxed : false,
			colourScheme : false,
			fadeIn : false,
			height : 'auto',
			hideHash : false,
			rounded : false,
			selectedTab : 1,
			width : 500
		}, options);

		return this.each(function() {

			// set liteTabs class for css
			lt.addClass('liteTabs');

			// option: set overall height
			div.addClass('pos').height(opts.height).width(opts.width - 20);

			// option: set overall width
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
			if (opts.selectedTab) {
				tab.eq(--opts.selectedTab).click();
			}

			// option: set rounded corners
			if (opts.rounded) {
				lt.addClass('rounded');
			}

			// option: set borders
			if (opts.borders) {
				lt.addClass('borders');
				div.width(div.width() - 2);	// need to fix this
			}

			if (opts.boxed) {
				lt.addClass('boxed');
			}

			return lt;

		});
	};

})(jQuery);