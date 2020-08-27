let consoMean5 = document.querySelectorAll(".consoMean5");
let nextButton = document.querySelector("#next");
let prevButton = document.querySelector("#prev");
let noSoal = document.querySelector("#noconso");
let atas = document.querySelector("#atas");
let i=0;
noSoal.innerHTML=i+1;
window.onload = function awal(){
	document.getElementById("containermodus").hidden=true;
	consoMean5[1].style.display='none'
};

nextButton.addEventListener("click", function () {
	if(i==1){
		consoMean5[1].style.display='block';
		consoMean5[0].style.display='none';
		i--;
	} else {
		consoMean5[1].style.display='none';
		consoMean5[0].style.display='block';
		i++;
	}
	noSoal.innerHTML=i+1;
	atas.scrollIntoView();
})
prevButton.addEventListener("click", function () {
	if(i==1){
		consoMean5[1].style.display='block';
		consoMean5[0].style.display='none';
		i--;
	} else {
		consoMean5[1].style.display='none';
		consoMean5[0].style.display='block';
		i++;
	}
	noSoal.innerHTML=i+1;
	atas.scrollIntoView();
})


function consomean(){
	document.getElementById("containermodus").hidden = false;
	document.getElementById("cmean1").style="border:5px solid rgb(0,156,255, 0.5);border-bottom: none;background-color: white;";
	document.getElementById("cmean2").style = "background-color:rgb(0,156,255, 0.5);border:1px solid white;";
	document.getElementById("cmean1a").style="border:2px solid rgb(0,156,255, 0.5);border-bottom: none;background-color: white;";
	document.getElementById("cmean2a").style = "background-color:rgb(0,156,255, 0.5);border:1px solid white;";
	document.getElementById("consomodus").hidden=false;
	document.getElementById("cobamodus").hidden=true;
}
function cobamean(){
	document.getElementById("containermodus").hidden = false;
	document.getElementById("cmean2").style="border:5px solid rgb(0,156,255, 0.5);border-bottom: none;background-color: white;";
	document.getElementById("cmean1").style = "background-color:rgb(0,156,255, 0.5);border:1px solid white;";
	document.getElementById("cmean2a").style="border:2px solid rgb(0,156,255, 0.5);border-bottom: none;background-color: white;";
	document.getElementById("cmean1a").style = "background-color:rgb(0,156,255, 0.5);border:1px solid white;";
	document.getElementById("cobamodus").hidden=false;
	document.getElementById("consomodus").hidden=true;
}

