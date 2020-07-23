const myQuestions = [
	{
		question:"Data nilai ulangan Matematika siswa kelas IXA sebagai berikut.<p><center><img src='../../gambar/UPM1.PNG'></center></p><p>Banyak siswa yang memperoleh nilai 6 sampai dengan 8 ada ...</p>",
		answers:{
			"a": "20",
	        "b": "21",
	        "c": "22",
	        "d": "23"
		},
		correctAnswer:"c"
	},
	{
		question:"Data banyak siswa yang lulus ujian nasional tahun 2007-2011 di SMP Bakti Mulya sebagai berikut.<br/><center><img src='../../gambar/MD7.PNG'></center><p>Selisih banyak siswa laki-laki dan perempuan yang lulus pada tahun 2007-2011 adalah ... anak</p>",
		answers:{
			"a": "40",
	        "b": "43",
	        "c": "45",
	        "d": "47"
		},
		correctAnswer:"c"
	},
	{
		question:"Sebuah dealer menjual dua produk sepeda motor. Data penjualan dua produk sepeda motor selama 6 bulan sebagai berikut.<br/><center><img src='../../gambar/Latihan1.JPG'></center><p>Penjualan kedua produk sepeda motor turun pada bulan ...</p>",
		answers:{
			"a": "Februari dan Maret",
	        "b": "Februari dan April",
	        "c": "Februari dan Mei",
	        "d": "Februari dan Juni"
		},
		correctAnswer:"d"
	},
	{
		question:"Sebuah dealer menjual dua produk sepeda motor. Data penjualan dua produk sepeda motor selama 6 bulan sebagai berikut.<br/><center><img src='../../gambar/Latihan1.JPG' style='width:60%'></center><p>Rata-rata penjualan seluruh sepeda motor setiap bulan adalah ... unit</p>",
		answers:{
			"a": "25",
	        "b": "35",
	        "c": "50",
	        "d": "75"
		},
		correctAnswer:"a"
	},
	{
		question:"Data tentang panjang batang suatu tanaman pada suhu yang berbeda disajikan dengan diagram batang sebagai berikut.<br/><center><img src='../../gambar/Latihan2.JPG' style='width:50%'></center><p>Jika tanaman ditanam pada suhu 20<sup>o</sup>C-35<sup>o</sup>C, maka panjang batang ...</p>",
		answers:{
			"a": "5-7 cm",
	        "b": "4-7 cm",
	        "c": "3-7 cm",
	        "d": "3-5 cm"
		},
		correctAnswer:"c"
	},
	{
		question:"Data tentang panjang batang suatu tanaman pada suhu yang berbeda disajikan dengan diagram batang sebagai berikut.<br/><center><img src='../../gambar/Latihan2.JPG' style='width:50%'></center><p>Panjang batang tanaman 4cm-5cm jika tanaman tersebut ditanam pada suhu ...</p>",
		answers:{
			"a": "20<sup>o</sup>C-25<sup>o</sup>C",
	        "b": "20<sup>o</sup>C-30<sup>o</sup>C",
	        "c": "20<sup>o</sup>C-35<sup>o</sup>C",
	        "d": "25<sup>o</sup>C-35<sup>o</sup>C"
		},
		correctAnswer:"b"
	},
	{
		question:"Tabel berikut ini menunjukkan lama tidur di waktu malam (dalam jam) beberapa siswa kelas VIII.<br/><center><img src='../../gambar/latihan3.JPG' style='width:50%'></center><p>Dari tabel diperoleh informasi sebagai berikut.</p><ol type='i' style='margin-left:40px;'><li>Median = 6</li><li>Q<sub>5</sub> = 5</li><li>Q<sub>3</sub> = 7.5</li></ol><p>Pernyataan yang benar adalah ...</p>",
		answers:{
			"a": "(i) dan (ii)",
	        "b": "(i) dan (iii)",
	        "c": "(ii) dan (iii)",
	        "d": "(i), (ii), dan (iii)"
		},
		correctAnswer:"a"
	},
	{
		question:"Diketahui data sebagai berikut.<br/><center><b>4, 5, 5, 7, 3, 2, 4, 6, 7, 4</b></center><p>Pernyataan berikut yang salah adalah ...</p>",
		answers:{
			"a": "Modus = 4",
	        "b": "Median = 5",
	        "c": "Mean = 4,7",
	        "d": "Q<sub>3</sub> = 6"
		},
		correctAnswer:"b"
	},
	{
		question:"Diagram berikut menunjukkan nilai ulangan susulan mata pelajaran IPS beberapa siswa kelas VIII.<br/><center><img src='../../gambar/latihan4.JPG' style='width:35%'></center><p>Dari diagram di atas, nilai mean + median + modus = ...</p>",
		answers:{
			"a": "4",
	        "b": "5$\\frac{7}{9}$",
	        "c": "6$\\frac{4}{5}$",
	        "d": "8"
		},
		correctAnswer:"c"
	},
	{
		question:"Data berat badan (dalam kg) sekelompok balita di Posyandu Kasih Bunda sebagai berikut.<br/><center><img src='../../gambar/latihan5.JPG'></center><p>Modus dari data di atas adalah ...</p>",
		answers:{
			"a": "16",
	        "b": "18",
	        "c": "19",
	        "d": "20"
		},
		correctAnswer:"a"
	},
	{
		question:"Kuartil bawah dari data <b>12, 13, 11, 6, 4, 9, 3 7, 6, 5, 9</b> adalah ...",
		answers:{
			"a": "4",
	        "b": "5",
	        "c": "6",
	        "d": "7"
		},
		correctAnswer:"b"
	},
	{
		question:"Diberikan diagram nilai ulangan Matematika siswa kelas VIIIC seperti berikut.<br/><center><img src='../../gambar/latihan6.JPG' style='width:60%'></center><p>Kuartil atas dari data di atas adalah ...</p>",
		answers:{
			"a": "6,25",
	        "b": "7,5",
	        "c": "8,25",
	        "d": "9,5"
		},
		correctAnswer:"c"
	},
	{
		question:"Simpangan kuartil dari <b>7, 4, 5, 6, 7, 5, 4, 7, 8, 9, 6</b> adalah ...",
		answers:{
			"a": "1",
	        "b": "2",
	        "c": "2,5",
	        "d": "3"
		},
		correctAnswer:"a"
	},
	{
		question:"Plot berikut menunjukkan kecepatan 12 mobil balap. Tentukan jangkauan interkuartil dari data yang diberikan.<br/><center><img src='../../gambar/latihan7.JPG'></center><p>	Jangkauan dari data tersebut adalah ...</p>",
		answers:{
			"a": "30",
	        "b": "40",
	        "c": "50",
	        "d": "60"
		},
		correctAnswer:"c"
	},
	{
		question:"Plot berikut menunjukkan kecepatan 12 mobil balap. Tentukan jangkauan interkuartil dari data yang diberikan.<br/><center><img src='../../gambar/latihan7.JPG'></center><p>	Jangkauan interkuartil dari data tersebut adalah ...</p>",
		answers:{
			"a": "10",
	        "b": "25",
	        "c": "15",
	        "d": "20"
		},
		correctAnswer:"d"
	}
]