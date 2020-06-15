$(document).ready(function(){
        let x=0;
        let y=0;
        let z=0;
	function tampil(){
        let url = "../../json/latihan_kuartil.json";
        $.getJSON(url, function(data){
            console.log(data);
            let random = Math.floor(Math.random() * data.soal1.length);
            $("#soal").html(data.soal1[random].soal);
            $("#gbr").html(data.soal1[random].gbr);
            $("#jwbsoal").html(data.soal1[random].jwb1);
            $("#jwbsoal2").html(data.soal1[random].jwb2);
            $("#jwbsoal3").html(data.soal1[random].jwb3);
            $("#jwbsiswa").val("");
            $("#jwbsiswa2").val("");
            $("#jwbsiswa3").val("");
            $("#hasilbenar").html("");
            $("#hasilsalah").html("");
            $("#jwbsiswa").css("border","1px solid grey");
            $("#jwbsiswa2").css("border","1px solid grey");
            $("#jwbsiswa3").css("border","1px solid grey");
        })
    }

    tampil();

     $("#acaksoal").click(function(){
        tampil();
    })

    function cekjwb(){

        let jwb = parseInt($('#jwbsiswa').val());
        let jwb2 = parseInt($('#jwbsiswa2').val());
        let jwb3 = parseInt($('#jwbsiswa2').val());
        let jwbsoal = parseInt($('#jwbsoal').html());
        let jwbsoal2 = parseInt($('#jwbsoal2').html());
        let jwbsoal3 = parseInt($('#jwbsoal3').html());

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
        if(jwb3===jwbsoal3){
            $("#jwbsiswa3").css("border","3px solid green");
            z=1;
        }
        else{
            $("#jwbsiswa3").css("border","3px solid red");
            z=0;
        }
        if(x==1&&y==1&&z==1){
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