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
  let jlhBenar=0;
  progress[4].innerHTML="5";
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
  // let ulangSatu = document.querySelector("#ulang-1");
  let benarSatu = document.querySelector("#hasilbenar");
  // let hintSatu = document.querySelector("#hint-1");
  let jawaban = "";
  // let showHintSatu = "";

  // hintSatu.style.display = "none";
  // ulangSatu.classList.add("disabled");


  function loadSoalSatu() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        let soalSatu = JSON.parse(this.responseText);
        let soalArray = [];
        let gbrArray = [];
        let jwbArray = [];

        let randQuestion = soalSatu.soal_mean.sort((a,b) => {return 0.5 - Math.random()})
        let sliceQuestion = randQuestion.slice(0, 5)


        console.log(sliceQuestion)

        tampilSoalSatu.innerHTML = sliceQuestion[0].soal;
        tampilGbrSatu.innerHTML = sliceQuestion[0].gbr;
        jawaban = sliceQuestion[0].jwb;

        tampilSoalDua.innerHTML = sliceQuestion[1].soal;
        tampilGbrDua.innerHTML = sliceQuestion[1].gbr;
        jawabanDua = sliceQuestion[1].jwb;

        tampilSoalTiga.innerHTML = sliceQuestion[2].soal;
        tampilGbrTiga.innerHTML = sliceQuestion[2].gbr;
        jawabanTiga = sliceQuestion[2].jwb;

        tampilSoalEmpat.innerHTML = sliceQuestion[3].soal;
        tampilGbrEmpat.innerHTML = sliceQuestion[3].gbr;
        jawabanEmpat = sliceQuestion[3].jwb;

        tampilSoalLima.innerHTML = sliceQuestion[4].soal;
        tampilGbrLima.innerHTML = sliceQuestion[4].gbr;
        jawabanLima = sliceQuestion[4].jwb;

      }
    };
    xhttp.open("GET", "../../json/latihan_mean.json", true);
    xhttp.send();
  } 

  loadSoalSatu();

  // ulangSatu.addEventListener("click", ulangSoalSatu);

  answerSatu.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekSatu.click();
    }
  });

  cekSatu.addEventListener("click", function () {
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
      }
      // hintSatu.style.display = "";
      // ulangSatu.classList.remove("disabled");
      // hintSatu.addEventListener("click", function () {
      //   answerSatu[0].value = showHintSatu;
      //   answerSatu[0].style.border = "2px solid Orange";
      //   cekSatu.classList.add("disabled");
      // });
    } else {
      // for (let i = 0; i < answerSatu.length; i++) {
      //   answerSatu[i].style.border = "2px solid green";
      //   answerSatu[i].setAttribute("disabled", "");
      // }
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

  // function ulangSoalSatu() {
  //   for (let i = 0; i < answerSatu.length; i++) {
  //     answerSatu[i].value = "";
  //     answerSatu[i].style.border = "1px solid grey";
  //     answerSatu[i].removeAttribute("disabled", "");
  //     cekSatu.classList.remove("disabled");
  //   }
  //   benarSatu.innerHTML = "";
  //   hintSatu.style.display = "none";
  // }

  // Soal 2
  let tampilSoalDua = document.querySelector("#soal2");
  let tampilGbrDua = document.querySelector("#gbr2");
  let answerDua = document.querySelector("#jwbsiswa2");
  let cekDua = document.querySelector("#cekjwb2");
  // let ulangDua = document.querySelector("#ulang-1");
  let benarDua = document.querySelector("#hasilbenar2");
  // let hintDua = document.querySelector("#hint-1");
  let jawabanDua = "";
  // let showHintDua = "";

  // hintDua.style.display = "none";
  // ulangDua.classList.add("disabled");

  // ulangDua.addEventListener("click", ulangSoalDua);

  answerDua.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekDua.click();
    }
  });

  cekDua.addEventListener("click", function () {
    // let salah = 0;
    // for (let i = 0; i < answerDua.length; i++) {
    //   if (answerDua[i].value != jawaban[i]) {
    //     answerDua[i].style.border = "2px solid red";
    //     salah++;
    //   }
    //   answerDua[i].setAttribute("disabled", "");
    // }

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
      }
      // hintDua.style.display = "";
      // ulangDua.classList.remove("disabled");
      // hintDua.addEventListener("click", function () {
      //   answerDua[0].value = showHintDua;
      //   answerDua[0].style.border = "2px solid Orange";
      //   cekDua.classList.add("disabled");
      // });
    } else {
      // for (let i = 0; i < answerDua.length; i++) {
      //   answerDua[i].style.border = "2px solid green";
      //   answerDua[i].setAttribute("disabled", "");
      // }
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

  // function ulangSoalDua() {
  //   for (let i = 0; i < answerDua.length; i++) {
  //     answerDua[i].value = "";
  //     answerDua[i].style.border = "1px solid grey";
  //     answerDua[i].removeAttribute("disabled", "");
  //     cekDua.classList.remove("disabled");
  //   }
  //   benarDua.innerHTML = "";
  //   hintDua.style.display = "none";
  // }

  //Soal 3
  let tampilSoalTiga = document.querySelector("#soal3");
  let tampilGbrTiga = document.querySelector("#gbr3");
  let answerTiga = document.querySelector("#jwbsiswa3");
  let cekTiga = document.querySelector("#cekjwb3");
  // let ulangTiga = document.querySelector("#ulang-1");
  let benarTiga = document.querySelector("#hasilbenar3");
  // let hintTiga = document.querySelector("#hint-1");
  let jawabanTiga = "";
  // let showHintTiga = "";

  // hintTiga.style.display = "none";
  // ulangTiga.classList.add("disabled");

  // ulangTiga.addEventListener("click", ulangSoalTiga);

  answerTiga.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekTiga.click();
    }
  });

  cekTiga.addEventListener("click", function () {
    // let salah = 0;
    // for (let i = 0; i < answerTiga.length; i++) {
    //   if (answerTiga[i].value != jawaban[i]) {
    //     answerTiga[i].style.border = "2px solid red";
    //     salah++;
    //   }
    //   answerTiga[i].setAttribute("disabled", "");
    // }

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
      }
      // hintTiga.style.display = "";
      // ulangTiga.classList.remove("disabled");
      // hintTiga.addEventListener("click", function () {
      //   answerTiga[0].value = showHintTiga;
      //   answerTiga[0].style.border = "2px solid Orange";
      //   cekTiga.classList.add("disabled");
      // });
    } else {
      // for (let i = 0; i < answerTiga.length; i++) {
      //   answerTiga[i].style.border = "2px solid green";
      //   answerTiga[i].setAttribute("disabled", "");
      // }
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

  // function ulangSoalTiga() {
  //   for (let i = 0; i < answerTiga.length; i++) {
  //     answerTiga[i].value = "";
  //     answerTiga[i].style.border = "1px solid grey";
  //     answerTiga[i].removeAttribute("disabled", "");
  //     cekTiga.classList.remove("disabled");
  //   }
  //   benarTiga.innerHTML = "";
  //   hintTiga.style.display = "none";
  // }

  //Soal Empat
  let tampilSoalEmpat = document.querySelector("#soal4");
  let tampilGbrEmpat = document.querySelector("#gbr4");
  let answerEmpat = document.querySelector("#jwbsiswa4");
  let cekEmpat = document.querySelector("#cekjwb4");
  // let ulangEmpat = document.querySelector("#ulang-1");
  let benarEmpat = document.querySelector("#hasilbenar4");
  // let hintEmpat = document.querySelector("#hint-1");
  let jawabanEmpat = "";
  // let showHintEmpat = "";

  // hintEmpat.style.display = "none";
  // ulangEmpat.classList.add("disabled");

  // ulangEmpat.addEventListener("click", ulangSoalEmpat);

  answerEmpat.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekEmpat.click();
    }
  });

  cekEmpat.addEventListener("click", function () {
    // let salah = 0;
    // for (let i = 0; i < answerEmpat.length; i++) {
    //   if (answerEmpat[i].value != jawaban[i]) {
    //     answerEmpat[i].style.border = "2px solid red";
    //     salah++;
    //   }
    //   answerEmpat[i].setAttribute("disabled", "");
    // }

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
      }
      // hintEmpat.style.display = "";
      // ulangEmpat.classList.remove("disabled");
      // hintEmpat.addEventListener("click", function () {
      //   answerEmpat[0].value = showHintEmpat;
      //   answerEmpat[0].style.border = "2px solid Orange";
      //   cekEmpat.classList.add("disabled");
      // });
    } else {
      // for (let i = 0; i < answerEmpat.length; i++) {
      //   answerEmpat[i].style.border = "2px solid green";
      //   answerEmpat[i].setAttribute("disabled", "");
      // }
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

  // function ulangSoalEmpat() {
  //   for (let i = 0; i < answerEmpat.length; i++) {
  //     answerEmpat[i].value = "";
  //     answerEmpat[i].style.border = "1px solid grey";
  //     answerEmpat[i].removeAttribute("disabled", "");
  //     cekEmpat.classList.remove("disabled");
  //   }
  //   benarEmpat.innerHTML = "";
  //   hintEmpat.style.display = "none";
  // }

  //Soal Lima
  let tampilSoalLima = document.querySelector("#soal5");
  let tampilGbrLima = document.querySelector("#gbr5");
  let answerLima = document.querySelector("#jwbsiswa5");
  let cekLima = document.querySelector("#cekjwb5");
  // let ulangLima = document.querySelector("#ulang-1");
  let benarLima = document.querySelector("#hasilbenar5");
  // let hintLima = document.querySelector("#hint-1");
  let jawabanLima = "";
  // let showHintLima = "";

  // hintLima.style.display = "none";
  // ulangLima.classList.add("disabled");

  // ulangLima.addEventListener("click", ulangSoalLima);

  answerLima.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekLima.click();
    }
  });

  cekLima.addEventListener("click", function () {
    // let salah = 0;
    // for (let i = 0; i < answerLima.length; i++) {
    //   if (answerLima[i].value != jawaban[i]) {
    //     answerLima[i].style.border = "2px solid red";
    //     salah++;
    //   }
    //   answerLima[i].setAttribute("disabled", "");
    // }

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
      if (answerLima.value != "") {
        progress[4].classList.add('progress-salah')
      }

      // hintLima.style.display = "";
      // ulangLima.classList.remove("disabled");
      // hintLima.addEventListener("click", function () {
      //   answerLima[0].value = showHintLima;
      //   answerLima[0].style.border = "2px solid Orange";
      //   cekLima.classList.add("disabled");
      // });
    } else {
      // for (let i = 0; i < answerLima.length; i++) {
      //   answerLima[i].style.border = "2px solid green";
      //   answerLima[i].setAttribute("disabled", "");
      // }
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
    }
  });

  // function ulangSoalLima() {
  //   for (let i = 0; i < answerLima.length; i++) {
  //     answerLima[i].value = "";
  //     answerLima[i].style.border = "1px solid grey";
  //     answerLima[i].removeAttribute("disabled", "");
  //     cekLima.classList.remove("disabled");
  //   }
  //   benarLima.innerHTML = "";
  //   hintLima.style.display = "none";
  // }
  function retryQuiz(){
        window.location.reload()
      }
});
