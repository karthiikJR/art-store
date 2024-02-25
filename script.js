
// Hamburger menu
const navBar = document.querySelector(".menu");
const toggle = document.querySelector(".toggleBtn");

toggle.addEventListener("click", () => {
	const visible = navBar.getAttribute("data-visible");
	
	if(visible == "false") {
		navBar.setAttribute("data-visible", true);
		toggle.setAttribute("aria-expanded", true);
	}
	else {
		navBar.setAttribute("data-visible", false);
		toggle.setAttribute("aria-expanded", false);
	}
});

