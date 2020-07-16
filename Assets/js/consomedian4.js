$(document).ready(function(){
	let i=0;
	let jlhsoal=0;
	function tampil(){
		let url = "../../json/consomedian2.json";
		$.getJSON(url, function(data){
			console.log(i);
			jlhsoal = data.consomedian.length;
			$("#soalmodus").html(data.consomedian[i].soal);
			$("#datamodus").html(data.consomedian[i].data);
			$("#soalmodus2").html(data.consomedian[i].soal2);
			$("#pembahasanmean").html(data.consomedian[i].pembahasan);
			$("#noconso").html(i+1);
			$("#jlhsoal").html(jlhsoal);
		})
	}

	tampil();

	$("#prev").click(function(){
		if(i==0){
			i=jlhsoal-1;
			tampil();
		}
		else{
			i--;
			tampil();
		}
	})

	$("#next").click(function(){
		if(i==jlhsoal-1){
			i=0;
			tampil();
		}
		else{
			i++;
			tampil();
		}
	})
})


function consomean(){
	document.getElementById("containermodus").hidden = false;
	document.getElementById("cmean1").style="border:5px solid rgb(0,156,255, 0.5);border-bottom: none;background-color: white;";
	document.getElementById("cmean2").style = "background-color:rgb(0,156,255, 0.5);border:1px solid white;";
	document.getElementById("consomodus").hidden=false;
	document.getElementById("cobamodus").hidden=true;
}
function cobamean(){
	document.getElementById("containermodus").hidden = false;
	document.getElementById("cmean2").style="border:5px solid rgb(0,156,255, 0.5);border-bottom: none;background-color: white;";
	document.getElementById("cmean1").style = "background-color:rgb(0,156,255, 0.5);border:1px solid white;";
	document.getElementById("cobamodus").hidden=false;
	document.getElementById("consomodus").hidden=true;
}