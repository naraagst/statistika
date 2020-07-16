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