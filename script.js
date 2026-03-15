

function saveNotes(){

let notes=document.getElementById("notesInput").value

let list=document.getElementById("notesList")

let div=document.createElement("div")

div.innerText=notes

list.appendChild(div)

}



function addFlashcard(){

let front=document.getElementById("flashFront").value

let back=document.getElementById("flashBack").value

let list=document.getElementById("flashcardsList")

let card=document.createElement("div")

card.innerHTML="<b>"+front+"</b><br>"+back

list.appendChild(card)

}



function addQuiz(){

let q=document.getElementById("quizQuestion").value

let a=document.getElementById("quizAnswer").value

let list=document.getElementById("quizList")

let div=document.createElement("div")

div.innerHTML=q+"<br><button onclick=\"alert('Answer: "+a+"')\">Show Answer</button>"

list.appendChild(div)

}