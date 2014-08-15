head.ready(function() {

	var tabs        = $('.js-tabs'),
		tab         = tabs.find('.js-tab').children(),
		tabContent  = tabs.find('.js-tabcontent').children(),
		activeClass = 'is-active',

		search      = $('.search'),
		searchShow  = $('.js-search-show'),
		searchHide  = $('.js-search-hide');

	// hide all tabcontents exept first
	tabContent.not(':first-child').hide();

	tab.click(function(event) {
		var activeTabIndex = $(this).index();
		// change active tab
		tab.removeClass(activeClass);
		$(this).addClass(activeClass);
		// change active tabcontent
		tabContent.hide();
		tabContent.eq(activeTabIndex).show();
		return false;
	});

	searchShow.click(function(event) {
		search.slideToggle();
		searchShow.toggleClass('is-inactive');
		return false;
	});

	searchHide.click(function(event) {
		search.slideUp();
		searchShow.removeClass('is-inactive');
		return false;
	});

});


