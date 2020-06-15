let a=0;
let b=0;
let c=0;
let d=0;
let e=0;
let f=0;
let a2=0;
let b2=0;
let c2=0;
let d2=0;

function cm1a(){
	let x = document.getElementById("cm1a");
	  if(x.value==2){
	  	document.getElementById("cm1a").style="border: 4px solid green;"
	    a=1;}
	  else{
	  	document.getElementById("cm1a").style="border: 4px solid red;"
	    a=0;}

	  if(a==1 && b==1 && c==1 && d==1 && e==1){
      document.getElementById("cm1hasil").hidden = false; document.getElementById("reseta").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm1hasil").hidden = true;}
}
function cm1b(){
	let x = document.getElementById("cm1b");
	  if(x.value==3){
	  	document.getElementById("cm1b").style="border: 4px solid green;"
	    b=1;}
	  else{
	  	document.getElementById("cm1b").style="border: 4px solid red;"
	    b=0;}

	  if(a==1 && b==1 && c==1 && d==1 && e==1){
      document.getElementById("cm1hasil").hidden = false; document.getElementById("reseta").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm1hasil").hidden = true;}
}
function cm1c(){
	let x = document.getElementById("cm1c");
	  if(x.value==3){
	  	document.getElementById("cm1c").style="border: 4px solid green;"
	    c=1;}
	  else{
	  	document.getElementById("cm1c").style="border: 4px solid red;"
	    c=0;}

	  if(a==1 && b==1 && c==1 && d==1 && e==1){
      document.getElementById("cm1hasil").hidden = false; document.getElementById("reseta").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm1hasil").hidden = true;}
}
function cm1d(){
	let x = document.getElementById("cm1d");
	  if(x.value==5){
	  	document.getElementById("cm1d").style="border: 4px solid green;"
	    d=1;}
	  else{
	  	document.getElementById("cm1d").style="border: 4px solid red;"
	    d=0;}

	  if(a==1 && b==1 && c==1 && d==1 && e==1){
      document.getElementById("cm1hasil").hidden = false; document.getElementById("reseta").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm1hasil").hidden = true;}
}
function cm1e(){
	let x = document.getElementById("cm1e");
	  if(x.value==2){
	  	document.getElementById("cm1e").style="border: 4px solid green;"
	    e=1;}
	  else{
	  	document.getElementById("cm1e").style="border: 4px solid red;"
	    e=0;}

	  if(a==1 && b==1 && c==1 && d==1 && e==1){
      document.getElementById("cm1hasil").hidden = false; document.getElementById("reseta").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm1hasil").hidden = true;}
}

function cm2a(){
	let x = document.getElementById("cm2a");
	  if(x.value==5){
	  	document.getElementById("cm2a").style="border-bottom: 4px solid green;"
	    a2=1;}
	  else{
	  	document.getElementById("cm2a").style="border-bottom: 4px solid red;"
	    a2=0;}

	  if(a2==1 && b2==1 && c2==1 && d2==1){
      document.getElementById("cm2e").disabled = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm2e").disabled = true;}
}
function cm2b(){
	let x = document.getElementById("cm2b");
	  if(x.value==8){
	  	document.getElementById("cm2b").style="border-bottom: 4px solid green;"
	    b2=1;}
	  else{
	  	document.getElementById("cm2b").style="border-bottom: 4px solid red;"
	    b2=0;}

	  if(a2==1 && b2==1 && c2==1 && d2==1){
      document.getElementById("cm2e").disabled = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm2e").disabled = true;}
}
function cm2c(){
	let x = document.getElementById("cm2c");
	  if(x.value==4){
	  	document.getElementById("cm2c").style="border-bottom: 4px solid green;"
	    c2=1;}
	  else{
	  	document.getElementById("cm2c").style="border-bottom: 4px solid red;"
	    c2=0;}

	  if(a2==1 && b2==1 && c2==1 && d2==1){
      document.getElementById("cm2e").disabled = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm2e").disabled = true;}
}
function cm2d(){
	let x = document.getElementById("cm2d");
	  if(x.value==7){
	  	document.getElementById("cm2d").style="border-bottom: 4px solid green;"
	    d2=1;}
	  else{
	  	document.getElementById("cm2d").style="border-bottom: 4px solid red;"
	    d2=0;}

	  if(a2==1 && b2==1 && c2==1 && d2==1){
      document.getElementById("cm2e").disabled = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm2e").disabled = true;}
}

function cm2e(){
	let x = document.getElementById("cm2e");
	  if(x.value=="komedi"){
	  	document.getElementById("cm2e").style="border-bottom: 4px solid green;width:100px"
	  	document.getElementById("cm2hasilb").hidden=false;
	  	document.getElementById("resetb").hidden=false;
	  	let con=document.getElementById("conso");
   		con.scrollTop=con.scrollHeight;
	  }
	  else{
	  	document.getElementById("cm2e").style="border-bottom: 4px solid red;width:100px"
	  	document.getElementById("cm2hasilb").hidden=true;
	  	document.getElementById("resetb").hidden=true;
	  }
}

function reseta(){
	var container = document.getElementById("consomodusa");
    container.innerHTML= html;
    document.getElementById("cm1hasil").hidden = true;
    document.getElementById("reseta").hidden = true;
    a=0;
	b=0;
	c=0;
	d=0;
	e=0;
	f=0;
}
var html;
  html = document.getElementById('consomodusa').innerHTML; 
function resetb(){
	var containerb = document.getElementById("consomodusb");
    containerb.innerHTML= htmlb;
    document.getElementById("cm2e").disabled = true;
    document.getElementById("cm2hasilb").hidden=true;
    document.getElementById("resetb").hidden = true;
    a2=0;
	b2=0;
	c2=0;
	d2=0;
}
var htmlb;
  htmlb = document.getElementById('consomodusb').innerHTML; 

function consomodus1(){
	document.getElementById("consomodusa").hidden=false;
	document.getElementById("consomodusb").hidden=true;
}
function consomodus2(){
	document.getElementById("consomodusa").hidden=true;
	document.getElementById("consomodusb").hidden=false;
}