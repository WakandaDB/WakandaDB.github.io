window.addEventListener('load', function() {
	var currentTab = null;
	var tabs = document.querySelectorAll('nav ul li a');
	var tabpanels = [];
	Array.prototype.forEach.call(tabs, function (tabLink) {
		var panelId = tabLink.attributes.href.value.substr(1);
		var tab = document.getElementById(panelId);
		if (tab.attributes['aria-selected'].value === "true") {
			currentTab = tab;
		} else {
			tab.style.display = 'none';
		}
		tabLink.addEventListener('click', function onTabNavClick() {
			currentTab.style.display = 'none';
			tab.style.display = 'block';
			currentTab = tab;
		});
	});
});