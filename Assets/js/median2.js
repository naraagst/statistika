let a=0;
let b=0;
let c=0;
let d=0;
let e=0;
let f=0;
let g=0;
let h=0;
let a1=0;
let b1=0;
let c1=0;
let d1=0;
let e1=0;
let f1=0;
let g1=0;
let consoContainer = document.querySelector("#conso");

function in1() {
  document.getElementById("tbl1").style="border: 5px solid orange;"
}
function in2() {
  document.getElementById("tbl2").style="border: 5px solid orange;"
}
function in3() {
  document.getElementById("tbl3").style="border: 5px solid orange;"
}
function in4() {
  document.getElementById("tbl4").style="border: 5px solid orange;"
}
function in5() {
  document.getElementById("tbl5").style="border: 5px solid orange;"
}
function in6() {
  document.getElementById("tbl6").style="border: 5px solid orange;"
}
function in7() {
  document.getElementById("tbl7").style="border: 5px solid orange;"
}
function in9() {
  document.getElementById("tbl8").style="border: 5px solid orange;"
}
function in10() {
  document.getElementById("tbl9").style="border: 5px solid orange;"
}
function in11() {
  document.getElementById("tbl10").style="border: 5px solid orange;"
}
function in12() {
  document.getElementById("tbl11").style="border: 5px solid orange;"
}
function in13() {
  document.getElementById("tbl12").style="border: 5px solid orange;"
}
function in14() {
  document.getElementById("tbl13").style="border: 5px solid orange;"
}


function out1() {
  document.getElementById("tbl1").style="border: 3px solid rgb(0,84,130);"
  let x = document.getElementById("med2a");
  if(x.value==5){
  	document.getElementById("med2a").style="border-bottom: 4px solid green;"
    a=1;}
  else{
  	document.getElementById("med2a").style="border-bottom: 4px solid red;"
    a=0;}

  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1 && g==1 && h==1){
      document.getElementById("hid_mdn").hidden = false;
   }
    else{
      document.getElementById("hid_mdn").hidden = true;
  }
}
function out2() {
  document.getElementById("tbl2").style="border: 3px solid rgb(0,84,130);"
  let x = document.getElementById("med2b");
  if(x.value==7){
  	document.getElementById("med2b").style="border-bottom: 4px solid green;"
    b=1;}
  else{
  	document.getElementById("med2b").style="border-bottom: 4px solid red;"
    b=0;}

  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1 && g==1 && h==1){
      document.getElementById("hid_mdn").hidden = false;
   }
    else{
      document.getElementById("hid_mdn").hidden = true;
  }
}

function out3() {
  document.getElementById("tbl3").style="border: 3px solid rgb(0,84,130);"
  let x = document.getElementById("med2c");
  if(x.value==6){
  	document.getElementById("med2c").style="border-bottom: 4px solid green;"
    c=1;}
  else{
  	document.getElementById("med2c").style="border-bottom: 4px solid red;"
    c=0;}

  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1 && g==1 && h==1){
      document.getElementById("hid_mdn").hidden = false;
   }
    else{
      document.getElementById("hid_mdn").hidden = true;
  }
}
function out4() {
  document.getElementById("tbl4").style="border: 3px solid rgb(0,84,130);"
  let x = document.getElementById("med2d");
  if(x.value==6){
  	document.getElementById("med2d").style="border-bottom: 4px solid green;"
    d=1;}
  else{
  	document.getElementById("med2d").style="border-bottom: 4px solid red;"
    d=0;}

  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1 && g==1 && h==1){
      document.getElementById("hid_mdn").hidden = false;
   }
    else{
      document.getElementById("hid_mdn").hidden = true;
  }
}
function out5() {
  document.getElementById("tbl5").style="border: 3px solid rgb(0,84,130);"
  let x = document.getElementById("med2e");
  if(x.value==5){
  	document.getElementById("med2e").style="border-bottom: 4px solid green;"
    e=1;}
  else{
  	document.getElementById("med2e").style="border-bottom: 4px solid red;"
    e=0;}

  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1 && g==1 && h==1){
      document.getElementById("hid_mdn").hidden = false;
   }
    else{
      document.getElementById("hid_mdn").hidden = true;
  }
}
function out6() {
  document.getElementById("tbl6").style="border: 3px solid rgb(0,84,130);"
  let x = document.getElementById("med2f");
  if(x.value==9){
  	document.getElementById("med2f").style="border-bottom: 4px solid green;"
    f=1;}
  else{
  	document.getElementById("med2f").style="border-bottom: 4px solid red;"
    f=0;}

  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1 && g==1 && h==1){
      document.getElementById("hid_mdn").hidden = false;
   }
    else{
      document.getElementById("hid_mdn").hidden = true;
  }
}
function out7() {
  document.getElementById("tbl7").style="border: 3px solid rgb(0,84,130);"
  let x = document.getElementById("med2g");
  if(x.value==7){
  	document.getElementById("med2g").style="border-bottom: 4px solid green;"
    g=1;}
  else{
  	document.getElementById("med2g").style="border-bottom: 4px solid red;"
    g=0;}

  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1 && g==1 && h==1){
      document.getElementById("hid_mdn").hidden = false;
   }
    else{
      document.getElementById("hid_mdn").hidden = true;
  }
}
function out8() {
  let x = document.getElementById("med2h");
  if(x.value==45){
  	document.getElementById("med2h").style="border-bottom: 4px solid green;"
    h=1;
  }
  else{
  	document.getElementById("med2h").style="border-bottom: 4px solid red;"
    h=0;}

  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1 && g==1 && h==1){
      document.getElementById("hid_mdn").hidden = false;
   }
    else{
      document.getElementById("hid_mdn").hidden = true;
  }
}
function out9() {
  document.getElementById("tbl8").style="border: 3px solid rgb(0,84,130);"
  let x = document.getElementById("med2i");
  if(x.value==5){
    document.getElementById("med2i").style="border-bottom: 4px solid green;"
    a1=1;
  }
  else{
    document.getElementById("med2i").style="border-bottom: 4px solid red;"
    a1=0;}

  if(a1==1 && b1==1 && c1==1 && d1==1 && e1==1 && f1==1 && g1==1){
      document.getElementById("hid_mdn2").hidden = false;
   }
    else{
      document.getElementById("hid_mdn2").hidden = true;
  }
}
function out10() {
  document.getElementById("tbl9").style="border: 3px solid rgb(0,84,130);"
  let x = document.getElementById("med2j");
  if(x.value==9){
    document.getElementById("med2j").style="border-bottom: 4px solid green;"
    b1=1;
  }
  else{
    document.getElementById("med2j").style="border-bottom: 4px solid red;"
    b1=0;}

  if(a1==1 && b1==1 && c1==1 && d1==1 && e1==1 && f1==1 && g1==1){
      document.getElementById("hid_mdn2").hidden = false;
   }
    else{
      document.getElementById("hid_mdn2").hidden = true;
  }
}
function out11() {
  document.getElementById("tbl10").style="border: 3px solid rgb(0,84,130);"
  let x = document.getElementById("med2k");
  if(x.value==10){
    document.getElementById("med2k").style="border-bottom: 4px solid green;"
    c1=1;
}
  else{
    document.getElementById("med2k").style="border-bottom: 4px solid red;"
    c1=0;}

  if(a1==1 && b1==1 && c1==1 && d1==1 && e1==1 && f1==1 && g1==1){
      document.getElementById("hid_mdn2").hidden = false;
   }
    else{
      document.getElementById("hid_mdn2").hidden = true;
  }
}
function out12() {
  document.getElementById("tbl11").style="border: 3px solid rgb(0,84,130);"
  let x = document.getElementById("med2l");
  if(x.value==8){
    document.getElementById("med2l").style="border-bottom: 4px solid green;"
    d1=1;
}
  else{
    document.getElementById("med2l").style="border-bottom: 4px solid red;"
    d1=0;}

  if(a1==1 && b1==1 && c1==1 && d1==1 && e1==1 && f1==1 && g1==1){
      document.getElementById("hid_mdn2").hidden = false;
   }
    else{
      document.getElementById("hid_mdn2").hidden = true;
  }
}
function out13() {
  document.getElementById("tbl12").style="border: 3px solid rgb(0,84,130);"
  let x = document.getElementById("med2m");
  if(x.value==5){
    document.getElementById("med2m").style="border-bottom: 4px solid green;"
    e1=1;
}
  else{
    document.getElementById("med2m").style="border-bottom: 4px solid red;"
    e1=0;}

  if(a1==1 && b1==1 && c1==1 && d1==1 && e1==1 && f1==1 && g1==1){
      document.getElementById("hid_mdn2").hidden = false;
   }
    else{
      document.getElementById("hid_mdn2").hidden = true;
  }
}
function out14() {
  document.getElementById("tbl13").style="border: 3px solid rgb(0,84,130);"
  let x = document.getElementById("med2n");
  if(x.value==3){
    document.getElementById("med2n").style="border-bottom: 4px solid green;"
    f1=1;
}
  else{
    document.getElementById("med2n").style="border-bottom: 4px solid red;"
    f1=0;}

  if(a1==1 && b1==1 && c1==1 && d1==1 && e1==1 && f1==1 && g1==1){
      document.getElementById("hid_mdn2").hidden = false;
   }
    else{
      document.getElementById("hid_mdn2").hidden = true;
  }
}
function out15() {
  let x = document.getElementById("med2o");
  if(x.value==40){
    document.getElementById("med2o").style="border-bottom: 4px solid green;"
    g1=1;}
  else{
    document.getElementById("med2o").style="border-bottom: 4px solid red;"
    g1=0;}

  if(a1==1 && b1==1 && c1==1 && d1==1 && e1==1 && f1==1 && g1==1){
      document.getElementById("hid_mdn2").hidden = false;
   }
    else{
      document.getElementById("hid_mdn2").hidden = true;
  }
}

function consomdn2a(){
  document.getElementById("mdn_ganjil").hidden = false;
  document.getElementById("mdn_genap").hidden = true;
  consoContainer.scrollIntoView();
}
function consomdn2b(){
  document.getElementById("mdn_ganjil").hidden = true;
  document.getElementById("mdn_genap").hidden = false;
  consoContainer.scrollIntoView();
}