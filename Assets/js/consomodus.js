$(document).ready(function(){
	i=0;
	function tampil(){
		let url = "../../json/consomodus.json";
		$.getJSON(url, function(data){
			console.log(i);
			let jlhsoal = data.consomodus.length;
			$("#jlhsoal").html(jlhsoal);
			$("#soalmodus").html(data.consomodus[i].soal);
			$("#datamodus").html(data.consomodus[i].datamodus);
			$("#pembahasanmodus").html(data.consomodus[i].pembahasan);
			$("#noconso").html(i+1);
		})
	}

	tampil();

	$("#prev").click(function(){
		if(i==0){
			i=3;
			tampil();
		}
		else{
			i--;
			tampil();
		}
	})

	$("#next").click(function(){
		if(i==3){
			i=0;
			tampil();
		}
		else{
			i++;
			tampil();
		}
	})
})

$(document).ready(function(){
	function tampil2(){
        let url = "../../json/latihan_modus.json";
        $.getJSON(url, function(data2){
            console.log(data2);
            let random = Math.floor(Math.random() * data2.soal1.length);
            $("#soal").html(data2.soal1[random].soal);
            $("#gbr").html(data2.soal1[random].gbr);
            $("#jwbsoal").html(data2.soal1[random].jwb);
            $("#jwbsiswa").val("");
            $("#hasilbenar").html("");
            $("#hasilsalah").html("");
        })
    }

    tampil2();

     $("#acaksoal").click(function(){
        tampil2();
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

function consomodus(){
	document.getElementById("cm1").style="border:5px solid rgb(0,156,255, 0.5);border-bottom: none;background-color: white;";
	document.getElementById("cm2").style = "background-color:rgb(0,156,255, 0.5);border:1px solid white;";
	document.getElementById("consomodus").hidden=false;
	document.getElementById("cobamodus").hidden=true;
}
function cobamodus(){
	document.getElementById("cm2").style="border:5px solid rgb(0,156,255, 0.5);border-bottom: none;background-color: white;";
	document.getElementById("cm1").style = "background-color:rgb(0,156,255, 0.5);border:1px solid white;";
	document.getElementById("cobamodus").hidden=false;
	document.getElementById("consomodus").hidden=true;
}