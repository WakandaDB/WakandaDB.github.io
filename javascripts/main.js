window.addEventListener('load', function() {
	var tabLists = document.querySelectorAll('nav[role=tablist]');
	Array.prototype.forEach.call(tabLists, function forEachTabList(tablist) {
		var currentTab = null;
		var tabs = tablist.getElementsByTagName('a');
		var tabpanels = [];
		Array.prototype.forEach.call(tabs, function (tabLink) {
			var panelId = tabLink.attributes.href.value.substr(1);
			var tab = document.getElementById(panelId);
			if (tab.getAttribute('aria-selected') === "true") {
				currentTab = tab;
			} else {
				tab.setAttribute('aria-hidden', 'true');
			}
			tabLink.addEventListener('click', function onTabNavClick(event) {
				//currentTab.style.display = 'none';
				//tab.style.display = 'block';
				currentTab.setAttribute('aria-selected', 'false');
				currentTab.setAttribute('aria-hidden', 'true');
				tab.setAttribute('aria-selected', 'true');
				tab.setAttribute('aria-hidden', 'false');
				currentTab = tab;
				if (event.stopPropagation) {
					event.stopPropagation();
				}
				event.cancelBubble = true;
				return false;
			});
		});
	});
});