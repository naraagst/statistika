const getNavLinkClass = (path) => {
  return this.location.pathname.substr(9) === path ? " active" : "";
};

document.querySelector(".sidebar").innerHTML = `
	<ul>
		<li><a href="pretest.html" class="${getNavLinkClass("pretest.html")}">1. Pretest</a></li>
		<li><a href="kuisa.html" class="${getNavLinkClass("kuisa.html")}">2. Kuis A</a></li>
		<li><a href="kuisb.html" class="${getNavLinkClass("kuisb.html")}">3. Kuis B</a></li>
		<li><a href="kuisc.html" class="${getNavLinkClass("kuisc.html")}">4. Kuis C</a></li>
		<li><a href="latihan.html" class="${getNavLinkClass("latihan.html")}">5. Latihan</a></li>
	</ul>
`
function sidebar() {
  let content = document.querySelector(".content");
  content.classList.toggle("opa");
  document.getElementById("sidebar").classList.toggle("show");
}