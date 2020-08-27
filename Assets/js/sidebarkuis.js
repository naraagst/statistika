let key = this.location.pathname.substr(17,3);

const getNavLinkClass = (path) => {
  return this.location.pathname === path ? " active" : "";
};

const getChapClass = (path) => {
  return this.location.pathname.substr(15, 1) === path ? " active" : "";
};

const getShowClass = (path) => {
  return this.location.pathname.substr(15, 1) === path ? " show" : "";
};


document.querySelector(".sidebar").innerHTML = `
			<ul>
				<li><a href="../../../../index.html"><i class="fas fa-home" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i>Beranda</a></li>
				<li class="dropdown1${getChapClass("a")}  " id="materi1">
					<a href=javascript:void(0) class="dropbtn" onclick="dropdown6()" style="height:50px;">
						<div class="teksmenu">A. Menganalisis Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("a")}" id="myDropdown6">
					  <a href="../../a/analisis1.html" class="${getNavLinkClass("/Assets/materi/a/analisis1.html")}">Materi</a>
				      <a href="../../a/evaluasiA" class="${getChapClass("a")}  " id="kuisa">Kuis</a>
				    </div>
				</li>
				<li class="dropdown1 ${getChapClass("b")}  "  id="materi2">
					<a href=javascript:void(0) class="dropbtn" onclick="dropdown()" style="height:70px;">
						<div class="teksmenu">B. Ukuran Pemusatan Data </div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("b")}" id="myDropdown">
				      <a href="../../b/mean1.html" class="${getNavLinkClass("/Assets/materi/b/mean1.html")}  " id="mean">1.  Mean</a>
				      <a href="../../b/median1.html" class="${getNavLinkClass("/Assets/materi/b/median1.html")}  " id="median">2.  Median</a>
				      <a href="../../b/modus1.html" class="${getNavLinkClass("/Assets/materi/b/modus1.html")}  " id="modus">3.  Modus</a>
				      <a href="../../b/evaluasiB" class="${getChapClass("b")}  " id="kuisb">Kuis</a>
				    </div>
				</li>
				<li class="dropdown1 ${getChapClass("c")}  "  id="materi3">
					<a href=javascript:void(0) class="dropbtn" onclick="dropdown2()" style="height:70px;">
						<div class="teksmenu">C. Ukuran Penyebaran Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("c")}" id="myDropdown2">
				      <a href="../../c/jangkauan1.html" class="${getNavLinkClass("/Assets/materi/c/jangkauan1.html")}" id="jangkauan">1. Jangkauan</a>
				      <a href="../../c/kuartil1.html" class="${getNavLinkClass("/Assets/materi/c/kuartil1.html")}" id="kuartil">2. Kuartil</a>
				      <a href="../../c/interkuartil1.html" class="${getNavLinkClass("/Assets/materi/c/interkuartil1.html")}" id="interkuartil">3. Jangkauan Interkuartil</a>
				      <a href="../../c/simpangan1.html" class="${getNavLinkClass("/Assets/materi/c/simpangan1.html")}" id="simpangan">4. Simpangan Kuartil</a>
				      <a href="../../c/evaluasiC" class="${getChapClass("c")}" id="kuisc">Kuis</a>
				    </div>
				</li>
				<li class=" " id="latihan"><a href="../../Latihan" class="${getChapClass("l")}"><i class="fas fa-edit" style="font-size:21px;color:white;margin-right:10px;margin-top: -14px;"></i>Latihan</a>
				</li>
				<li class=" " id="unduh"><a target="_blank" rel="noopener noreferrer" href="https://shorturl.at/hjJLM"><i class="fas fa-download" style="font-size:22px;color:white;margin-right:10px;margin-top: -14px;"></i>Unduh Materi</a>
				</li>
			</ul>
`;
