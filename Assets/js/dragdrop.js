let x=0;
let y=0;
let z=0;
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var target = ev.target.id;
  ev.target.appendChild(document.getElementById(data));
  if(data=="drag1"){
    if(target=="div1"){
      x=1;
      document.getElementById("drag1").style="border: 0px;width:97%";
    }
    else{
      x=0;
      document.getElementById(data).style="border: 0px;width:97%";
    }
  }
  else if(data=="drag2"){
    if(target=="div2"){
        y=1;
        document.getElementById("drag2").style="border: 0px;width:97%";
      }
    else{
      y=0;
      document.getElementById(data).style="border: 0px;width:97%";
    }
  }
  else if(data=="drag3"){
    if(target=="div3"){
        z=1;
        document.getElementById("drag3").style="border: 0px;width:97%";
      }
    else{
      z=0;
      document.getElementById(data).style="border: 0px;width:97%";
    }
  }

}

function cek(){
  if(x==1){
      document.getElementById("div1").style="border: 2px solid green;height: 30px;";
  }
  else{
    document.getElementById("div1").style="border: 2px solid red;height: 30px;";
    
  }
  if(y==1){
    document.getElementById("div2").style="border: 2px solid green;height: 30px;";
  }
  else{
    document.getElementById("div2").style="border: 2px solid red;height: 30px;";
  }
  if(z==1){
    document.getElementById("div3").style="border: 2px solid green;";
  }
  else{
    document.getElementById("div3").style="border: 2px solid red;";
  }
  if(x==1&&y==1&&z==1){
    document.getElementById("cmean1").style="pointer-events:auto;opacity:100%;";
    document.getElementById("cmean2").style="pointer-events:auto;opacity:100%;";
    document.getElementById("containermodus").hidden = false;
    document.getElementById("cmean1").style="border:5px solid rgb(0,156,255, 0.5);border-bottom: none;background-color: white;";
    document.getElementById("cmean2").style = "background-color:rgb(0,156,255, 0.5);border:1px solid white;";
    document.getElementById("consomodus").hidden=false;
    document.getElementById("cobamodus").hidden=true;
    document.getElementById("cekdd").hidden=true;
    document.getElementById("resetdd").hidden=true;
    document.getElementById("hasildd").innerHTML="Jawabanmu benar. Silahkan pelajari contoh soal dan latihan di samping."
    document.getElementById("hasildd").style="color:green;"
  }
  else{
    document.getElementById("hasildd").innerHTML="Jawaban masih salah. Silahkan tekan tombol reset dan coba lagi."
    document.getElementById("hasildd").style="color:red;"
  }
}

function reset1(){
    var container = document.getElementById("ddrumus");
    container.innerHTML= html;
    document.getElementById("rumusmean").hidden = true;
}                
var html;
  html = document.getElementById('ddrumus').innerHTML; 