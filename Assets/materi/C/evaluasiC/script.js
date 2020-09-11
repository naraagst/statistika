const myQuestions = [
	{
		question:"Berikut ini adalah data panjang potongan sekumpulan pipa.<br/><div class='tabel' style='margin-top:10px;'><center><table><tr><th>Potongan Pipa (cm)</th><th>Banyak Potongan Pipa</th></tr><tr><td>5</td><td>5</td></tr><tr><td>5.5</td><td>4</td></tr><tr><td>6</td><td>8</td></tr><tr><td>6.5</td><td>6</td></tr><tr><td>7</td><td>7</td></tr><tr><td>7.5</td><td>9</td></tr></table></center></div><p>Jangkauan dari data tersebut adalah ...</p>",
		answers:{
			"a": "1.5",
	        "b": "2",
	        "c": "2.5",
	        "d": "3"
		},
		correctAnswer:"c",
		soal:0
	},
	{
		question:"Berikut ini adalah data panjang potongan sekumpulan pipa.<br/><div class='tabel' style='margin-top:10px;'><center><table><tr><th>Potongan Pipa (cm)</th><th>Banyak Potongan Pipa</th></tr><tr><td>5</td><td>5</td></tr><tr><td>5.5</td><td>4</td></tr><tr><td>6</td><td>8</td></tr><tr><td>6.5</td><td>6</td></tr><tr><td>7</td><td>7</td></tr><tr><td>7.5</td><td>9</td></tr></table></center></div><p>Kuartil bawah, kuartil tengah dan kuartil atas dari data tersebut berturut-turut adalah ...</p>",
		answers:{
			"a": "5, 5.5 dan 6.5",
	        "b": "6, 6.5 dan 7",
	        "c": "6.5, 7 dan 7.5",
	        "d": "5.5, 6 dan 6.5"
		},
		correctAnswer:"b",
		soal:1
	},
	{
		question:"Berikut ini adalah data panjang potongan sekumpulan pipa.<br/><div class='tabel' style='margin-top:10px;'><center><table><tr><th>Potongan Pipa (cm)</th><th>Banyak Potongan Pipa</th></tr><tr><td>5</td><td>5</td></tr><tr><td>5.5</td><td>4</td></tr><tr><td>6</td><td>8</td></tr><tr><td>6.5</td><td>6</td></tr><tr><td>7</td><td>7</td></tr><tr><td>7.5</td><td>9</td></tr></table></center></div><p>Jangkauan interkuartil dan simpangan kuartil dari data tersebut berturut-turut adalah ...</p>",
		answers:{
			"a": "2 dan 1",
	        "b": "2 dan 0.5",
	        "c": "1 dan 0.5",
	        "d": "1 dan 1.5"
		},
		correctAnswer:"c",
		soal:2
	},
	{
		question:"Data tinggi badan siswa kelas VIIIB diukur sampai cm terdekat sebagai berikut.<br/><div class='tabel' style='margin-top:10px;'><center><table><tr><th>Tinggi Badan (cm)</th><th>Banyak Siswa</th></tr><tr><td>146</td><td>3</td></tr><tr><td>148</td><td>9</td></tr><tr><td>150</td><td>10</td></tr><tr><td>152</td><td>8</td></tr><tr><td>154</td><td>5</td></tr><tr><td>156</td><td>4</td></tr></table></center></div><p>Jangkauan dari data tersebut adalah ....</p>",
		answers:{
			"a": "7",
	        "b": "8",
	        "c": "9",
	        "d": "10"
		},
		correctAnswer:"d",
		soal:3
	},
	{
		question:"Data tinggi badan siswa kelas VIIIB diukur sampai cm terdekat sebagai berikut.<br/><div class='tabel' style='margin-top:10px;'><center><table><tr><th>Tinggi Badan (cm)</th><th>Banyak Siswa</th></tr><tr><td>146</td><td>3</td></tr><tr><td>148</td><td>9</td></tr><tr><td>150</td><td>10</td></tr><tr><td>152</td><td>8</td></tr><tr><td>154</td><td>5</td></tr><tr><td>156</td><td>4</td></tr></table></center></div><p>Kuartil bawah, kuartil tengah dan kuartil atas dari data tersebut berturut-turut adalah ...</p>",
		answers:{
			"a": "146, 148 dan 150",
	        "b": "148, 150 dan 152",
	        "c": "150, 152 dan 154",
	        "d": "152, 154 dan 156"
		},
		correctAnswer:"b",
		soal:4
	},
	{
		question:"Data tinggi badan siswa kelas VIIIB diukur sampai cm terdekat sebagai berikut.<br/><div class='tabel' style='margin-top:10px;'><center><table><tr><th>Tinggi Badan (cm)</th><th>Banyak Siswa</th></tr><tr><td>146</td><td>3</td></tr><tr><td>148</td><td>9</td></tr><tr><td>150</td><td>10</td></tr><tr><td>152</td><td>8</td></tr><tr><td>154</td><td>5</td></tr><tr><td>156</td><td>4</td></tr></table></center></div><p>Jangkauan interkuartil dan simpangan kuartil dari data tersebut berturut-turut adalah ...",
		answers:{
			"a": "6 dan 3",
	        "b": "3 dan 1.5",
	        "c": "4 dan 2",
	        "d": "5 dan 2.5"
		},
		correctAnswer:"c",
		soal:5
	},
	{
		question:"Data berat 11 buah kasturi (dalam gram) adalah sebagai berikut.<br/><center><div class='tabeltulisan bigpad'><table><tr><td>56</td><td>63,</td><td>64,</td><td>67,</td><td>57,</td><td>60,</td></tr><tr><td>65,</td><td>53,</td><td>60,</td><td>55,</td><td>62</td></tr></table></div></center><p>Jangkauan dari data tersebut adalah...</p>",
		answers:{
			"a": "14",
	        "b": "15",
	        "c": "16",
	        "d": "17"
		},
		correctAnswer:"a",
		soal:6
	},
	{
		question:"Data berat 11 buah kasturi (dalam gram) adalah sebagai berikut.<br/><center><div class='tabeltulisan bigpad'><table><tr><td>56</td><td>63,</td><td>64,</td><td>67,</td><td>57,</td><td>60,</td></tr><tr><td>65,</td><td>53,</td><td>60,</td><td>55,</td><td>62</td></tr></table></div></center><p>Kuartil bawah, kuartil tengah dan kuartil atas dari data tersebut berturut-turut adalah ...</p>",
		answers:{
			"a": "55, 60 dan 63",
	        "b": "56, 60 dan 64",
	        "c": "56, 62 dan 65",
	        "d": "57, 63 dan 67"
		},
		correctAnswer:"b",
		soal:7
	},
	{
		question:"Data berat 11 buah kasturi (dalam gram) adalah sebagai berikut.<br/><center><div class='tabeltulisan bigpad'><table><tr><td>56</td><td>63,</td><td>64,</td><td>67,</td><td>57,</td><td>60,</td></tr><tr><td>65,</td><td>53,</td><td>60,</td><td>55,</td><td>62</td></tr></table></div></center><p>Jangkauan interkuartil dan simpangan kuartil dari data tersebut berturut-turut adalah ...</p>",
		answers:{
			"a": "5 dan 2.5",
	        "b": "6 dan 3",
	        "c": "7 dan 3.5",
	        "d": "8 dan 4"
		},
		correctAnswer:"d",
		soal:8
	},
	{
		question:"Data hasil tes seleksi penerimaan karyawan sebuah perusahaan sebagai berikut.<br/><center><img src='../../../gambar/MD5.PNG'></center><p>Jangkauan dari data tersebut adalah...</p>",
		answers:{
			"a": "50",
	        "b": "55",
	        "c": "45",
	        "d": "35"
		},
		correctAnswer:"d",
		soal:9
	}
]