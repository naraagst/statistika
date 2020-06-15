$(document).ready(function(){
	function tampil(){
        let url = "../../json/latihan_mean.json";
        $.getJSON(url, function(data){
            console.log(data);
            let random = Math.floor(Math.random() * data.soal2.length);
            $("#soal").html(data.soal2[random].soal);
            $("#gbr").html(data.soal2[random].gbr);
            $("#jwbsoal").html(data.soal2[random].jwb);
            $("#jwbsiswa").val("");
            $("#hasilbenar").html("");
            $("#hasilsalah").html("");
        })
    }

    tampil();

     $("#acaksoal").click(function(){
        tampil();
    })

})