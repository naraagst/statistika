document.querySelector(".sidebar").innerHTML = `
			<ul>
				<li><a href="../../../../index.html"><i class="fas fa-home" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i>Beranda</a></li>
				<li class="dropdown1">
					<a href=javascript:void(0) class="dropbtn" id="materiA" onclick="dropdown6()" style="height:50px;">
						<div class="teksmenu">A. Menganalisis Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown" id="myDropdown6">
					  <a href="../../A/analisis1.html">Materi</a>
				      <a href="../../A/evaluasiA">Kuis</a>
				    </div>
				</li>
				<li class="dropdown1">
					<a href=javascript:void(0) class="dropbtn" id="materiB" onclick="dropdown()" style="height:70px;">
						<div class="teksmenu">B. Ukuran Pemusatan Data </div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown" id="myDropdown">
				      <a href="../../B/mean1.html" >1.  Mean</a>
				      <a href="../../B/median1.html">2.  Median</a>
				      <a href="../../B/modus1.html">3.  Modus</a>
				      <a href="../../B/evaluasiB">Kuis</a>
				    </div>
				</li>
				<li class="dropdown1">
					<a href=javascript:void(0) class="dropbtn" id="materiC" onclick="dropdown2()" style="height:70px;">
						<div class="teksmenu">C. Ukuran Penyebaran Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown" id="myDropdown2">
				      <a href="../../C/jangkauan1.html">1. Jangkauan</a>
				      <a href="../../C/kuartil1.html">2. Kuartil</a>
				      <a href="../../C/interkuartil1.html">3. Jangkauan Interkuartil</a>
				      <a href="../../C/simpangan1.html">4. Simpangan Kuartil</a>
				      <a href="../../C/evaluasiC">Kuis</a>
				    </div>
				</li>
				<li><a href="../../Latihan" id="latihan"><i class="fas fa-edit" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i>Latihan</a>
				</li>
			</ul>
`;