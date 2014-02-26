/**
 * @preserve
 *
 *	Project:    liteTabs - Lightweight jQuery tabs plugin
 *	Author:     Nicola Hibbert
 *	Url:        http://nicolahibbert.com/lightweight-jquery-tab-plugin/
 *	Demo:       http://www.nicolahibbert.com/demo/liteTabs/
 *
 *	Version:    1.0.0
 *	Copyright:  (c) 2010-2011 Nicola Hibbert
 *	License:    MIT
 *
 */
;(function($) {

	$.fn.liteTabs = function(options) {

		return this.each(function() {

			var defaults = {
				borders: false,
				boxed: false,
				fadeIn: false,
				height: 'auto',
				hideHash: false,
				rounded: false,
				selectedTab: 1,
				width: 'auto'
			},
			first_load = true,

			// merge defaults with options in new settings object
			settings = $.extend({}, defaults, options),

			// define key variables
			$this = $(this),
			$ul = $this.children('ul'),
			$tab = $ul.find('a'),
			$div = $('> div', $this);

			// set liteTabs class for css & set optional overall width
			$this.addClass('liteTabs').width(settings.width);

			// option: set overall height
			$div.css({
				height: settings.height,
				width: settings.width - (parseInt($div.css('padding-left')) + parseInt($div.css('padding-right'))),
				position: 'absolute',
				left: -9999
			});

			// on tab click...
			$tab.click(function(e) {
				hash = this.hash;

				// On first load, check URL fragments for valid hashs.
				if (first_load && window.location.hash) {
					if ($div.filter( window.location.hash + '_')) {
						hash = window.location.hash;
					}
				}
				first_load = false;
				// The div's id has a trailing underscore to prevent
				// the url fragment from scrolling the page.
				var filterHash = $div.removeClass('selected').filter(hash + '_');

				// defaults: add selected class to tab
				$tab.removeClass('selected').filter('[href=' + hash + ']').addClass('selected');

				// option: fade in divs
				(settings.fadeIn) ? filterHash.hide().addClass('selected').fadeIn() : filterHash.addClass('selected');

				// option: hide hash change
				settings.hideHash && e.preventDefault();

			});

			// option: set selected tab
			settings.selectedTab && $tab.eq(settings.selectedTab - 1).click();

			// option: set rounded corners
			settings.rounded && $this.addClass('rounded');

			// option: set borders
			settings.borders && $this.addClass('borders') && settings.width != 'auto' && $div.width($div.width() - (parseInt($div.css('border-left-width')) + parseInt($div.css('border-right-width'))));

			// option: set boxed
			settings.boxed && $this.addClass('boxed');

		});

	};

})(jQuery);
