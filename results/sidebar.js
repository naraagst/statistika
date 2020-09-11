const getNavLinkClass = (path) => {
  return this.location.pathname.substr(9) === path ? " active" : "";
};

document.querySelector(".sidebar").innerHTML = `
	<ul>
		<li><a href="pretest.html" class="${getNavLinkClass("pretest.html")}">1. Pretest</a></li>
		<li><a href="jwbkuisa.html" class="${getNavLinkClass("jwbkuisa.html")}">2. Kuis A</a></li>
		<li><a href="jwbkuisb.html" class="${getNavLinkClass("jwbkuisb.html")}">3. Kuis B</a></li>
		<li><a href="jwbkuisc.html" class="${getNavLinkClass("jwbkuisc.html")}">4. Kuis C</a></li>
		<li><a href="jwbposttest.html" class="${getNavLinkClass("jwbposttest.html")}">5. Latihan</a></li>
	</ul>
`
function sidebar() {
  let content = document.querySelector(".content");
  content.classList.toggle("opa");
  document.getElementById("sidebar").classList.toggle("show");
}