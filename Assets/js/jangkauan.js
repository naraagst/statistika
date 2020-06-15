function cjang1a(){
	let x = document.getElementById("cjang1a");
	  if(x.value==68){
	  	document.getElementById("cjang1a").style="border: 4px solid green;"
	  	document.getElementById("cjang1b").disabled=false;
	  	document.getElementById("sel1").innerHTML="68";
	    }
	  else{
	  	document.getElementById("cjang1a").style="border: 4px solid red;"
	    }
}
function cjang1b(){
	let x = document.getElementById("cjang1b");
	  if(x.value==48){
	  	document.getElementById("cjang1b").style="border: 4px solid green;"
	  	document.getElementById("cjang1c").disabled=false;
	  	document.getElementById("sel2").innerHTML="48";
	    }
	  else{
	  	document.getElementById("cjang1b").style="border: 4px solid red;"
	    }
}
function cjang1c(){
	let x = document.getElementById("cjang1c");
	  if(x.value==20){
	  	document.getElementById("cjang1c").style="border: 4px solid green;"
	  	document.getElementById("hasilj1").hidden=false;
	  	document.getElementById("resetj1").hidden=false;
	  	let con=document.getElementById("conso");
   		con.scrollTop=con.scrollHeight;
	    }
	  else{
	  	document.getElementById("cjang1c").style="border: 4px solid red;"
	    }
}
function cjang2a(){
	let x = document.getElementById("cjang2a");
	  if(x.value==85){
	  	document.getElementById("cjang2a").style="border: 4px solid green;"
	  	document.getElementById("cjang2b").disabled=false;
	  	document.getElementById("sel2a").innerHTML="85";
	    }
	  else{
	  	document.getElementById("cjang2a").style="border: 4px solid red;"
	    }
}
function cjang2b(){
	let x = document.getElementById("cjang2b");
	  if(x.value==55){
	  	document.getElementById("cjang2b").style="border: 4px solid green;"
	  	document.getElementById("cjang2c").disabled=false;
	  	document.getElementById("sel2b").innerHTML="55";
	    }
	  else{
	  	document.getElementById("cjang2b").style="border: 4px solid red;"
	    }
}
function cjang2c(){
	let x = document.getElementById("cjang2c");
	  if(x.value==30){
	  	document.getElementById("cjang2c").style="border: 4px solid green;"
	  	document.getElementById("hasilj2").hidden=false;
	  	document.getElementById("resetj2").hidden=false;
	  	let con=document.getElementById("conso");
   		con.scrollTop=con.scrollHeight;
	    }
	  else{
	  	document.getElementById("cjang2c").style="border: 4px solid red;"
	    }
}
function resetj1(){
    var container = document.getElementById("consojangkauan1");
    container.innerHTML= html;
    document.getElementById("hasilj1").hidden = true;
    document.getElementById("resetj1").hidden = true;
    document.getElementById("cjang1b").disabled=true;
	document.getElementById("cjang1c").disabled=true;
    document.getElementById("sel1").innerHTML=".  .  .";
    document.getElementById("sel2").innerHTML=".  .  .";
} 
var html;
  html = document.getElementById('consojangkauan1').innerHTML;

function resetj2(){
    var container2 = document.getElementById("consojangkauan2");
    container2.innerHTML= html2;
    document.getElementById("hasilj2").hidden = true;
    document.getElementById("resetj2").hidden = true;
    document.getElementById("cjang2b").disabled=true;
	document.getElementById("cjang2c").disabled=true;
    document.getElementById("sel2a").innerHTML=".  .  .";
    document.getElementById("sel2b").innerHTML=".  .  .";
} 
var html2;
  html2 = document.getElementById('consojangkauan2').innerHTML;

function contoh1(){
	document.getElementById("consojangkauan1").hidden=false;
	document.getElementById("consojangkauan2").hidden=true;
}
function contoh2(){
	document.getElementById("consojangkauan2").hidden=false;
	document.getElementById("consojangkauan1").hidden=true;
}