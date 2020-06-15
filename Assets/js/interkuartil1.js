function jinter1(){
	let x = document.getElementById("inpjinter1");
	  if(x.value==7){
	  	document.getElementById("inpjinter1").style="border: 4px solid green;"
	  	document.getElementById("inpjinter2").disabled=false;
	    }
	  else{
	  	document.getElementById("inpjinter1").style="border: 4px solid red;"
	    }
}

function jinter2(){
	let x = document.getElementById("inpjinter2");
	  if(x.value==6){
	  	document.getElementById("inpjinter2").style="border: 4px solid green;"
	  	document.getElementById("inpjinter3").disabled=false;
	    }
	  else{
	  	document.getElementById("inpjinter2").style="border: 4px solid red;"
	    }
}

function jinter3(){
	let x = document.getElementById("inpjinter3");
	  if(x.value==1){
	  	document.getElementById("inpjinter3").style="border: 4px solid green;"
	  	document.getElementById("hasiljinter1").hidden=false;
	  	document.getElementById("resetjinter1").hidden=false;
	  	let con=document.getElementById("conso");
		con.scrollTop=con.scrollHeight;
	    }
	  else{
	  	document.getElementById("inpjinter3").style="border: 4px solid red;"
	    }
}

function resetjinter1(){
    var container = document.getElementById("consojinter");
    container.innerHTML= html;
    document.getElementById("inpjinter2").disabled=true;
	document.getElementById("inpjinter3").disabled=true;
	document.getElementById("hasiljinter1").hidden=true;
	document.getElementById("resetjinter1").hidden=true;
} 
var html;
  html = document.getElementById('consojinter').innerHTML;

function contoh1(){
	document.getElementById("consojinter").hidden=false;
}