let key = this.location.pathname.substr(17,3);
let tambah;
let kurang;
let nextMateri;

const getNavLinkClass = (path) => {
  return this.location.pathname === path ? " active" : "";
};

const getNavLinkClasses = (path) => {
  return this.location.pathname.substr(17,3) === path ? " active" : "";
};

const getChapClass = (path) => {
  return this.location.pathname.substr(15, 1) === path ? " active" : "";
};

const getShowClass = (path) => {
  return this.location.pathname.substr(15, 1) === path ? " show" : "";
};

const getPagesClass = (path) => {
  return this.location.pathname.substr(17) === path ? " active" : "";
};

document.querySelector(".sidebar").innerHTML = `
			<ul>
				<li><a href="../../../index.html"><i class="fas fa-home" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i>Beranda</a></li>
				<li class="dropdown1${getChapClass("a")}  " id="materiA">
					<a href=javascript:void(0) class="dropbtn" onclick="dropdown6()" style="height:30px;">
						<div class="teksmenu">A. Menganalisis Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("a")}" id="myDropdown6">
					  <a href="../a/analisis1.html" class="${getNavLinkClasses("ana")}">Materi</a>
				      <a href="../a/evaluasiA" class="${getNavLinkClass("/Assets/materi/a/evaluasiA/index.html")}">Kuis</a>
				    </div>
				</li>
				<li class="dropdown1 ${getChapClass("b")}  " id="materiB">
					<a href=javascript:void(0) class="dropbtn" onclick="dropdown()" style="height:50px;">
						<div class="teksmenu">B. Ukuran Pemusatan Data </div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("b")}" id="myDropdown">
				      <a href="../b/mean1.html" class="${getNavLinkClasses("mea")}">1.  Mean</a>
				      <a href="../b/median1.html" class="${getNavLinkClasses("med")}">2.  Median</a>
				      <a href="../b/modus1.html" class="${getNavLinkClasses("mod")}">3.  Modus</a>
				      <a href="../b/evaluasiB" class="${getNavLinkClass("/Assets/materi/b/evaluasiB/index.html")}">Kuis</a>
				    </div>
				</li>
				<li class="dropdown1 ${getChapClass("c")}  " id="materiC">
					<a href=javascript:void(0) class="dropbtn" onclick="dropdown2()" style="height:50px;">
						<div class="teksmenu">C. Ukuran Penyebaran Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("c")}" id="myDropdown2">
				      <a href="../c/jangkauan1.html" class="${getNavLinkClasses("jan")}">1. Jangkauan</a>
				      <a href="../c/kuartil1.html" class="${getNavLinkClasses("kua")}">2. Kuartil</a>
				      <a href="../c/interkuartil1.html" class="${getNavLinkClasses("int")}">3. Jangkauan Interkuartil</a>
				      <a href="../c/simpangan1.html" class="${getNavLinkClasses("sim")}">4. Simpangan Kuartil</a>
				      <a href="../c/evaluasiC" class="${getNavLinkClass("/Assets/materi/c/evaluasiC/index.html")}">Kuis</a>
				    </div>
				</li>
				<li><a href="../latihan" class="${getNavLinkClass("/Assets/materi/Latihan/index.html")}" id="latihan"><i class="fas fa-edit" style="font-size:21px;color:white;margin-right:10px;margin-top: -14px;"></i>Latihan</a>
				</li>
				<li><a target="_blank" rel="noopener noreferrer" href="https://shorturl.at/zF357"><i class="fas fa-download" style="font-size:22px;color:white;margin-right:10px;margin-top: -14px;"></i>Unduh Materi</a>
				</li>
			</ul>
`;

if (key === "mea"){
	tambah = Number(this.location.pathname.substr(21, 1))+1;
	kurang = Number(this.location.pathname.substr(21, 1))-1;

	if (tambah==6){ nextMateri = "median1.html" } 
	else {nextMateri = "mean"+tambah+".html";}

	console.log(tambah)
	document.querySelector(".halaman").innerHTML=`
				<div class="btn-group">
					<a href="mean${kurang}.html"><< Sebelumnya</a>
					<a href="mean1.html" class="${getPagesClass("mean1.html")}" id="mean1">1</a>
					<a href="mean2.html" class="${getPagesClass("mean2.html")}" id="mean2">2</a>
					<a href="mean3.html" class="${getPagesClass("mean3.html")}" id="mean3">3</a>
					<a href="mean4.html" class="${getPagesClass("mean4.html")}" id="mean4">4</a>
					<a href="mean5.html" class="${getPagesClass("mean5.html")}" id="mean5">5</a>
					<a href="${nextMateri}">Selanjutnya >></a>
				</div>
`
}