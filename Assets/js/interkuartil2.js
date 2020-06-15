$(document).ready(function(){
    let x=0;
    let y=0;
	function tampil2(){
        let url = "../../json/latihan_interkuartil.json";
        $.getJSON(url, function(data2){
            console.log(data2);
            let random = Math.floor(Math.random() * data2.soal1.length);
            $("#soal").html(data2.soal1[random].soal);
            $("#gbr").html(data2.soal1[random].gbr);
            $("#jwbsoal").html(data2.soal1[random].jwb);
            $("#jwbsoal2").html(data2.soal1[random].jwb2);
            $("#jwbsiswa").val("");
            $("#jwbsiswa2").val("");
            $("#hasilbenar").html("");
            $("#hasilsalah").html("");
            $("#jwbsiswa").css("border","1px solid grey");
            $("#jwbsiswa2").css("border","1px solid grey");
        })
    }

    tampil2();

     $("#acaksoal").click(function(){
        tampil2();
    })

    function cekjwb(){
        let jwb = parseInt($('#jwbsiswa').val());
        let jwbsoal = parseInt($('#jwbsoal').html());
        let jwb2 = parseInt($('#jwbsiswa2').val());
        let jwbsoal2 = parseInt($('#jwbsoal2').html());

        if(jwb===jwbsoal){
            $("#jwbsiswa").css("border","3px solid green");
            x=1;
        }
        else{
            $("#jwbsiswa").css("border","3px solid red");
            x=0;
        }
        if(jwb2===jwbsoal2){
            $("#jwbsiswa2").css("border","3px solid green");
            y=1;
        }
        else{
            $("#jwbsiswa2").css("border","3px solid red");
            y=0;
        }
        if(x==1&&y==1){
            $("#hasilbenar").html("Selamat! Jawaban benar");
            $("#hasilsalah").html("");
        }
        else{
            $("#hasilbenar").html("");
            $("#hasilsalah").html("Maaf, masih ada jawaban yang salah.");
        }
    }

    $("#cekjwb").click(function(){
        cekjwb();
    })
})
