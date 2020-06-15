
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
      document.getElementById("div1").style="border: 2px solid green;height: 45px;"
      document.getElementById("drag1").style="border: 0px;width:100%"
    }
    else{
      document.getElementById(target).style="border: 2px solid red;height: 45px;"
      document.getElementById(data).style="border: 0px;width:100%"
    }
  }
  else if(data=="drag2"){
    if(target=="div2"){
        document.getElementById("div2").style="border: 2px solid green;height: 45px;"
        document.getElementById("drag2").style="border: 0px;width:100%"
      }
    else{
      document.getElementById(target).style="border: 2px solid red;height: 45px;"
      document.getElementById(data).style="border: 0px;width:100%"
    }
  }
  else if(data=="drag3"){
    if(target=="div3"){
        document.getElementById("div3").style="border: 2px solid green;"
        document.getElementById("drag3").style="border: 0px;width:100%"
        document.getElementById("rumusmean").hidden = false;
        document.getElementById("ddrumusmean").hidden = true;
      }
    else{
      document.getElementById(target).style="border: 2px solid red;"
      document.getElementById(data).style="border: 0px;width:100%"
    }
  }
  
}