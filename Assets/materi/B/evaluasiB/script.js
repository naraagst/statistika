const myQuestions = [
	{
		question:"Data nilai ulangan Matematika siswa kelas IXA sebagai berikut.<p><center><img src='../../../gambar/UPM1.PNG'></center></p><p>Mean, median dan modus dari data tersebut berturut-turut adalah ...</p>",
		answers:{
			"a": "7.25, 8, dan 10",
	        "b": "7.25, 7, dan 7",
	        "c": "6.25, 7, dan 8",
	        "d": "6.25, 8, dan 7"
		},
		correctAnswer:"b"
	},
	{
		question:"Data tinggi badan siswa kelas IXB diukur sampai cm terdekat sebagai berikut.<br/><div class='tabel' style='margin-top:10px;'><center><table><tr><th>Tinggi Badan (cm)</th><th>Banyak Siswa</th></tr><tr><td>146</td><td>4</td></tr><tr><td>148</td><td>9</td></tr><tr><td>150</td><td>10</td></tr><tr><td>152</td><td>8</td></tr><tr><td>154</td><td>5</td></tr><tr><td>156</td><td>4</td></tr></table></center></div><p>Rata-rata dan modus dari data tersebut berturut-turut adalah ...</p>",
		answers:{
			"a": "151.60 dan 150",
	        "b": "150.65 dan 147",
	        "c": "150.65 dan 150",
	        "d": "151.60 dan 147"
		},
		correctAnswer:"c"
	},
	{
		question:"Data nilai ulangan Fisika siswa kelas IXA disajikan dalam tabel berikut.<div class='tabel' style='margin-top:10px;'><center><table><tr><th>Nilai</th><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr><tr><th>Frekuensi</th><td>6</td><td>8</td><td>10</td><td>9</td><td>7</td></tr></table></center></div><p>Siswa yang memperoleh nilai kurang dari nilai rata-rata harus mengikuti remidi. Siswa yang ikut remidi sebanyak ...</p>",
		answers:{
			"a": "14 anak",
	        "b": "16 anak",
	        "c": "18 anak",
	        "d": "24 anak"
		},
		correctAnswer:"d"
	},
	{
		question:"Perhatikan tabel berikut. <div class='tabel' style='margin-top:10px;'><center><table><tr><th>Berat Badan (kg)</th><th>Frekuensi</th></tr><tr><td>40</td><td>5</td></tr><tr><td>43</td><td>7</td></tr><tr><td>46</td><td>14</td></tr><tr><td>49</td><td>5</td></tr><tr><td>52</td><td>6</td></tr><tr><td>54</td><td>3</td></tr></table></center></div><p>Dari tabel diperoleh.</p><ol type='i' style='margin-left:40px;'><li>Median = 47</li><li>Modus = 46</li><li>Mean = 46.6</li></ol><p>Pernyataan yang benar adalah ...</p>",
		answers:{
			"a": "(i) dan (ii)",
	        "b": "(i) dan (iii)",
	        "c": "(i), (ii), dan (iii)",
	        "d": "(ii) dan (iii)"
		},
		correctAnswer:"d"
	},
	{
		question:"Data banyak pengunjung sebuah pameran buku selama enam hari disajikan dalam diagram berikut.<br/><center><img src='../../../gambar/MD4.PNG'></center><p>Rata-rata banyak pengunjung pameran setiap hari sebanyak ...</p>",
		answers:{
			"a": "180 orang",
	        "b": "185 orang",
	        "c": "190 orang",
	        "d": "195 orang"
		},
		correctAnswer:"b"
	},
	{
		question:"Data hasil tes seleksi penerimaan karyawan sebuah perusahaan sebagai berikut.<br/><center><img src='../../../gambar/MD5.PNG'></center><p>Mean, median dan modus dari data tersebut berturut-turut adalah ...</p>",
		answers:{
			"a": "74.5, 90 dan 80",
	        "b": "76.5, 60 dan 90",
	        "c": "70.5, 70 dan 100",
	        "d": "72.5, 70 dan 80"
		},
		correctAnswer:"d"
	},
	{
		question:"Data banyak beras dalam karung di sebuah gudang sebagai berikut.<br/><center><img src='../../../gambar/MD6.PNG'></center><p>Modus dan median dari data tersebut berturut-turut adalah ...</p>",
		answers:{
			"a": "25 dan 30",
	        "b": "15 dan 15",
	        "c": "20 dan 10",
	        "d": "15 dan 20"
		},
		correctAnswer:"b"
	},
	{
		question:"Data nilai ulangan IPA kelas IX disajikan dalam diagram berikut.<br/><center><img src='../../../gambar/UPM2.PNG'></center><p>Rata-rata nilai siswa laki-laki dan siswa perempuan berturut-turut adalah ...</p>",
		answers:{
			"a": "5.65 dan 7.9",
	        "b": "7.76 dan 6.8",
	        "c": "7.76 dan 7.9",
	        "d": "5.65 dan 6.8"
		},
		correctAnswer:"c"
	},
	{
		question:"Data nilai ulangan IPA kelas IX disajikan dalam diagram berikut.<br/><center><img src='../../../gambar/UPM2.PNG'></center><p>Modus dan median dari data tersebut berturut-turut adalah ...</p>",
		answers:{
			"a": "8 dan 8",
	        "b": "9 dan 8",
	        "c": "7 dan 8",
	        "d": "8 dan 9"
		},
		correctAnswer:"a"
	},
	{
		question:"Berikut ini adalah data panjang potongan sekumpulan pipa.<br/><div class='tabel' style='margin-top:10px;'><center><table><tr><th>Potongan Pipa (cm)</th><th>Banyak Potongan Pipa</th></tr><tr><td>5</td><td>5</td></tr><tr><td>5.5</td><td>4</td></tr><tr><td>6</td><td>8</td></tr><tr><td>6.5</td><td>6</td></tr><tr><td>7</td><td>7</td></tr><tr><td>7.5</td><td>9</td></tr></table></center></div><p>Banyak potongan pipa yang panjangnya kurang dari median adalah ...</p>",
		answers:{
			"a": "15 buah",
	        "b": "16 buah",
	        "c": "17 buah",
	        "d": "18 buah"
		},
		correctAnswer:"c"
	}
]