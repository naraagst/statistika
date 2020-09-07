document.addEventListener("DOMContentLoaded", function () {
  let content1 = document.querySelector("#content1");
  let nextSoal = document.querySelectorAll(".nextSoal");
  let prevSoal = document.querySelectorAll(".prevSoal");
  let progress = document.querySelectorAll(".progress-bar");
  let tabContent = document.querySelectorAll(".tabcontent");
  let retryButton = document.querySelectorAll(".ulangLat");
  let cekJwb = document.querySelectorAll(".cekjwb");
  let benarSemua = document.querySelectorAll(".benarSemua");
  let progressContainer = document.querySelector(".progress");
  let ulangSoal = document.querySelectorAll(".ulang");
  let lihatPemb = document.querySelectorAll(".lihat");
  let pembContainer = document.querySelectorAll(".pemb");
  sal = [];
  pembContainer[4].style.display = "none";
  lihatPemb[4].style.display = "none";
  ulangSoal[4].addEventListener("click", ulang);
  lihatPemb[4].addEventListener("click", lihat);
  retryButton[4].addEventListener("click", retryQuiz);
  let jlhBenar=0;
  progress[4].innerHTML="5";
  ulangSoal[4].style.display = "none";
  retryButton[4].style.display = "none";
  let currentTab = 1;
  content1.style.display = "block";
  progress[0].classList.add('progress-ongoing')

  for (let n = 0; n < nextSoal.length; n++) {
    nextSoal[n].addEventListener("click", nextSlide);
    progress[n].innerHTML=n+1;
    prevSoal[n].addEventListener("click", prevSlide);
    retryButton[n].style.display = "none";
    retryButton[n].addEventListener("click", retryQuiz);
    ulangSoal[n].style.display = "none";
    ulangSoal[n].addEventListener("click", ulang);
    lihatPemb[n].addEventListener("click", lihat);
    lihatPemb[n].style.display = "none";
    pembContainer[n].style.display = "none";
  }
  for (let f = 1; f<=5; f++){
    sal[f] = 0;
  }

  function nextSlide() {
    tabContent[currentTab - 1].style.display = "none";
    progress[currentTab].classList.add('progress-ongoing')
    progress[currentTab - 1].classList.remove('progress-ongoing')
    currentTab++;
    let tab = document.querySelector("#content" + currentTab);
    tab.style.display = "block";
    progressContainer.scrollIntoView();
  }

  function prevSlide(){
    tabContent[currentTab - 1].style.display = "none";
    currentTab--;
    progress[currentTab].classList.remove('progress-ongoing')
    progress[currentTab - 1].classList.add('progress-ongoing')
    let tab = document.querySelector("#content" + currentTab);
    tab.style.display = "block";
    progressContainer.scrollIntoView();
  }


  // Soal 1
  let tampilSoalSatu = document.querySelector("#soal1");
  let tampilGbrSatu = document.querySelector("#gbr1");
  let answerSatu = document.querySelectorAll(".jwbsiswa1");
  let cekSatu = document.querySelector("#cekjwb1");
  let benarSatu = document.querySelector("#hasilbenar");
  let tampilPembSatu = document.querySelector("#pemb1");
  let tampilPembDua = document.querySelector("#pemb2");
  let tampilPembTiga = document.querySelector("#pemb3");
  let tampilPembEmpat = document.querySelector("#pemb4");
  let tampilPembLima = document.querySelector("#pemb5");
  let jawabanSatu = [];
  let jawabanDua = [];
  let jawabanTiga = [];
  let jawabanEmpat = [];
  let jawabanLima = [];
  let jawaban = "";


  function loadSoalSatu() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        let soalSatu = JSON.parse(this.responseText);
        let pembArray =[];

        let randQuestion = soalSatu.soal_interkuartil.sort((a,b) => {return 0.5 - Math.random()})
        let sliceQuestion = randQuestion.slice(0, 5)


        console.log(sliceQuestion)

        tampilSoalSatu.innerHTML = sliceQuestion[0].soal;
        tampilGbrSatu.innerHTML = sliceQuestion[0].gbr;
        tampilPembSatu.innerHTML = sliceQuestion[0].pembahasan;
        jawabanSatu = sliceQuestion[0].jwb;

        tampilSoalDua.innerHTML = sliceQuestion[1].soal;
        tampilGbrDua.innerHTML = sliceQuestion[1].gbr;
        tampilPembDua.innerHTML = sliceQuestion[1].pembahasan;
        jawabanDua = sliceQuestion[1].jwb;

        tampilSoalTiga.innerHTML = sliceQuestion[2].soal;
        tampilGbrTiga.innerHTML = sliceQuestion[2].gbr;
        tampilPembTiga.innerHTML = sliceQuestion[2].pembahasan;
        jawabanTiga = sliceQuestion[2].jwb;

        tampilSoalEmpat.innerHTML = sliceQuestion[3].soal;
        tampilGbrEmpat.innerHTML = sliceQuestion[3].gbr;
        tampilPembEmpat.innerHTML = sliceQuestion[3].pembahasan;
        jawabanEmpat = sliceQuestion[3].jwb;

        tampilSoalLima.innerHTML = sliceQuestion[4].soal;
        tampilGbrLima.innerHTML = sliceQuestion[4].gbr;
        tampilPembLima.innerHTML = sliceQuestion[4].pembahasan;
        jawabanLima = sliceQuestion[4].jwb;

      }
    };
    xhttp.open("GET", "../../json/latihan_interkuartil.json", true);
    xhttp.send();
  } 

  loadSoalSatu();

  cekSatu.addEventListener("click", function () {
    let salah = 0;
    for (let i = 0; i < answerSatu.length; i++) {
      if (answerSatu[i].value != jawabanSatu[i]) {
        answerSatu[i].style.border = "2px solid red";
        salah++;
        if (answerSatu[i].value != "") {
        progress[0].classList.add('progress-salah')
        }
      } else {
        answerSatu[i].style.border = "2px solid green";
      }
      answerSatu[i].setAttribute("disabled", "");
    }
    if (salah > 0) {
      hasil1.style = "color:red;font-weight:bold"
      hasil1.innerHTML = `
        ${
          answerSatu[0].value !== "" &&
          answerSatu[1].value !== "" 
            ? `<br/>Kurang Tepat! jawaban masih ada yang <strong>Salah</strong>.`
            : "<br/>Inputan tidak boleh ada yang kosong."
        }
      `;
      sal[1]+=1;
        if(sal[1]>=2){
          lihatPemb[0].style.display="block";
        }
      ulangSoal[0].style.display = "inline-block";
      cekJwb[0].style.display = "none";

    } else {
      jlhBenar++;
      if(jlhBenar==5){
        for (let n = 0; n < 5; n++) {
          cekJwb[n].style.display = "none";
          retryButton[n].style.display = "inline-block";
          benarSemua[n].innerHTML = "Selamat! Semua soal sudah benar."
        } 
      }
      hasil1.style = "color:green;font-weight:bold"
      hasil1.innerHTML = `
      <br/>Jawaban Benar`;
      cekJwb[0].setAttribute('disabled', true);
      cekJwb[0].classList.remove('cek')
      cekJwb[0].classList.add('cekdisabled')
      progress[0].classList.remove('progress-salah')
      progress[0].classList.add('progress-benar')
    }
    
  });


  // Soal 2
  let tampilSoalDua = document.querySelector("#soal2");
  let tampilGbrDua = document.querySelector("#gbr2");
  let answerDua = document.querySelectorAll(".jwbsiswa2");
  let cekDua = document.querySelector("#cekjwb2");
  let benarDua = document.querySelector("#hasilbenar2")

  cekDua.addEventListener("click", function () {
    let salah = 0;
    for (let i = 0; i < answerDua.length; i++) {
      if (answerDua[i].value != jawabanDua[i]) {
        answerDua[i].style.border = "2px solid red";
        salah++;
        if (answerDua[i].value != "") {
        progress[1].classList.add('progress-salah')
        }
      } else {
        answerDua[i].style.border = "2px solid green";
      }
      answerDua[i].setAttribute("disabled", "");
    }
    if (salah > 0) {
      hasil2.style = "color:red;font-weight:bold"
      hasil2.innerHTML = `
        ${
          answerDua[0].value !== "" &&
          answerDua[1].value !== "" 
            ? `<br/>Kurang Tepat! jawaban masih ada yang <strong>Salah</strong>.`
            : "<br/>Inputan tidak boleh ada yang kosong."
        }
      `;
      sal[2]+=1;
        if(sal[2]>=2){
          lihatPemb[1].style.display="block";
        }
      ulangSoal[1].style.display = "inline-block";
      cekJwb[1].style.display = "none";

    } else {
      jlhBenar++;
      if(jlhBenar==5){
        for (let n = 0; n < 5; n++) {
          cekJwb[n].style.display = "none";
          retryButton[n].style.display = "inline-block";
          benarSemua[n].innerHTML = "Selamat! Semua soal sudah benar."
        } 
      }
      hasil2.style = "color:green;font-weight:bold"
      hasil2.innerHTML = `
      <br/>Jawaban Benar`;
      cekJwb[1].setAttribute('disabled', true);
      cekJwb[1].classList.remove('cek')
      cekJwb[1].classList.add('cekdisabled')
      progress[1].classList.remove('progress-salah')
      progress[1].classList.add('progress-benar')
    }
    
  });


  //Soal 3
  let tampilSoalTiga = document.querySelector("#soal3");
  let tampilGbrTiga = document.querySelector("#gbr3");
  let answerTiga = document.querySelectorAll(".jwbsiswa3");
  let cekTiga = document.querySelector("#cekjwb3");
  let benarTiga = document.querySelector("#hasilbenar3");

 
  cekTiga.addEventListener("click", function () {
    let salah = 0;
    for (let i = 0; i < answerTiga.length; i++) {
      if (answerTiga[i].value != jawabanTiga[i]) {
        answerTiga[i].style.border = "2px solid red";
        salah++;
        if (answerTiga[i].value != "") {
        progress[2].classList.add('progress-salah')
        }
      } else {
        answerTiga[i].style.border = "2px solid green";
      }
      answerTiga[i].setAttribute("disabled", "");
    }
    if (salah > 0) {
      hasil3.style = "color:red;font-weight:bold"
      hasil3.innerHTML = `
        ${
          answerTiga[0].value !== "" &&
          answerTiga[1].value !== "" 
            ? `<br/>Kurang Tepat! jawaban masih ada yang <strong>Salah</strong>.`
            : "<br/>Inputan tidak boleh ada yang kosong."
        }
      `;
      sal[3]+=1;
        if(sal[3]>=2){
          lihatPemb[2].style.display="block";
        }
      ulangSoal[2].style.display = "inline-block";
      cekJwb[2].style.display = "none";

    } else {
      jlhBenar++;
      if(jlhBenar==5){
        for (let n = 0; n < 5; n++) {
          cekJwb[n].style.display = "none";
          retryButton[n].style.display = "inline-block";
          benarSemua[n].innerHTML = "Selamat! Semua soal sudah benar."
        } 
      }
      hasil3.style = "color:green;font-weight:bold"
      hasil3.innerHTML = `
      <br/>Jawaban Benar`;
      cekJwb[2].setAttribute('disabled', true);
      cekJwb[2].classList.remove('cek')
      cekJwb[2].classList.add('cekdisabled')
      progress[2].classList.remove('progress-salah')
      progress[2].classList.add('progress-benar')
    }
    
  });


  //Soal Empat
  let tampilSoalEmpat = document.querySelector("#soal4");
  let tampilGbrEmpat = document.querySelector("#gbr4");
  let answerEmpat = document.querySelectorAll(".jwbsiswa4");
  let cekEmpat = document.querySelector("#cekjwb4");
  let benarEmpat = document.querySelector("#hasilbenar4");

  cekEmpat.addEventListener("click", function () {
    let salah = 0;
    for (let i = 0; i < answerEmpat.length; i++) {
      if (answerEmpat[i].value != jawabanEmpat[i]) {
        answerEmpat[i].style.border = "2px solid red";
        salah++;
        if (answerEmpat[i].value != "") {
        progress[3].classList.add('progress-salah')
        }
      } else {
        answerEmpat[i].style.border = "2px solid green";
      }
    answerEmpat[i].setAttribute("disabled", "");
    }
    if (salah > 0) {
      hasil4.style = "color:red;font-weight:bold"
      hasil4.innerHTML = `
        ${
          answerEmpat[0].value !== "" &&
          answerEmpat[1].value !== "" 
            ? `<br/>Kurang Tepat! jawaban masih ada yang <strong>Salah</strong>.`
            : "<br/>Inputan tidak boleh ada yang kosong."
        }
      `;
      sal[4]+=1;
        if(sal[4]>=2){
          lihatPemb[3].style.display="block";
        }
      ulangSoal[3].style.display = "inline-block";
      cekJwb[3].style.display = "none";

    } else {
      jlhBenar++;
      if(jlhBenar==5){
        for (let n = 0; n < 5; n++) {
          cekJwb[n].style.display = "none";
          retryButton[n].style.display = "inline-block";
          benarSemua[n].innerHTML = "Selamat! Semua soal sudah benar."
        } 
      }
      hasil4.style = "color:green;font-weight:bold"
      hasil4.innerHTML = `
      <br/>Jawaban Benar`;
      cekJwb[3].setAttribute('disabled', true);
      cekJwb[3].classList.remove('cek')
      cekJwb[3].classList.add('cekdisabled')
      progress[3].classList.remove('progress-salah')
      progress[3].classList.add('progress-benar')
    }
    
  });


  //Soal Lima
  let tampilSoalLima = document.querySelector("#soal5");
  let tampilGbrLima = document.querySelector("#gbr5");
  let answerLima = document.querySelectorAll(".jwbsiswa5");
  let cekLima = document.querySelector("#cekjwb5");
  let benarLima = document.querySelector("#hasilbenar5");



    cekLima.addEventListener("click", function () {
    let salah = 0;
    for (let i = 0; i < answerLima.length; i++) {
      if (answerLima[i].value != jawabanLima[i]) {
        answerLima[i].style.border = "2px solid red";
        salah++;
        if (answerLima[i].value != "") {
        progress[4].classList.add('progress-salah')
        }
      } else {
        answerLima[i].style.border = "2px solid green";
      }
      answerLima[i].setAttribute("disabled", "");
    }
    if (salah > 0) {
      hasil5.style = "color:red;font-weight:bold"
      hasil5.innerHTML = `
        ${
          answerLima[0].value !== "" &&
          answerLima[1].value !== "" 
            ? `<br/>Kurang Tepat! jawaban masih ada yang <strong>Salah</strong>.`
            : "<br/>Inputan tidak boleh ada yang kosong."
        }
      `;
      sal[5]+=1;
        if(sal[5]>=2){
          lihatPemb[4].style.display="block";
        }
      ulangSoal[4].style.display = "inline-block";
      cekJwb[4].style.display = "none";

    } else {
      jlhBenar++;
      if(jlhBenar==5){
        for (let n = 0; n < 5; n++) {
          cekJwb[n].style.display = "none";
          retryButton[n].style.display = "inline-block";
          benarSemua[n].innerHTML = "Selamat! Semua soal sudah benar."
        } 
      }
      hasil5.style = "color:green;font-weight:bold"
      hasil5.innerHTML = `
      <br/>Jawaban Benar`;
      cekJwb[4].setAttribute('disabled', true);
      cekJwb[4].classList.remove('cek')
      cekJwb[4].classList.add('cekdisabled')
      progress[4].classList.remove('progress-salah')
      progress[4].classList.add('progress-benar')
    }
    
  });

  function retryQuiz(){
        window.location.reload()
      }
  

  function ulang(){
    if (currentTab==1){
      for (let i = 0; i < 2; i++) {
          answerSatu[i].value="";
          answerSatu[i].style.border="1px solid grey";
          answerSatu[i].removeAttribute("disabled", "");
        }
    hasil1.innerHTML="";
    }
    if (currentTab==2){
      for (let i = 0; i < 2; i++) {
          answerDua[i].value="";
          answerDua[i].style.border="1px solid grey";
          answerDua[i].removeAttribute("disabled", "");
        }
    hasil2.innerHTML="";
    }
    if (currentTab==3){
      for (let i = 0; i < 2; i++) {
          answerTiga[i].value="";
          answerTiga[i].style.border="1px solid grey";
          answerTiga[i].removeAttribute("disabled", "");
        }
    hasil3.innerHTML="";
    }
    if (currentTab==4){
      for (let i = 0; i < 2; i++) {
          answerEmpat[i].value="";
          answerEmpat[i].style.border="1px solid grey";
          answerEmpat[i].removeAttribute("disabled", "");
        }
    hasil4.innerHTML="";
    }
    if (currentTab==5){
      for (let i = 0; i < 2; i++) {
          answerLima[i].value="";
          answerLima[i].style.border="1px solid grey";
          answerLima[i].removeAttribute("disabled", "");
        }
    hasil5.innerHTML="";
    }
    cekJwb[currentTab - 1].style.display="inline-block"
    ulangSoal[currentTab - 1].style.display="none";
    pembContainer[currentTab - 1].style.display="none";
    lihatPemb[currentTab - 1].style.display="none";
  }

  function lihat(){
      pembContainer[currentTab-1].style.display = "block";
    }
});
