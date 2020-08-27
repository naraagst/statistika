// TANGGAL
let date = new Date();
let arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
let myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];
let hari = date.getDay();
    hari = myDays[hari];
let millisecond = date.getMilliseconds();
let detik = date.getSeconds();
let menit = date.getMinutes();
let jam = date.getHours();
let tanggal = date.getDate();
let bulan = date.getMonth();
    bulan = arrbulan[bulan];
let tahun = date.getFullYear();
let tanggalHariIni = hari+", "+tanggal+" "+bulan+" "+tahun;
let waktuSekarang = jam+" : "+menit+" : "+detik;