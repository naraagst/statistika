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
let e2=0;
let a3=0;
let b3=0;
let c3=0;
let d3=0;
let e3=0;
let f3=0;
let g3=0;
function consomodusa(){
	document.getElementById("consomodusa").hidden = false;
	document.getElementById("consomodusb").hidden = true;
	document.getElementById("consomodusc").hidden = true;
	document.getElementById("consomodusd").hidden = true;
	document.getElementById("cm4").style = "background-color:rgb(0,156,255, 0.5)";
	document.getElementById("cm1").style = "background-color:white";
	document.getElementById("cm2").style = "background-color:rgb(0,156,255, 0.5)";
	document.getElementById("cm3").style = "background-color:rgb(0,156,255, 0.5)";
}
function consomodusb(){
	document.getElementById("consomodusa").hidden = true;
	document.getElementById("consomodusb").hidden = false;
	document.getElementById("consomodusc").hidden = true;
	document.getElementById("consomodusd").hidden = true;
	document.getElementById("cm4").style = "background-color:rgb(0,156,255, 0.5)";
	document.getElementById("cm2").style = "background-color:white";
	document.getElementById("cm1").style = "background-color:rgb(0,156,255, 0.5)";
	document.getElementById("cm3").style = "background-color:rgb(0,156,255, 0.5)";
}
function consomodusc(){
	document.getElementById("consomodusa").hidden = true;
	document.getElementById("consomodusb").hidden = true;
	document.getElementById("consomodusc").hidden = false;
	document.getElementById("consomodusd").hidden = true;
	document.getElementById("cm4").style = "background-color:rgb(0,156,255, 0.5)";
	document.getElementById("cm3").style = "background-color:white";
	document.getElementById("cm2").style = "background-color:rgb(0,156,255, 0.5)";
	document.getElementById("cm1").style = "background-color:rgb(0,156,255, 0.5)";
}
function consomodusd(){
	document.getElementById("consomodusa").hidden = true;
	document.getElementById("consomodusb").hidden = true;
	document.getElementById("consomodusd").hidden = false;
	document.getElementById("consomodusc").hidden = true;
	document.getElementById("cm4").style = "background-color:white";
	document.getElementById("cm3").style = "background-color:rgb(0,156,255, 0.5)";
	document.getElementById("cm2").style = "background-color:rgb(0,156,255, 0.5)";
	document.getElementById("cm1").style = "background-color:rgb(0,156,255, 0.5)";
}
function cm1a(){
	let x = document.getElementById("cm1a");
	  if(x.value==2){
	  	document.getElementById("cm1a").style="border: 4px solid green;"
	    a=1;}
	  else{
	  	document.getElementById("cm1a").style="border: 4px solid red;"
	    a=0;}

	  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1){
      document.getElementById("cm1hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm1hasil").hidden = true;}
}
function cm1b(){
	let x = document.getElementById("cm1b");
	  if(x.value==4){
	  	document.getElementById("cm1b").style="border: 4px solid green;"
	    b=1;}
	  else{
	  	document.getElementById("cm1b").style="border: 4px solid red;"
	    b=0;}

	  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1){
      document.getElementById("cm1hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm1hasil").hidden = true;}
}
function cm1c(){
	let x = document.getElementById("cm1c");
	  if(x.value==1){
	  	document.getElementById("cm1c").style="border: 4px solid green;"
	    c=1;}
	  else{
	  	document.getElementById("cm1c").style="border: 4px solid red;"
	    c=0;}

	  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1){
      document.getElementById("cm1hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm1hasil").hidden = true;}
}
function cm1d(){
	let x = document.getElementById("cm1d");
	  if(x.value==2){
	  	document.getElementById("cm1d").style="border: 4px solid green;"
	    d=1;}
	  else{
	  	document.getElementById("cm1d").style="border: 4px solid red;"
	    d=0;}

	  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1){
      document.getElementById("cm1hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm1hasil").hidden = true;}
}
function cm1e(){
	let x = document.getElementById("cm1e");
	  if(x.value==1){
	  	document.getElementById("cm1e").style="border: 4px solid green;"
	    e=1;}
	  else{
	  	document.getElementById("cm1e").style="border: 4px solid red;"
	    e=0;}

	  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1){
      document.getElementById("cm1hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm1hasil").hidden = true;}
}
function cm1f(){
	let x = document.getElementById("cm1f");
	  if(x.value==1){
	  	document.getElementById("cm1f").style="border: 4px solid green;"
	    f=1;}
	  else{
	  	document.getElementById("cm1f").style="border: 4px solid red;"
	    f=0;}

	  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1){
      document.getElementById("cm1hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm1hasil").hidden = true;}
}
function cm2a(){
	let x = document.getElementById("cm2a");
	  if(x.value==1){
	  	document.getElementById("cm2a").style="border: 4px solid green;"
	    a2=1;}
	  else{
	  	document.getElementById("cm2a").style="border: 4px solid red;"
	    a2=0;}

	  if(a2==1 && b2==1 && c2==1 && d2==1 && e2==1){
      document.getElementById("cm2hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm2hasil").hidden = true;}
}
function cm2b(){
	let x = document.getElementById("cm2b");
	  if(x.value==2){
	  	document.getElementById("cm2b").style="border: 4px solid green;"
	    b2=1;}
	  else{
	  	document.getElementById("cm2b").style="border: 4px solid red;"
	    b2=0;}

	  if(a2==1 && b2==1 && c2==1 && d2==1 && e2==1){
      document.getElementById("cm2hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm2hasil").hidden = true;}
}
function cm2c(){
	let x = document.getElementById("cm2c");
	  if(x.value==2){
	  	document.getElementById("cm2c").style="border: 4px solid green;"
	    c2=1;}
	  else{
	  	document.getElementById("cm2c").style="border: 4px solid red;"
	    c2=0;}

	  if(a2==1 && b2==1 && c2==1 && d2==1 && e2==1){
      document.getElementById("cm2hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm2hasil").hidden = true;}
}
function cm2d(){
	let x = document.getElementById("cm2d");
	  if(x.value==3){
	  	document.getElementById("cm2d").style="border: 4px solid green;"
	    d2=1;}
	  else{
	  	document.getElementById("cm2d").style="border: 4px solid red;"
	    d2=0;}

	  if(a2==1 && b2==1 && c2==1 && d2==1 && e2==1){
      document.getElementById("cm2hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm2hasil").hidden = true;}
}
function cm2e(){
	let x = document.getElementById("cm2e");
	  if(x.value==3){    
	  	document.getElementById("cm2e").style="border: 4px solid green;"
	    e2=1;}
	  else{
	  	document.getElementById("cm2e").style="border: 4px solid red;"
	    e2=0;}

	  if(a2==1 && b2==1 && c2==1 && d2==1 && e2==1){
      document.getElementById("cm2hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm2hasil").hidden = true;}
}
function cm3a(){
	let x = document.getElementById("cm3a");
	  if(x.value==1){    
	  	document.getElementById("cm3a").style="border: 4px solid green;"
	    a3=1;}
	  else{
	  	document.getElementById("cm3a").style="border: 4px solid red;"
	    a3=0;}

	  if(a3==1 && b3==1 && c3==1 && d3==1 && e3==1 && f3==1 && g3==1){
      document.getElementById("cm3hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm3hasil").hidden = true;}
}
function cm3b(){
	let x = document.getElementById("cm3b");
	  if(x.value==1){    
	  	document.getElementById("cm3b").style="border: 4px solid green;"
	    b3=1;}
	  else{
	  	document.getElementById("cm3b").style="border: 4px solid red;"
	    b3=0;}

	  if(a3==1 && b3==1 && c3==1 && d3==1 && e3==1 && f3==1 && g3==1){
      document.getElementById("cm3hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm3hasil").hidden = true;}
}
function cm3c(){
	let x = document.getElementById("cm3c");
	  if(x.value==1){    
	  	document.getElementById("cm3c").style="border: 4px solid green;"
	    c3=1;}
	  else{
	  	document.getElementById("cm3c").style="border: 4px solid red;"
	    c3=0;}

	  if(a3==1 && b3==1 && c3==1 && d3==1 && e3==1 && f3==1 && g3==1){
      document.getElementById("cm3hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm3hasil").hidden = true;}
}
function cm3d(){
	let x = document.getElementById("cm3d");
	  if(x.value==1){    
	  	document.getElementById("cm3d").style="border: 4px solid green;"
	    d3=1;}
	  else{
	  	document.getElementById("cm3d").style="border: 4px solid red;"
	    d3=0;}

	  if(a3==1 && b3==1 && c3==1 && d3==1 && e3==1 && f3==1 && g3==1){
      document.getElementById("cm3hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm3hasil").hidden = true;}
}
function cm3e(){
	let x = document.getElementById("cm3e");
	  if(x.value==1){    
	  	document.getElementById("cm3e").style="border: 4px solid green;"
	    e3=1;}
	  else{
	  	document.getElementById("cm3e").style="border: 4px solid red;"
	    e3=0;}

	  if(a3==1 && b3==1 && c3==1 && d3==1 && e3==1 && f3==1 && g3==1){
      document.getElementById("cm3hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm3hasil").hidden = true;}
}
function cm3f(){
	let x = document.getElementById("cm3f");
	  if(x.value==1){    
	  	document.getElementById("cm3f").style="border: 4px solid green;"
	    f3=1;}
	  else{
	  	document.getElementById("cm3f").style="border: 4px solid red;"
	    f3=0;}

	  if(a3==1 && b3==1 && c3==1 && d3==1 && e3==1 && f3==1 && g3==1){
      document.getElementById("cm3hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm3hasil").hidden = true;}
}
function cm3g(){
	let x = document.getElementById("cm3g");
	  if(x.value==1){    
	  	document.getElementById("cm3g").style="border: 4px solid green;"
	    g3=1;}
	  else{
	  	document.getElementById("cm3g").style="border: 4px solid red;"
	    g3=0;}

	  if(a3==1 && b3==1 && c3==1 && d3==1 && e3==1 && f3==1 && g3==1){
      document.getElementById("cm3hasil").hidden = false;
  	  let con=document.getElementById("conso");
   	  con.scrollTop=con.scrollHeight;}
   	  else{
      document.getElementById("cm3hasil").hidden = true;}
}
function cm4a(){
	let x = document.getElementById("cm4a");
	if(x.value==39){    
	  document.getElementById("cm4a").style="border: 4px solid green;"
	  document.getElementById("cm4hasil").style="color:green;margin-top:-10px"
	  document.getElementById("cm4hasil").innerHTML="<b>Benar.</b><br/> Nomor sepatu yang frekuensinya paling tinggi adalah 39. <b>Jadi modusnya adalah 39.</b>"
	}
	else{
	  document.getElementById("cm4a").style="border: 4px solid red;"
	   document.getElementById("cm4hasil").style="color:red;margin-top:-10px"
	  document.getElementById("cm4hasil").innerHTML="<b>Salah.</b><br/> Masih ada nomor sepatu lain yang frekuensinya lebih tinggi.</b>"
	}
}