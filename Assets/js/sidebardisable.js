document.querySelector(".sidebar").innerHTML = `
			<ul>
				<li><a href="../../../../index.html"><i class="fas fa-home" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i>Beranda</a></li>
				<li class="dropdown1">
					<a href=javascript:void(0) class="dropbtn linkdisable" id="materiA" onclick="dropdown6()" style="height:50px;">
						<div class="teksmenu">A. Menganalisis Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
				</li>
				<li class="dropdown1">
					<a href=javascript:void(0) class="dropbtn linkdisable" id="materiB" onclick="dropdown()" style="height:70px;">
						<div class="teksmenu">B. Ukuran Pemusatan Data </div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
				</li>
				<li class="dropdown1">
					<a href=javascript:void(0) class="dropbtn linkdisable" id="materiC" onclick="dropdown2()" style="height:70px;">
						<div class="teksmenu">C. Ukuran Penyebaran Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
				</li>
				<li><a href=javascript:void(0) class="linkdisable" id="latihan" disable><i class="fas fa-edit" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i>Latihan</a>
				</li>
			</ul>
`;