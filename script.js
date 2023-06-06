document.addEventListener("DOMContentLoaded", function () {
	var itemSellElements = document.querySelectorAll(".itmImg");

	itemSellElements.forEach(function (element) {
		element.addEventListener("mouseover", function () {
			// Scale up the element
			element.style.transform = "scale(0.55)";
            element.style.transition = "transform 0.2s ease";
		});

		element.addEventListener("mouseleave", function () {
			// Scale back to the original size
			element.style.transform = "scale(0.5)";
            element.style.transition = "transform 0.2s ease";
		});
	});
});
