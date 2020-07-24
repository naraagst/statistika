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

document.querySelector(".sidebar").innerHTML = `
			<ul>
				<li><a href="../../../index.html"><i class="fas fa-home" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i>Beranda</a></li>
				<li class="dropdown1${getChapClass("a")}  " id="materiA">
					<a href=javascript:void(0) class="dropbtn" onclick="dropdown6()" style="height:30px;">
						<div class="teksmenu">A. Menganalisis Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("a")}" id="myDropdown6">
					  <a href="../A/analisis1.html" class="${getNavLinkClasses("ana")}">Materi</a>
				      <a href="../A/evaluasiA" class="${getNavLinkClass("/Assets/materi/A/evaluasiA/index.html")}">Kuis</a>
				    </div>
				</li>
				<li class="dropdown1 ${getChapClass("b")}  " id="materiB">
					<a href=javascript:void(0) class="dropbtn" onclick="dropdown()" style="height:50px;">
						<div class="teksmenu">B. Ukuran Pemusatan Data </div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("b")}" id="myDropdown">
				      <a href="../B/mean1.html" class="${getNavLinkClasses("mea")}">1.  Mean</a>
				      <a href="../B/median1.html" class="${getNavLinkClasses("med")}">2.  Median</a>
				      <a href="../B/modus1.html" class="${getNavLinkClasses("mod")}">3.  Modus</a>
				      <a href="../B/evaluasiB" class="${getNavLinkClass("/Assets/materi/B/evaluasiB/index.html")}">Kuis</a>
				    </div>
				</li>
				<li class="dropdown1 ${getChapClass("c")}  " id="materiC">
					<a href=javascript:void(0) class="dropbtn" onclick="dropdown2()" style="height:50px;">
						<div class="teksmenu">C. Ukuran Penyebaran Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("c")}" id="myDropdown2">
				      <a href="../C/jangkauan1.html" class="${getNavLinkClasses("jan")}">1. Jangkauan</a>
				      <a href="../C/kuartil1.html" class="${getNavLinkClasses("kua")}">2. Kuartil</a>
				      <a href="../C/interkuartil1.html" class="${getNavLinkClasses("int")}">3. Jangkauan Interkuartil</a>
				      <a href="../C/simpangan1.html" class="${getNavLinkClasses("sim")}">4. Simpangan Kuartil</a>
				      <a href="../C/evaluasiC" class="${getNavLinkClass("/Assets/materi/C/evaluasiC/index.html")}">Kuis</a>
				    </div>
				</li>
				<li><a href="../Latihan" class="${getNavLinkClass("/Assets/materi/Latihan/index.html")}" id="latihan"><i class="fas fa-edit" style="font-size:21px;color:white;margin-right:10px;margin-top: -14px;"></i>Latihan</a>
				</li>
				<li><a target="_blank" rel="noopener noreferrer" href="https://shorturl.at/hjJLM"><i class="fas fa-download" style="font-size:22px;color:white;margin-right:10px;margin-top: -14px;"></i>Unduh Materi</a>
				</li>
			</ul>
`;