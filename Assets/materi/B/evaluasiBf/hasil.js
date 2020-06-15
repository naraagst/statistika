let correctAnswer = sessionStorage.getItem("correct")
let wrongAnswer = sessionStorage.getItem("wrong")
let questionLength = sessionStorage.getItem("questionLength")
let nameUser = sessionStorage.getItem("name")

let quizResults = {}
quizResults.results = []

let result = {}

result.correctAnswer = correctAnswer
result.wrongAnswer = wrongAnswer
result.nameUser = nameUser

if(localStorage && localStorage.getItem('quizMaster')){
	quizResults = JSON.parse(localStorage.getItem('quizMaster'))

	if(result.correctAnswer != "" && result.wrongAnswer != ""){
		quizResults.results.push(result)
	}

	localStorage.setItem('quizMaster', JSON.stringify(quizResults))
	clearResults()
} else {
	localStorage.setItem('quizMaster', JSON.stringify(quizResults))
	if(result.correctAnswer != "" && result.wrongAnswer != ""){
		quizResults.results.push(result)
	}

	localStorage.setItem('quizMaster', JSON.stringify(quizResults))
	clearResults()
}

function clearResults(){
	sessionStorage.setItem("correct", "")
	sessionStorage.setItem("wrong", "")
	sessionStorage.setItem("name", "")
}

function resultsHistory(testNumber, nameUser, correctAnswer, wrongAnswer){
	let resultContainer = document.querySelector(".resultContainer")

	let notes
	let score = (parseInt(correctAnswer) / parseInt(questionLength)) * 100

	if(score >= 65){
		notes = "Lulus"
	} else {
		notes = "Tidak Lulus"
	}

	score = score < 100 ? score.toFixed(2) : score

	let tr = document.createElement('tr')
	let html = `
		<td>${testNumber}</td>
		<td>${nameUser}</td>
		<td>${correctAnswer}</td>
		<td>${wrongAnswer}</td>
		<td>${score}</td>
		<td>${notes}</td>
	`
		
	tr.innerHTML = html
	resultContainer.appendChild(tr)
}

document.addEventListener("DOMContentLoaded", function(){
	let testNumber = 0

	for(let i=0; i<quizResults["results"].length; i++){
		++testNumber
		if(quizResults["results"][i].correctAnswer != "" && quizResults["results"][i]["wrongAnswer"] != ""){
			resultsHistory(testNumber, quizResults['results'][i].nameUser, quizResults['results'][i].correctAnswer, quizResults['results'][i].wrongAnswer)
			
		}	
	}

	let tryAgain = document.querySelector("#try-again")
	tryAgain.addEventListener("click", function(){
		location.href = './index.html'
		clearResults()
	})
})
