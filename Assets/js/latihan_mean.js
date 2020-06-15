$(document).ready(function(){
	function tampil(){
        let url = "../../json/latihan_mean.json";
        $.getJSON(url, function(data){
            console.log(data);
            let random = Math.floor(Math.random() * data.soal1.length);
            $("#soal").html(data.soal1[random].soal);
            $("#gbr").html(data.soal1[random].gbr);
            $("#jwbsoal").html(data.soal1[random].jwb);
            $("#jwbsiswa").val("");
            $("#hasilbenar").html("");
            $("#hasilsalah").html("");
        })
    }

    tampil();

     $("#acaksoal").click(function(){
        tampil();
    })

    function cekjwb(){
        let jwb = parseInt($('#jwbsiswa').val());
        let jwbsoal = parseInt($('#jwbsoal').html());

        if(jwb===jwbsoal){
            $("#hasilbenar").html("Selamat! Jawaban benar");
            $("#hasilsalah").html("");
        }
        else{
            $("#hasilbenar").html("");
            $("#hasilsalah").html("Jawaban masih salah");
        }
    }

    $("#cekjwb").click(function(){
        cekjwb();
    })
})

