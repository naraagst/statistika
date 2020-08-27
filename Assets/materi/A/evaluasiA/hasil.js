let tanggal = sessionStorage.getItem("tanggal")
let waktu = sessionStorage.getItem("waktu")
let correctAnswer = sessionStorage.getItem("correct")
let wrongAnswer = sessionStorage.getItem("wrong")
let nameUser = sessionStorage.getItem("nama")
let classUser = sessionStorage.getItem("kelas")
let questionLength = sessionStorage.getItem("questionLength")
let nextt = document.querySelector("#next")
let kett = document.querySelector("#ket")
let ulangi = document.querySelector("#ulangi")

console.log(tanggal)
console.log(waktu)

let quizResults = {}
quizResults.results = []

let result = {}

let note
let score = (parseInt(correctAnswer) / parseInt(questionLength)) * 100
if(score >= 60) {
    note = "Lulus"
    nextt.style.display='inline-block'
    ulangi.style.display='none'
    kett.style.color='green'
    kett.innerHTML = 'Selamat! Anda bisa melanjutkan ke materi selanjutnya.'
} else {
    note = "Tidak Lulus"
    nextt.style.display='none'
    ulangi.style.display='inline-block'
    kett.style.color='red'
    kett.innerHTML = 'Sayang sekali skor anda belum memenuhi untuk dapat lanjut ke materi selanjutnya'
}
// score = score < 100 ? score.toFixed(2) : score

result.nameUser = nameUser
result.classUser = classUser
result.tanggal = tanggal
result.waktu = waktu
result.correctAnswer = correctAnswer
result.wrongAnswer = wrongAnswer
result.scoreUser = score
result.noteUser = note

if(localStorage && localStorage.getItem('quizA')) {
    quizResults = JSON.parse(localStorage.getItem('quizA'))

    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('quizA', JSON.stringify(quizResults))
    clearResults()
} else {
    localStorage.setItem('quizA', JSON.stringify(quizResults))
    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('quizA', JSON.stringify(quizResults))
    clearResults()
}

function clearResults() {
    sessionStorage.setItem("correct", "")
    sessionStorage.setItem("wrong", "")
    sessionStorage.setItem("nama", "")
    sessionStorage.setItem("kelas", "")
    sessionStorage.setItem("tanggal", "")
    sessionStorage.setItem("waktu", "")
}

function newResults(tanggal, waktu, nameUser, classUser, numCorrect, numWrong, score) {

    let tanggalSkrg = document.querySelector("#tanggal")
    let waktuSkrg = document.querySelector("#waktu")
    let namaSiswa = document.querySelector("#namaSiswa")
    let kelasSiswa = document.querySelector("#kelasSiswa")
    let jawabanBenar = document.querySelector("#jawabanBenar")
    let jawabanSalah = document.querySelector("#jawabanSalah")
    let nilaiSiswa = document.querySelector("#nilaiSiswa")

    tanggalSkrg.innerHTML = `${tanggal}`
    waktuSkrg.innerHTML = `${waktu}`
    namaSiswa.innerHTML = `${nameUser}`
    kelasSiswa.innerHTML = `${classUser}`
    jawabanBenar.innerHTML = `${numCorrect}`
    jawabanSalah.innerHTML = `${numWrong}`
    nilaiSiswa.innerHTML = `${score}`
}

document.addEventListener("DOMContentLoaded", function(){
    let quizA = quizResults["results"].length
    let testNumber = 1

    if(result.nameUser != ""){
        newResults(quizResults["results"][quizA-1].tanggal, quizResults["results"][quizA-1].waktu, quizResults["results"][quizA-1].nameUser, quizResults["results"][quizA-1].classUser, quizResults["results"][quizA-1].correctAnswer, quizResults["results"][quizA-1].wrongAnswer, quizResults["results"][quizA-1].scoreUser)
    }

    let tryAgain = document.querySelector("#try-again")
    tryAgain.addEventListener("click", function(){
        location.href = './index.html'
    })
    
    nextt.addEventListener("click", function(e){
        e.preventDefault();

        localStorage.setItem("mean1","mean1");
        localStorage.setItem("materi2","materi2");
        
        if(localStorage.getItem("progress") <=5){
            localStorage.setItem("progress",5)
        }
        location.href = 'Assets/Materi/b/mean1.html'
        clearResults()
    })

    ulangi.addEventListener("click", function(){
        location.href = '../analisis1.html'
        clearResults()
    })
})

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA0bSfBNKA4Y3oDbiorSA8dYrI6X7thQpI",
    authDomain: "statistika-smp.firebaseapp.com",
    databaseURL: "https://statistika-smp.firebaseio.com",
    projectId: "statistika-smp",
    storageBucket: "statistika-smp.appspot.com",
    messagingSenderId: "221055005685",
    appId: "1:221055005685:web:6704d25858af96560426bc",
    measurementId: "G-SD240GBRWE"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let data = {
    nama : nameUser,
    kelas : classUser,
    nilai : score,
    tanggal : tanggal,
    waktu : waktu
}

const database = firebase.database();
database.ref("kuis-a").push(data);