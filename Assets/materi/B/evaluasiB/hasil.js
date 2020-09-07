let tanggal = sessionStorage.getItem("tanggal")
let waktu = sessionStorage.getItem("waktu")
let correctAnswer = sessionStorage.getItem("correct")
let wrongAnswer = sessionStorage.getItem("wrong")
let nameUser = sessionStorage.getItem("nama")
let classUser = sessionStorage.getItem("kelas")
let questionLength = sessionStorage.getItem("questionLength")
let jwbSiswa = JSON.parse(sessionStorage.getItem("jawaban"))
let nextt = document.querySelector("#next")
let kett = document.querySelector("#ket")
let ulangi = document.querySelector("#ulangi")

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
result.correctAnswer = correctAnswer
result.wrongAnswer = wrongAnswer
result.tanggal = tanggal
result.waktu = waktu
result.scoreUser = score
result.noteUser = note

if(localStorage && localStorage.getItem('quizB')) {
    quizResults = JSON.parse(localStorage.getItem('quizB'))

    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('quizB', JSON.stringify(quizResults))
    clearResults()
} else {
    localStorage.setItem('quizB', JSON.stringify(quizResults))
    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('quizB', JSON.stringify(quizResults))
    clearResults()
}

function clearResults() {
    sessionStorage.setItem("correct", "")
    sessionStorage.setItem("wrong", "")
    sessionStorage.setItem("nama", "")
    sessionStorage.setItem("kelas", "")
    sessionStorage.setItem("tanggal", "")
    sessionStorage.setItem("waktu", "")
    sessionStorage.setItem("jawaban", "")
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
    let quizB = quizResults["results"].length
    let testNumber = 1

    if(result.nameUser != ""){
        newResults(quizResults["results"][quizB-1].tanggal, quizResults["results"][quizB-1].waktu, quizResults["results"][quizB-1].nameUser, quizResults["results"][quizB-1].classUser, quizResults["results"][quizB-1].correctAnswer, quizResults["results"][quizB-1].wrongAnswer, quizResults["results"][quizB-1].scoreUser)
    }

    let tryAgain = document.querySelector("#try-again")
    tryAgain.addEventListener("click", function(){
        location.href = './index.html'
    })
    
    nextt.addEventListener("click", function(e){
        e.preventDefault();

        localStorage.setItem("jangkauan1","jangkauan1");
        localStorage.setItem("materi3","materi3");
        
        if(localStorage.getItem("progress") <=18){
            localStorage.setItem("progress",18)
        }
        location.href = '../../C/jangkauan1.html'
        clearResults()
    })

    ulangi.addEventListener("click", function(){
        location.href = '../mean1.html'
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
    jawaban: jwbSiswa,
    tanggal : tanggal,
    waktu : waktu
}

const database = firebase.database();
database.ref("kuis-b").push(data);