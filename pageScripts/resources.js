//Set the current page variable
curPage = "resources";


var checkExist = setInterval(function() {
	if ($("h1").length) {
		$(".MTWCGV-c-g").css("max-height", "400px");
		$(".page-header > h1:contains('Ressources')").html("Resources");
		if (document.title == "Ressources") document.title = "Resources";
	}
});
