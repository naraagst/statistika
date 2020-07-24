const getNavLinkClass = (path) => {
  return this.location.pathname === path ? " active disabled" : " disabled";
};

const getChapClass = (path) => {
  return this.location.pathname.substr(15, 1) === path ? " active" : " disabled";
};

const getChapClasses = (path) => {
  return this.location.pathname.substr(15, 1) === path ? " active disabledlat" : " disabled";
};

const getShowClass = (path) => {
  return this.location.pathname.substr(15, 1) === path ? " show" : "";
};


document.querySelector(".sidebar").innerHTML = `
			<ul>
				<li><a href="../../../../index.html"><i class="fas fa-home" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i>Beranda</a></li>
				<li class="dropdown1${getChapClass("A")}">
					<a href=javascript:void(0) class="dropbtn" id="materiA" onclick="dropdown6()" style="height:50px;">
						<div class="teksmenu">A. Menganalisis Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("A")}" id="myDropdown6">
					  <a href="../../A/analisis1.html" class="${getNavLinkClass("/Assets/materi/A/analisis1.html")}">Materi</a>
				      <a href="../../A/evaluasiA" class="${getChapClasses("A")}">Kuis</a>
				    </div>
				</li>
				<li class="dropdown1 ${getChapClass("B")}">
					<a href=javascript:void(0) class="dropbtn" id="materiB" onclick="dropdown()" style="height:70px;">
						<div class="teksmenu">B. Ukuran Pemusatan Data </div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("B")}" id="myDropdown">
				      <a href="../../B/mean1.html" class="${getNavLinkClass("/Assets/materi/B/mean1.html")}">1.  Mean</a>
				      <a href="../../B/median1.html" class="${getNavLinkClass("/Assets/materi/B/median1.html")}">2.  Median</a>
				      <a href="../../B/modus1.html" class="${getNavLinkClass("/Assets/materi/B/modus1.html")}">3.  Modus</a>
				      <a href="../../B/evaluasiB" class="${getChapClasses("B")}">Kuis</a>
				    </div>
				</li>
				<li class="dropdown1 ${getChapClass("C")}">
					<a href=javascript:void(0) class="dropbtn" id="materiC" onclick="dropdown2()" style="height:70px;">
						<div class="teksmenu">C. Ukuran Penyebaran Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("C")}" id="myDropdown2">
				      <a href="../../C/jangkauan1.html" class="${getNavLinkClass("/Assets/materi/C/jangkauan1.html")}">1. Jangkauan</a>
				      <a href="../../C/kuartil1.html" class="${getNavLinkClass("/Assets/materi/C/kuartil1.html")}">2. Kuartil</a>
				      <a href="../../C/interkuartil1.html" class="${getNavLinkClass("/Assets/materi/C/interkuartil1.html")}">3. Jangkauan Interkuartil</a>
				      <a href="../../C/simpangan1.html" class="${getNavLinkClass("/Assets/materi/C/simpangan1.html")}">4. Simpangan Kuartil</a>
				      <a href="../../C/evaluasiC" class="${getChapClasses("C")}">Kuis</a>
				    </div>
				</li>
				<li><a href="../../Latihan" class="${getChapClass("L")}" id="latihan"><i class="fas fa-edit" style="font-size:21px;color:white;margin-right:10px;margin-top: -14px;"></i>Latihan</a>
				</li>
				<li><a target="_blank" rel="noopener noreferrer" href="https://shorturl.at/hjJLM"><i class="fas fa-download" style="font-size:22px;color:white;margin-right:10px;margin-top: -14px;"></i>Unduh Materi</a>
				</li>
			</ul>
`;