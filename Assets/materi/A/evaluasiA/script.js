const myQuestions = [
	{
		question:"Diagram di bawah ini menunjukkan data penjualan beberapa jenis televisi di Toko Elektronik Wawan Jaya Makmur pada bulan Januari.<p><center><img src='../../../gambar/MD1.PNG' style='width:50%'></center></p><p>Pada bulan tersebut, TV merk apa yang terjual paling banyak dan paling sedikit?</p>",
		answers:{
			"a": "TV Merk D terjual paling banyak dan  TV merk A dan E terjual paling sedikit",
	        "b": "TV Merk B terjual paling banyak dan  TV merk G dan E terjual paling sedikit",
	        "c": "TV Merk F terjual paling banyak dan  TV merk A dan G terjual paling sedikit",
	        "d": "TV Merk D terjual paling banyak dan  TV merk C dan G terjual paling sedikit"
		},
		correctAnswer:"a"
	},
	{
		question:"Gambar berikut menunjukkan banyaknya anak yang mengikuti jenis olahraga di suatu sekolah.<p><center><img src='../../../gambar/MD2.PNG'></center></p><p>Jenis olahraga yang paling banyak diikuti oleh anak-anak adalah ...</p>",
		answers:{
			"a": "Sepak bola",
	        "b": "Tenis meja",
	        "c": "Bulu tangkis",
	        "d": "Basket"
		},
		correctAnswer:"b"
	},
	{
		question:"Data penjualan buku IPA dan matematika dari Toko Annisa pada lima hari minggu pertama bulan Juli 2019.<p><center><img src='../../../gambar/MD3.PNG'></center></p><p>Berapakah total penjualan buku IPA dan Matematika selama lima hari tersebut?</p>",
		answers:{
			"a": "Buku IPA 200 buah dan buku matematika 210 buah",
	        "b": "Buku IPA 210 buah dan buku matematika 200 buah",
	        "c": "Buku IPA 190 buah dan buku matematika 210 buah",
	        "d": "Buku IPA 200 buah dan buku matematika 200 buah"
		},
		correctAnswer:"a"
	},
	{
		question:"Data tinggi badan siswa kelas IXB diukur sampai cm terdekat sebagai berikut.<br/><div class='tabel' style='margin-top:10px;'><center><table><tr><th>Tinggi Badan (cm)</th><th>Banyak Siswa</th></tr><tr><td>146</td><td>4</td></tr><tr><td>148</td><td>9</td></tr><tr><td>150</td><td>10</td></tr><tr><td>152</td><td>8</td></tr><tr><td>154</td><td>5</td></tr><tr><td>156</td><td>4</td></tr></table></center></div><p>Siswa yang tingginya kurang dari 150 cm sebanyak ...</p>",
		answers:{
			"a": "10 anak",
	        "b": "11 anak",
	        "c": "12 anak",
	        "d": "13 anak"
		},
		correctAnswer:"d"
	},
	{
		question:"Data tinggi badan siswa kelas IXB diukur sampai cm terdekat sebagai berikut.<br/><div class='tabel' style='margin-top:10px;'><center><table><tr><th>Tinggi Badan (cm)</th><th>Banyak Siswa</th></tr><tr><td>146</td><td>4</td></tr><tr><td>148</td><td>9</td></tr><tr><td>150</td><td>10</td></tr><tr><td>152</td><td>8</td></tr><tr><td>154</td><td>5</td></tr><tr><td>156</td><td>4</td></tr></table></center></div><p>Siswa yang tinggi badannya 148 cm sampai 154 cm sebanyak ...</p>",
		answers:{
			"a": "30 anak",
	        "b": "31 anak",
	        "c": "32 anak",
	        "d": "33 anak"
		},
		correctAnswer:"c"
	},
	{
		question:"Data banyak pengunjung sebuah pameran buku selama enam hari disajikan dalam diagram berikut.<br/><center><img src='../../../gambar/MD4.PNG'></center><p>Pengunjung terbanyak terjadi pada hari ...</p>",
		answers:{
			"a": "Senin",
	        "b": "Selasa",
	        "c": "Rabu",
	        "d": "Kamis"
		},
		correctAnswer:"c"
	},
	{
		question:"Data hasil tes seleksi penerimaan karyawan sebuah perusahaan sebagai berikut.<br/><center><img src='../../../gambar/MD5.PNG'></center><p>Pelamar yang hasil tesnya lebih dari 80 akan mengikuti tes wawancara. Banyak pelamar yang mengikuti tes wawancara sebanyak ...</p>",
		answers:{
			"a": "20 orang",
	        "b": "21 orang",
	        "c": "22 orang",
	        "d": "23 orang"
		},
		correctAnswer:"b"
	},
	{
		question:"Data hasil tes seleksi penerimaan karyawan sebuah perusahaan sebagai berikut.<br/><center><img src='../../../gambar/MD5.PNG'></center><p>Banyak pelamar yang memperoleh nilai 60 sampai dengan 90 ada ...</p>",
		answers:{
			"a": "105 orang",
	        "b": "110 orang",
	        "c": "119 orang",
	        "d": "123 orang"
		},
		correctAnswer:"c"
	},
	{
		question:"Data banyak beras dalam karung di sebuah gudang sebagai berikut.<br/><center><img src='../../../gambar/MD6.PNG'></center><p>Berat beras dalam gudang seluruhnya ...</p>",
		answers:{
			"a": "1.5 ton",
	        "b": "2 ton",
	        "c": "2.5 ton",
	        "d": "3 ton"
		},
		correctAnswer:"b"
	},
	{
		question:"Data banyak beras dalam karung di sebuah gudang sebagai berikut.<br/><center><img src='../../../gambar/MD6.PNG'></center><p>Jika 20 karung beras 10 kg, 15 karung beras 15 kg, dan 5 karung beras 25 kg dijual, sisa beras dalam gudang ...</p>",
		answers:{
			"a": "13 kuintal",
	        "b": "13.5 kuintal",
	        "c": "14 kuintal",
	        "d": "14.5 kuintal"
		},
		correctAnswer:"d"
	},
	{
		question:"Data banyak siswa yang lulus ujian nasional tahun 2007-2011 di SMP Bakti Mulya sebagai berikut.<br/><center><img src='../../../gambar/MD7.PNG'></center><p>Dari tahun 2008 sampai dengan 2011 SMP Bakti Mulya telah meluluskan siswa sebanyak ...</p>",
		answers:{
			"a": "753 anak",
	        "b": "735 anak",
	        "c": "726 anak",
	        "d": "724 anak"
		},
		correctAnswer:"b"
	},
	{
		question:"Data banyak siswa yang lulus ujian nasional tahun 2007-2011 di SMP Bakti Mulya sebagai berikut.<br/><center><img src='../../../gambar/MD7.PNG'></center><p>Banyak siswa laki-laki yang lulus ujian nasional tahun 2007-2009 ada ...</p>",
		answers:{
			"a": "245 anak",
	        "b": "255 anak",
	        "c": "265 anak",
	        "d": "275 anak"
		},
		correctAnswer:"d"
	},
	{
		question:"Data banyak siswa yang lulus ujian nasional tahun 2007-2011 di SMP Bakti Mulya sebagai berikut.<br/><center><img src='../../../gambar/MD7.PNG'></center><p>Selisih banyak siswa laki-laki dan perempuan yang lulus tahun 2008 ada ...</p>",
		answers:{
			"a": "15 anak",
	        "b": "20 anak",
	        "c": "25 anak",
	        "d": "30 anak"
		},
		correctAnswer:"b"
	}
]