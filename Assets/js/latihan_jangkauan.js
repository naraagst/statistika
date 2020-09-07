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
  let tampilSoalSatu = document.querySelector("#soal");
  let tampilGbrSatu = document.querySelector("#gbr");
  let answerSatu = document.querySelector("#jwbsiswa");
  let cekSatu = document.querySelector("#cekjwb1");
  let benarSatu = document.querySelector("#hasilbenar");
  let tampilPembSatu = document.querySelector("#pemb1");
  let jawaban = "";

  function loadSoalSatu() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        let soalSatu = JSON.parse(this.responseText);
        let soalArray = [];
        let gbrArray = [];
        let jwbArray = [];
        let pembArray =[];

        let randQuestion = soalSatu.soal_jangkauan.sort((a,b) => {return 0.5 - Math.random()})
        let sliceQuestion = randQuestion.slice(0, 5)

        tampilSoalSatu.innerHTML = sliceQuestion[0].soal;
        tampilGbrSatu.innerHTML = sliceQuestion[0].gbr;
        tampilPembSatu.innerHTML = sliceQuestion[0].pembahasan;
        jawaban = sliceQuestion[0].jwb;

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
    xhttp.open("GET", "../../json/latihan_jangkauan.json", true);
    xhttp.send();
  } 

  loadSoalSatu()

  answerSatu.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekSatu.click();
    }
  });

  cekSatu.addEventListener("click", function () {
    answerSatu.setAttribute("disabled", "");
    if (answerSatu.value != jawaban) {
      answerSatu.style.border = "2px solid red"
      benarSatu.style = "color:red;font-weight:bold"
      benarSatu.innerHTML = `
        ${
          answerSatu.value !== ""
            ? `Kurang Tepat! Jawabannya bukan <strong>${answerSatu.value}</strong>.`
            : "Tidak Boleh Kosong"
        }
        `;
      if (answerSatu.value != "") {
        progress[0].classList.add('progress-salah')
        sal[1]+=1;
        if(sal[1]>=2){
          lihatPemb[0].style.display="block";
        }
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
      answerSatu.style.border = "2px solid green" 
      benarSatu.style = "color:green;font-weight:bold"
      benarSatu.innerHTML = `
          Benar! Jawabannya adalah <strong>${jawaban}</strong>.
      `;
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
  let tampilPembDua = document.querySelector("#pemb2");
  let answerDua = document.querySelector("#jwbsiswa2");
  let cekDua = document.querySelector("#cekjwb2");
  let benarDua = document.querySelector("#hasilbenar2");
  let jawabanDua = "";

  answerDua.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekDua.click();
    }
  });

  cekDua.addEventListener("click", function () {
    answerDua.setAttribute("disabled", "");
    if (answerDua.value != jawabanDua) {
      answerDua.style.border = "2px solid red"
      benarDua.style = "color:red;font-weight:bold"
      benarDua.innerHTML = `
        ${
          answerDua.value !== ""
            ? `Kurang Tepat! Jawabannya bukan <strong>${answerDua.value}</strong>.`
            : "Tidak Boleh Kosong"
        }
        `;
      if (answerDua.value != "") {
        progress[1].classList.add('progress-salah')
        sal[2]+=1;
        if(sal[2]>=2){
          lihatPemb[1].style.display="block";
        }
      }
      ulangSoal[1].style.display = "inline-block";
      cekJwb[1].style.display = "none";
    } else {

      answerDua.style.border = "2px solid green" 
      benarDua.style = "color:green;font-weight:bold"
      benarDua.innerHTML = `
          Benar! Jawabannya adalah <strong>${jawabanDua}</strong>.
      `;
      jlhBenar++;
      if(jlhBenar==5){
        for (let n = 0; n < 5; n++) {
          cekJwb[n].style.display = "none";
          retryButton[n].style.display = "inline-block";
          benarSemua[n].innerHTML = "Selamat! Semua soal sudah benar."
        } 
      }
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
  let tampilPembTiga = document.querySelector("#pemb3");
  let answerTiga = document.querySelector("#jwbsiswa3");
  let cekTiga = document.querySelector("#cekjwb3");
  let benarTiga = document.querySelector("#hasilbenar3");
  let jawabanTiga = "";
  answerTiga.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekTiga.click();
    }
  });

  cekTiga.addEventListener("click", function () {
    answerTiga.setAttribute("disabled", "");
    if (answerTiga.value != jawabanTiga) {
      answerTiga.style.border = "2px solid red"
      benarTiga.style = "color:red;font-weight:bold"
      benarTiga.innerHTML = `
        ${
          answerTiga.value !== ""
            ? `Kurang Tepat! Jawabannya bukan <strong>${answerTiga.value}</strong>.`
            : "Tidak Boleh Kosong"
        }
        `;
      if (answerTiga.value != "") {
        progress[2].classList.add('progress-salah')
        sal[3]+=1;
        if(sal[3]>=2){
          lihatPemb[2].style.display="block";
        }
      }
      ulangSoal[2].style.display = "inline-block";
      cekJwb[2].style.display = "none";
    } else {
      answerTiga.style.border = "2px solid green" 
      benarTiga.style = "color:green;font-weight:bold"
      benarTiga.innerHTML = `
          Benar! Jawabannya adalah <strong>${jawabanTiga}</strong>.
      `;
      jlhBenar++;
      if(jlhBenar==5){
        for (let n = 0; n < 5; n++) {
          cekJwb[n].style.display = "none";
          retryButton[n].style.display = "inline-block";
          benarSemua[n].innerHTML = "Selamat! Semua soal sudah benar."
        } 
      }
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
  let tampilPembEmpat = document.querySelector("#pemb4");
  let answerEmpat = document.querySelector("#jwbsiswa4");
  let cekEmpat = document.querySelector("#cekjwb4");
  let benarEmpat = document.querySelector("#hasilbenar4");
  let jawabanEmpat = "";

  answerEmpat.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekEmpat.click();
    }
  });

  cekEmpat.addEventListener("click", function () {
    answerEmpat.setAttribute("disabled", "");
    if (answerEmpat.value != jawabanEmpat) {
      answerEmpat.style.border = "2px solid red"
      benarEmpat.style = "color:red;font-weight:bold"
      benarEmpat.innerHTML = `
        ${
          answerEmpat.value !== ""
            ? `Kurang Tepat! Jawabannya bukan <strong>${answerEmpat.value}</strong>.`
            : "Tidak Boleh Kosong"
        }
        `;
      if (answerEmpat.value != "") {
        progress[3].classList.add('progress-salah')
        sal[4]+=1;
        if(sal[4]>=2){
          lihatPemb[3].style.display="block";
        }
      }
      ulangSoal[3].style.display = "inline-block";
      cekJwb[3].style.display = "none";
    } else {
      answerEmpat.style.border = "2px solid green" 
      benarEmpat.style = "color:green;font-weight:bold"
      benarEmpat.innerHTML = `
          Benar! Jawabannya adalah <strong>${jawabanEmpat}</strong>.
      `;
      jlhBenar++;
      if(jlhBenar==5){
        for (let n = 0; n < 5; n++) {
          cekJwb[n].style.display = "none";
          retryButton[n].style.display = "inline-block";
          benarSemua[n].innerHTML = "Selamat! Semua soal sudah benar."
        } 
      }
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
  let tampilPembLima = document.querySelector("#pemb5");
  let answerLima = document.querySelector("#jwbsiswa5");
  let cekLima = document.querySelector("#cekjwb5");
  let benarLima = document.querySelector("#hasilbenar5");
  let jawabanLima = "";

  answerLima.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekLima.click();
    }
  });

  cekLima.addEventListener("click", function () {
    if (answerLima.value != jawabanLima) {
      answerLima.style.border = "2px solid red"
      benarLima.style = "color:red;font-weight:bold"
      benarLima.innerHTML = `
        ${
          answerLima.value !== ""
            ? `Kurang Tepat! Jawabannya bukan <strong>${answerLima.value}</strong>.`
            : "Tidak Boleh Kosong"
        }
        `;
      ulangSoal[4].style.display = "inline-block";
      cekJwb[4].style.display = "none";
      if (answerLima.value != "") {
        progress[4].classList.add('progress-salah')
        sal[5]+=1;
        if(sal[5]>=2){
          lihatPemb[4].style.display="block";
        }
      }
    } else {
      answerLima.style.border = "2px solid green" 
      benarLima.style = "color:green;font-weight:bold"
      benarLima.innerHTML = `
          Benar! Jawabannya adalah <strong>${jawabanLima}</strong>.
      `;
      jlhBenar++;
      if(jlhBenar==5){
        for (let n = 0; n < 5; n++) {
          cekJwb[n].style.display = "none";
          retryButton[n].style.display = "inline-block";
          benarSemua[n].innerHTML = "Selamat! Semua soal sudah benar."
        } 
      }
      cekJwb[4].setAttribute('disabled', true);
      cekJwb[4].classList.remove('cek')
      cekJwb[4].classList.add('cekdisabled')
      progress[4].classList.remove('progress-salah')
      progress[4].classList.add('progress-benar')
      answerLima.setAttribute("disabled", "");
    }
  });

  function retryQuiz(){
        window.location.reload()
      }

  function ulang(){
    if (currentTab==1){
      answerSatu.value="";
      answerSatu.style.border="1px solid grey";
      answerSatu.removeAttribute("disabled", "");
      benarSatu.innerHTML="";
    }
    if (currentTab==2){
      answerDua.value="";
      answerDua.style.border="1px solid grey";
      answerDua.removeAttribute("disabled", "");
      benarDua.innerHTML="";
    }
    if (currentTab==3){
      answerTiga.value="";
      answerTiga.style.border="1px solid grey";
      answerTiga.removeAttribute("disabled", "");
      benarTiga.innerHTML="";
    }
    if (currentTab==4){
      answerEmpat.value="";
      answerEmpat.style.border="1px solid grey";
      answerEmpat.removeAttribute("disabled", "");
      benarEmpat.innerHTML="";
    }
    if (currentTab==5){
      answerLima.value="";
      answerLima.style.border="1px solid grey";
      answerLima.removeAttribute("disabled", "");
      benarLima.innerHTML="";
    }
    cekJwb[currentTab - 1].style.display="inline-block";
    ulangSoal[currentTab - 1].style.display="none";
    pembContainer[currentTab - 1].style.display="none";
    lihatPemb[currentTab - 1].style.display="none";
  }

    function lihat(){
      pembContainer[currentTab-1].style.display = "block";
    }
});
